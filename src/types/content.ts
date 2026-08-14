// Structured content-block types shared by every long-form page (the 14 SEO
// landing pages, the 9 resource articles, and the privacy policy). Populated
// from src/data/content/*.json, produced by extracting the saved WordPress
// HTML in site-assets/ — see docs/url-inventory.md.

export type HeadingBlock = { type: "h2" | "h3" | "h4"; text: string };
export type ParaBlock = { type: "p"; text: string; lead?: boolean };
export type ListBlock = { type: "list"; ordered: boolean; items: string[] };
export type TableBlock = { type: "table"; headers: string[]; rows: string[][] };
export type CardsBlock = {
  type: "cards";
  items: { title: string; tag?: string; body: string }[];
};
export type AmenityColumnsBlock = {
  type: "amenity-columns";
  columns: { heading: string; items: string[] }[];
};
export type ProjectBoxBlock = {
  type: "project-box";
  title: string;
  address: string;
  badge: string;
  configs: string[];
  specs: [string, string][];
};
export type TestimonialsBlock = {
  type: "testimonials";
  items: { quote: string; name: string; role: string }[];
};
export type FaqBlock = { type: "faq"; items: { q: string; a: string }[] };
export type RatingBlock = { type: "rating"; value: string; meta: string };

export type ContentBlock =
  | HeadingBlock
  | ParaBlock
  | ListBlock
  | TableBlock
  | CardsBlock
  | AmenityColumnsBlock
  | ProjectBoxBlock
  | TestimonialsBlock
  | FaqBlock
  | RatingBlock;

export type ContentInsight = { title: string; href: string };

export type ContentPageData = {
  title: string;
  metaDescription: string;
  canonical: string;
  h1: string | null;
  heroImage: string | null;
  blocks: ContentBlock[];
  insights: ContentInsight[] | null;
};
