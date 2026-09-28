import { randomUUID } from "node:crypto";
import { appendFile, mkdir } from "node:fs/promises";
import * as path from "node:path";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const maxDuration = 60;

const leadCaptureUrl = "https://jjcruzad.a2hosted.com/lead-catpure/test.php";
const logDirectory = process.env.ENQUIRY_LOG_DIR?.trim() || (process.env.VERCEL ? "/tmp" : path.join(process.cwd(), "logs"));
const logFile = path.join(logDirectory, "enquiry-submissions.jsonl");

async function writeEnquiryLog(submissionId: string, event: string, details: Record<string, unknown> = {}) {
  const entry = { timestamp: new Date().toISOString(), submissionId, event, ...details };
  console.info("Enquiry debug log", entry);

  try {
    await mkdir(logDirectory, { recursive: true });
    await appendFile(logFile, `${JSON.stringify(entry)}\n`, "utf8");
  } catch (error) {
    console.error("Unable to write enquiry log file", { submissionId, event, error });
  }
}

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

  const value = (...keys: string[]): string => {
    for (const key of keys) if (data[key] !== undefined) return data[key].trim();
    return "";
  };
  const payload = {
    name: value("your-name"),
    email: value("your-email"),
    phone: value("your-phone"),
    message: value("your-message", "message") || "Interested",
    utm_source: value("utm_source") || "Website",
    utm_medium: value("utm_medium") || "Website",
    utm_campaign: value("utm_campaign"),
    utm_content: value("utm_content"),
    utm_id: value("utm_id", "campaign_id", "utm_term"),
    specifications: value("specifications", "configuration"),
    purpose: value("purpose", "select-833"),
  };

  await writeEnquiryLog(submissionId, "php-payload-prepared", { payload });
  try {
    const response = await fetch(leadCaptureUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded", Accept: "application/json" },
      body: new URLSearchParams(payload),
      signal: AbortSignal.timeout(25_000),
      cache: "no-store",
      redirect: "error",
    });
    const body = await response.text();
    await writeEnquiryLog(submissionId, "php-response-received", { status: response.status, body });

    let result: unknown;
    try {
      result = JSON.parse(body);
      if (typeof result === "string") result = JSON.parse(result);
    } catch {
      result = null;
    }
    const salesforceAccepted = result !== null && typeof result === "object" && !Array.isArray(result) &&
      "status" in result && result.status === true &&
      "data" in result && result.data !== null && typeof result.data === "object" &&
      "salesforce_apex" in result.data && result.data.salesforce_apex === true;

    if (!response.ok || !salesforceAccepted) {
      await writeEnquiryLog(submissionId, "submission-failed", { stage: "php-lead-capture", upstreamStatus: response.status });
      return NextResponse.json({ ok: false, error: "Unable to submit your enquiry. Please try again or call us directly." }, { status: 502 });
    }

    await writeEnquiryLog(submissionId, "submission-complete", { upstreamStatus: response.status });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Enquiry PHP request failed", { submissionId, error: error instanceof Error ? error.message : String(error) });
    await writeEnquiryLog(submissionId, "submission-failed", {
      stage: "php-lead-capture",
      error: error instanceof Error ? error.message : String(error),
    });
    return NextResponse.json({ ok: false, error: "Unable to submit your enquiry. Please try again or call us directly." }, { status: 502 });
  }
}
