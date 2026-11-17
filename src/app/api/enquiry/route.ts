import { randomUUID } from "node:crypto";
import { appendFile, mkdir } from "node:fs/promises";
import * as path from "node:path";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const maxDuration = 60;

/**
 * CKPC Salesforce "Website Lead Integration API". One URL per source; the URL
 * sets Project, Lead Source, Sub Source and UTM Medium, so we only send the
 * customer details. The x-api-key must stay server-side (never in the browser).
 */
const SALESFORCE_BASE_URL = (
  process.env.SALESFORCE_LEADS_BASE_URL?.trim() ||
  "https://ckpc--ckpctest.sandbox.my.salesforce-sites.com/websiteleads/services/apexrest/website/leads"
).replace(/\/+$/, "");
const SALESFORCE_API_KEY = process.env.SALESFORCE_LEADS_API_KEY?.trim() || "";

const ENDPOINTS = {
  website: "heart-of-harmony/website",
  google: "heart-of-harmony/google",
  meta: "heart-of-harmony/meta",
} as const;
type EndpointKey = keyof typeof ENDPOINTS;

const META_SOURCES = /^(meta|facebook|fb|instagram|ig|ig_ads|fb_ads)$/i;

const logDirectory = process.env.ENQUIRY_LOG_DIR?.trim() || (process.env.VERCEL ? "/tmp" : path.join(process.cwd(), "logs"));
const logFile = path.join(logDirectory, "enquiry-submissions.jsonl");

const GENERIC_ERROR = "Unable to submit your enquiry. Please try again or call us directly.";

async function writeEnquiryLog(submissionId: string, event: string, details: Record<string, unknown> = {}) {
  const entry = { timestamp: new Date().toISOString(), submissionId, event, ...details };
  // Terminal: one line per outcome; full step-by-step detail lives in the log file.
  // Set ENQUIRY_DEBUG=1 to print every step to the terminal as well.
  if (process.env.ENQUIRY_DEBUG === "1") console.info("Enquiry debug log", entry);
  else if (event === "submission-complete") console.info(`Enquiry ${submissionId}: ${details.leadStatus} lead ${details.leadId}`);
  else if (event === "submission-failed" || event === "validation-failed" || event === "invalid-form-data") {
    console.warn(`Enquiry ${submissionId}: ${event}`, details);
  }

  try {
    await mkdir(logDirectory, { recursive: true });
    await appendFile(logFile, `${JSON.stringify(entry)}\n`, "utf8");
  } catch (error) {
    console.error("Unable to write enquiry log file", { submissionId, event, error });
  }
}

/** Landing page traffic goes to the Google or Meta URL; everything else is the website URL. */
function pickEndpoint(pagePath: string, utmSource: string, fbclid: string): EndpointKey {
  if (!pagePath.startsWith("/landing-page")) return "website";
  return META_SOURCES.test(utmSource) || fbclid ? "meta" : "google";
}

/** Site picklist values -> Salesforce Purpose_of_Purchase__c (Self Use · Investment · Just Exploring). */
function mapPurpose(purpose: string): { value?: string; isNri?: boolean } {
  switch (purpose.toLowerCase()) {
    case "self-occupation":
    case "self use":
      return { value: "Self Use" };
    case "investment":
      return { value: "Investment" };
    case "nri investment":
      return { value: "Investment", isNri: true };
    case "":
      return {};
    default:
      return {}; // e.g. "For someone else or family" — no Salesforce match; kept in remarks.
  }
}

function splitName(fullName: string) {
  const parts = fullName.split(/\s+/).filter(Boolean);
  if (parts.length <= 1) return { LastName: parts[0] ?? "" };
  return { FirstName: parts.slice(0, -1).join(" "), LastName: parts[parts.length - 1] };
}

type SalesforceResult = {
  success?: boolean;
  status?: string;
  id?: string | null;
  message?: string;
  errors?: { field?: string | null; code?: string; message?: string }[];
  warnings?: string[];
};

export async function POST(request: Request) {
  const submissionId = randomUUID();
  const data = await request.json().catch(() => null);
  if (!data || Array.isArray(data) || typeof data !== "object" ||
      Object.values(data).some((value) => typeof value !== "string")) {
    await writeEnquiryLog(submissionId, "invalid-form-data", { receivedType: Array.isArray(data) ? "array" : typeof data });
    return NextResponse.json({ ok: false, error: "Invalid form data" }, { status: 400 });
  }

  await writeEnquiryLog(submissionId, "form-data-received", { formData: data });
  if (!["your-name", "your-email", "your-phone"].every((key) => data[key]?.trim())) {
    await writeEnquiryLog(submissionId, "validation-failed", { reason: "missing-required-fields" });
    return NextResponse.json({ ok: false, error: "Name, email and phone are required" }, { status: 422 });
  }
  if (data["checkbox-accept"] !== "1") {
    await writeEnquiryLog(submissionId, "validation-failed", { reason: "missing-consent" });
    return NextResponse.json({ ok: false, error: "Please accept the consent checkbox" }, { status: 422 });
  }
  if (!SALESFORCE_API_KEY) {
    await writeEnquiryLog(submissionId, "submission-failed", { stage: "config", reason: "SALESFORCE_LEADS_API_KEY not set" });
    return NextResponse.json({ ok: false, error: GENERIC_ERROR }, { status: 500 });
  }

  const value = (...keys: string[]): string => {
    for (const key of keys) if (data[key]?.trim()) return data[key].trim();
    return "";
  };

  const purposeRaw = value("purpose", "select-833");
  const purpose = mapPurpose(purposeRaw);
  const message = value("your-message", "message");
  const remarks = [message, purposeRaw && !purpose.value ? `Purpose: ${purposeRaw}` : ""].filter(Boolean).join("\n");
  const utmSource = value("utm_source");
  const fbclid = value("fbclid");
  const endpoint = pickEndpoint(value("page_path"), utmSource, fbclid);

  // Only send fields we actually have; Salesforce ignores blanks it doesn't need.
  const lead: Record<string, unknown> = {
    ...splitName(value("your-name")),
    MobilePhone: value("your-phone"),
    Email: value("your-email"),
    Specification__c: value("specifications", "configuration"),
    Purpose_of_Purchase__c: purpose.value,
    Is_NRI__c: purpose.isNri || undefined,
    utm_source__c: utmSource,
    campaigns__c: value("utm_campaign"),
    adset_name__c: value("adset_name", "ad_set_name"),
    ad_name__c: value("ad_name", "utm_content"),
    keyword__c: value("keyword", "utm_term"),
    gclid__c: value("gclid"),
    fbclid__c: fbclid,
    Form_Name__c: value("form_name") || "Website Enquiry",
    Customer_Remarks__c: remarks,
  };
  for (const key of Object.keys(lead)) if (lead[key] === "" || lead[key] === undefined) delete lead[key];

  const url = `${SALESFORCE_BASE_URL}/${ENDPOINTS[endpoint]}`;
  await writeEnquiryLog(submissionId, "salesforce-payload-prepared", { endpoint, url, lead });

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json", "x-api-key": SALESFORCE_API_KEY },
      body: JSON.stringify(lead),
      signal: AbortSignal.timeout(25_000),
      cache: "no-store",
      redirect: "error",
    });
    const body = await response.text();
    let result: SalesforceResult | null = null;
    try {
      result = JSON.parse(body) as SalesforceResult;
    } catch {
      result = null;
    }
    await writeEnquiryLog(submissionId, "salesforce-response-received", { status: response.status, body: result ?? body });

    if (response.ok && result?.success === true) {
      await writeEnquiryLog(submissionId, "submission-complete", {
        leadId: result.id, leadStatus: result.status, warnings: result.warnings ?? [],
      });
      return NextResponse.json({ ok: true, status: result.status });
    }

    if (response.status === 400 && result?.errors?.length) {
      const fields = new Set(result.errors.map((e) => e.field));
      const error = fields.has("MobilePhone") && fields.has("Email") ? "Please enter a valid mobile number and email address."
        : fields.has("MobilePhone") ? "Please enter a valid mobile number."
        : fields.has("Email") ? "Please enter a valid email address."
        : GENERIC_ERROR;
      await writeEnquiryLog(submissionId, "submission-failed", { stage: "salesforce-validation", errors: result.errors });
      return NextResponse.json({ ok: false, error }, { status: 422 });
    }

    await writeEnquiryLog(submissionId, "submission-failed", { stage: "salesforce", upstreamStatus: response.status });
    return NextResponse.json({ ok: false, error: GENERIC_ERROR }, { status: 502 });
  } catch (error) {
    await writeEnquiryLog(submissionId, "submission-failed", {
      stage: "salesforce",
      error: error instanceof Error ? error.message : String(error),
    });
    return NextResponse.json({ ok: false, error: GENERIC_ERROR }, { status: 502 });
  }
}
