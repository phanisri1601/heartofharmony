"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { contactSection } from "@/data/homepage";
import { footerContact } from "@/data/navigation";
import { PhoneIcon, MailIcon } from "@/components/icons/ContactIcons";

// Borderless fields with just a bottom underline — matches the reference
// UI (structure/spacing only, not its copy or colors): thin light line,
// soft muted placeholder text, no boxes.
const fieldClass =
  "w-full border-0 border-b border-brand-border bg-transparent px-0 py-3 text-base text-brand-dark placeholder:text-brand-gray focus:border-brand-primary focus:outline-none";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  // Native <select> always renders its currently-selected option's text in
  // the select's own color (there's no `placeholder:` pseudo-class for it
  // like inputs get), so without tracking the value the "Specifications" /
  // "Purpose of Purchase" placeholders would render full-dark instead of
  // matching the other fields' muted placeholder look.
  const [specifications, setSpecifications] = useState("");
  const [purpose, setPurpose] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire to real backend/CRM endpoint.
    setSubmitted(true);
  }

  return (
    <section id="get-in-touch" className="bg-brand-offwhite py-20 md:py-28">
      <div className="container-page">
        <div className="rounded-[32px] border border-brand-border bg-brand-white px-8 py-12 md:px-14 md:py-16">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-10 text-center"
            >
              <h2 className="font-serif text-3xl text-brand-dark">{contactSection.thankYou.heading}</h2>
              <p className="mt-3 text-brand-gray">{contactSection.thankYou.body}</p>
              <Link
                href="/"
                className="mt-6 inline-block rounded-full bg-brand-primary px-6 py-3 text-sm font-medium text-brand-white transition hover:opacity-90"
              >
                {contactSection.thankYou.cta}
              </Link>
            </motion.div>
          ) : (
            <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
              {/* Left: eyebrow, heading, intro, quick contact details —
                  vertically centered against the taller form column. */}
              <div>
                <span className="text-sm font-semibold text-brand-primary">{contactSection.eyebrow}</span>
                <h2 className="mt-4 font-serif text-4xl leading-tight text-brand-dark md:text-5xl">
                  {contactSection.heading}
                </h2>
                <p className="mt-6 max-w-md text-sm leading-relaxed text-brand-gray md:text-base">
                  {contactSection.intro}
                </p>

                <div className="mt-8 space-y-3 border-t border-brand-border pt-6 text-sm text-brand-dark">
                  <a href={footerContact.phoneHref} className="flex items-center gap-2.5 hover:text-brand-primary">
                    <PhoneIcon />
                    {footerContact.phone}
                  </a>
                  <a
                    href={`mailto:${footerContact.email}`}
                    className="flex items-center gap-2.5 hover:text-brand-primary"
                  >
                    <MailIcon />
                    {footerContact.email}
                  </a>
                </div>
              </div>

              {/* Right: borderless underline form */}
              <form onSubmit={handleSubmit} className="space-y-7">
                <input name="your-name" type="text" placeholder="Your Name" required className={fieldClass} />
                <input name="your-email" type="email" placeholder="Your Email ID" required className={fieldClass} />
                <input
                  name="your-phone"
                  type="tel"
                  placeholder="Contact Number"
                  required
                  className={fieldClass}
                />

                <select
                  name="specifications"
                  value={specifications}
                  onChange={(e) => setSpecifications(e.target.value)}
                  className={`${fieldClass} appearance-none ${specifications ? "" : "text-brand-gray"}`}
                >
                  <option value="" disabled className="bg-brand-white text-brand-gray">
                    Specifications
                  </option>
                  {contactSection.specifications.map((s) => (
                    <option key={s} value={s} className="bg-brand-white text-brand-dark">
                      {s}
                    </option>
                  ))}
                </select>

                <select
                  name="purpose"
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  className={`${fieldClass} appearance-none ${purpose ? "" : "text-brand-gray"}`}
                >
                  <option value="" disabled className="bg-brand-white text-brand-gray">
                    Purpose of Purchase
                  </option>
                  {contactSection.purposeOfPurchase.map((s) => (
                    <option key={s} value={s} className="bg-brand-white text-brand-dark">
                      {s}
                    </option>
                  ))}
                </select>

                <label className="flex items-start gap-2.5 pt-2 text-xs leading-relaxed text-brand-gray">
                  <input
                    type="checkbox"
                    name="checkbox-accept"
                    value="1"
                    required
                    className="mt-0.5 h-4 w-4 shrink-0 rounded border-brand-border bg-transparent accent-brand-primary"
                  />
                  <span>{contactSection.consentText}</span>
                </label>

                <button
                  type="submit"
                  className="mt-2 inline-block rounded-full bg-brand-primary px-8 py-3 text-sm font-medium text-brand-white transition hover:opacity-90"
                >
                  Book for a callback
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
