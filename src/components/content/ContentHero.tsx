"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function ContentHero({
  eyebrow,
  title,
  intro,
  image,
  ctaPrimary,
  ctaSecondary,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  image?: string | null;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
}) {
  return (
    <section className="relative overflow-hidden bg-brand-dark text-brand-white">
      {image && (
        <>
          <Image src={image} alt={title} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/85 via-brand-dark/60 to-brand-dark/90" />
        </>
      )}

      <div className="container-page relative z-10 pb-14 pt-10 md:pb-20 md:pt-14">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-xs text-brand-white/60">
          <Link href="/" className="hover:text-brand-white">
            Home
          </Link>
          <span aria-hidden="true">›</span>
          <span className="text-brand-white/85">{eyebrow ?? "Resources"}</span>
        </nav>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl font-serif text-3xl leading-tight sm:text-4xl md:text-5xl"
        >
          {title}
        </motion.h1>

        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 max-w-2xl text-sm leading-relaxed text-brand-white/80 md:text-base"
          >
            {intro}
          </motion.p>
        )}

        {(ctaPrimary || ctaSecondary) && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-7 flex flex-wrap gap-3"
          >
            {ctaPrimary && (
              <Link
                href={ctaPrimary.href}
                className="rounded-full bg-brand-primary px-6 py-3 text-sm font-medium text-brand-white transition hover:opacity-90"
              >
                {ctaPrimary.label}
              </Link>
            )}
            {ctaSecondary && (
              <Link
                href={ctaSecondary.href}
                className="rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-brand-white transition hover:bg-white/10"
              >
                {ctaSecondary.label}
              </Link>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}
