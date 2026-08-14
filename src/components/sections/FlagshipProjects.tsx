"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { flagshipProjects } from "@/data/about";
import { SectionHeading } from "@/components/common/SectionHeading";

export function FlagshipProjects() {
  return (
    <section className="bg-brand-offwhite py-16 md:py-24">
      <div className="container-page">
        <SectionHeading
          align="center"
          eyebrow={flagshipProjects.eyebrow}
          heading={flagshipProjects.heading}
          accent={flagshipProjects.headingAccent}
          className="mx-auto max-w-xl"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {flagshipProjects.items.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="overflow-hidden rounded-2xl border border-brand-border bg-brand-white"
            >
              <div className="relative aspect-[4/3]">
                <Image src={p.image} alt={p.title} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                <span className="absolute left-3 top-3 rounded-full bg-brand-white/90 px-3 py-1 text-[11px] font-medium text-brand-dark">
                  {p.status}
                </span>
              </div>
              <div className="p-5">
                <p className="font-serif text-lg text-brand-dark">{p.title}</p>
                <p className="mt-0.5 text-xs text-brand-gray">{p.location}</p>
                <p className="mt-3 text-sm leading-relaxed text-brand-gray">{p.body}</p>
                <div className="mt-4 flex items-center justify-between border-t border-brand-border pt-3 text-xs text-brand-gray">
                  <span>{p.size}</span>
                  <span>{p.clients}</span>
                </div>
                <Link href={p.href} className="mt-4 inline-block text-sm text-brand-primary">
                  Learn more →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
