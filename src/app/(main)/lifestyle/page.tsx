import type { Metadata } from "next";
import { ContentHero } from "@/components/content/ContentHero";
import { LifestyleLocation } from "@/components/sections/LifestyleLocation";
import { LifestyleAmenities } from "@/components/sections/LifestyleAmenities";
import { ClubhouseHighlights } from "@/components/sections/ClubhouseHighlights";
import { Faq } from "@/components/sections/Faq";
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
        title={lifestyleHero.title}
        titleAccent={lifestyleHero.titleAccent}
        accentNewLine
        intro={lifestyleHero.intro}
        image="/images/lifestyle/ckpc-heart-of-harmony-homes-3-3.5-4-bed-residences-lifestyle-banner-1.jpg"
        ctaPrimary={lifestyleHero.ctaPrimary}
        ctaSecondary={lifestyleHero.ctaSecondary}
      />
      <LifestyleLocation />
      <LifestyleAmenities />
      <ClubhouseHighlights />
      <Faq heading={lifestyleFaq.heading} accent={lifestyleFaq.headingAccent} items={lifestyleFaq.items} />
    </>
  );
}
