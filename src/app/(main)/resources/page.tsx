import type { Metadata } from "next";
import { ResourcesHero } from "@/components/content/ResourcesHero";
import { ResourcesGrid } from "@/components/sections/ResourcesGrid";
import { ContactSection } from "@/components/sections/ContactSection";
import { resourcesHero } from "@/data/resources";

export const metadata: Metadata = {
  title: "Blog — Real Estate Insights, Location & Lifestyle",
  description:
    "Read insights on Kudlu Gate real estate, Heart of Harmony amenities, Hosur Road lifestyle, and CKPC builder updates.",
  alternates: { canonical: "/resources/" },
  openGraph: {
    title: "Heart of Harmony Blog — Real Estate Insights, Location & Lifestyle | CKPC",
    description:
      "Read insights on Kudlu Gate real estate, Heart of Harmony amenities, Hosur Road lifestyle, and CKPC builder updates.",
    url: "/resources/",
    type: "website",
  },
};

export default function ResourcesPage() {
  return (
    <>
      <ResourcesHero
        eyebrow={resourcesHero.eyebrow}
        heading={resourcesHero.heading}
        accent={resourcesHero.accent}
        intro={resourcesHero.intro}
      />
      <ResourcesGrid />
      <ContactSection />
    </>
  );
}
