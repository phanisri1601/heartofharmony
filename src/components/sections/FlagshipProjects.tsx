"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { flagshipProjects } from "@/data/about";
import { SectionHeading } from "@/components/common/SectionHeading";

type Tab = (typeof flagshipProjects.tabs)[number];

function ProjectCard({ p }: { p: (typeof flagshipProjects.items)[number] }) {
  const isInternal = p.href.startsWith("/");
  const titleLink = isInternal ? (
    <Link href={p.href} className="inline-block">
      <h3 className="font-serif text-xl text-brand-white md:text-2xl">{p.title}</h3>
    </Link>
  ) : (
    <a href={p.href} target="_blank" rel="noreferrer" className="inline-block">
      <h3 className="font-serif text-xl text-brand-white md:text-2xl">{p.title}</h3>
    </a>
  );

  return (
    <div className="group relative aspect-[7/4] w-full overflow-hidden rounded-2xl bg-brand-dark">
      <Image
        src={p.image}
        alt={p.title}
        fill
        sizes="(min-width: 1024px) 60vw, 90vw"
        className="object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
        {titleLink}
        <p className="mt-1 text-sm text-brand-white/70">{p.location}</p>

        <p className="mt-4 hidden max-w-lg text-sm leading-relaxed text-brand-white/80 md:block">{p.body}</p>

        <div className="mt-5 hidden grid-cols-3 gap-4 border-t border-white/20 pt-4 md:grid">
          <div>
            <p className="text-[11px] uppercase tracking-wide text-brand-white/55">{p.sizeLabel}</p>
            <p className="mt-1 text-sm font-medium text-brand-white">{p.size}</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-wide text-brand-white/55">Project Status</p>
            <p className="mt-1 text-sm font-medium text-brand-white">{p.status}</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-wide text-brand-white/55">Occupants</p>
            <p className="mt-1 truncate text-sm font-medium text-brand-white">{p.clients}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FlagshipProjects() {
  const [activeTab, setActiveTab] = useState<Tab>(flagshipProjects.tabs[0]);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const paginationRef = useRef<HTMLDivElement>(null);

  const items = flagshipProjects.items.filter((p) => p.category === activeTab);

  return (
    <section className="bg-brand-offwhite py-16 md:py-24">
      <div className="container-page">
        <SectionHeading
          align="center"
          eyebrow={flagshipProjects.eyebrow}
          heading={flagshipProjects.heading}
          accent={flagshipProjects.headingAccent}
          className="mx-auto max-w-xl"
        />

        <div className="mt-8 flex items-center justify-center gap-3">
          {flagshipProjects.tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                activeTab === tab
                  ? "bg-brand-dark text-brand-white"
                  : "border border-brand-border text-brand-dark hover:border-brand-primary/40"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-10">
          <Swiper
            key={activeTab}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            loop={items.length > 2}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              0: { slidesPerView: 1.05 },
              640: { slidesPerView: 1.3 },
              1024: { slidesPerView: items.length > 1 ? 1.6 : 1 },
            }}
            onBeforeInit={(swiper: SwiperType) => {
              const nav = swiper.params.navigation;
              if (nav && typeof nav !== "boolean") {
                nav.prevEl = prevRef.current;
                nav.nextEl = nextRef.current;
              }
              const pag = swiper.params.pagination;
              if (pag && typeof pag !== "boolean") {
                pag.el = paginationRef.current;
              }
            }}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            pagination={{ el: paginationRef.current, clickable: true }}
          >
            {items.map((p) => (
              <SwiperSlide key={p.title}>
                <ProjectCard p={p} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mt-8 flex items-center justify-center gap-2">
            <button
              ref={prevRef}
              aria-label="Previous project"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-primary/60 text-brand-primary transition hover:bg-brand-primary hover:text-brand-white"
            >
              ‹
            </button>
            <div
              ref={paginationRef}
              className="!static flex w-auto items-center gap-2 [&_.swiper-pagination-bullet]:h-2 [&_.swiper-pagination-bullet]:w-2 [&_.swiper-pagination-bullet]:rounded-full [&_.swiper-pagination-bullet]:bg-brand-border [&_.swiper-pagination-bullet]:opacity-100 [&_.swiper-pagination-bullet-active]:bg-brand-primary"
            />
            <button
              ref={nextRef}
              aria-label="Next project"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-primary/60 text-brand-primary transition hover:bg-brand-primary hover:text-brand-white"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
