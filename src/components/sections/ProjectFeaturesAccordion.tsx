"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projectFeatures } from "@/data/project";
import { SectionHeading } from "@/components/common/SectionHeading";

export function ProjectFeaturesAccordion() {
  const [active, setActive] = useState(0);
  const activeItem = projectFeatures.items[active];

  return (
    <section className="bg-brand-offwhite py-16 md:py-24">
      <div className="container-page">
        <SectionHeading
          align="center"
          eyebrow={projectFeatures.eyebrow}
          heading={projectFeatures.heading}
          accent={projectFeatures.headingAccent}
          className="mx-auto max-w-2xl"
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-brand-dark">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.image}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <Image
                  src={activeItem.image}
                  alt={activeItem.title}
                  fill
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div>
            <div className="divide-y divide-brand-border border-y border-brand-border">
              {projectFeatures.items.map((item, i) => {
                const isOpen = active === i;
                return (
                  <div key={item.title}>
                    <button
                      onClick={() => setActive(i)}
                      className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    >
                      <span className="font-serif text-lg text-brand-dark md:text-xl">{item.title}</span>
                      <span className="shrink-0 text-lg text-brand-primary">{isOpen ? "−" : "+"}</span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <p className="pb-5 text-sm leading-relaxed text-brand-gray md:text-base">{item.body}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            <div className="mt-8">
              <Link
                href="/heart-of-harmony-brochure/"
                className="inline-block rounded-full bg-brand-primary px-6 py-3 text-sm font-medium text-brand-white transition hover:opacity-90"
              >
                {projectFeatures.brochureCta}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
