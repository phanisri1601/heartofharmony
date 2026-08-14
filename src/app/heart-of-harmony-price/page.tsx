import type { Metadata } from "next";
import { LongFormPage } from "@/components/content/LongFormPage";
import data from "@/data/content/heart-of-harmony-price.json";
import type { ContentPageData } from "@/types/content";

const pageData = data as ContentPageData;

export const metadata: Metadata = {
  title: 'Heart of Harmony Price 2026 | 3, 3.5 & 4 BHK Cost at Kudlu Gate, Bengaluru',
  description: "Get the complete Heart of Harmony price guide for 3 BHK, 3.5 BHK & 4 BHK homes at Kudlu Gate, Hosur Road. Payment plans, buyer's pricing guide & how to get the official cost sheet. RERA registered.",
  alternates: { canonical: "/heart-of-harmony-price/" },
  openGraph: {
    title: 'Heart of Harmony Price 2026 | 3, 3.5 & 4 BHK Cost at Kudlu Gate, Bengaluru',
    description: "Get the complete Heart of Harmony price guide for 3 BHK, 3.5 BHK & 4 BHK homes at Kudlu Gate, Hosur Road. Payment plans, buyer's pricing guide & how to get the official cost sheet. RERA registered.",
    url: "/heart-of-harmony-price/",
    type: "article",
  },
};

export default function Page() {
  return <LongFormPage data={pageData} eyebrow="Guide" />;
}
