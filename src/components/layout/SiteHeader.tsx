"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { primaryNav, headerCta } from "@/data/navigation";
import { useIsHeaderOnDark } from "@/components/layout/HeaderThemeContext";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const onDark = useIsHeaderOnDark();
  // Once scrolled, always render the readable (opaque, dark-text) variant
  // regardless of what's behind it — matches the live site's header staying
  // transparent only while it overlaps the hero banner.
  const light = onDark && !scrolled;

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
      className={`fixed top-0 z-40 w-full transition-colors duration-300 ${
        scrolled ? "bg-brand-offwhite/95 shadow-sm backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <div className="flex items-center gap-[26px]">
          <Link href="/" aria-label="Heart of Harmony" className="shrink-0">
            <Image
              src={light ? "/images/brand/header-logo.svg" : "/images/brand/header-logo-black.svg"}
              alt="Heart of Harmony"
              width={325}
              height={48}
              priority
              className="h-[26px] w-[176px] sm:h-[38px] sm:w-[260px] lg:h-[51.7px] lg:w-[350px]"
            />
          </Link>
          <span
            className={`hidden rounded-full border px-2 py-1 text-sm tracking-[-0.48px] sm:inline-block ${
              light ? "border-white/90 bg-white/[0.04] text-white" : "border-brand-dark bg-white/[0.04] text-brand-dark"
            }`}
          >
            Official Site
          </span>
        </div>

        <nav aria-label="Primary" className="hidden items-center lg:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 py-[11.5px] text-sm font-medium tracking-[-0.28px] transition hover:text-brand-primary ${
                light ? "text-white" : "text-brand-dark"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href={headerCta.href}
            className={`rounded-full border py-3 pl-3.5 pr-8 text-base font-medium tracking-[-0.32px] transition ${
              light
                ? "border-white text-white hover:bg-white/10"
                : "border-brand-dark text-brand-dark hover:bg-brand-dark/5"
            }`}
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
            className={`block h-0.5 w-6 transition-transform ${light ? "bg-white" : "bg-brand-dark"} ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 transition-opacity ${light ? "bg-white" : "bg-brand-dark"} ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 transition-transform ${light ? "bg-white" : "bg-brand-dark"} ${
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
