"use client";

import { motion } from "framer-motion";
import { pxPillars } from "@/data/about";
import { SectionHeading } from "@/components/common/SectionHeading";

export function PxPillars() {
  return (
    <section className="bg-brand-cream py-16 md:py-24">
      <div className="container-page">
        <SectionHeading
          align="center"
          eyebrow={pxPillars.eyebrow}
          heading={pxPillars.heading}
          accent={pxPillars.headingAccent}
          className="mx-auto max-w-xl"
        />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {pxPillars.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
              className="rounded-xl border border-brand-border bg-brand-white p-4"
            >
              <p className="font-serif text-base text-brand-dark">{item.title}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-brand-gray">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
