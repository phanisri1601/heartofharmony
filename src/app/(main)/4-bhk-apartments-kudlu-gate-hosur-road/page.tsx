import type { Metadata } from "next";
import { LongFormPage } from "@/components/content/LongFormPage";
import data from "@/data/content/4-bhk-apartments-kudlu-gate-hosur-road.json";
import type { ContentPageData } from "@/types/content";

const pageData = data as ContentPageData;

export const metadata: Metadata = {
  title: '4 BHK Apartments in Kudlu Gate 2026 | Luxury Flats on Hosur Road — Heart of Harmony',
  description: 'Looking for a 4 BHK apartment in Kudlu Gate? Heart of Harmony offers spacious 4 BHK sky residences on Hosur Main Road — 2,550 sq ft carpet area, 6 homes per floor, 24 floors, metro at 400m. RERA: PRM/KA/RERA/1251/310/PR/310326/008560.',
  alternates: { canonical: "/4-bhk-apartments-kudlu-gate-hosur-road/" },
  openGraph: {
    title: '4 BHK Apartments in Kudlu Gate 2026 | Luxury Flats on Hosur Road — Heart of Harmony',
    description: 'Looking for a 4 BHK apartment in Kudlu Gate? Heart of Harmony offers spacious 4 BHK sky residences on Hosur Main Road — 2,550 sq ft carpet area, 6 homes per floor, 24 floors, metro at 400m. RERA: PRM/KA/RERA/1251/310/PR/310326/008560.',
    url: "/4-bhk-apartments-kudlu-gate-hosur-road/",
    type: "article",
  },
};

export default function Page() {
  return <LongFormPage data={pageData} eyebrow="Guide" />;
}
