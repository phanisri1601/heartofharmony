"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { stepIntoHarmony } from "@/data/homepage";
import { SectionHeading } from "@/components/common/SectionHeading";

function HarmonyCard({
  item,
  delay,
}: {
  item: (typeof stepIntoHarmony.items)[number];
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      className="group relative aspect-[4/3] overflow-hidden rounded-3xl sm:aspect-auto sm:h-[300px] md:h-[390px]"
    >
      <Image
        src={item.image}
        alt={`${item.title} ${item.subtitle}`}
        fill
        sizes="(min-width: 640px) 30vw, 100vw"
        className="object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 text-brand-white sm:p-8">
        <p className="font-serif text-[28px] leading-tight">
          {item.title} <em className="italic text-brand-white/90">{item.subtitle}</em>
        </p>
        <p className="mt-2 max-w-[90%] text-sm text-brand-white/80">{item.body}</p>
      </div>
    </motion.div>
  );
}

export function StepIntoHarmony() {
  const [row1, row2] = [stepIntoHarmony.items.slice(0, 3), stepIntoHarmony.items.slice(3, 6)];

  return (
    <section className="bg-brand-offwhite py-16 md:py-24">
      <div className="container-page">
        <SectionHeading
          align="center"
          eyebrow={stepIntoHarmony.eyebrow}
          heading={stepIntoHarmony.heading}
          accent={stepIntoHarmony.headingAccent}
          className="mx-auto max-w-xl"
        />

        <div className="mt-10 space-y-4">
          {/* Row 1: large | small | small */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1.85fr_1fr_1fr]">
            {row1.map((item, i) => (
              <HarmonyCard key={item.subtitle} item={item} delay={i * 0.08} />
            ))}
          </div>
          {/* Row 2: small | small | large */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_1fr_1.85fr]">
            {row2.map((item, i) => (
              <HarmonyCard key={item.subtitle} item={item} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
