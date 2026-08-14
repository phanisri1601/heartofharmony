"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projectFeatures } from "@/data/project";
import { SectionHeading } from "@/components/common/SectionHeading";

export function ProjectFeaturesAccordion() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-brand-offwhite py-16 md:py-24">
      <div className="container-page max-w-3xl">
        <SectionHeading
          align="center"
          eyebrow={projectFeatures.eyebrow}
          heading={projectFeatures.heading}
          accent={projectFeatures.headingAccent}
          className="mx-auto"
        />

        <div className="mt-10 divide-y divide-brand-border border-y border-brand-border">
          {projectFeatures.items.map((item, i) => {
            const isOpen = active === i;
            return (
              <div key={item.title}>
                <button
                  onClick={() => setActive(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left"
                >
                  <span className="font-serif text-base text-brand-dark">{item.title}</span>
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
                      <p className="pb-4 text-sm text-brand-gray">{item.body}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/heart-of-harmony-brochure/"
            className="inline-block rounded-full bg-brand-primary px-6 py-3 text-sm font-medium text-brand-white transition hover:opacity-90"
          >
            {projectFeatures.brochureCta}
          </Link>
        </div>
      </div>
    </section>
  );
}
