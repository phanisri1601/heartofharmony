import type { Metadata } from "next";
import { LongFormPage } from "@/components/content/LongFormPage";
import data from "@/data/content/premium-3-bhk-4-bhk-near-hsr-layout-kudlu-gate.json";
import type { ContentPageData } from "@/types/content";

const pageData = data as ContentPageData;

export const metadata: Metadata = {
  title: 'Premium 3 BHK & 4 BHK Flats Near HSR Layout | Why Kudlu Gate on Hosur Road is the Smarter Buy in 2026',
  description: "Looking for premium 3 BHK or 4 BHK flats near HSR Layout? Discover why Kudlu Gate on Hosur Main Road — with metro at 400m, Electronic City at 5 km, and Heart of Harmony's boutique luxury — outperforms HSR Layout for buyers in 2026.",
  alternates: { canonical: "/premium-3-bhk-4-bhk-near-hsr-layout-kudlu-gate/" },
  openGraph: {
    title: 'Premium 3 BHK & 4 BHK Flats Near HSR Layout | Why Kudlu Gate on Hosur Road is the Smarter Buy in 2026',
    description: "Looking for premium 3 BHK or 4 BHK flats near HSR Layout? Discover why Kudlu Gate on Hosur Main Road — with metro at 400m, Electronic City at 5 km, and Heart of Harmony's boutique luxury — outperforms HSR Layout for buyers in 2026.",
    url: "/premium-3-bhk-4-bhk-near-hsr-layout-kudlu-gate/",
    type: "article",
  },
};

export default function Page() {
  return <LongFormPage data={pageData} eyebrow="Guide" />;
}
