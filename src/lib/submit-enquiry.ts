/** Shared submission for the homepage, contact/popup and landing-page forms. */
export async function submitEnquiry(data: FormData) {
  const payload: Record<string, string> = {};
  data.forEach((value, key) => {
    if (typeof value === "string") payload[key] = value;
  });
  payload["checkbox-accept"] = data.get("checkbox-accept") || data.get("checkbox-accept[]") ? "1" : "";
  if (!payload["checkbox-accept"]) throw new Error("Please accept the consent checkbox to continue.");

  const params = new URLSearchParams(window.location.search);
  for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "ad_name", "adset_name", "ad_set_name", "gclid", "campaign_id", "utm_id"]) {
    const value = params.get(key);
    if (value !== null) payload[key] = value;
  }
  const response = await fetch("/api/enquiry", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const result = await response.json();
  if (!response.ok || result.ok !== true) {
    throw new Error(result.error || "Unable to submit your enquiry. Please try again or call us directly.");
  }
}
