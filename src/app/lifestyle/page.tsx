import type { Metadata } from "next";
import { ContentHero } from "@/components/content/ContentHero";
import { LifestyleAccess } from "@/components/sections/LifestyleAccess";
import { LifestyleAmenities } from "@/components/sections/LifestyleAmenities";
import { ClubhouseHighlights } from "@/components/sections/ClubhouseHighlights";
import { Faq } from "@/components/sections/Faq";
import { ContactSection } from "@/components/sections/ContactSection";
import { lifestyleHero, lifestyleFaq } from "@/data/lifestyle";

export const metadata: Metadata = {
  title: "Amenities & Lifestyle — Wellness, Pool, Spa & 40+ Features",
  description:
    "Explore 40+ amenities at Heart of Harmony, Hosur Road — outdoor sports, sky deck pool, spa, sauna, pickleball court, co-working space & more. Near Kudlu Gate Metro.",
  alternates: { canonical: "/lifestyle/" },
  openGraph: {
    title: "Amenities at Heart of Harmony — Wellness, Pool, Spa & 40+ Lifestyle Features",
    description:
      "Explore 40+ amenities at Heart of Harmony, Hosur Road — outdoor sports, sky deck pool, spa, sauna, pickleball court, co-working space & more.",
    url: "/lifestyle/",
    type: "website",
  },
};

export default function LifestylePage() {
  return (
    <>
      <ContentHero
        eyebrow="Lifestyle"
        title={lifestyleHero.h1}
        image="/images/lifestyle/ckpc-heart-of-harmony-homes-project-lifestyle-location-connectivity-bangalore-kudlu-gate-singasandra.jpg"
        ctaPrimary={lifestyleHero.ctaPrimary}
        ctaSecondary={lifestyleHero.ctaSecondary}
      />
      <LifestyleAccess />
      <LifestyleAmenities />
      <ClubhouseHighlights />
      <Faq heading={lifestyleFaq.heading} accent={lifestyleFaq.headingAccent} items={lifestyleFaq.items} />
      <ContactSection />
    </>
  );
}
