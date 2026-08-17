import type { Metadata } from "next";
import { LongFormPage } from "@/components/content/LongFormPage";
import data from "@/data/content/3-bhk-4-bhk-apartments-for-sale-kudlu-gate-bengaluru.json";
import type { ContentPageData } from "@/types/content";

const pageData = data as ContentPageData;

export const metadata: Metadata = {
  title: '3, 3.5 & 4 BHK Apartments for Sale in Kudlu Gate, Bengaluru | Heart of Harmony by CKPC',
  description: 'Looking for 3 BHK, 3.5 BHK or 4 BHK apartments for sale in Kudlu Gate, Bengaluru? Heart of Harmony by CKPC offers 137 exclusive sky residences on Hosur Road — 400m from Kudlu Gate Metro, 10 mins from Silk Board. RERA: PRM/KA/RERA/1251/310/PR/310326/008560. Enquire now.',
  alternates: { canonical: "/3-bhk-4-bhk-apartments-for-sale-kudlu-gate-bengaluru.html" },
  openGraph: {
    title: '3, 3.5 & 4 BHK Apartments for Sale in Kudlu Gate, Bengaluru | Heart of Harmony by CKPC',
    description: 'Looking for 3 BHK, 3.5 BHK or 4 BHK apartments for sale in Kudlu Gate, Bengaluru? Heart of Harmony by CKPC offers 137 exclusive sky residences on Hosur Road — 400m from Kudlu Gate Metro, 10 mins from Silk Board. RERA: PRM/KA/RERA/1251/310/PR/310326/008560. Enquire now.',
    url: "/3-bhk-4-bhk-apartments-for-sale-kudlu-gate-bengaluru.html",
    type: "article",
  },
};

export default function Page() {
  return <LongFormPage data={pageData} eyebrow="Guide" />;
}
