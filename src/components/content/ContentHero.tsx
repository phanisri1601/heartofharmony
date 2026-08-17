"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useHeaderOnDark } from "@/components/layout/HeaderThemeContext";

/**
 * The banner hero shared by Project, Lifestyle, Homes, About Us and Contact
 * Us — a full-bleed photo with no dark overlay (the source photos are
 * moody/dark enough on their own, matching the live site), the header
 * floating transparently over it, and a two-column content row anchored
 * toward the lower half: the heading on the left, the intro paragraph and
 * CTAs on the right — matching the live site's layout exactly (it is not a
 * single stacked column).
 */
export function ContentHero({
  title,
  titleAccent,
  accentNewLine = false,
  intro,
  image,
  ctaPrimary,
  ctaSecondary,
}: {
  /** Plain lead-in text. Use "\n" for an explicit manual line break. */
  title: string;
  /** Italic, lighter-weight accent portion rendered after `title`. */
  titleAccent?: string;
  /** Render `titleAccent` on its own line instead of inline. */
  accentNewLine?: boolean;
  intro?: string;
  image?: string | null;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
}) {
  const titleLines = title.split("\n");
  useHeaderOnDark();

  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-brand-dark text-brand-white">
      {image && <Image src={image} alt={title} fill priority sizes="100vw" className="object-cover" />}

      <div className="container-page relative z-10 grid w-full gap-6 pb-12 pt-28 md:grid-cols-2 md:gap-10 md:pb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl font-normal leading-[1.15] tracking-[-0.05em] text-brand-white sm:text-4xl sm:tracking-[-0.06em] md:text-[44px] md:tracking-[-0.07em] lg:text-[51px] lg:leading-[59px] lg:tracking-[-2.56px]"
        >
          {titleLines.map((line, i) => (
            <span key={i} className={i > 0 ? "block" : undefined}>
              {line}
              {i === titleLines.length - 1 && titleAccent && (
                <>
                  {accentNewLine && <br />}
                  <em className="font-light italic">
                    {!accentNewLine && " "}
                    {titleAccent}
                  </em>
                </>
              )}
            </span>
          ))}
        </motion.h1>

        <div>
          {intro && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sans text-base font-medium leading-[1.4] tracking-[-0.02em] text-brand-white md:text-[20px] md:leading-[26px] md:tracking-[-0.4px]"
            >
              {intro}
            </motion.p>
          )}

          {(ctaPrimary || ctaSecondary) && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 flex flex-wrap items-center justify-center gap-2.5"
            >
              {ctaPrimary && (
                <Link
                  href={ctaPrimary.href}
                  className="rounded-full border border-black bg-black px-2.5 py-[5px] font-serif text-[20px] leading-[26px] tracking-[-0.4px] text-white transition hover:opacity-80"
                >
                  {ctaPrimary.label}
                </Link>
              )}
              {ctaSecondary && (
                <Link
                  href={ctaSecondary.href}
                  className="rounded-full border border-black bg-black px-2.5 py-[5px] font-serif text-[20px] leading-[26px] tracking-[-0.4px] text-white transition hover:opacity-80"
                >
                  {ctaSecondary.label}
                </Link>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
