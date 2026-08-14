"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { trackRecord } from "@/data/about";
import { SectionHeading } from "@/components/common/SectionHeading";

export function TrackRecord() {
  return (
    <section className="bg-brand-dark py-16 text-brand-white md:py-24">
      <div className="container-page">
        <SectionHeading
          align="center"
          eyebrow={trackRecord.eyebrow}
          heading={trackRecord.heading}
          accent={trackRecord.headingAccent}
          className="mx-auto max-w-2xl [&_h2]:text-brand-white [&_span]:bg-white/10 [&_div]:bg-white/40"
        />
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-brand-white/70">{trackRecord.body}</p>

        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-3">
          {trackRecord.stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="font-serif text-4xl">
                {s.value}
                {s.suffix && <span className="ml-1 text-lg text-brand-white/70">{s.suffix}</span>}
              </p>
              <p className="mt-2 text-sm text-brand-white/70">{s.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href={trackRecord.cta.href}
            className="inline-block rounded-full bg-brand-primary px-6 py-3 text-sm font-medium text-brand-white transition hover:opacity-90"
          >
            {trackRecord.cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
