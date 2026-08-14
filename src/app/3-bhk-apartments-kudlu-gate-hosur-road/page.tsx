import type { Metadata } from "next";
import { LongFormPage } from "@/components/content/LongFormPage";
import data from "@/data/content/3-bhk-apartments-kudlu-gate-hosur-road.json";
import type { ContentPageData } from "@/types/content";

const pageData = data as ContentPageData;

export const metadata: Metadata = {
  title: '3 BHK Apartments in Kudlu Gate 2026 | Luxury Flats on Hosur Road — Heart of Harmony',
  description: 'Looking for a 3 BHK apartment in Kudlu Gate? Heart of Harmony offers luxury 3 BHK sky residences at Hosur Main Road — 1,786 & 1,981 sq ft confirmed carpet area, 6 homes per floor, metro at 400m. RERA registered',
  alternates: { canonical: "/3-bhk-apartments-kudlu-gate-hosur-road/" },
  openGraph: {
    title: '3 BHK Apartments in Kudlu Gate 2026 | Luxury Flats on Hosur Road — Heart of Harmony',
    description: 'Looking for a 3 BHK apartment in Kudlu Gate? Heart of Harmony offers luxury 3 BHK sky residences at Hosur Main Road — 1,786 & 1,981 sq ft confirmed carpet area, 6 homes per floor, metro at 400m. RERA registered',
    url: "/3-bhk-apartments-kudlu-gate-hosur-road/",
    type: "article",
  },
};

export default function Page() {
  return <LongFormPage data={pageData} eyebrow="Guide" />;
}
