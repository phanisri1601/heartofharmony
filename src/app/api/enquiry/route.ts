import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const maxDuration = 60;

const salesforceOrigin = "https://ckpc.my.salesforce.com";

export async function POST(request: Request) {
  const data = await request.json().catch(() => null);
  if (!data || Array.isArray(data) || typeof data !== "object" ||
      Object.values(data).some((value) => typeof value !== "string")) {
    return NextResponse.json({ ok: false, error: "Invalid form data" }, { status: 400 });
  }
  if (!["your-name", "your-email", "your-phone"].every((key) => data[key]?.trim())) {
    return NextResponse.json({ ok: false, error: "Name, email and phone are required" }, { status: 422 });
  }
  if (data["checkbox-accept"] !== "1") {
    return NextResponse.json({ ok: false, error: "Please accept the consent checkbox" }, { status: 422 });
  }

  const clientId = process.env.SALESFORCE_CLIENT_ID?.trim();
  const clientSecret = process.env.SALESFORCE_CLIENT_SECRET?.trim();
  if (!clientId || !clientSecret) {
    console.error("Enquiry: missing Salesforce environment variables");
    return NextResponse.json({ ok: false, error: "Enquiry service is unavailable. Please call us directly." }, { status: 503 });
  }

  let stage = "oauth";
  let upstreamStatus: number | undefined;
  try {
    const tokenResponse = await fetch(`${salesforceOrigin}/services/oauth2/token`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded", Accept: "application/json" },
      body: new URLSearchParams({ grant_type: "client_credentials", client_id: clientId, client_secret: clientSecret }),
      signal: AbortSignal.timeout(25_000),
      cache: "no-store",
      redirect: "error",
    });
    upstreamStatus = tokenResponse.status;
    if (!tokenResponse.ok) throw new Error("OAuth rejected");
    const token = await tokenResponse.json();
    if (typeof token?.access_token !== "string" || !token.access_token) throw new Error("Missing token");
    const instance = new URL(token.instance_url || salesforceOrigin);
    if (instance.protocol !== "https:" || !instance.hostname.endsWith(".salesforce.com") || instance.username || instance.password) {
      throw new Error("Invalid Salesforce instance");
    }

    const value = (...keys: string[]): string => {
      for (const key of keys) if (data[key] !== undefined) return data[key].trim();
      return "";
    };
    const [firstName, ...rest] = value("your-name").split(/\s+/);
    const remarks = [value("message", "your-message") || "Interested"];
    for (const [key, label] of [["specifications", "Specifications"], ["purpose", "Purpose of Purchase"], ["utm_content", "UTM Content"]]) {
      if (value(key)) remarks.push(`${label}: ${value(key)}`);
    }
    const payload = {
      FirstName: firstName,
      LastName: rest.join(" ") || firstName,
      MobilePhone: value("your-phone"),
      Email: value("your-email"),
      Company: "Website Lead",
      Status: "Yet To Service",
      Customer_Remarks__c: remarks.join("\n"),
      Submitted_By__c: "Website Form",
      Lead_Source__c: "Marketing Online",
      Sub_Source__c: value("utm_medium"),
      source__c: value("utm_source"),
      Channel__c: value("utm_medium"),
      campaigns__c: value("utm_campaign"),
      keyword__c: value("utm_term"),
      ad_name__c: value("ad_name", "Ad Name"),
      adset_name__c: value("adset_name", "ad_set_name", "Ad Set Name"),
      gclid__c: value("gclid", "Google click ID"),
      Campaign_Id__c: value("campaign_id", "utm_id", "Campaign Id", "Campaing Id"),
      Project__r: { Name: "Heart Of Harmony" },
    };
    stage = "create-lead";
    upstreamStatus = undefined;
    const leadResponse = await fetch(`${instance.origin}/services/apexrest/CreateLeadService`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json", Authorization: `Bearer ${token.access_token}` },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(25_000),
      cache: "no-store",
      redirect: "error",
    });
    upstreamStatus = leadResponse.status;
    if (!leadResponse.ok) throw new Error("Lead rejected");
    let result = await leadResponse.json();
    // Apex may return a JSON-encoded string instead of an object.
    if (typeof result === "string") result = JSON.parse(result);
    if (!result || typeof result !== "object" || Array.isArray(result) ||
        result.success === false || result.status === false || result.error || result.errorCode ||
        (Array.isArray(result.errors) ? result.errors.length > 0 : result.errors)) {
      throw new Error("Lead not accepted");
    }
    return NextResponse.json({ ok: true });
  } catch {
    // Log only the stage and HTTP status, never credentials, tokens or lead details.
    console.error("Enquiry Salesforce request failed", { stage, upstreamStatus });
    return NextResponse.json({ ok: false, error: "Unable to submit your enquiry. Please try again or call us directly." }, { status: 502 });
  }
}
