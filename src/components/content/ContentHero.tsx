"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useHeaderOnDark } from "@/components/layout/HeaderThemeContext";

/**
 * The banner hero shared by Project, Lifestyle, Homes, About Us and Contact
 * Us — a full-bleed photo with a bottom-anchored dark gradient scrim for
 * text contrast, the header floating transparently over it, and a
 * two-column content row anchored toward the lower half: the heading on the
 * left, the intro paragraph and CTAs on the right.
 */
export function ContentHero({
  title,
  titleAccent,
  accentNewLine = false,
  intro,
  image,
  mobileImage,
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
  /** Dedicated mobile crop, when the source page has one — live doesn't
   * always ship one (Lifestyle/Homes/About Us just reuse `image` on
   * mobile), so this is optional and falls back to `image`. */
  mobileImage?: string | null;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
}) {
  const titleLines = title.split("\n");
  useHeaderOnDark();

  return (
    <section className="relative overflow-hidden bg-brand-dark text-brand-white md:min-h-screen">
      {/* Photo block — on mobile live crops this to a fixed ~55vh block with
          the heading/copy in a separate solid-dark block below it (not
          overlaid); at md+ it's the full-bleed viewport-height photo with
          text overlaid on top, bottom-anchored. */}
      <div className="relative h-[55vh] w-full md:absolute md:inset-0 md:h-auto">
        {image && (
          <>
            {mobileImage ? (
              <>
                <Image
                  src={mobileImage}
                  alt={title}
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover md:hidden"
                />
                <Image
                  src={image}
                  alt={title}
                  fill
                  priority
                  sizes="100vw"
                  className="hidden object-cover md:block"
                />
              </>
            ) : (
              <Image src={image} alt={title} fill priority sizes="100vw" className="object-cover" />
            )}
            {/* Bottom-anchored scrim so the white heading/copy stay legible
                against whatever the photo is doing back there — only needed
                at md+, where the text overlays the photo; on mobile the
                photo stands on its own with no text on top of it. */}
            <div className="absolute inset-0 z-[1] hidden bg-gradient-to-t from-black/85 via-black/35 via-45% to-transparent md:block" />
            {/* Mobile-only: fades the bottom half of the photo into solid
                brand-dark so it blends seamlessly into the content block
                below instead of cutting off hard — matches live's
                herosection::after gradient exactly (transparent to 50%,
                then fading to solid #141414 by the bottom edge). */}
            <div className="absolute inset-0 z-[1] block bg-gradient-to-b from-brand-dark/0 via-brand-dark/0 to-brand-dark md:hidden" />
          </>
        )}
      </div>

      <div className="relative z-10 md:absolute md:inset-0 md:flex md:items-end">
        <div className="container-page grid w-full gap-y-6 pb-12 pt-8 md:grid-cols-[55fr_58fr] md:gap-x-[70px] md:pb-16 md:pt-28">
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
                className="mt-6 flex flex-wrap items-center justify-center gap-[25px]"
              >
                {ctaPrimary && (
                  <Link
                    href={ctaPrimary.href}
                    className="rounded-full border border-black bg-black px-2.5 py-[5px] font-serif text-base leading-[26px] tracking-[-0.4px] text-white transition hover:opacity-80 md:text-[20px]"
                  >
                    {ctaPrimary.label}
                  </Link>
                )}
                {ctaSecondary && (
                  <Link
                    href={ctaSecondary.href}
                    className="rounded-full border border-black bg-black px-2.5 py-[5px] font-serif text-base leading-[26px] tracking-[-0.4px] text-white transition hover:opacity-80 md:text-[20px]"
                  >
                    {ctaSecondary.label}
                  </Link>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
