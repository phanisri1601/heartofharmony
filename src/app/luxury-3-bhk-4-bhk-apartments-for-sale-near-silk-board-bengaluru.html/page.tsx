import type { Metadata } from "next";
import { LongFormPage } from "@/components/content/LongFormPage";
import data from "@/data/content/luxury-3-bhk-4-bhk-apartments-for-sale-near-silk-board-bengaluru.json";
import type { ContentPageData } from "@/types/content";

const pageData = data as ContentPageData;

export const metadata: Metadata = {
  title: 'Luxury 3, 3.5 & 4 BHK Apartments for Sale Near Silk Board, Bengaluru | Heart of Harmony by CKPC',
  description: 'Looking for luxury 3 BHK, 3.5 BHK or 4 BHK apartments for sale near Silk Board, Bengaluru? Heart of Harmony by CKPC offers 137 exclusive sky residences on Hosur Road — 10 mins from Silk Board, 400m from Kudlu Gate Metro. RERA: PRM/KA/RERA/1251/310/PR/310326/008560. Enquire now.',
  alternates: { canonical: "/luxury-3-bhk-4-bhk-apartments-for-sale-near-silk-board-bengaluru.html" },
  openGraph: {
    title: 'Luxury 3, 3.5 & 4 BHK Apartments for Sale Near Silk Board, Bengaluru | Heart of Harmony by CKPC',
    description: 'Looking for luxury 3 BHK, 3.5 BHK or 4 BHK apartments for sale near Silk Board, Bengaluru? Heart of Harmony by CKPC offers 137 exclusive sky residences on Hosur Road — 10 mins from Silk Board, 400m from Kudlu Gate Metro. RERA: PRM/KA/RERA/1251/310/PR/310326/008560. Enquire now.',
    url: "/luxury-3-bhk-4-bhk-apartments-for-sale-near-silk-board-bengaluru.html",
    type: "article",
  },
};

export default function Page() {
  return <LongFormPage data={pageData} eyebrow="Guide" />;
}
