import type { Metadata } from "next";
import { LongFormPage } from "@/components/content/LongFormPage";
import data from "@/data/content/ckpc-heart-of-harmony-review.json";
import type { ContentPageData } from "@/types/content";

const pageData = data as ContentPageData;

export const metadata: Metadata = {
  title: 'CKPC Heart of Harmony Review 2026 | Honest Buyer Analysis — Kudlu Gate, Bengaluru',
  description: 'Read our detailed CKPC Heart of Harmony review — location, master plan, amenities, floor plans, developer track record & buyer testimonials. Luxury 3, 3.5 & 4 BHK homes at Kudlu Gate, Hosur Road.',
  alternates: { canonical: "/ckpc-heart-of-harmony-review/" },
  openGraph: {
    title: 'CKPC Heart of Harmony Review 2026 | Honest Buyer Analysis — Kudlu Gate, Bengaluru',
    description: 'Read our detailed CKPC Heart of Harmony review — location, master plan, amenities, floor plans, developer track record & buyer testimonials. Luxury 3, 3.5 & 4 BHK homes at Kudlu Gate, Hosur Road.',
    url: "/ckpc-heart-of-harmony-review/",
    type: "article",
  },
};

export default function Page() {
  return <LongFormPage data={pageData} eyebrow="Guide" />;
}
