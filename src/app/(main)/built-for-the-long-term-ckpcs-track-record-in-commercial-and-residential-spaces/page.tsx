import type { Metadata } from "next";
import { LongFormPage } from "@/components/content/LongFormPage";
import data from "@/data/content/built-for-the-long-term-ckpcs-track-record-in-commercial-and-residential-spaces.json";
import type { ContentPageData } from "@/types/content";

const pageData = data as ContentPageData;

export const metadata: Metadata = {
  title: 'CKPC Properties Track Record | 8M Sq Ft, Fortune 100 Clients & Heart of Harmony, Bengaluru',
  description: 'CKPC Properties has delivered 8 million sq ft of Grade A+ commercial spaces in Bengaluru, trusted by Fortune 100 companies including TCS, Siemens, Bosch and Merck. Now building Heart of Harmony — luxury residential at Kudlu Gate.',
  alternates: { canonical: "/built-for-the-long-term-ckpcs-track-record-in-commercial-and-residential-spaces/" },
  openGraph: {
    title: 'CKPC Properties Track Record | 8M Sq Ft, Fortune 100 Clients & Heart of Harmony, Bengaluru',
    description: 'CKPC Properties has delivered 8 million sq ft of Grade A+ commercial spaces in Bengaluru, trusted by Fortune 100 companies including TCS, Siemens, Bosch and Merck. Now building Heart of Harmony — luxury residential at Kudlu Gate.',
    url: "/built-for-the-long-term-ckpcs-track-record-in-commercial-and-residential-spaces/",
    type: "article",
  },
};

export default function Page() {
  return <LongFormPage data={pageData} eyebrow="Article" />;
}
