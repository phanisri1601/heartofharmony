"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { lifestyleAmenities } from "@/data/lifestyle";
import { SectionHeading } from "@/components/common/SectionHeading";
import { useEnquiryModal } from "@/components/modals/EnquiryModalProvider";

/** Full Outdoor / Clubhouse amenities breakdown for /lifestyle/#amenities —
 * mirrors the live site's layout: a full-width category photo, pill tabs,
 * and the amenity list as bordered chips. */
export function LifestyleAmenities() {
  const [active, setActive] = useState(0);
  const { open } = useEnquiryModal();
  const category = lifestyleAmenities.categories[active];

  return (
    <section id="amenities" className="scroll-mt-24 bg-brand-offwhite py-16 md:py-24">
      <div className="container-page">
        <SectionHeading
          align="center"
          heading={lifestyleAmenities.heading}
          accent={lifestyleAmenities.headingAccent}
          className="mx-auto max-w-2xl"
        />
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-brand-gray md:text-base">
          {lifestyleAmenities.intro}
        </p>

        <div className="relative mt-10 aspect-[15/8] overflow-hidden rounded-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={category.key}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <Image
                src={category.image}
                alt={category.label}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {lifestyleAmenities.categories.map((c, i) => (
            <button
              key={c.key}
              onClick={() => setActive(i)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                active === i
                  ? "border-brand-primary bg-brand-primary text-brand-white"
                  : "border-brand-border bg-brand-white text-brand-dark hover:border-brand-primary/40"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2.5">
          {category.items.map((item) => (
            <span key={item} className="rounded-lg border border-brand-dark/10 px-3.5 py-3 text-sm text-brand-dark">
              {item}
            </span>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={open}
            className="rounded-full bg-brand-dark px-6 py-3 text-sm font-medium text-brand-white transition hover:opacity-90"
          >
            {lifestyleAmenities.cta}
          </button>
        </div>
      </div>
    </section>
  );
}
