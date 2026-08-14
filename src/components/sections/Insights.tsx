"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/common/SectionHeading";

export type InsightItem = { title: string; href: string; image: string };

export function Insights({
  eyebrow,
  heading,
  accent,
  cta = "Discover More",
  ctaHref = "/resources/",
  items,
}: {
  eyebrow: string;
  heading: string;
  accent: string;
  cta?: string;
  ctaHref?: string;
  items: InsightItem[];
}) {
  return (
    <section className="bg-brand-offwhite py-16 md:py-24">
      <div className="container-page">
        <SectionHeading
          align="center"
          eyebrow={eyebrow}
          heading={heading}
          accent={accent}
          className="mx-auto max-w-xl"
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link href={item.href} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 font-serif text-base leading-snug text-brand-dark group-hover:text-brand-primary">
                  {item.title}
                </h3>
                <span className="mt-2 inline-block text-sm text-brand-primary">Read more →</span>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href={ctaHref}
            className="inline-block rounded-full bg-brand-dark px-6 py-3 text-sm font-medium text-brand-white transition hover:opacity-90"
          >
            {cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
