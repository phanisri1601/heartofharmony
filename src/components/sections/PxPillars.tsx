"use client";

import { motion } from "framer-motion";
import { pxPillars } from "@/data/about";
import { SectionHeading } from "@/components/common/SectionHeading";
import { pxIconByTitle } from "@/components/icons/PxIcons";

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
        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {pxPillars.items.map((item, i) => {
            const Icon = pxIconByTitle[item.title];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
                className="rounded-3xl border border-brand-dark/10 p-[22px]"
              >
                {Icon && <Icon className="h-8 w-8 text-brand-primary" />}
                {/* break-words is the real fix — "Sustainability" and
                    "Inclusivity" are single unbreakable words that overflow
                    the ~110px-wide mobile card at 28px with no way to wrap;
                    the smaller mobile size just makes the forced break less
                    ugly. */}
                <p className="mt-4 break-words font-serif text-xl leading-tight text-brand-dark sm:text-[28px]">
                  {item.title}
                </p>
                <p className="mt-2 text-base leading-[1.3] text-brand-gray">{item.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
