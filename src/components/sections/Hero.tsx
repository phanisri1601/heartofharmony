"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { hero } from "@/data/homepage";
import { useEnquiryModal } from "@/components/modals/EnquiryModalProvider";

export function Hero() {
  const { open } = useEnquiryModal();

  return (
    <section className="relative overflow-hidden bg-brand-dark text-brand-white">
      <Image
        src="/images/home/hero-desktop.jpg"
        alt="Heart of Harmony — 3, 3.5 & 4 BHK signature residences, high-rise facade"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/50 to-brand-dark/90" />

      <div className="container-page relative z-10 pb-14 pt-16 md:pt-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl font-serif text-3xl leading-tight sm:text-4xl md:text-5xl"
        >
          {hero.h1} <em className="italic text-brand-white/90">{hero.h1Accent}</em>
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
            className="rounded-full bg-brand-primary px-6 py-3 text-sm font-medium transition hover:opacity-90"
          >
            {hero.cta}
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
          <p className="text-xs leading-relaxed text-brand-white/60">
            <span className="font-semibold text-brand-white/80">{hero.description}</span>
          </p>
          <Link
            href="/homes/#floor-plans"
            className="mt-3 inline-block text-sm font-medium text-brand-white underline underline-offset-4"
          >
            {hero.floorPlanCta}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
