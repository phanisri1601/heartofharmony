"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { clubhouseHighlights } from "@/data/lifestyle";
import { SectionHeading } from "@/components/common/SectionHeading";

export function ClubhouseHighlights() {
  return (
    <section className="bg-brand-cream py-16 md:py-24">
      <div className="container-page grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <SectionHeading
            eyebrow={clubhouseHighlights.eyebrow}
            heading={clubhouseHighlights.heading}
            accent={clubhouseHighlights.headingAccent}
          />
          <p className="mt-4 text-sm text-brand-gray">{clubhouseHighlights.intro}</p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {clubhouseHighlights.items.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-lg border border-brand-border bg-brand-white px-3 py-2.5 text-sm text-brand-dark"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src="/images/lifestyle/ckpc-heart-of-harmony-homes-project-lifestyle-amenities-clubhouse-1.jpg"
            alt="Heart of Harmony rooftop clubhouse"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
