import type { Metadata } from "next";
import { LongFormPage } from "@/components/content/LongFormPage";
import data from "@/data/content/smart-layouts-at-heart-of-harmony-designed-for-the-way-you-live.json";
import type { ContentPageData } from "@/types/content";

const pageData = data as ContentPageData;

export const metadata: Metadata = {
  title: 'Heart of Harmony Floor Plans | 3 BHK, 3.5 BHK & 4 BHK Smart Home Layouts, Kudlu Gate',
  description: "Discover how Heart of Harmony's 3 BHK, 3.5 BHK and 4 BHK floor plans are designed for real life — zero dead space, 270° views, open-plan zoning, and private garden terraces. Hosur Road, Bengaluru.",
  alternates: { canonical: "/smart-layouts-at-heart-of-harmony-designed-for-the-way-you-live/" },
  openGraph: {
    title: 'Heart of Harmony Floor Plans | 3 BHK, 3.5 BHK & 4 BHK Smart Home Layouts, Kudlu Gate',
    description: "Discover how Heart of Harmony's 3 BHK, 3.5 BHK and 4 BHK floor plans are designed for real life — zero dead space, 270° views, open-plan zoning, and private garden terraces. Hosur Road, Bengaluru.",
    url: "/smart-layouts-at-heart-of-harmony-designed-for-the-way-you-live/",
    type: "article",
  },
};

export default function Page() {
  return <LongFormPage data={pageData} eyebrow="Article" />;
}
