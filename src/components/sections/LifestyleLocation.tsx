"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { lifestyleLocation } from "@/data/lifestyle";
import { SectionHeading } from "@/components/common/SectionHeading";
import { HouseIcon, ConnectIcon } from "@/components/icons/LocationIcons";

const icons = { house: HouseIcon, connect: ConnectIcon };

export function LifestyleLocation() {
  return (
    <section className="bg-brand-offwhite py-16 md:py-24">
      <div className="container-page">
        <div className="grid gap-10 md:grid-cols-[530fr_638fr] md:gap-10">
          <div>
            <SectionHeading
              eyebrow={lifestyleLocation.eyebrow}
              heading={lifestyleLocation.heading}
              accent={lifestyleLocation.headingAccent}
            />
            <p className="mt-5 font-serif text-xl leading-snug text-brand-dark md:text-2xl">
              {lifestyleLocation.intro}
            </p>

            <div className="mt-8 space-y-8">
              {lifestyleLocation.blocks.map((block) => (
                <div key={block.title}>
                  <h3 className="font-serif text-lg text-brand-dark">{block.title}</h3>
                  <div className="mt-3 space-y-3">
                    {block.points.map((point, i) => {
                      const Icon = icons[point.icon];
                      return (
                        <div key={i} className="flex items-start gap-3">
                          <Icon className="mt-1 h-4 w-4 shrink-0 text-brand-primary" />
                          <p className="text-sm leading-relaxed text-brand-gray">{point.text}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <Link
              href={lifestyleLocation.cta.href}
              className="mt-8 inline-block rounded-full bg-brand-dark px-5 py-2.5 text-sm font-medium text-brand-white transition hover:opacity-90"
            >
              {lifestyleLocation.cta.label}
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 1.02 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="relative hidden min-h-[500px] overflow-hidden rounded-2xl md:block"
          >
            <Image
              src={lifestyleLocation.image}
              alt="Heart of Harmony connectivity to Koramangala, HSR Layout and Silk Board"
              fill
              sizes="(min-width: 768px) 55vw, 100vw"
              className="object-cover transition duration-500 hover:scale-105"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
