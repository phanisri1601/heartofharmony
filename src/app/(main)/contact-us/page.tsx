import type { Metadata } from "next";
import { ContentHero } from "@/components/content/ContentHero";
import { ContactInfoForm } from "@/components/sections/ContactInfoForm";
import { Faq } from "@/components/sections/Faq";
import { contactHero, contactFaq } from "@/data/contact";

export const metadata: Metadata = {
  title: "Contact Us — Book a Site Visit",
  description:
    "Enquire about 3, 3.5 & 4 BHK apartments at Heart of Harmony, Hosur Road Bengaluru. Call +91 76499 99586 or visit our experience centre at Kudlu Gate. Mon–Sun 9am–6pm.",
  alternates: { canonical: "/contact-us/" },
  openGraph: {
    title: "Contact Heart of Harmony by CKPC — Book a Site Visit | Hosur Road Bengaluru",
    description:
      "Enquire about 3, 3.5 & 4 BHK apartments at Heart of Harmony, Hosur Road Bengaluru. Call +91 76499 99586 or visit our experience centre.",
    url: "/contact-us/",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <ContentHero title={contactHero.h1} intro={contactHero.intro} />
      <ContactInfoForm />
      <Faq heading={contactFaq.heading} accent={contactFaq.headingAccent} items={contactFaq.items} />
    </>
  );
}
