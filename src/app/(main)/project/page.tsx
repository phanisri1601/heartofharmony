import type { Metadata } from "next";
import { ContentHero } from "@/components/content/ContentHero";
import { ProjectFeaturesAccordion } from "@/components/sections/ProjectFeaturesAccordion";
import { MasterPlan } from "@/components/sections/MasterPlan";
import { ProjectAmenitiesSection } from "@/components/sections/ProjectAmenitiesSection";
import { LocationMap } from "@/components/sections/LocationMap";
import { Insights } from "@/components/sections/Insights";
import { Faq } from "@/components/sections/Faq";
import { projectHero, projectInsights, projectFaq } from "@/data/project";

export const metadata: Metadata = {
  title: "Project Overview, Master Plan & Amenities",
  description:
    "Heart of Harmony by CKPC — project overview, master plan, 40+ amenities and location at Kudlu Gate, Hosur Road, Bengaluru.",
  alternates: { canonical: "/project/" },
  openGraph: {
    title: "Heart of Harmony — Project Overview, Master Plan & Amenities",
    description:
      "Heart of Harmony by CKPC — project overview, master plan, 40+ amenities and location at Kudlu Gate, Hosur Road, Bengaluru.",
    url: "/project/",
    type: "website",
  },
};

export default function ProjectPage() {
  return (
    <>
      <ContentHero
        title={projectHero.title}
        intro={projectHero.intro}
        image="/images/project/ckpc-heart-of-harmony-homes-3-3.5-4-bed-residences-project-banner.jpg"
        ctaPrimary={projectHero.ctaPrimary}
        ctaSecondary={projectHero.ctaSecondary}
      />
      <ProjectFeaturesAccordion />
      <MasterPlan />
      <ProjectAmenitiesSection />
      <LocationMap />
      <Insights
        eyebrow={projectInsights.eyebrow}
        heading={projectInsights.heading}
        accent={projectInsights.headingAccent}
        items={projectInsights.items}
      />
      <Faq heading={projectFaq.heading} accent={projectFaq.headingAccent} items={projectFaq.items} />
    </>
  );
}
