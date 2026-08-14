"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { aboutApproach } from "@/data/about";
import { SectionHeading } from "@/components/common/SectionHeading";

export function AboutApproach() {
  return (
    <section className="bg-brand-offwhite py-16 md:py-24">
      <div className="container-page grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <SectionHeading
            eyebrow={aboutApproach.eyebrow}
            heading={aboutApproach.heading}
            accent={aboutApproach.headingAccent}
          />
          <p className="mt-5 text-sm leading-relaxed text-brand-gray">{aboutApproach.body}</p>
          <Link
            href={aboutApproach.cta.href}
            className="mt-6 inline-block rounded-full bg-brand-dark px-6 py-3 text-sm font-medium text-brand-white transition hover:opacity-90"
          >
            {aboutApproach.cta.label}
          </Link>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative aspect-[4/3] overflow-hidden rounded-2xl"
        >
          <Image
            src={aboutApproach.image}
            alt="CKPC Properties leadership and management team"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
