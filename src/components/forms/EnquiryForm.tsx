"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

/**
 * Reproduces the site's single Contact Form 7 lead form (fields: Name,
 * Mobile Number, Email Address, Your Message/Question, consent checkbox —
 * in that order, matching live). Used both inline on /contact-us/ and
 * inside the Enquiry Now popup modal.
 *
 * `variant="underline"` reproduces /contact-us/'s exact live styling —
 * borderless, bottom-underline-only fields with no card, no labels, no
 * wrapper — as opposed to the boxed/bordered fields the popup modal uses.
 *
 * Submission is wired to a placeholder /api/enquiry route — swap in the real
 * CRM/email endpoint when the backend is ready.
 */
export function EnquiryForm({
  compact = false,
  variant = "boxed",
}: {
  compact?: boolean;
  variant?: "boxed" | "underline";
}) {
  const underline = variant === "underline";
  const fieldClass = underline
    ? "w-full border-0 border-b border-brand-dark/10 bg-transparent px-0 py-3.5 text-base text-brand-dark placeholder:text-brand-gray focus:border-brand-primary focus:outline-none"
    : "w-full rounded-md border border-brand-border bg-brand-white px-4 py-3 text-sm text-brand-dark placeholder:text-brand-gray focus:border-brand-primary focus:outline-none";
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    if (!data.get("checkbox-accept")) {
      setStatus("error");
      setError("Please accept the consent checkbox to continue.");
      return;
    }

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(data)),
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again or call us directly.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg bg-brand-cream/60 p-6 text-center">
        <p className="font-serif text-lg text-brand-dark">Thank you!</p>
        <p className="mt-1 text-sm text-brand-gray">
          Your enquiry has been received. Our team will get in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={compact ? "space-y-3" : underline ? "space-y-0" : "space-y-4"}>
      <div>
        <label htmlFor="your-name" className="sr-only">
          Name
        </label>
        <input id="your-name" name="your-name" type="text" placeholder="Name" required className={fieldClass} />
      </div>
      <div>
        <label htmlFor="your-phone" className="sr-only">
          Mobile Number
        </label>
        <input
          id="your-phone"
          name="your-phone"
          type="tel"
          placeholder="Mobile Number"
          required
          className={fieldClass}
        />
      </div>
      <div>
        <label htmlFor="your-email" className="sr-only">
          Email Address
        </label>
        <input
          id="your-email"
          name="your-email"
          type="email"
          placeholder="Email Address"
          required
          className={fieldClass}
        />
      </div>
      <div>
        <label htmlFor="your-message" className="sr-only">
          Your Message/Question
        </label>
        <textarea
          id="your-message"
          name="your-message"
          placeholder="Your Message/Question"
          rows={compact ? 3 : 4}
          className={fieldClass}
        />
      </div>

      <label
        className={
          underline
            ? "flex items-start gap-2.5 pt-6 text-xs leading-relaxed text-brand-gray"
            : "flex items-start gap-2 text-xs text-brand-gray"
        }
      >
        <input
          type="checkbox"
          name="checkbox-accept"
          value="1"
          required
          className={
            underline
              ? "mt-0.5 h-4 w-4 shrink-0 rounded-[6px] border border-brand-dark accent-brand-dark"
              : "mt-0.5 h-4 w-4 shrink-0 rounded border-brand-border"
          }
        />
        <span>
          {underline
            ? "I authorise CKPC Properties and its representatives to contact me with updates and notifications via Email, SMS, WhatsApp, or Call. This consent overrides any registration under DND/NDNC."
            : "I agree to be contacted by CKPC Heart of Harmony regarding this enquiry."}
        </span>
      </label>

      {error && <p className="text-xs text-brand-primary">{error}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className={
          underline
            ? "mt-6 inline-block rounded-full bg-brand-dark px-4 py-2 text-base font-medium text-brand-white transition hover:opacity-90 disabled:opacity-60"
            : "w-full rounded-md bg-brand-primary px-6 py-3 text-sm font-medium text-brand-white transition hover:opacity-90 disabled:opacity-60"
        }
      >
        {status === "submitting" ? "Sending…" : underline ? "Submit" : "Enquire Now"}
      </button>
    </form>
  );
}
