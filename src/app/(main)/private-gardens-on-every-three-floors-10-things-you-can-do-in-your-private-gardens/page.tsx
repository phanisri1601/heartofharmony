import type { Metadata } from "next";
import { LongFormPage } from "@/components/content/LongFormPage";
import data from "@/data/content/private-gardens-on-every-three-floors-10-things-you-can-do-in-your-private-gardens.json";
import type { ContentPageData } from "@/types/content";

const pageData = data as ContentPageData;

export const metadata: Metadata = {
  title: 'Private Sky Garden Terraces at Heart of Harmony | 10 Ways to Use Your Outdoor Space, Kudlu Gate',
  description: 'Heart of Harmony features open-to-sky private garden terraces on every third floor of its 24-storey tower at Kudlu Gate. Discover 10 ways residents use these outdoor decks daily — from yoga to family sundowners.',
  alternates: { canonical: "/private-gardens-on-every-three-floors-10-things-you-can-do-in-your-private-gardens/" },
  openGraph: {
    title: 'Private Sky Garden Terraces at Heart of Harmony | 10 Ways to Use Your Outdoor Space, Kudlu Gate',
    description: 'Heart of Harmony features open-to-sky private garden terraces on every third floor of its 24-storey tower at Kudlu Gate. Discover 10 ways residents use these outdoor decks daily — from yoga to family sundowners.',
    url: "/private-gardens-on-every-three-floors-10-things-you-can-do-in-your-private-gardens/",
    type: "article",
  },
};

export default function Page() {
  return <LongFormPage data={pageData} eyebrow="Article" />;
}
