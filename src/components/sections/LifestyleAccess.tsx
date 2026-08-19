"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { lifestyleAccess } from "@/data/homepage";
import { HospitalsIcon, SchoolsIcon, ShoppingIcon, NatureIcon, ItParksIcon } from "@/components/icons/TravelTabIcons";

const tabIcons: Record<string, (props: { className?: string }) => React.JSX.Element> = {
  hospitals: HospitalsIcon,
  schools: SchoolsIcon,
  shopping: ShoppingIcon,
  nature: NatureIcon,
  "it-parks": ItParksIcon,
};

export function LifestyleAccess() {
  const [active, setActive] = useState(lifestyleAccess.categories[0].key);
  const category = lifestyleAccess.categories.find((c) => c.key === active)!;
  const mid = Math.ceil(category.places.length / 2);
  const columns = [category.places.slice(0, mid), category.places.slice(mid)];

  return (
    <section className="bg-brand-offwhite py-16 md:py-24">
      <div className="container-page">
        <h3 className="text-center font-serif text-xl text-brand-dark md:text-2xl">
          {lifestyleAccess.subheading}
          <em className="italic text-brand-primary">{lifestyleAccess.subheadingAccent}</em>
        </h3>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {lifestyleAccess.categories.map((c) => {
            const Icon = tabIcons[c.key];
            const isActive = active === c.key;
            return (
              <button
                key={c.key}
                onClick={() => setActive(c.key)}
                className={`flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "border-brand-primary bg-brand-primary text-brand-white"
                    : "border-brand-border bg-brand-white text-brand-dark hover:border-brand-primary/40"
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? "text-brand-white" : "text-brand-primary"}`} />
                {c.label}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 md:items-start">
          <div>
            <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2">
              {columns.map((col, ci) => (
                <ul key={ci} className="divide-y divide-brand-border/70">
                  {col.map((p) => (
                    <li key={p.name} className="flex items-center justify-between gap-3 py-2.5 text-sm">
                      <span className="text-brand-dark">{p.name}</span>
                      <span className="shrink-0 text-brand-gray">{p.distance}</span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
            <Link
              href="/project/#location-map"
              className="mt-6 inline-block rounded-full bg-brand-dark px-6 py-3 text-sm font-medium text-brand-white transition hover:opacity-90"
            >
              {lifestyleAccess.cta}
            </Link>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
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
                  alt={`${category.label} near Heart of Harmony`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
