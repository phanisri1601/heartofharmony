import type { Metadata } from "next";
import { LongFormPage } from "@/components/content/LongFormPage";
import data from "@/data/content/heart-of-harmony-master-plan.json";
import type { ContentPageData } from "@/types/content";

const pageData = data as ContentPageData;

export const metadata: Metadata = {
  title: 'Heart of Harmony Master Plan | Site Layout, Tower Design & Floor Plans — CKPC',
  description: 'Explore the Heart of Harmony master plan by CKPC — 2B+G+24 floors, vehicle-free podium, 6 homes per floor, 84% open green space. Full site layout & floor plan guide for Kudlu Gate, Bengaluru.',
  alternates: { canonical: "/heart-of-harmony-master-plan/" },
  openGraph: {
    title: 'Heart of Harmony Master Plan | Site Layout, Tower Design & Floor Plans — CKPC',
    description: 'Explore the Heart of Harmony master plan by CKPC — 2B+G+24 floors, vehicle-free podium, 6 homes per floor, 84% open green space. Full site layout & floor plan guide for Kudlu Gate, Bengaluru.',
    url: "/heart-of-harmony-master-plan/",
    type: "article",
  },
};

export default function Page() {
  return <LongFormPage data={pageData} eyebrow="Guide" />;
}
