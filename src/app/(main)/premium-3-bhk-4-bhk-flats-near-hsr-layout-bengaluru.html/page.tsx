import type { Metadata } from "next";
import { LongFormPage } from "@/components/content/LongFormPage";
import data from "@/data/content/premium-3-bhk-4-bhk-flats-near-hsr-layout-bengaluru.json";
import type { ContentPageData } from "@/types/content";

const pageData = data as ContentPageData;

export const metadata: Metadata = {
  title: 'Premium 3, 3.5 & 4 BHK Flats Near HSR Layout, Bengaluru | Heart of Harmony by CKPC',
  description: 'Looking for premium 3 BHK, 3.5 BHK or 4 BHK flats near HSR Layout, Bengaluru? Heart of Harmony by CKPC offers 137 exclusive sky residences on Hosur Road — 12 mins from HSR Layout, 400m from metro. RERA: PRM/KA/RERA/1251/310/PR/310326/008560. Enquire now.',
  alternates: { canonical: "/premium-3-bhk-4-bhk-flats-near-hsr-layout-bengaluru.html" },
  openGraph: {
    title: 'Premium 3, 3.5 & 4 BHK Flats Near HSR Layout, Bengaluru | Heart of Harmony by CKPC',
    description: 'Looking for premium 3 BHK, 3.5 BHK or 4 BHK flats near HSR Layout, Bengaluru? Heart of Harmony by CKPC offers 137 exclusive sky residences on Hosur Road — 12 mins from HSR Layout, 400m from metro. RERA: PRM/KA/RERA/1251/310/PR/310326/008560. Enquire now.',
    url: "/premium-3-bhk-4-bhk-flats-near-hsr-layout-bengaluru.html",
    type: "article",
  },
};

export default function Page() {
  return <LongFormPage data={pageData} eyebrow="Guide" />;
}
