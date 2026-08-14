"use client";

import { motion } from "framer-motion";
import { triadOfDelight } from "@/data/homepage";
import { SectionHeading } from "@/components/common/SectionHeading";

const icons: Record<string, React.ReactNode> = {
  highway: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 17h18M5 17l2-10h10l2 10M9 7v10M15 7v10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  metro: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="5" y="4" width="14" height="13" rx="3" strokeLinejoin="round" />
      <path d="M5 13h14M9 20l-2 2M15 20l2 2M9 9h.01M15 9h.01" strokeLinecap="round" />
    </svg>
  ),
  lifestyle: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 21V9l8-5 8 5v12M4 21h16M9 21v-6h6v6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export function TriadOfDelight() {
  return (
    <section className="bg-brand-offwhite py-16 md:py-24">
      <div className="container-page">
        <SectionHeading
          align="center"
          eyebrow={triadOfDelight.eyebrow}
          heading={triadOfDelight.heading}
          accent={triadOfDelight.headingAccent}
          className="mx-auto max-w-xl"
        />

        <div className="relative mt-16 grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-6">
          <div
            aria-hidden="true"
            className="absolute left-[16.5%] right-[16.5%] top-7 hidden border-t border-dashed border-brand-primary/40 sm:block"
          />
          {triadOfDelight.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative z-10 text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
                {icons[item.icon]}
              </div>
              <h3 className="mt-4 font-serif text-lg text-brand-dark">{item.title}</h3>
              <p className="mx-auto mt-2 max-w-[220px] text-sm text-brand-gray">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
