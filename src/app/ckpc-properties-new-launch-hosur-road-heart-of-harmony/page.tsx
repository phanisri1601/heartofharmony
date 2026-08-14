import type { Metadata } from "next";
import { LongFormPage } from "@/components/content/LongFormPage";
import data from "@/data/content/ckpc-properties-new-launch-hosur-road-heart-of-harmony.json";
import type { ContentPageData } from "@/types/content";

const pageData = data as ContentPageData;

export const metadata: Metadata = {
  title: 'CKPC Properties New Launch on Hosur Road 2026 | Heart of Harmony, Kudlu Gate, Bengaluru',
  description: "CKPC Properties' flagship new launch on Hosur Road — Heart of Harmony at Kudlu Gate, Bengaluru. 137 luxury 3 BHK, 3.5 BHK & 4 BHK sky residences, 6 homes per floor, metro at 400m. RERA registered. March 2030 possession.",
  alternates: { canonical: "/ckpc-properties-new-launch-hosur-road-heart-of-harmony/" },
  openGraph: {
    title: 'CKPC Properties New Launch on Hosur Road 2026 | Heart of Harmony, Kudlu Gate, Bengaluru',
    description: "CKPC Properties' flagship new launch on Hosur Road — Heart of Harmony at Kudlu Gate, Bengaluru. 137 luxury 3 BHK, 3.5 BHK & 4 BHK sky residences, 6 homes per floor, metro at 400m. RERA registered. March 2030 possession.",
    url: "/ckpc-properties-new-launch-hosur-road-heart-of-harmony/",
    type: "article",
  },
};

export default function Page() {
  return <LongFormPage data={pageData} eyebrow="Article" />;
}
