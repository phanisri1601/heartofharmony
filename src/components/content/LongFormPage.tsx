import { ContentHero } from "@/components/content/ContentHero";
import { BlockRenderer } from "@/components/content/BlockRenderer";
import { Insights } from "@/components/sections/Insights";
import { ContactSection } from "@/components/sections/ContactSection";
import { contentImages, imageForHref } from "@/data/contentImages";
import type { ContentPageData } from "@/types/content";

const FALLBACK_INSIGHT_IMAGE = "/images/home/harmony-social.jpg";

export function LongFormPage({
  data,
}: {
  data: ContentPageData;
  /** @deprecated ContentHero no longer renders a breadcrumb/eyebrow — kept so existing call sites don't need updating. */
  eyebrow?: string;
}) {
  const blocks = [...data.blocks];
  let intro: string | undefined;
  if (blocks[0]?.type === "p" && blocks[0].lead) {
    intro = blocks[0].text;
    blocks.shift();
  }

  return (
    <>
      <ContentHero title={data.h1 ?? data.title} intro={intro} image={data.heroImage ? heroSrc(data) : null} />

      <section className="bg-brand-offwhite py-14 md:py-20">
        <div className="container-page max-w-3xl">
          <BlockRenderer blocks={blocks} />
        </div>
      </section>

      {data.insights && data.insights.length > 0 && (
        <Insights
          eyebrow="Resources"
          heading="Insights from Heart of "
          accent="Harmony"
          items={data.insights.map((it) => ({
            title: it.title,
            href: normalizeHref(it.href),
            image: imageForHref(it.href) ?? FALLBACK_INSIGHT_IMAGE,
          }))}
        />
      )}

      <ContactSection />
    </>
  );
}

function heroSrc(data: ContentPageData): string {
  // heroImage on the data object is the *original* WordPress URL; the actual
  // local asset lives in contentImages keyed by slug (derived from canonical).
  const slug = data.canonical
    .replace("https://www.ckpcheartofharmony.com", "")
    .replace(/^\/|\/$/g, "")
    .split("/")
    .pop();
  return (slug && contentImages[slug]) || "/images/home/facade.jpg";
}

function normalizeHref(href: string): string {
  const path = href.replace("https://www.ckpcheartofharmony.com", "");
  if (path.endsWith(".html")) return path;
  return path.endsWith("/") ? path : `${path}/`;
}
