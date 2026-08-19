"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { triadOfDelight } from "@/data/homepage";
import { SectionHeading } from "@/components/common/SectionHeading";
import { HighwayAccessIcon, MetroAccessIcon, LifestyleAccessIcon } from "@/components/icons/AddressIcons";

/**
 * wave-lines.png's own 3 high points sit at x-fractions 2.24% / 50% / 97.6%
 * of the file (pixel-traced), and its topmost point (the "peak" each icon
 * should sit on) is ~7-10px into its 182px height, i.e. ~4% from the top.
 * Our 3 icon columns sit at 14.7% / 50% / 85.3% of the row's width (traced
 * from actual rendered icon centers). Solving icon_fraction = a * image_x +
 * b for those two data points gives a≈0.74, b≈13%: render the image at 74%
 * of the row's width, centered (13%/13% side margins), so its left/middle/
 * right high points land under Highway/Metro/Lifestyle respectively — then
 * nudge it up by ~4% of its own (scaled) height so those high points sit
 * level with the icons' vertical center instead of above them.
 */

const icons: Record<string, (props: { className?: string }) => React.JSX.Element> = {
  highway: HighwayAccessIcon,
  metro: MetroAccessIcon,
  lifestyle: LifestyleAccessIcon,
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

        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-10 hidden w-[74%] -translate-x-1/2 -translate-y-[4%] sm:block"
          >
            <Image src="/downloads/wave-lines.png" alt="" width={981} height={182} className="h-auto w-full" />
          </div>

          <div className="relative grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-10 lg:gap-[70px]">
            {triadOfDelight.items.map((item, i) => {
              const Icon = icons[item.icon];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="relative mx-auto h-20 w-20">
                    {/* Pin decoration renders first so normal DOM paint
                        order puts it behind the icon circle — a negative
                        z-index here would sink it below the section's own
                        background instead, since none of the ancestors
                        establish their own stacking context. It overflows
                        this h-20 box (its own bottom edge lands at 130px,
                        50px past the box's 80px), so the title below needs
                        enough margin-top to clear that, not just the icon. */}
                    <Image
                      src="/downloads/pointer-vector.svg"
                      alt=""
                      aria-hidden="true"
                      width={20}
                      height={42}
                      className="absolute left-1/2 top-[67px] -translate-x-1/2 translate-y-1/2"
                    />
                    <Icon className="relative h-20 w-20" />
                  </div>
                  {/* mt-16 (64px) clears the pointer's overflow (ends 50px
                      below this box) with a small gap, instead of the old
                      mt-7 which put the title 22px into the pointer. */}
                  <h3 className="mt-16 font-sans text-xl font-medium text-brand-dark">{item.title}</h3>
                  <p className="mx-auto mt-2 max-w-[220px] text-base leading-relaxed text-brand-gray">{item.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
