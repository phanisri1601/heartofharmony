import Image from "next/image";
import Link from "next/link";
import {
  footerPagesColumn,
  footerQuickLinksColumn,
  footerContact,
  footerDisclaimer,
  footerRera,
  footerBrandBlurb,
  footerBuilderBlurb,
} from "@/data/navigation";
import { PhoneIcon, MailIcon, PinIcon, socialLinks } from "@/components/icons/ContactIcons";

export function SiteFooter() {
  return (
    <footer className="bg-brand-dark text-brand-white">
      {/* Brand row — logo lockup + tagline, CKPC lockup + tagline */}
      <div className="border-b border-white/10">
        <div className="container-page grid grid-cols-1 items-center gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
          <Image
            src="/images/brand/heart-of-harmony-logo.svg"
            alt="Heart of Harmony by CKPC Properties"
            width={201}
            height={80}
            className="h-16 w-auto"
          />
          <p className="text-sm leading-relaxed text-brand-border">{footerBrandBlurb}</p>

          <a href="https://www.ckpcproperties.com/" target="_blank" rel="noreferrer" className="w-fit">
            <Image
              src="/images/brand/ckpc-logo.png"
              alt="CKPC Properties — builder of Heart of Harmony, Bengaluru"
              width={160}
              height={50}
              className="h-10 w-auto"
            />
          </a>
          <p className="text-sm leading-relaxed text-brand-border">{footerBuilderBlurb}</p>
        </div>
      </div>

      {/* Link columns */}
      <div className="container-page grid grid-cols-1 gap-10 py-14 sm:grid-cols-3">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-wider text-brand-white/60">Pages</p>
          <ul className="space-y-3 text-sm text-brand-border">
            {footerPagesColumn.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-brand-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-wider text-brand-white/60">Quick links</p>
          <ul className="space-y-3 text-sm text-brand-border">
            {footerQuickLinksColumn.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-brand-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-wider text-brand-white/60">Contact us</p>
          <ul className="space-y-3 text-sm text-brand-border">
            <li>
              <a href={footerContact.phoneHref} className="flex items-center gap-2.5 hover:text-brand-white">
                <PhoneIcon />
                {footerContact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${footerContact.email}`} className="flex items-center gap-2.5 hover:text-brand-white">
                <MailIcon />
                {footerContact.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <PinIcon />
              {footerContact.address}
            </li>
          </ul>

          <div className="mt-5 flex items-center gap-4 text-brand-border">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="hover:text-brand-white"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Disclaimer + RERA */}
      <div className="border-t border-white/10">
        <div className="container-page grid grid-cols-1 gap-8 py-10 md:grid-cols-[1fr_auto_1fr]">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-brand-white/60">Disclaimer</p>
            <p className="text-xs leading-relaxed text-brand-border">{footerDisclaimer}</p>
          </div>

          <div className="hidden w-px bg-white/10 md:block" />

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-brand-white/60">Rera</p>
            <a
              href={footerRera.href}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-brand-border hover:text-brand-white"
            >
              {footerRera.number}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <p className="container-page text-center text-xs text-brand-border">
          © {new Date().getFullYear()} CKPC Heart of Harmony. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
