import type { Metadata } from "next";
import { LongFormPage } from "@/components/content/LongFormPage";
import data from "@/data/content/3-bhk-flats-kudlu-gate-locality-guide-2026.json";
import type { ContentPageData } from "@/types/content";

const pageData = data as ContentPageData;

export const metadata: Metadata = {
  title: '3 BHK Flats in Kudlu Gate 2026 | Locality Guide for Hosur Road Buyers — Heart of Harmony',
  description: 'Thinking of buying a 3 BHK flat in Kudlu Gate? This complete locality guide covers the neighbourhood, schools, hospitals, metro access, commute times, pin code comparison and why Heart of Harmony is the standout 3 BHK option on Hosur Road in 2026.',
  alternates: { canonical: "/3-bhk-flats-kudlu-gate-locality-guide-2026/" },
  openGraph: {
    title: '3 BHK Flats in Kudlu Gate 2026 | Locality Guide for Hosur Road Buyers — Heart of Harmony',
    description: 'Thinking of buying a 3 BHK flat in Kudlu Gate? This complete locality guide covers the neighbourhood, schools, hospitals, metro access, commute times, pin code comparison and why Heart of Harmony is the standout 3 BHK option on Hosur Road in 2026.',
    url: "/3-bhk-flats-kudlu-gate-locality-guide-2026/",
    type: "article",
  },
};

export default function Page() {
  return <LongFormPage data={pageData} eyebrow="Guide" />;
}
