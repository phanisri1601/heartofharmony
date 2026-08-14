"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { mdMessage } from "@/data/about";
import { SectionHeading } from "@/components/common/SectionHeading";

export function MdMessage() {
  return (
    <section className="bg-brand-cream py-16 md:py-24">
      <div className="container-page grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative aspect-[4/5] overflow-hidden rounded-2xl"
        >
          <Image src={mdMessage.image} alt={mdMessage.name} fill sizes="(min-width: 768px) 35vw, 100vw" className="object-cover" />
        </motion.div>
        <div>
          <SectionHeading eyebrow={mdMessage.eyebrow} heading={mdMessage.heading} accent={mdMessage.headingAccent} />
          <p className="mt-5 text-sm leading-relaxed text-brand-gray">{mdMessage.body}</p>
          <div className="mt-6">
            <p className="font-serif text-lg text-brand-dark">{mdMessage.name}</p>
            <p className="text-sm text-brand-gray">{mdMessage.role}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
