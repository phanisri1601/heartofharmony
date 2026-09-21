import type { Metadata } from "next";
import { LongFormPage } from "@/components/content/LongFormPage";
import data from "@/data/content/what-is-the-triad-of-delight-location-that-works-on-every-front.json";
import type { ContentPageData } from "@/types/content";

const pageData = data as ContentPageData;

export const metadata: Metadata = {
  title: 'Heart of Harmony on Hosur Road | Highway, Metro & Lifestyle — The Triad of Delight',
  description: "Heart of Harmony's address on Hosur Main Road, Hosur main road brings together three unique advantages: direct highway access on NH48, Hosur main road Metro Station at 400 metres, and proximity to South Bengaluru's top lifestyle hubs. The Triad of Delight explained.",
  alternates: { canonical: "/what-is-the-triad-of-delight-location-that-works-on-every-front/" },
  openGraph: {
    title: 'Heart of Harmony on Hosur Road | Highway, Metro & Lifestyle — The Triad of Delight',
    description: "Heart of Harmony's address on Hosur Main Road, Hosur main road brings together three unique advantages: direct highway access on NH48, Hosur main road Metro Station at 400 metres, and proximity to South Bengaluru's top lifestyle hubs. The Triad of Delight explained.",
    url: "/what-is-the-triad-of-delight-location-that-works-on-every-front/",
    type: "article",
  },
};

export default function Page() {
  return <LongFormPage data={pageData} eyebrow="Article" />;
}
