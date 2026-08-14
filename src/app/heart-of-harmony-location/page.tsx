import type { Metadata } from "next";
import { LongFormPage } from "@/components/content/LongFormPage";
import data from "@/data/content/heart-of-harmony-location.json";
import type { ContentPageData } from "@/types/content";

const pageData = data as ContentPageData;

export const metadata: Metadata = {
  title: 'Heart of Harmony Location | Kudlu Gate, Hosur Main Road, Bengaluru 560068',
  description: 'Heart of Harmony by CKPC is at Kudlu Gate, Hosur Main Road, Bengaluru 560068 — 400m from Kudlu Gate Metro Station (Yellow Line). Full location guide: distances, connectivity, schools, hospitals & map.',
  alternates: { canonical: "/heart-of-harmony-location/" },
  openGraph: {
    title: 'Heart of Harmony Location | Kudlu Gate, Hosur Main Road, Bengaluru 560068',
    description: 'Heart of Harmony by CKPC is at Kudlu Gate, Hosur Main Road, Bengaluru 560068 — 400m from Kudlu Gate Metro Station (Yellow Line). Full location guide: distances, connectivity, schools, hospitals & map.',
    url: "/heart-of-harmony-location/",
    type: "article",
  },
};

export default function Page() {
  return <LongFormPage data={pageData} eyebrow="Guide" />;
}
