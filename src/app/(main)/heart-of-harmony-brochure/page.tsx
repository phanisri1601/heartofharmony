import type { Metadata } from "next";
import { LongFormPage } from "@/components/content/LongFormPage";
import data from "@/data/content/heart-of-harmony-brochure.json";
import type { ContentPageData } from "@/types/content";

const pageData = data as ContentPageData;

export const metadata: Metadata = {
  title: 'Heart of Harmony Brochure | Download PDF – 3, 3.5 & 4 BHK, Kudlu Gate',
  description: 'Request or download the Heart of Harmony brochure by CKPC Properties. Explore floor plans, amenities, master plan & pricing for 3, 3.5 & 4 BHK homes at Kudlu Gate, Hosur Road, Bengaluru. RERA registered.',
  alternates: { canonical: "/heart-of-harmony-brochure/" },
  openGraph: {
    title: 'Heart of Harmony Brochure | Download PDF – 3, 3.5 & 4 BHK, Kudlu Gate',
    description: 'Request or download the Heart of Harmony brochure by CKPC Properties. Explore floor plans, amenities, master plan & pricing for 3, 3.5 & 4 BHK homes at Kudlu Gate, Hosur Road, Bengaluru. RERA registered.',
    url: "/heart-of-harmony-brochure/",
    type: "article",
  },
};

export default function Page() {
  return <LongFormPage data={pageData} eyebrow="Guide" />;
}
