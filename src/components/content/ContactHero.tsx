"use client";

import { motion } from "framer-motion";

/**
 * Light, centered hero for /contact-us/ — matches live exactly: it is NOT
 * the dark full-bleed photo banner the other interior pages use (Contact Us
 * has no hero photo at all on live), it's the same light/centered pattern
 * as ResourcesHero — eyebrow pill, serif H1 with an italic accent line,
 * centered intro paragraph.
 */
export function ContactHero({
  eyebrow,
  title,
  accent,
  intro,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  intro: string;
}) {
  return (
    <section className="bg-brand-offwhite pb-8 pt-14 md:pt-20">
      <div className="container-page flex flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block rounded-full bg-brand-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-brand-primary"
        >
          {eyebrow}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-5 max-w-3xl font-serif text-4xl leading-tight text-brand-dark sm:text-5xl"
        >
          {title}
          <br className="hidden sm:block" /> <em className="italic text-brand-primary">{accent}</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="mt-6 max-w-3xl text-sm leading-relaxed text-brand-gray md:text-base"
        >
          {intro}
        </motion.p>

        <div className="mt-10 h-px w-16 bg-brand-border" />
      </div>
    </section>
  );
}
