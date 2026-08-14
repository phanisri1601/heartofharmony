# CKPC Heart of Harmony — Complete URL Inventory

Source of truth for the WordPress → Next.js migration. Generated from a full recursive crawl
of https://www.ckpcheartofharmony.com/ (36 fetched URLs → 31 unique content pages after
removing pagination views and de-duping).

Legend: **Template** = reusable Next.js page template this route will use.

## A. Core site pages (8) — unique layouts, one template each

| # | Path | Title (from `<title>`) | Template |
|---|------|------|----------|
| 1 | `/` | CKPC Heart of Harmony – 3, 3.5 & 4 BHK Apartments, Kudlu Gate | Home |
| 2 | `/about-us/` | About Us | About |
| 3 | `/project/` | Project (overview, clubhouse #clubhouse, location map #location-map) | Project |
| 4 | `/homes/` | Homes (floor plans #floor-plans) | Homes |
| 5 | `/lifestyle/` | Lifestyle (amenities #amenities) | Lifestyle |
| 6 | `/resources/` | Resources (paginated archive of the 9 articles in section C) | ResourceArchive |
| 7 | `/contact-us/` | Contact Us | Contact |
| 8 | `/privacy-policy/` | Privacy Policy | Legal |

Pagination views `/resources/?e-page-e158a7c=2` and `=3` are the same archive page, not
separate routes — reproduced as in-page pagination on `/resources/`.

## B. SEO / keyword landing pages (14) — share one template, unique hero + copy per page

All target the same property from different buyer-intent search terms. Same section order as
the homepage/project pages but a different H1, intro copy, and meta title/description per page.

| # | Path | Focus keyword |
|---|------|------|
| 9 | `/heart-of-harmony-location/` | location |
| 10 | `/heart-of-harmony-price/` | price |
| 11 | `/heart-of-harmony-brochure/` | brochure download |
| 12 | `/heart-of-harmony-master-plan/` | master plan |
| 13 | `/ckpc-heart-of-harmony-review/` | reviews |
| 14 | `/premium-3-bhk-4-bhk-near-hsr-layout-kudlu-gate/` | HSR Layout proximity |
| 15 | `/3-bhk-apartments-kudlu-gate-hosur-road/` | 3BHK Kudlu Gate |
| 16 | `/4-bhk-apartments-kudlu-gate-hosur-road/` | 4BHK Hosur Road |
| 17 | `/luxury-apartments-hosur-road-bengaluru-2026/` | luxury Hosur Road |
| 18 | `/3-bhk-flats-kudlu-gate-locality-guide-2026/` | locality guide |
| 19 | `/3-bhk-3-5-bhk-4-bhk-buyers-guide-kudlu-gate/` | buyer's guide |
| 20 | `/3-bhk-4-bhk-apartments-for-sale-kudlu-gate-bengaluru.html` | Kudlu Gate for-sale (legacy `.html` route — canonical tag on this page is broken/points to a 404; kept as-is since that's the real working URL) |
| 21 | `/luxury-3-bhk-4-bhk-apartments-for-sale-near-silk-board-bengaluru.html` | Silk Board proximity (legacy `.html` route) |
| 22 | `/premium-3-bhk-4-bhk-flats-near-hsr-layout-bengaluru.html` | HSR Layout premium (legacy `.html` route) |

## C. Article / resource pages (9) — children of `/resources/`, share one template

| # | Path |
|---|------|
| 23 | `/built-for-the-long-term-ckpcs-track-record-in-commercial-and-residential-spaces/` |
| 24 | `/ckpc-properties-new-launch-hosur-road-heart-of-harmony/` |
| 25 | `/ckpc-secures-long-term-tcs-office-lease/` |
| 26 | `/exclusive-look-clubhouses-and-recreational-amenities-at-heart-of-harmony/` |
| 27 | `/private-gardens-on-every-three-floors-10-things-you-can-do-in-your-private-gardens/` |
| 28 | `/smart-layouts-at-heart-of-harmony-designed-for-the-way-you-live/` |
| 29 | `/the-thinking-behind-px-designing-spaces-around-people-experience/` |
| 30 | `/what-is-the-triad-of-delight-location-that-works-on-every-front/` |
| 31 | `/why-kudlu-gate-is-bengalurus-next-residential-growth-corridor/` |

## Sitewide components (present on every page)

- **Header/nav**: logo, primary nav (Home, Project, Homes, Lifestyle, About Us, Resources,
  Contact Us), sticky on scroll, mobile hamburger menu.
- **Footer**: nav links, RERA/legal text, social links, copyright.
- **Lead form** (Contact Form 7, fields: Name, Email Address, Mobile Number,
  Your Message/Question, consent checkbox) — appears two ways:
  - Inline, embedded at the bottom of `/contact-us/`.
  - As a **Popup Maker modal** ("Enquiry Now" style CTA), triggered from buttons across the
    homepage and landing pages (6 trigger instances found on the homepage alone).
- **Brochure/download CTA** on `/heart-of-harmony-brochure/` and homes/project pages.

## Design tokens found in the live CSS (to carry into Tailwind config)

- Fonts (Google Fonts, loaded site-wide): **Fraunces** (serif — display/heading), **Albert
  Sans** (sans — body/UI/nav), Onest (loaded, minor/secondary use).
- Color tokens (Elementor global palette):
  - `#8e3628` — primary brand (terracotta/brick)
  - `#141414` / `#111111` — near-black text
  - `#e5e2cf` — warm cream/beige (section backgrounds)
  - `#fcfcfc` / `#ffffff` — off-white / white
  - `#ffc912` — accent yellow
  - `#4b4f58` / `#D1D5DB` — secondary text / borders

## Assets already downloaded (reuse, do not re-fetch)

`site-assets/www.ckpcheartofharmony.com/` — 349 files, ~47MB: 155 jpg, 43 webp, 14 png,
12 svg, 66 css, 26 js, 33 saved HTML pages (used here as the content/markup source of truth).
