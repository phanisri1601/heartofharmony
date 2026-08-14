import Image from "next/image";
import { clientLogos } from "@/data/about";
import { SectionHeading } from "@/components/common/SectionHeading";

export function ClientLogos() {
  return (
    <section className="bg-brand-offwhite py-16 md:py-24">
      <div className="container-page">
        <SectionHeading
          align="center"
          eyebrow={clientLogos.eyebrow}
          heading={clientLogos.heading}
          accent={clientLogos.headingAccent}
          className="mx-auto max-w-xl"
        />
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-brand-gray">{clientLogos.body}</p>

        <div className="mt-10 grid grid-cols-2 items-center gap-8 sm:grid-cols-4">
          {clientLogos.logos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0">
              <Image src={logo.src} alt={logo.name} width={140} height={40} className="h-8 w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
