"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projectStats, projectGlance } from "@/data/homepage";
import { SectionHeading } from "@/components/common/SectionHeading";

export function ProjectGlance() {
  const [main, ...rest] = projectGlance.features;

  return (
    <section className="bg-brand-offwhite py-16 md:py-24">
      <div className="container-page">
        <div className="grid grid-cols-2 gap-6 border-b border-brand-border pb-10 md:grid-cols-4">
          {projectStats.map((s) => (
            <div key={s.label}>
              <p className="font-serif text-2xl text-brand-dark md:text-3xl">{s.value}</p>
              <p className="mt-1 text-sm text-brand-gray">{s.label}</p>
            </div>
          ))}
        </div>

        <SectionHeading
          align="center"
          eyebrow={projectGlance.eyebrow}
          heading={projectGlance.heading}
          accent={projectGlance.headingAccent}
          className="mx-auto mt-12 max-w-xl"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-[1.4fr_1fr_1fr]"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl sm:aspect-auto sm:row-span-2">
            <Image
              src={main.image}
              alt={main.title}
              fill
              sizes="(min-width: 640px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 text-brand-white">
              <p className="font-serif text-lg">{main.title}</p>
              <p className="mt-1 text-xs text-brand-white/80">{main.body}</p>
            </div>
          </div>
          {rest.map((f) => (
            <div key={f.title} className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src={f.image}
                alt={f.title}
                fill
                sizes="(min-width: 640px) 25vw, 100vw"
                className="object-cover"
              />
            </div>
          ))}
        </motion.div>

        <div className="mt-10 text-center">
          <Link
            href="/project/"
            className="inline-block rounded-full bg-brand-dark px-6 py-3 text-sm font-medium text-brand-white transition hover:opacity-90"
          >
            {projectGlance.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
