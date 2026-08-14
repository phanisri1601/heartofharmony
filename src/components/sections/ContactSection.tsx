"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { contactSection } from "@/data/homepage";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire to real backend/CRM endpoint.
    setSubmitted(true);
  }

  return (
    <section id="get-in-touch" className="bg-brand-offwhite py-20 md:py-28">
      <div className="container-page max-w-2xl">
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl bg-brand-cream/60 p-10 text-center"
          >
            <h2 className="font-serif text-3xl text-brand-dark">
              {contactSection.thankYou.heading}
            </h2>
            <p className="mt-3 text-brand-gray">{contactSection.thankYou.body}</p>
            <Link
              href="/"
              className="mt-6 inline-block rounded-md bg-brand-primary px-6 py-3 text-sm font-medium text-brand-white transition hover:opacity-90"
            >
              {contactSection.thankYou.cta}
            </Link>
          </motion.div>
        ) : (
          <>
            <h2 className="font-serif text-3xl text-brand-dark md:text-4xl">
              {contactSection.heading}
            </h2>
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  name="your-name"
                  type="text"
                  placeholder="Name"
                  required
                  className="rounded-md border border-brand-border bg-brand-white px-4 py-3 text-sm placeholder:text-brand-gray focus:border-brand-primary focus:outline-none"
                />
                <input
                  name="your-phone"
                  type="tel"
                  placeholder="Mobile Number"
                  required
                  className="rounded-md border border-brand-border bg-brand-white px-4 py-3 text-sm placeholder:text-brand-gray focus:border-brand-primary focus:outline-none"
                />
              </div>
              <input
                name="your-email"
                type="email"
                placeholder="Email Address"
                required
                className="w-full rounded-md border border-brand-border bg-brand-white px-4 py-3 text-sm placeholder:text-brand-gray focus:border-brand-primary focus:outline-none"
              />

              <select
                name="specifications"
                defaultValue=""
                className="w-full rounded-md border border-brand-border bg-brand-white px-4 py-3 text-sm text-brand-gray focus:border-brand-primary focus:outline-none"
              >
                <option value="" disabled>
                  Specifications
                </option>
                {contactSection.specifications.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>

              <select
                name="purpose"
                defaultValue=""
                className="w-full rounded-md border border-brand-border bg-brand-white px-4 py-3 text-sm text-brand-gray focus:border-brand-primary focus:outline-none"
              >
                <option value="" disabled>
                  Purpose of Purchase
                </option>
                {contactSection.purposeOfPurchase.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>

              <textarea
                name="your-message"
                placeholder="Your Message/Question"
                rows={4}
                className="w-full rounded-md border border-brand-border bg-brand-white px-4 py-3 text-sm placeholder:text-brand-gray focus:border-brand-primary focus:outline-none"
              />

              <label className="flex items-start gap-2 text-xs text-brand-gray">
                <input
                  type="checkbox"
                  name="checkbox-accept"
                  value="1"
                  required
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-brand-border"
                />
                <span>{contactSection.consentText}</span>
              </label>

              <button
                type="submit"
                className="w-full rounded-md bg-brand-primary px-6 py-3 text-sm font-medium text-brand-white transition hover:opacity-90 sm:w-auto"
              >
                Enquire Now
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
}
