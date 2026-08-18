"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { clubhouseHighlights } from "@/data/lifestyle";
import { SectionHeading } from "@/components/common/SectionHeading";

export function ClubhouseHighlights() {
  return (
    <section className="bg-brand-cream py-16 md:py-24">
      <div className="container-page">
        <SectionHeading
          align="center"
          eyebrow={clubhouseHighlights.eyebrow}
          heading={clubhouseHighlights.heading}
          accent={clubhouseHighlights.headingAccent}
          className="mx-auto max-w-xl"
        />
        <p className="mx-auto mt-4 max-w-xl text-center text-sm text-brand-gray">{clubhouseHighlights.intro}</p>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {clubhouseHighlights.columns.map((column, ci) => (
            <div key={ci} className="flex flex-col gap-6">
              {column.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: ci * 0.08 + i * 0.05 }}
                  className={`group relative overflow-hidden rounded-2xl ${card.tall ? "aspect-[384/480]" : "aspect-[384/280]"}`}
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                  <h3 className="absolute inset-x-0 bottom-0 px-6 py-6 font-serif text-2xl leading-snug text-brand-white">
                    {card.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
