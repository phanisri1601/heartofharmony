"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { amenities } from "@/data/homepage";
import { SectionHeading } from "@/components/common/SectionHeading";
import { useEnquiryModal } from "@/components/modals/EnquiryModalProvider";

export function Amenities() {
  const [active, setActive] = useState(0);
  const { open } = useEnquiryModal();
  const activeCategory = amenities.categories[active];

  return (
    <section className="bg-brand-offwhite py-16 md:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow={amenities.eyebrow}
          heading={amenities.heading}
          accent={amenities.headingAccent}
        />

        <div className="mt-10 grid gap-8 md:grid-cols-2 md:items-start">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.key}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Image
                  src={activeCategory.image}
                  alt={activeCategory.label}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div>
            <div className="divide-y divide-brand-border">
              {amenities.categories.map((c, i) => {
                const isActive = i === active;
                return (
                  <div key={c.key}>
                    <button
                      onClick={() => setActive(i)}
                      className="flex w-full items-center gap-3 py-4 text-left"
                    >
                      <span
                        className={`text-sm transition-transform ${
                          isActive ? "rotate-90 text-brand-primary" : "text-brand-gray"
                        }`}
                      >
                        ›
                      </span>
                      <span
                        className={`font-serif text-base ${
                          isActive ? "text-brand-dark" : "text-brand-gray"
                        }`}
                      >
                        {c.label}
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden pl-6"
                        >
                          <p className="pb-4 text-sm text-brand-gray">{c.body}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
            <button
              onClick={open}
              className="mt-6 rounded-full bg-brand-dark px-6 py-3 text-sm font-medium text-brand-white transition hover:opacity-90"
            >
              {amenities.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
