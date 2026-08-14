import { NextResponse } from "next/server";

/**
 * Placeholder lead-capture endpoint for the site's Contact Form 7 form
 * (Name / Email Address / Mobile Number / Your Message/Question).
 * Swap the body below for the real CRM/email integration when ready.
 */
export async function POST(request: Request) {
  const data = await request.json().catch(() => null);

  if (!data || !data["your-name"] || !data["your-email"] || !data["your-phone"]) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  // TODO: forward to CRM / send email notification.
  console.log("New enquiry:", data);

  return NextResponse.json({ ok: true });
}
