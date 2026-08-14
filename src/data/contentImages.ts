import manifest from "./content-image-manifest.json";

/** slug -> /images/content/<slug>.<ext> (hero images for every long-form page) */
export const contentImages: Record<string, string> = manifest;

/** Resolve an internal href (e.g. "/resources/...") to that page's hero image, if any. */
export function imageForHref(href: string): string | undefined {
  const slug = href
    .replace("https://www.ckpcheartofharmony.com", "")
    .replace(/^\/|\/$/g, "")
    .split("/")
    .pop();
  if (!slug) return undefined;
  return contentImages[slug];
}
