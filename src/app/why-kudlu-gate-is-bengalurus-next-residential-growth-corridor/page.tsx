import type { Metadata } from "next";
import { LongFormPage } from "@/components/content/LongFormPage";
import data from "@/data/content/why-kudlu-gate-is-bengalurus-next-residential-growth-corridor.json";
import type { ContentPageData } from "@/types/content";

const pageData = data as ContentPageData;

export const metadata: Metadata = {
  title: "Why Kudlu Gate is Bengaluru's Next Residential Growth Corridor | Hosur Road, 2026",
  description: "Kudlu Gate on Hosur Road is Bengaluru's fastest-growing residential corridor — Yellow Line metro connectivity, Electronic City proximity, rising rental demand and premium developer interest. Why buyers and investors choose Kudlu Gate in 2026.",
  alternates: { canonical: "/why-kudlu-gate-is-bengalurus-next-residential-growth-corridor/" },
  openGraph: {
    title: "Why Kudlu Gate is Bengaluru's Next Residential Growth Corridor | Hosur Road, 2026",
    description: "Kudlu Gate on Hosur Road is Bengaluru's fastest-growing residential corridor — Yellow Line metro connectivity, Electronic City proximity, rising rental demand and premium developer interest. Why buyers and investors choose Kudlu Gate in 2026.",
    url: "/why-kudlu-gate-is-bengalurus-next-residential-growth-corridor/",
    type: "article",
  },
};

export default function Page() {
  return <LongFormPage data={pageData} eyebrow="Article" />;
}
