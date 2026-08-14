"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { primaryNav, headerCta } from "@/data/navigation";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-300 ${
        scrolled ? "bg-brand-offwhite/95 shadow-sm backdrop-blur" : "bg-brand-offwhite/70"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" aria-label="Heart of Harmony" className="shrink-0">
            <Image
              src="/images/brand/header-logo-black.svg"
              alt="Heart of Harmony"
              width={200}
              height={30}
              priority
              className="h-7 w-auto sm:h-8"
            />
          </Link>
          <span className="hidden rounded-full border border-brand-border px-3 py-1 text-[11px] font-medium text-brand-gray sm:inline-block">
            Official Site
          </span>
        </div>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-brand-dark transition hover:text-brand-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href={headerCta.href}
            className="rounded-full bg-brand-primary px-5 py-2.5 text-sm font-medium text-brand-white transition hover:opacity-90"
          >
            {headerCta.label}
          </Link>
        </div>

        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span
            className={`block h-0.5 w-6 bg-brand-dark transition-transform ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span className={`block h-0.5 w-6 bg-brand-dark transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span
            className={`block h-0.5 w-6 bg-brand-dark transition-transform ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {mobileOpen && (
        <nav
          aria-label="Mobile"
          className="border-t border-brand-border bg-brand-offwhite px-6 py-4 lg:hidden"
        >
          <ul className="flex flex-col gap-4">
            {[...primaryNav, headerCta].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-base font-medium text-brand-dark"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
