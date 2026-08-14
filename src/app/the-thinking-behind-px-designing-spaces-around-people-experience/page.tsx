import type { Metadata } from "next";
import { LongFormPage } from "@/components/content/LongFormPage";
import data from "@/data/content/the-thinking-behind-px-designing-spaces-around-people-experience.json";
import type { ContentPageData } from "@/types/content";

const pageData = data as ContentPageData;

export const metadata: Metadata = {
  title: 'The Thinking Behind PX: How CKPC Properties Designs Spaces Around People Experience',
  description: "People Experience (PX) is CKPC Properties' design philosophy — placing everyday usability, movement, and interaction at the centre of every building. See how PX shapes Heart of Harmony at Kudlu Gate, Hosur Road, Bengaluru.",
  alternates: { canonical: "/the-thinking-behind-px-designing-spaces-around-people-experience/" },
  openGraph: {
    title: 'The Thinking Behind PX: How CKPC Properties Designs Spaces Around People Experience',
    description: "People Experience (PX) is CKPC Properties' design philosophy — placing everyday usability, movement, and interaction at the centre of every building. See how PX shapes Heart of Harmony at Kudlu Gate, Hosur Road, Bengaluru.",
    url: "/the-thinking-behind-px-designing-spaces-around-people-experience/",
    type: "article",
  },
};

export default function Page() {
  return <LongFormPage data={pageData} eyebrow="Article" />;
}
