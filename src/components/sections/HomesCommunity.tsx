"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { homesCommunity } from "@/data/homes";
import { SectionHeading } from "@/components/common/SectionHeading";

export function HomesCommunity() {
  return (
    <section className="bg-brand-offwhite py-16 md:py-24">
      <div className="container-page grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <SectionHeading
            eyebrow={homesCommunity.eyebrow}
            heading={homesCommunity.heading}
            accent={homesCommunity.headingAccent}
          />
          <div className="mt-5 space-y-3">
            {homesCommunity.paragraphs.map((p, i) => (
              <p key={i} className="text-sm leading-relaxed text-brand-gray">
                {p}
              </p>
            ))}
          </div>
          <Link
            href={homesCommunity.cta.href}
            className="mt-6 inline-block rounded-full bg-brand-dark px-6 py-3 text-sm font-medium text-brand-white transition hover:opacity-90"
          >
            {homesCommunity.cta.label}
          </Link>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-3"
        >
          {homesCommunity.images.map((img) => (
            <div key={img} className="relative aspect-[3/4] overflow-hidden rounded-xl">
              <Image src={img} alt="Residents at Heart of Harmony" fill sizes="25vw" className="object-cover" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
