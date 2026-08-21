"use client";

import { useState, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projectStats, projectGlance } from "@/data/homepage";
import { SectionHeading } from "@/components/common/SectionHeading";

export function ProjectGlance() {
  // Accordion hover: whichever card is hovered grows to the "large" share
  // (2.52, matching the first card's default ratio) and the rest settle to
  // 1 each; with nothing hovered, card 0 stays large by default (the
  // original large/small/small layout). Only the width (flex-grow) is
  // animated — height, radius, image fit, and text/overlay are untouched,
  // and it's gated to the sm: breakpoint since flex-grow would fight the
  // fixed-height column stack on mobile.
  const [hovered, setHovered] = useState<number | null>(null);

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
          className="mx-auto mt-12 max-w-3xl sm:[&_h2]:whitespace-nowrap"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          {projectGlance.features.map((f, i) => {
            const grow = hovered === null ? (i === 0 ? 2.52 : 1) : hovered === i ? 2.52 : 1;
            return (
              <div
                key={f.title}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{ "--grow": grow } as CSSProperties}
                className="relative aspect-[4/3] overflow-hidden rounded-3xl transition-[flex-grow] duration-500 ease-out sm:aspect-auto sm:h-[420px] sm:min-w-0 sm:basis-0 sm:[flex-grow:var(--grow)] md:h-[512px]"
              >
                <Image
                  src={f.image}
                  alt={f.title}
                  fill
                  sizes="(min-width: 640px) 40vw, 100vw"
                  className="object-cover"
                />
                {/* Live's card uses a corner gradient (252deg — dark toward
                    the bottom-left where the text sits, transparent toward
                    the top-right), not a plain bottom-up fade. */}
                <div className="absolute inset-0 bg-gradient-to-bl from-transparent to-black/85" />
                <div className="absolute inset-x-0 bottom-0 flex flex-col p-6 pb-10 text-brand-white sm:p-10">
                  <p className="font-serif text-[28px] leading-tight">{f.title}</p>
                  <p className="mt-2 max-w-[85%] text-base text-brand-white/90">{f.body}</p>
                </div>
              </div>
            );
          })}
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
