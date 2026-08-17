import type { Metadata } from "next";
import { LongFormPage } from "@/components/content/LongFormPage";
import data from "@/data/content/privacy-policy.json";
import type { ContentPageData } from "@/types/content";

const pageData = data as ContentPageData;

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How CKPC Properties collects, uses and protects your personal data when you visit the Heart of Harmony website.",
  alternates: { canonical: "/privacy-policy/" },
};

export default function Page() {
  return <LongFormPage data={pageData} eyebrow="Legal" />;
}
