"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { ContentBlock } from "@/types/content";

export function BlockRenderer({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((block, i) => (
        <BlockItem key={i} block={block} />
      ))}
    </div>
  );
}

function BlockItem({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="mt-14 mb-2 font-serif text-2xl text-brand-dark first:mt-0 md:text-3xl">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="mt-8 mb-1 font-serif text-xl text-brand-dark">{block.text}</h3>
      );
    case "h4":
      return (
        <h4 className="mt-6 mb-1 font-serif text-lg text-brand-dark">{block.text}</h4>
      );
    case "p":
      return (
        <p
          className={
            block.lead
              ? "text-base leading-relaxed text-brand-dark/90 md:text-lg"
              : "text-sm leading-relaxed text-brand-gray md:text-[15px]"
          }
        >
          {block.text}
        </p>
      );
    case "list":
      return block.ordered ? (
        <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed text-brand-gray marker:text-brand-primary marker:font-medium">
          {block.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ol>
      ) : (
        <ul className="space-y-2">
          {block.items.map((it, i) => (
            <li key={i} className="flex items-start gap-2 text-sm leading-relaxed text-brand-gray">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-primary" />
              {it}
            </li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div className="overflow-x-auto rounded-lg border border-brand-border">
          <table className="w-full border-collapse text-left text-sm">
            {block.headers.length > 0 && (
              <thead>
                <tr className="bg-brand-cream/60">
                  {block.headers.map((h, i) => (
                    <th key={i} className="px-4 py-3 font-serif font-medium text-brand-dark">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody className="divide-y divide-brand-border">
              {block.rows.map((row, ri) => (
                <tr key={ri} className={ri % 2 === 1 ? "bg-brand-offwhite" : undefined}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-4 py-3 text-brand-gray">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "cards":
      return (
        <div className="grid gap-4 sm:grid-cols-2">
          {block.items.map((c, i) => (
            <div key={i} className="rounded-xl border border-brand-border bg-brand-white p-5">
              <div className="flex items-start justify-between gap-3">
                <p className="font-serif text-base text-brand-dark">{c.title}</p>
                {c.tag && (
                  <span className="shrink-0 rounded-full bg-brand-primary/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-brand-primary">
                    {c.tag}
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-brand-gray">{c.body}</p>
            </div>
          ))}
        </div>
      );
    case "amenity-columns":
      return (
        <div className="grid gap-6 sm:grid-cols-2">
          {block.columns.map((col, i) => (
            <div key={i}>
              <p className="mb-3 font-serif text-base text-brand-dark">{col.heading}</p>
              <ul className="space-y-2">
                {col.items.map((it, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-brand-gray">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-primary" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    case "project-box":
      return (
        <div className="rounded-2xl border border-brand-border bg-brand-cream/40 p-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="font-serif text-lg text-brand-dark">{block.title}</p>
              <p className="mt-1 text-sm text-brand-gray">{block.address}</p>
            </div>
            {block.badge && (
              <span className="rounded-full bg-brand-primary px-3 py-1 text-xs font-medium text-brand-white">
                {block.badge}
              </span>
            )}
          </div>
          {block.configs.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {block.configs.map((c, i) => (
                <span
                  key={i}
                  className="rounded-full border border-brand-border bg-brand-white px-3 py-1.5 text-xs font-medium text-brand-dark"
                >
                  {c}
                </span>
              ))}
            </div>
          )}
          {block.specs.length > 0 && (
            <dl className="mt-5 grid grid-cols-1 gap-x-6 gap-y-2 border-t border-brand-border pt-4 sm:grid-cols-2">
              {block.specs.map(([k, v], i) => (
                <div key={i} className="flex items-baseline justify-between gap-3 text-sm">
                  <dt className="text-brand-gray">{k}</dt>
                  <dd className="text-right font-medium text-brand-dark">{v}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      );
    case "testimonials":
      return (
        <div className="grid gap-4 sm:grid-cols-2">
          {block.items.map((t, i) => (
            <div key={i} className="rounded-xl border border-brand-border bg-brand-white p-5">
              <div className="text-brand-accent" aria-hidden="true">
                {"★★★★★"}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-brand-gray">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-primary/10 text-xs font-medium text-brand-primary">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div>
                  <p className="text-sm font-medium text-brand-dark">{t.name}</p>
                  <p className="text-xs text-brand-gray">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    case "rating":
      return (
        <div className="flex items-baseline gap-3">
          <span className="font-serif text-3xl text-brand-dark">{block.value}</span>
          <span className="text-sm text-brand-gray">{block.meta}</span>
        </div>
      );
    case "faq":
      return <InlineFaqAccordion items={block.items} />;
    default:
      return null;
  }
}

function InlineFaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-brand-border border-y border-brand-border">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
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
                  <p className="pb-4 text-sm leading-relaxed text-brand-gray">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
