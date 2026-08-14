"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeading } from "@/components/common/SectionHeading";
import { useEnquiryModal } from "@/components/modals/EnquiryModalProvider";

export type FaqItem = { q: string; a: string };

export function Faq({
  heading,
  accent,
  items,
  ctaText = "Ready to know more? Enquire about pricing and availability",
  defaultOpenIndex = 1,
}: {
  heading: string;
  accent: string;
  items: FaqItem[];
  ctaText?: string;
  defaultOpenIndex?: number;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);
  const { open } = useEnquiryModal();

  return (
    <section className="bg-brand-offwhite py-16 md:py-24">
      <div className="container-page max-w-3xl">
        <SectionHeading
          align="center"
          eyebrow="FAQ's"
          heading={heading}
          accent={accent}
          className="mx-auto"
        />

        <div className="mt-10 divide-y divide-brand-border border-y border-brand-border">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-medium text-brand-dark">{item.q}</span>
                  <span className="shrink-0 text-lg text-brand-primary">{isOpen ? "−" : "+"}</span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-4 text-xs text-brand-gray">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <button onClick={open} className="text-sm text-brand-dark underline underline-offset-4">
            {ctaText}
          </button>
        </div>
      </div>
    </section>
  );
}
