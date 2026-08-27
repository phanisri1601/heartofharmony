import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { contactDirections, contactCards, contactMapSrc } from "@/data/contact";
import { PinIcon, PhoneIcon, MailIcon, socialLinks } from "@/components/icons/ContactIcons";

/** Small terracotta divider under each card heading — matches live's
 * elementor-divider line exactly (64px wide, 1px, brand-primary). */
function CardDivider() {
  return <div className="mt-2 h-px w-16 bg-brand-primary" />;
}

function CardHeading({ title, accent }: { title: string; accent: string }) {
  return (
    <h3 className="font-serif text-2xl text-brand-dark">
      {title} <em className="italic text-brand-primary">{accent}</em>
    </h3>
  );
}

export function ContactInfoForm() {
  return (
    <section id="get-in-touch" className="bg-brand-offwhite py-16 md:py-24">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left: map + directions */}
          <div>
            <div className="aspect-[571/520] overflow-hidden rounded-2xl">
              <iframe
                title="Heart of Harmony experience centre location"
                src={contactMapSrc}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="mt-6 text-sm leading-relaxed text-brand-gray">{contactDirections}</p>
          </div>

          {/* Right: enquiry form, borderless underline style matching live */}
          <div>
            <EnquiryForm variant="underline" />
          </div>
        </div>

        {/* 3 info cards */}
        <div className="mt-16 flex flex-col gap-6 sm:flex-row">
          <div className="flex-1 rounded-2xl border border-brand-dark/10 p-6">
            <CardHeading title={contactCards.visit.title} accent={contactCards.visit.accent} />
            <CardDivider />
            <div className="mt-4 flex items-start gap-2.5 text-sm text-brand-gray">
              <PinIcon />
              <span>{contactCards.visit.address}</span>
            </div>
          </div>

          <div className="flex-1 rounded-2xl border border-brand-dark/10 p-6">
            <CardHeading title={contactCards.reach.title} accent={contactCards.reach.accent} />
            <CardDivider />
            <div className="mt-4 space-y-2 text-sm text-brand-gray">
              <a
                href={contactCards.reach.phoneHref}
                className="flex items-center gap-2.5 hover:text-brand-dark"
              >
                <PhoneIcon />
                {contactCards.reach.phone}
              </a>
              <a
                href={`mailto:${contactCards.reach.email}`}
                className="flex items-center gap-2.5 hover:text-brand-dark"
              >
                <MailIcon />
                {contactCards.reach.email}
              </a>
            </div>
          </div>

          <div className="flex-1 rounded-2xl border border-brand-dark/10 p-6">
            <CardHeading title={contactCards.connect.title} accent={contactCards.connect.accent} />
            <CardDivider />
            <div className="mt-4 flex items-center gap-4 text-brand-dark">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="hover:text-brand-primary">
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
