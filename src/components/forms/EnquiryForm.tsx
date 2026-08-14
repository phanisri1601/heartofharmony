"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

/**
 * Reproduces the site's single Contact Form 7 lead form (fields: Name, Email
 * Address, Mobile Number, Your Message/Question, consent checkbox). Used both
 * inline on /contact-us/ and inside the Enquiry Now popup modal.
 *
 * Submission is wired to a placeholder /api/enquiry route — swap in the real
 * CRM/email endpoint when the backend is ready.
 */
export function EnquiryForm({ compact = false }: { compact?: boolean }) {
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
    <form onSubmit={handleSubmit} className={compact ? "space-y-3" : "space-y-4"}>
      <div>
        <label htmlFor="your-name" className="sr-only">
          Name
        </label>
        <input
          id="your-name"
          name="your-name"
          type="text"
          placeholder="Name"
          required
          className="w-full rounded-md border border-brand-border bg-brand-white px-4 py-3 text-sm text-brand-dark placeholder:text-brand-gray focus:border-brand-primary focus:outline-none"
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
          className="w-full rounded-md border border-brand-border bg-brand-white px-4 py-3 text-sm text-brand-dark placeholder:text-brand-gray focus:border-brand-primary focus:outline-none"
        />
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
          className="w-full rounded-md border border-brand-border bg-brand-white px-4 py-3 text-sm text-brand-dark placeholder:text-brand-gray focus:border-brand-primary focus:outline-none"
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
          className="w-full rounded-md border border-brand-border bg-brand-white px-4 py-3 text-sm text-brand-dark placeholder:text-brand-gray focus:border-brand-primary focus:outline-none"
        />
      </div>
      <label className="flex items-start gap-2 text-xs text-brand-gray">
        <input
          type="checkbox"
          name="checkbox-accept"
          value="1"
          required
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-brand-border"
        />
        <span>
          I agree to be contacted by CKPC Heart of Harmony regarding this enquiry.
        </span>
      </label>

      {error && <p className="text-xs text-brand-primary">{error}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-md bg-brand-primary px-6 py-3 text-sm font-medium text-brand-white transition hover:opacity-90 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Enquire Now"}
      </button>
    </form>
  );
}
