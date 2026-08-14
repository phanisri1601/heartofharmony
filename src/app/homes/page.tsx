import type { Metadata } from "next";
import { ContentHero } from "@/components/content/ContentHero";
import { HomesCommunity } from "@/components/sections/HomesCommunity";
import { FloorPlans } from "@/components/sections/FloorPlans";
import { Faq } from "@/components/sections/Faq";
import { ContactSection } from "@/components/sections/ContactSection";
import { homesHero, homesFaq } from "@/data/homes";

export const metadata: Metadata = {
  title: "3, 3.5 & 4 BHK Floor Plans & Homes",
  description:
    "Explore 3 BHK, 3.5 BHK & 4 BHK floor plans at Heart of Harmony, Kudlu Gate. Zero common walls, 270° views, private gardens. Possession March 2030. Enquire for price.",
  alternates: { canonical: "/homes/" },
  openGraph: {
    title: "3, 3.5 & 4 BHK Floor Plans & Homes | Heart of Harmony, Kudlu Gate",
    description:
      "Explore 3 BHK, 3.5 BHK & 4 BHK floor plans at Heart of Harmony, Kudlu Gate. Zero common walls, 270° views, private gardens.",
    url: "/homes/",
    type: "website",
  },
};

export default function HomesPage() {
  return (
    <>
      <ContentHero
        eyebrow="Homes"
        title={homesHero.h1}
        image="/images/homes/ckpc-heart-of-harmony-homes-planning-3-3-5-4-bed-sky-residences.jpg"
        ctaPrimary={homesHero.ctaPrimary}
        ctaSecondary={homesHero.ctaSecondary}
      />
      <HomesCommunity />
      <FloorPlans />
      <Faq heading={homesFaq.heading} accent={homesFaq.headingAccent} items={homesFaq.items} />
      <ContactSection />
    </>
  );
}
