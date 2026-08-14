import type { Metadata } from "next";
import { ContentHero } from "@/components/content/ContentHero";
import { AboutApproach } from "@/components/sections/AboutApproach";
import { PxPillars } from "@/components/sections/PxPillars";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { TrackRecord } from "@/components/sections/TrackRecord";
import { FlagshipProjects } from "@/components/sections/FlagshipProjects";
import { MdMessage } from "@/components/sections/MdMessage";
import { ContactSection } from "@/components/sections/ContactSection";
import { aboutHero } from "@/data/about";

export const metadata: Metadata = {
  title: "About CKPC Properties — Developer of Heart of Harmony",
  description:
    "CKPC Properties — developer of Heart of Harmony, Bengaluru. 8M sq ft Grade A+ commercial spaces. Trusted by TCS, Siemens, Bosch and Fortune 100 companies.",
  alternates: { canonical: "/about-us/" },
  openGraph: {
    title: "About CKPC Properties — Developer of Heart of Harmony, Bengaluru",
    description:
      "CKPC Properties — developer of Heart of Harmony, Bengaluru. 8M sq ft Grade A+ commercial spaces.",
    url: "/about-us/",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <ContentHero
        eyebrow="About Us"
        title={aboutHero.h1}
        image="/images/about/home-our-team-ckpc.webp"
        ctaPrimary={aboutHero.ctaPrimary}
        ctaSecondary={aboutHero.ctaSecondary}
      />
      <AboutApproach />
      <PxPillars />
      <ClientLogos />
      <TrackRecord />
      <FlagshipProjects />
      <MdMessage />
      <ContactSection />
    </>
  );
}
