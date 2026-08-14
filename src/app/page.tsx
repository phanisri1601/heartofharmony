import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ProjectGlance } from "@/components/sections/ProjectGlance";
import { TriadOfDelight } from "@/components/sections/TriadOfDelight";
import { LifestyleAccess } from "@/components/sections/LifestyleAccess";
import { Amenities } from "@/components/sections/Amenities";
import { StepIntoHarmony } from "@/components/sections/StepIntoHarmony";
import { Insights } from "@/components/sections/Insights";
import { Faq } from "@/components/sections/Faq";
import { ContactSection } from "@/components/sections/ContactSection";
import { insights, faq } from "@/data/homepage";

export const metadata: Metadata = {
  title: "CKPC Heart of Harmony – 3, 3.5 & 4 BHK Apartments, Kudlu Gate",
  description:
    "Heart of Harmony by CKPC — premium 3, 3.5 & 4 BHK signature residences at Kudlu Gate, Hosur Road, Bengaluru. 400mtrs from Kudlu Gate Metro Station.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "CKPC Heart of Harmony – 3, 3.5 & 4 BHK Apartments, Kudlu Gate",
    description:
      "Heart of Harmony by CKPC — premium 3, 3.5 & 4 BHK signature residences at Kudlu Gate, Hosur Road, Bengaluru.",
    url: "/",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectGlance />
      <TriadOfDelight />
      <LifestyleAccess />
      <Amenities />
      <StepIntoHarmony />
      <Insights
        eyebrow={insights.eyebrow}
        heading={insights.heading}
        accent={insights.headingAccent}
        cta={insights.cta}
        items={insights.items}
      />
      <Faq heading={faq.heading} accent={faq.headingAccent} items={faq.items} ctaText={faq.ctaText} />
      <ContactSection />
    </>
  );
}
