"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { hero } from "@/data/homepage";
import { useEnquiryModal } from "@/components/modals/EnquiryModalProvider";
import { useHeaderOnDark } from "@/components/layout/HeaderThemeContext";

/** The arrow live uses inside its "Enquire Now" pills — ported 1:1 from
 * right-arrow-icon.svg, but with `fill="currentColor"` so it follows
 * whatever text color the button uses (white on the dark CTAs elsewhere,
 * brand-dark on this white pill). */
function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
      <path
        d="M10.089 7.4643L5.71403 11.8393C5.59074 11.9626 5.42354 12.0318 5.24919 12.0318C5.07483 12.0318 4.90763 11.9626 4.78434 11.8393C4.66106 11.716 4.5918 11.5488 4.5918 11.3745C4.5918 11.2001 4.66106 11.0329 4.78434 10.9096L8.69504 7.00001L4.78544 3.0893C4.72439 3.02826 4.67597 2.95579 4.64293 2.87603C4.60989 2.79627 4.59289 2.71079 4.59289 2.62446C4.59289 2.53813 4.60989 2.45265 4.64293 2.37289C4.67597 2.29313 4.72439 2.22066 4.78544 2.15962C4.84648 2.09857 4.91895 2.05015 4.99871 2.01711C5.07847 1.98408 5.16395 1.96707 5.25028 1.96707C5.33661 1.96707 5.42209 1.98408 5.50185 2.01711C5.58161 2.05015 5.65408 2.09857 5.71512 2.15962L10.0901 6.53462C10.1512 6.59566 10.1997 6.66816 10.2327 6.74797C10.2657 6.82777 10.2827 6.91332 10.2826 6.99969C10.2825 7.08606 10.2653 7.17156 10.2321 7.25129C10.1989 7.33102 10.1503 7.40341 10.089 7.4643Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Hero() {
  const { open } = useEnquiryModal();
  useHeaderOnDark();

  return (
    <section className="relative overflow-hidden bg-brand-dark text-brand-white">
      {/* Photo block — mobile crops this to a fixed ~55vh block with the
          heading/copy in a separate solid-dark block below it (not
          overlaid), matching live exactly; at md+ it's the full-bleed
          photo with text overlaid on top, same as before. */}
      <div className="relative h-[55vh] w-full md:absolute md:inset-0 md:h-auto">
        {/* object-position tuned per crop: mobile matches live's exact
            80%/0% (the tower is barely visible centered — shifting right
            reveals the building properly); desktop nudges left of center
            so the tower isn't crowded against the right edge, top-anchored
            to match live's vertical crop (0% — crops from the bottom, not
            both edges evenly). */}
        <Image
          src="/images/home/hero-mobile.jpg"
          alt="Heart of Harmony — 3, 3.5 & 4 BHK signature residences, high-rise facade"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[80%_0%] md:hidden"
        />
        <Image
          src="/images/home/hero-desktop.jpg"
          alt="Heart of Harmony — 3, 3.5 & 4 BHK signature residences, high-rise facade"
          fill
          priority
          sizes="100vw"
          className="hidden object-cover object-[40%_0%] md:block"
        />
        {/* Desktop: matches live's exact scrim — the top half of the photo
            stays completely clear, only fading in over the bottom half
            (transparent to 50%, 60% by 75%, 80% right at the bottom edge)
            so the text stays legible without darkening the whole image.
            Mobile: a bottom fade into solid brand-dark so the photo blends
            into the content block below it instead of cutting off hard. */}
        <div className="absolute inset-0 z-[1] hidden bg-[linear-gradient(rgba(20,20,20,0)_50%,rgba(20,20,20,0.6)_75%,rgba(20,20,20,0.8)_100%)] md:block" />
        <div className="absolute inset-0 z-[1] block bg-gradient-to-b from-brand-dark/0 via-brand-dark/0 to-brand-dark md:hidden" />
      </div>

      <div className="container-page relative z-10 pb-14 pt-8 md:pt-40">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl font-serif text-2xl font-normal leading-tight sm:text-3xl md:text-4xl"
        >
          {hero.h1Lines.map((line, i) => (
            <span key={line} className={i > 0 ? "block" : undefined}>
              {line}
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 max-w-lg text-sm text-brand-white/75"
        >
          {hero.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-7"
        >
          <button
            onClick={open}
            className="inline-flex items-center gap-2 rounded-full bg-brand-offwhite px-5 py-2.5 text-base font-medium text-brand-dark transition hover:opacity-90"
          >
            {hero.cta}
            <ArrowIcon />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/20 pt-6"
        >
          {hero.stats.map((s) => (
            <div key={s.label}>
              <p className="font-serif text-lg">{s.value}</p>
              <p className="mt-0.5 text-xs text-brand-white/60">{s.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 max-w-2xl border-t border-white/10 pt-6"
        >
          <p className="text-base leading-relaxed text-brand-white/60">
            <span className="font-semibold text-brand-white/80">{hero.description}</span>
          </p>
          <Link
            href="/homes/#floor-plans"
            className="mt-3 inline-block text-base font-medium text-brand-white underline underline-offset-4"
          >
            {hero.floorPlanCta}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
