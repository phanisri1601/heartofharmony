import type { Metadata } from "next";
import { LongFormPage } from "@/components/content/LongFormPage";
import data from "@/data/content/exclusive-look-clubhouses-and-recreational-amenities-at-heart-of-harmony.json";
import type { ContentPageData } from "@/types/content";

const pageData = data as ContentPageData;

export const metadata: Metadata = {
  title: 'Heart of Harmony Amenities | 40+ Facilities — Clubhouse, Pool, Spa & Outdoor Sports, Kudlu Gate',
  description: 'Explore 40+ amenities at Heart of Harmony, Kudlu Gate — sky deck pool, gym, spa, sauna, pickleball, basketball, outdoor sports, banquet hall and co-working space across podium and rooftop clubhouse. Hosur Road, Bengaluru.',
  alternates: { canonical: "/exclusive-look-clubhouses-and-recreational-amenities-at-heart-of-harmony/" },
  openGraph: {
    title: 'Heart of Harmony Amenities | 40+ Facilities — Clubhouse, Pool, Spa & Outdoor Sports, Kudlu Gate',
    description: 'Explore 40+ amenities at Heart of Harmony, Kudlu Gate — sky deck pool, gym, spa, sauna, pickleball, basketball, outdoor sports, banquet hall and co-working space across podium and rooftop clubhouse. Hosur Road, Bengaluru.',
    url: "/exclusive-look-clubhouses-and-recreational-amenities-at-heart-of-harmony/",
    type: "article",
  },
};

export default function Page() {
  return <LongFormPage data={pageData} eyebrow="Article" />;
}
