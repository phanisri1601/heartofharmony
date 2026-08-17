import type { ReactNode } from "react";

/**
 * Reproduces the site's recurring section-heading pattern: a small uppercase
 * eyebrow pill, an H2 with an italic serif accent (the site's `.brown-text`,
 * #8E3628) on part of the text, and a short centered underline.
 */
export function SectionHeading({
  eyebrow,
  heading,
  accent,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  /** Text before the accented/italic portion. */
  heading: string;
  /** The italic, brand-colored portion of the heading (rendered after `heading`). */
  accent?: string;
  align?: "left" | "center";
  className?: string;
}) {
  const isCenter = align === "center";
  return (
    <div className={`${isCenter ? "text-center" : ""} ${className}`}>
      {eyebrow && (
        <span className="inline-block rounded-full bg-brand-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-brand-primary">
          {eyebrow}
        </span>
      )}
      <h2 className={`font-serif text-3xl text-brand-dark md:text-4xl ${eyebrow ? "mt-4" : ""}`}>
        {heading}
        {accent && <em className="text-brand-primary italic">{accent}</em>}
      </h2>
      <div className={`mt-4 h-px w-10 bg-brand-dark ${isCenter ? "mx-auto" : ""}`} />
    </div>
  );
}

export function ReadMoreLink({ children }: { children: ReactNode }) {
  return <span className="text-sm text-brand-primary">{children} →</span>;
}
