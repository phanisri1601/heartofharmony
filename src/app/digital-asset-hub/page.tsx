import type { Metadata } from "next";
import Image from "next/image";
import { digitalAssetHub } from "@/data/digitalAssetHub";
import { VideoButton } from "@/components/digital-asset-hub/VideoButton";

export const metadata: Metadata = {
  title: "Digital Asset Hub",
  description:
    "Videos, image galleries, ready-to-use creatives, brochures, masterplan and floor plans for Heart of Harmony by CKPC.",
  alternates: { canonical: "/digital-asset-hub/" },
};

function ArrowUpRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
      <path
        d="M12.5003 4V10.5C12.5004 10.5989 12.4711 10.6957 12.4161 10.778C12.3612 10.8603 12.2831 10.9244 12.1917 10.9623C12.1003 11.0002 11.9997 11.0101 11.9026 10.9908C11.8056 10.9714 11.7165 10.9238 11.6465 10.8538L8.75028 7.95687L4.35403 12.3538C4.26021 12.4476 4.13296 12.5003 4.00028 12.5003C3.8676 12.5003 3.74035 12.4476 3.64653 12.3538C3.55271 12.2599 3.5 12.1327 3.5 12C3.5 11.8673 3.55271 11.7401 3.64653 11.6462L8.0434 7.25L5.14653 4.35375C5.07652 4.28382 5.02884 4.1947 5.00951 4.09765C4.99019 4.00061 5.00009 3.90002 5.03797 3.80861C5.07584 3.71719 5.13999 3.63908 5.22229 3.58414C5.30458 3.5292 5.40133 3.49992 5.50028 3.5H12.0003C12.1329 3.5 12.2601 3.55268 12.3538 3.64645C12.4476 3.74022 12.5003 3.86739 12.5003 4Z"
        fill="currentColor"
      />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
      <path
        d="M4.64625 5.35375C4.55243 5.25993 4.49972 5.13268 4.49972 5C4.49972 4.86732 4.55243 4.74007 4.64625 4.64625C4.74007 4.55243 4.86732 4.49972 5 4.49972C5.13268 4.49972 5.25993 4.55243 5.35375 4.64625L7.5 6.79313V1.5C7.5 1.36739 7.55268 1.24021 7.64645 1.14645C7.74021 1.05268 7.86739 1 8 1C8.13261 1 8.25979 1.05268 8.35355 1.14645C8.44732 1.24021 8.5 1.36739 8.5 1.5V6.79313L10.6462 4.64625C10.7401 4.55243 10.8673 4.49972 11 4.49972C11.1327 4.49972 11.2599 4.55243 11.3538 4.64625C11.4476 4.74007 11.5003 4.86732 11.5003 5C11.5003 5.13268 11.4476 5.25993 11.3538 5.35375L8.35375 8.35375C8.30731 8.40024 8.25217 8.43712 8.19147 8.46228C8.13077 8.48744 8.06571 8.50039 8 8.50039C7.93429 8.50039 7.86923 8.48744 7.80853 8.46228C7.74783 8.43712 7.69269 8.40024 7.64625 8.35375L4.64625 5.35375ZM15 8.5V12.5C15 12.7652 14.8946 13.0196 14.7071 13.2071C14.5196 13.3946 14.2652 13.5 14 13.5H2C1.73478 13.5 1.48043 13.3946 1.29289 13.2071C1.10536 13.0196 1 12.7652 1 12.5V8.5C1 8.23478 1.10536 7.98043 1.29289 7.79289C1.48043 7.60536 1.73478 7.5 2 7.5H5.275C5.30784 7.49997 5.34036 7.50642 5.37071 7.51897C5.40106 7.53151 5.42864 7.54992 5.45188 7.57312L6.9375 9.0625C7.07686 9.20234 7.24244 9.3133 7.42477 9.389C7.6071 9.46471 7.80258 9.50368 8 9.50368C8.19742 9.50368 8.3929 9.46471 8.57523 9.389C8.75756 9.3133 8.92314 9.20234 9.0625 9.0625L10.55 7.575C10.5962 7.5279 10.6591 7.50094 10.725 7.5H14C14.2652 7.5 14.5196 7.60536 14.7071 7.79289C14.8946 7.98043 15 8.23478 15 8.5ZM12.5 10.5C12.5 10.3517 12.456 10.2067 12.3736 10.0833C12.2912 9.95999 12.1741 9.86386 12.037 9.80709C11.9 9.75033 11.7492 9.73547 11.6037 9.76441C11.4582 9.79335 11.3246 9.86478 11.2197 9.96967C11.1148 10.0746 11.0434 10.2082 11.0144 10.3537C10.9855 10.4992 11.0003 10.65 11.0571 10.787C11.1139 10.9241 11.21 11.0412 11.3333 11.1236C11.4567 11.206 11.6017 11.25 11.75 11.25C11.9489 11.25 12.1397 11.171 12.2803 11.0303C12.421 10.8897 12.5 10.6989 12.5 10.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** The site's small uppercase "line — LABEL — line" divider, matching
 * live's `.sub-headings` pattern 1:1 (64px terracotta lines either side,
 * 2.8px letter-spacing) — plus a white variant for use on the dark
 * pricing card and footer. */
function SectionLabel({ children, variant = "brand" }: { children: string; variant?: "brand" | "white" }) {
  const lineColor = variant === "white" ? "bg-white" : "bg-brand-primary";
  const textColor = variant === "white" ? "text-white" : "text-brand-primary";
  return (
    <div className="flex items-center justify-center gap-3">
      <span className={`h-[1.5px] w-16 ${lineColor}`} />
      <span className={`text-sm font-semibold uppercase tracking-[2.8px] ${textColor}`}>{children}</span>
      <span className={`h-[1.5px] w-16 ${lineColor}`} />
    </div>
  );
}

/** Shared photo card for the Videos/Images sections — background photo,
 * center radial vignette, centered title/body text, and a slot for the
 * pill action button (VideoButton client component, or a plain download
 * link) so this stays a server component. */
function MediaCard({
  image,
  body,
  action,
}: {
  image: string;
  body: string;
  action: React.ReactNode;
}) {
  return (
    <div className="relative aspect-[588/320] overflow-hidden rounded-3xl">
      <Image src={image} alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(20,20,20,0.6)_0%,rgba(20,20,20,0)_100%)]" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-8 text-center">
        <p className="max-w-sm text-sm text-brand-white md:text-base">{body}</p>
        {action}
      </div>
    </div>
  );
}

export default function DigitalAssetHubPage() {
  const { hero, videos, images, creativeAssets, documents, pricing, disclaimer } = digitalAssetHub;

  return (
    <>
      {/* This is a standalone press-kit page, mirroring live's own header
          (two logos, no site nav) and its own disclaimer footer — it does
          not use SiteHeader/SiteFooter, same as /landing-page/. */}
      <header className="bg-brand-white">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-8 md:px-10">
          <Image
            src="/images/digital-asset-hub/header-logo-hoh.svg"
            alt="Heart of Harmony by CKPC Properties"
            width={201}
            height={80}
            priority
            className="h-14 w-auto md:h-20"
          />
          <Image
            src="/images/digital-asset-hub/header-logo-ckpc.png"
            alt="CKPC Properties"
            width={130}
            height={126}
            className="h-16 w-auto md:h-[126px]"
          />
        </div>
      </header>

      <section className="bg-brand-white py-10 md:py-16">
        <div className="mx-auto max-w-[1200px] px-6 text-center md:px-10">
          <h1 className="font-serif text-4xl leading-tight text-brand-dark md:text-6xl md:leading-[1.1]">
            {hero.line1}
            <br />
            <em className="italic text-brand-primary">{hero.accent}</em>
          </h1>
        </div>
      </section>

      <section className="bg-[#f4f4f4] py-12 md:py-16">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <SectionLabel>{videos.label}</SectionLabel>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {videos.items.map((v) => (
              <MediaCard
                key={v.title}
                image={v.image}
                body={v.body}
                action={<VideoButton label={v.title} videoSrc={v.videoSrc} />}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-white py-12 md:py-16">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <SectionLabel>{images.label}</SectionLabel>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {images.items.map((v, i) => (
              <MediaCard
                key={`${v.title}-${i}`}
                image={v.image}
                body={v.body}
                action={
                  <a
                    href={v.href}
                    className="inline-flex items-center gap-2 rounded-full bg-brand-offwhite px-5 py-2.5 text-base font-medium text-brand-dark transition hover:opacity-90"
                  >
                    {v.title}
                    <ArrowUpRightIcon />
                  </a>
                }
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-white pb-12 md:pb-16">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <SectionLabel>{creativeAssets.label}</SectionLabel>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {creativeAssets.items.map((c) => (
              <MediaCard
                key={c.title}
                image={c.image}
                body={c.body}
                action={
                  <a
                    href={c.href}
                    className="inline-flex items-center gap-2 rounded-full bg-brand-offwhite px-5 py-2.5 text-base font-medium text-brand-dark transition hover:opacity-90"
                  >
                    {c.title}
                    <ArrowUpRightIcon />
                  </a>
                }
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f4f4] py-12 md:py-16">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <SectionLabel>{documents.label}</SectionLabel>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {documents.items.map((d) => (
              <a
                key={d.label}
                href={d.href}
                className="flex flex-col overflow-hidden rounded-2xl border border-brand-dark/20 bg-brand-white transition hover:border-brand-primary/40"
              >
                <div className="relative aspect-[280/160] w-full">
                  <Image src={d.image} alt="" fill sizes="280px" className="object-cover" />
                </div>
                <div className="flex items-center justify-center gap-2 border-t border-brand-dark/20 px-4 py-4 text-sm font-medium text-brand-dark">
                  {d.label}
                  <DownloadIcon />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-white py-12 md:py-16">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="relative flex flex-col items-center gap-5 overflow-hidden rounded-[32px] px-8 py-14 text-center md:py-16">
            <Image
              src={pricing.image}
              alt=""
              fill
              sizes="(min-width: 768px) 1200px, 100vw"
              className="object-cover"
            />
            {/* Matches live's exact scrim: a solid black tint over the
                photo (0.6 alpha, 0.85 opacity ≈ #262626 composited) rather
                than a flat gray card. */}
            <div className="absolute inset-0 bg-black/60 opacity-85" />
            <div className="relative flex flex-col items-center gap-5">
              <SectionLabel variant="white">{pricing.label}</SectionLabel>
              <h2 className="max-w-2xl font-serif text-3xl leading-tight text-brand-white md:text-4xl">
                {pricing.heading}
              </h2>
              <a
                href={pricing.href}
                className="mt-2 inline-flex items-center gap-2 rounded-full bg-brand-white px-5 py-2.5 text-base font-medium text-brand-dark transition hover:opacity-90"
              >
                {pricing.cta}
                <DownloadIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-brand-dark py-10">
        <div className="mx-auto max-w-[1200px] px-6 text-center md:px-10">
          <p className="text-sm font-semibold uppercase tracking-[2.8px] text-brand-white">{disclaimer.label}</p>
          <p className="mx-auto mt-4 max-w-3xl text-xs leading-relaxed text-white/50">{disclaimer.body}</p>
          <p className="mt-3 text-xs text-white/50">{disclaimer.rera}</p>
        </div>
      </footer>
    </>
  );
}
