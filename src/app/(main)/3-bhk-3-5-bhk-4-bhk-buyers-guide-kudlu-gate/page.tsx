import type { Metadata } from "next";
import { LongFormPage } from "@/components/content/LongFormPage";
import data from "@/data/content/3-bhk-3-5-bhk-4-bhk-buyers-guide-kudlu-gate.json";
import type { ContentPageData } from "@/types/content";

const pageData = data as ContentPageData;

export const metadata: Metadata = {
  title: "3 BHK, 3.5 BHK & 4 BHK Flats at Kudlu Gate | Buyer's Guide 2026 — Heart of Harmony",
  description: "Looking for 3 BHK, 3.5 BHK or 4 BHK luxury flats near Kudlu Gate, HSR Layout or Silk Board? Complete buyer's guide 2026 — how to evaluate, compare & why Heart of Harmony leads the Hosur Road luxury market.",
  alternates: { canonical: "/3-bhk-3-5-bhk-4-bhk-buyers-guide-kudlu-gate/" },
  openGraph: {
    title: "3 BHK, 3.5 BHK & 4 BHK Flats at Kudlu Gate | Buyer's Guide 2026 — Heart of Harmony",
    description: "Looking for 3 BHK, 3.5 BHK or 4 BHK luxury flats near Kudlu Gate, HSR Layout or Silk Board? Complete buyer's guide 2026 — how to evaluate, compare & why Heart of Harmony leads the Hosur Road luxury market.",
    url: "/3-bhk-3-5-bhk-4-bhk-buyers-guide-kudlu-gate/",
    type: "article",
  },
};

export default function Page() {
  return <LongFormPage data={pageData} eyebrow="Guide" />;
}
