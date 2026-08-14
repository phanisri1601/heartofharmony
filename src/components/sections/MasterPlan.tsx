"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { masterPlan } from "@/data/project";
import { SectionHeading } from "@/components/common/SectionHeading";

export function MasterPlan() {
  return (
    <section className="bg-brand-cream py-16 md:py-24">
      <div className="container-page">
        <SectionHeading
          align="center"
          eyebrow={masterPlan.eyebrow}
          heading={masterPlan.heading}
          accent={masterPlan.headingAccent}
          className="mx-auto max-w-xl"
        />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {masterPlan.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative aspect-[4/3] overflow-hidden rounded-xl"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
              <p className="absolute inset-x-0 bottom-0 p-4 font-serif text-sm text-brand-white">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href={masterPlan.ctaSecondary.href}
            className="rounded-full border border-brand-dark/20 px-6 py-3 text-sm font-medium text-brand-dark transition hover:bg-brand-dark hover:text-brand-white"
          >
            {masterPlan.ctaSecondary.label}
          </Link>
          <Link
            href={masterPlan.ctaPrimary.href}
            className="rounded-full bg-brand-primary px-6 py-3 text-sm font-medium text-brand-white transition hover:opacity-90"
          >
            {masterPlan.ctaPrimary.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
