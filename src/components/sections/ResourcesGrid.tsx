"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { articles } from "@/data/resources";

const PER_PAGE = 9;

export function ResourcesGrid() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(articles.length / PER_PAGE);
  const shown = articles.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const goTo = (p: number) => {
    if (p < 1 || p > totalPages) return;
    setPage(p);
    document.getElementById("resources-grid")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="resources-grid" className="bg-brand-offwhite py-10 md:py-16">
      <div className="container-page">
        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((a, i) => (
            <motion.div
              key={a.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            >
              <Link href={a.href} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={a.image}
                    alt={a.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <h3 className="absolute inset-x-0 bottom-0 p-4 font-serif text-base leading-snug text-brand-white">
                    {a.title}
                  </h3>
                </div>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-brand-dark">
                  Read more
                  <span aria-hidden="true" className="transition group-hover:translate-x-0.5">
                    ›
                  </span>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-14 flex items-center justify-center gap-2">
            <button
              onClick={() => goTo(page - 1)}
              disabled={page === 1}
              aria-label="Previous page"
              className="flex h-8 w-8 items-center justify-center text-brand-dark transition disabled:opacity-30"
            >
              ‹
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => goTo(p)}
                aria-current={page === p ? "page" : undefined}
                className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium transition ${
                  page === p
                    ? "bg-brand-dark text-brand-white"
                    : "border border-brand-border text-brand-dark hover:border-brand-primary/40"
                }`}
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => goTo(page + 1)}
              disabled={page === totalPages}
              aria-label="Next page"
              className="flex h-8 w-8 items-center justify-center text-brand-dark transition disabled:opacity-30"
            >
              ›
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
