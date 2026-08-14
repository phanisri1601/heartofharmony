"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { stepIntoHarmony } from "@/data/homepage";
import { SectionHeading } from "@/components/common/SectionHeading";

export function StepIntoHarmony() {
  return (
    <section className="bg-brand-offwhite py-16 md:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow={stepIntoHarmony.eyebrow}
          heading={stepIntoHarmony.heading}
          accent={stepIntoHarmony.headingAccent}
        />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stepIntoHarmony.items.map((item, i) => (
            <motion.div
              key={item.subtitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl"
            >
              <Image
                src={item.image}
                alt={`${item.title} ${item.subtitle}`}
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-brand-white">
                <p className="font-serif text-lg">{item.title}</p>
                <p className="text-xs text-brand-white/70">{item.subtitle}</p>
                <p className="mt-2 text-xs text-brand-white/80">{item.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
