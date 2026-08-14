import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { contactDirections, contactCards } from "@/data/contact";

export function ContactInfoForm() {
  return (
    <section id="get-in-touch" className="bg-brand-offwhite py-16 md:py-24">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1fr]">
        <div>
          <p className="text-sm leading-relaxed text-brand-gray">{contactDirections}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {contactCards.map((c) => (
              <div key={c.title} className="rounded-xl border border-brand-border bg-brand-white p-5">
                <p className="font-serif text-base text-brand-dark">{c.title}</p>
                <div className="mt-2 space-y-1">
                  {c.lines.map((line) => (
                    <p key={line} className="text-sm text-brand-gray">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-brand-border">
            <iframe
              title="Heart of Harmony experience centre location"
              src="https://www.google.com/maps?q=Hosur+Main+Road,+Kudlu+Gate,+Bengaluru+560068&output=embed"
              className="aspect-[4/3] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="rounded-2xl border border-brand-border bg-brand-white p-6 sm:p-8">
          <h2 className="font-serif text-2xl text-brand-dark">Get in touch</h2>
          <p className="mt-1 text-sm text-brand-gray">Share your details and our team will get back to you.</p>
          <div className="mt-6">
            <EnquiryForm />
          </div>
          <p className="mt-4 text-xs leading-relaxed text-brand-gray">
            I authorise CKPC Properties and its representatives to contact me with updates and
            notifications via Email, SMS, WhatsApp, or Call. This consent overrides any registration
            under DND/NDNC.
          </p>
        </div>
      </div>
    </section>
  );
}
