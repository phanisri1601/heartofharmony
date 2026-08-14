"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projectAmenities } from "@/data/project";
import { SectionHeading } from "@/components/common/SectionHeading";

export function ProjectAmenitiesSection() {
  const [active, setActive] = useState(0);
  const category = projectAmenities.categories[active];

  return (
    <section id="clubhouse" className="scroll-mt-24 bg-brand-offwhite py-16 md:py-24">
      <div className="container-page">
        <SectionHeading
          align="center"
          eyebrow={projectAmenities.eyebrow}
          heading={projectAmenities.heading}
          accent={projectAmenities.headingAccent}
          className="mx-auto max-w-2xl"
        />
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-brand-gray">
          {projectAmenities.intro}
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {projectAmenities.categories.map((c, i) => (
            <button
              key={c.key}
              onClick={() => setActive(i)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                active === i
                  ? "border-brand-primary bg-brand-primary text-brand-white"
                  : "border-brand-border bg-brand-white text-brand-dark hover:border-brand-primary/40"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 md:items-start">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={category.key}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Image
                  src={category.image}
                  alt={category.label}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div>
            <ul className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
              {category.items.map((item) => (
                <li key={item} className="flex items-start gap-2 py-1 text-sm text-brand-dark">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/lifestyle/#amenities"
              className="mt-6 inline-block rounded-full bg-brand-dark px-6 py-3 text-sm font-medium text-brand-white transition hover:opacity-90"
            >
              {projectAmenities.cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
