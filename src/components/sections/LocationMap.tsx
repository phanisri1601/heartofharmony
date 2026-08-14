"use client";

import { motion } from "framer-motion";
import { locationSection } from "@/data/project";
import { SectionHeading } from "@/components/common/SectionHeading";

export function LocationMap() {
  return (
    <section id="location-map" className="scroll-mt-24 bg-brand-cream py-16 md:py-24">
      <div className="container-page">
        <SectionHeading
          align="center"
          eyebrow={locationSection.eyebrow}
          heading={locationSection.heading}
          accent={locationSection.headingAccent}
          className="mx-auto max-w-2xl"
        />
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-brand-gray">
          {locationSection.intro}
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2 md:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-2xl border border-brand-border bg-brand-white"
          >
            <iframe
              title="Heart of Harmony location map"
              src="https://www.google.com/maps?q=Hosur+Main+Road,+Kudlu+Gate,+Bengaluru+560068&output=embed"
              className="aspect-[4/3] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          <div>
            <ul className="divide-y divide-brand-border/70">
              {locationSection.distances.map((d) => (
                <li key={d.label} className="flex items-center justify-between gap-3 py-2.5 text-sm">
                  <span className="text-brand-dark">{d.label}</span>
                  <span className="shrink-0 text-brand-gray">{d.value}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {locationSection.features.map((f) => (
                <div key={f.title} className="rounded-lg border border-brand-border bg-brand-white p-3">
                  <p className="text-xs font-medium uppercase tracking-wide text-brand-primary">
                    {f.title}
                  </p>
                  <p className="mt-1 text-sm text-brand-dark">{f.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl bg-brand-dark p-5 text-brand-white">
              <p className="font-serif text-lg">{locationSection.cityHeading}</p>
              <p className="mt-2 text-sm text-brand-white/75">{locationSection.cityBody}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
