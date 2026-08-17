import type { Metadata } from "next";
import fs from "node:fs";
import path from "node:path";
import { LandingPageClient } from "./LandingPageClient";

export const metadata: Metadata = {
  title: "Apartments for Sale in Kudlu Gate, Hosur Road",
  description:
    "Explore premium 3, 3.5 & 4 BHK flats for sale in Kudlu Gate, Hosur Road, Bengaluru. 137 exclusive residencies · 400m from metro · Zero common walls · Possession March 2030. Enquire now.",
  alternates: { canonical: "/landing-page/" },
  openGraph: {
    title: "Apartments for Sale in Kudlu Gate, Hosur Road",
    description:
      "Explore premium 3, 3.5 & 4 BHK flats for sale in Kudlu Gate, Hosur Road, Bengaluru. 137 exclusive residencies · 400m from metro · Zero common walls · Possession March 2030. Enquire now.",
    url: "/landing-page/",
    type: "article",
    images: [
      {
        url: "/landing-page/img/ckpc-heart-of-harmony-homes-3-3.5-4-bed-residences-lifestyle-banner-1.jpg",
        width: 1024,
        height: 560,
      },
    ],
  },
};

// This standalone campaign landing page is a byte-faithful mirror of the
// live Elementor/WordPress page at /landing-page/ on the production site
// (markup, CSS and vendor JS copied locally — see public/landing-page/ and
// content.html). It intentionally does NOT use the main site's
// header/footer/design system — see src/app/(main)/layout.tsx for that.
//
// A handful of the live page's stylesheets are inlined by WP Rocket/Elementor
// directly into <head> rather than served as linked files (critical CSS, the
// Elementor kit's --e-global-color-*/--e-global-typography-* custom property
// definitions, WP's global-styles preset variables). Those are copied
// verbatim into public/landing-page/css/*-inline.css and linked (in their
// original cascade order) by LandingPageClient's STYLESHEETS list.
export default function LandingPage() {
  const html = fs.readFileSync(path.join(process.cwd(), "src/app/landing-page/content.html"), "utf8");
  return <LandingPageClient html={html} />;
}
