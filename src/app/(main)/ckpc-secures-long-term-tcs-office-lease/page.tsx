import type { Metadata } from "next";
import { LongFormPage } from "@/components/content/LongFormPage";
import data from "@/data/content/ckpc-secures-long-term-tcs-office-lease.json";
import type { ContentPageData } from "@/types/content";

const pageData = data as ContentPageData;

export const metadata: Metadata = {
  title: 'CKPC Properties Secures Long-Term TCS Office Lease | Grade A+ Commercial Real Estate, Bengaluru',
  description: 'CKPC Properties has secured a long-term office lease with TCS (Tata Consultancy Services) at 360° Business Park, Electronic City, Bengaluru — 1.4 million sq ft over 15 years. What this means for Heart of Harmony buyers.',
  alternates: { canonical: "/ckpc-secures-long-term-tcs-office-lease/" },
  openGraph: {
    title: 'CKPC Properties Secures Long-Term TCS Office Lease | Grade A+ Commercial Real Estate, Bengaluru',
    description: 'CKPC Properties has secured a long-term office lease with TCS (Tata Consultancy Services) at 360° Business Park, Electronic City, Bengaluru — 1.4 million sq ft over 15 years. What this means for Heart of Harmony buyers.',
    url: "/ckpc-secures-long-term-tcs-office-lease/",
    type: "article",
  },
};

export default function Page() {
  return <LongFormPage data={pageData} eyebrow="Article" />;
}
