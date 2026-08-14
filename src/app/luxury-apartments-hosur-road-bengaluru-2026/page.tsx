import type { Metadata } from "next";
import { LongFormPage } from "@/components/content/LongFormPage";
import data from "@/data/content/luxury-apartments-hosur-road-bengaluru-2026.json";
import type { ContentPageData } from "@/types/content";

const pageData = data as ContentPageData;

export const metadata: Metadata = {
  title: 'Luxury Apartments on Hosur Road Bengaluru 2026 | 4 BHK Corridor Guide — Heart of Harmony',
  description: 'Looking for luxury apartments on Hosur Road, Bengaluru? This 2026 corridor guide covers what makes Hosur Road the right address for premium 4 BHK buyers — metro access, Electronic City proximity, and why Heart of Harmony at Kudlu Gate leads luxury supply.',
  alternates: { canonical: "/luxury-apartments-hosur-road-bengaluru-2026/" },
  openGraph: {
    title: 'Luxury Apartments on Hosur Road Bengaluru 2026 | 4 BHK Corridor Guide — Heart of Harmony',
    description: 'Looking for luxury apartments on Hosur Road, Bengaluru? This 2026 corridor guide covers what makes Hosur Road the right address for premium 4 BHK buyers — metro access, Electronic City proximity, and why Heart of Harmony at Kudlu Gate leads luxury supply.',
    url: "/luxury-apartments-hosur-road-bengaluru-2026/",
    type: "article",
  },
};

export default function Page() {
  return <LongFormPage data={pageData} eyebrow="Guide" />;
}
