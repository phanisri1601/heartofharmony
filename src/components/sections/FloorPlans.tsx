"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { floorPlans } from "@/data/homes";
import { SectionHeading } from "@/components/common/SectionHeading";
import { useEnquiryModal } from "@/components/modals/EnquiryModalProvider";

export function FloorPlans() {
  const [active, setActive] = useState(0);
  const { open } = useEnquiryModal();
  const unit = floorPlans.units[active];

  return (
    <section id="floor-plans" className="scroll-mt-24 bg-brand-cream py-16 md:py-24">
      <div className="container-page">
        <SectionHeading
          align="center"
          eyebrow={floorPlans.eyebrow}
          heading={floorPlans.heading}
          accent={floorPlans.headingAccent}
          className="mx-auto max-w-2xl"
        />
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-brand-gray">{floorPlans.intro}</p>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {floorPlans.units.map((u, i) => (
            <button
              key={u.key}
              onClick={() => setActive(i)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                active === i
                  ? "border-brand-primary bg-brand-primary text-brand-white"
                  : "border-brand-border bg-brand-white text-brand-dark hover:border-brand-primary/40"
              }`}
            >
              {u.label}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-md">
          <AnimatePresence mode="wait">
            <motion.div
              key={unit.key}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-2xl border border-brand-border bg-brand-white"
            >
              <div className="relative aspect-[3/4]">
                <Image src={unit.image} alt={`${unit.label} floor plan — Heart of Harmony`} fill sizes="(min-width: 768px) 400px, 90vw" className="object-cover" />
              </div>
              <div className="flex items-center justify-between p-4">
                <p className="font-serif text-base text-brand-dark">{unit.label}</p>
                <button
                  onClick={open}
                  className="rounded-full bg-brand-primary px-4 py-2 text-xs font-medium text-brand-white transition hover:opacity-90"
                >
                  Enquiry Now
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
