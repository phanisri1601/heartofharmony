import { NextResponse } from "next/server";

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

  const endpoint = process.env.ENQUIRY_PHP_URL ??
    (process.env.NODE_ENV === "development" ? "http://127.0.0.1:8081/enquiry.php" : "");
  if (!endpoint) {
    return NextResponse.json({ ok: false, error: "Enquiry service is unavailable. Please call us directly." }, { status: 503 });
  }
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      signal: AbortSignal.timeout(65_000),
      cache: "no-store",
    });
    const result = await response.json();
    if (!response.ok || result.status !== true || result.data?.salesforce_apex !== true) {
      throw new Error("PHP lead submission failed");
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    const cause = error instanceof Error ? error.cause : undefined;
    const code = cause && typeof cause === "object" && "code" in cause ? cause.code : "UPSTREAM_ERROR";
    console.error("Enquiry backend failed:", code);
    return NextResponse.json({ ok: false, error: "Unable to submit your enquiry. Please try again or call us directly." }, { status: 502 });
  }
}
