"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projectAmenities } from "@/data/project";
import { SectionHeading } from "@/components/common/SectionHeading";
import { useEnquiryModal } from "@/components/modals/EnquiryModalProvider";

/** Full amenities breakdown for /lifestyle/#amenities — mirrors the compact
 * preview shown in ProjectAmenitiesSection on /project/#clubhouse, using the
 * same categories from data/project.ts. */
export function LifestyleAmenities() {
  const [active, setActive] = useState(0);
  const { open } = useEnquiryModal();
  const activeCategory = projectAmenities.categories[active];

  return (
    <section id="amenities" className="scroll-mt-24 bg-brand-offwhite py-16 md:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Project Features"
          heading="Amenities at Heart of Harmony, "
          accent="Hosur Road Bengaluru"
        />
        <p className="mt-4 max-w-2xl text-sm text-brand-gray">{projectAmenities.intro}</p>

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
              {projectAmenities.categories.map((c, i) => {
                const isActive = i === active;
                return (
                  <div key={c.key}>
                    <button onClick={() => setActive(i)} className="flex w-full items-center gap-3 py-4 text-left">
                      <span className={`text-sm transition-transform ${isActive ? "rotate-90 text-brand-primary" : "text-brand-gray"}`}>
                        ›
                      </span>
                      <span className={`font-serif text-base ${isActive ? "text-brand-dark" : "text-brand-gray"}`}>
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
                          <ul className="grid grid-cols-1 gap-x-6 gap-y-1.5 pb-4 sm:grid-cols-2">
                            {c.items.map((item) => (
                              <li key={item} className="flex items-start gap-2 text-sm text-brand-gray">
                                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-primary" />
                                {item}
                              </li>
                            ))}
                          </ul>
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
              Enquiry Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
