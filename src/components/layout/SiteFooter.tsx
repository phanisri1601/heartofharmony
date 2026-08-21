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

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4 shrink-0">
      <path
        d="M6.6 10.8c1.2 2.4 3.2 4.4 5.6 5.6l1.9-1.9c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V19c0 .6-.4 1-1 1C10.9 20 4 13.1 4 4.6c0-.6.4-1 1-1h3.1c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8Z"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4 shrink-0">
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
      <path d="m4.5 7 7.5 6 7.5-6" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="mt-0.5 h-4 w-4 shrink-0">
      <path d="M12 21s7-6.3 7-11.5A7 7 0 0 0 5 9.5C5 14.7 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.3" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-[18px] w-[18px]">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
      <path d="M6.94 8.5H3.9V20h3.04V8.5ZM5.42 3.5a1.77 1.77 0 1 0 0 3.53 1.77 1.77 0 0 0 0-3.53ZM20.1 20h-3.03v-5.6c0-1.34-.03-3.05-1.86-3.05-1.87 0-2.16 1.46-2.16 2.96V20H10.03V8.5h2.91v1.57h.04c.4-.77 1.4-1.58 2.88-1.58 3.08 0 3.65 2.03 3.65 4.67V20Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
      <path d="M13.9 21v-7.6h2.55l.38-2.96h-2.93V8.55c0-.86.24-1.44 1.47-1.44h1.57V4.46c-.27-.04-1.2-.12-2.28-.12-2.26 0-3.8 1.38-3.8 3.9v2.18H8.4v2.96h2.46V21h3.04Z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-[18px] w-[18px]">
      <rect x="3" y="6.5" width="18" height="11" rx="3" />
      <path d="M10.5 9.5v5l4.3-2.5-4.3-2.5Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/ckpc_properties/", icon: InstagramIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/ckpc-properties/", icon: LinkedInIcon },
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/CKPC-Properties/61573434770842/",
    icon: FacebookIcon,
  },
  { label: "YouTube", href: "https://www.youtube.com/@CKPCProperties/videos", icon: YoutubeIcon },
];

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
