// Content extracted from the live /about-us/ page.

export const aboutHero = {
  title: "About CKPC Properties",
  titleAccent: "— Developer of Heart of Harmony, Bengaluru",
  intro:
    "CKPC Properties is a Bengaluru-based real estate developer with over 8 million sq ft of Grade A+ commercial and residential spaces delivered. With years of experience across real estate, design, and innovation, CKPC brings the same passion and precision that earned the trust of Fortune 100 companies to every home and community they build.",
  ctaPrimary: { label: "Explore Heart of Harmony", href: "/project/" },
  ctaSecondary: { label: "View Floor Plans & Pricing", href: "/homes/" },
};

export const aboutApproach = {
  eyebrow: "About CKPC",
  heading: "CKPC Properties Approach — ",
  headingAccent: "Residential & Commercial Real Estate, Bengaluru",
  body: "CKPC Properties Pvt. Ltd. is a Bengaluru-based real estate developer that has delivered over 8 million sq ft of Grade A+ commercial and residential spaces. At CKPC, we develop residential and commercial spaces that combine thoughtful planning, strong execution, and well-connected locations. Trusted by global enterprises for their workplaces, we bring the same clarity of design and execution to the homes and communities we create.",
  cta: { label: "Discover Heart of Harmony", href: "/project/" },
  image: "/images/about/home-our-team-ckpc.webp",
};

export const pxPillars = {
  eyebrow: "Pillars of (PX)",
  heading: "We Shape People Experience (PX), ",
  headingAccent: "every day",
  items: [
    { title: "Design", body: "Architecture planned for usability, comfort, and long-term value" },
    { title: "Mobility", body: "Thoughtful access and movement that simplify daily life" },
    { title: "Sustainability", body: "Responsible building that protects resources and future value" },
    { title: "Community", body: "Shared spaces that encourage meaningful interaction" },
    { title: "Governance", body: "Transparency, compliance, and operational discipline" },
    { title: "Wellness", body: "Spaces that support health, balance, and everyday wellbeing" },
    { title: "Technology", body: "Smart systems that enhance efficiency and comfort" },
    { title: "Inclusivity", body: "Environments designed for diverse users and needs" },
  ],
};

export const clientLogos = {
  eyebrow: "Trusted by the Best",
  heading: "Chosen by ",
  headingAccent: "Industry Leaders",
  body: "CKPC Properties' commercial spaces are trusted by Fortune 100 organisations including Tata Consultancy Services (TCS), Siemens, Bosch, Merck, Continental, Rockwell Automation, Syngene and Manipal Hospitals.",
  logos: [
    { name: "Siemens", src: "/images/about/siemens.svg" },
    { name: "Merck", src: "/images/about/merck-logo.svg" },
    { name: "Bosch", src: "/images/about/bosch.svg" },
    { name: "Continental", src: "/images/about/continental.svg" },
    { name: "TCS", src: "/images/about/tcs.svg" },
    { name: "Rockwell", src: "/images/about/rockwell-logo.svg" },
    { name: "Syngene", src: "/images/about/syngene.svg" },
    { name: "Manipal Hospital", src: "/images/about/manipalhospital.svg" },
  ],
};

export const trackRecord = {
  eyebrow: "In Numbers",
  heading: "CKPC Properties Track Record — ",
  headingAccent: "8M Sq Ft Grade A+ Spaces Delivered",
  body: "CKPC Properties has delivered over 8 million sq ft of Grade A+ office spaces in Bengaluru, with a further 5 million sq ft of residential and commercial development under way. Fortune 100 clients including TCS, Siemens, Bosch, and Merck have chosen CKPC for their long-term workplace needs.",
  stats: [
    { value: "8", suffix: "M Sq. Ft.", label: "of Grade A+ office spaces delivered" },
    { value: "5", suffix: "M Sq Ft", label: "of Residential & Commercial spaces under development" },
    { value: "Fortune 100", suffix: "", label: "Clients trust us" },
  ],
  cta: { label: "Read our detailed track record", href: "/built-for-the-long-term-ckpcs-track-record-in-commercial-and-residential-spaces/" },
};

export const flagshipProjects = {
  eyebrow: "Projects",
  heading: "Our Flagship ",
  headingAccent: "Projects",
  tabs: ["Commercial", "Residential"] as const,
  items: [
    {
      category: "Commercial" as const,
      title: "The Origin, 360° Business Park",
      location: "Electronic City",
      body: "The Origin 360° Business Park, Tower 2 is a Grade A+ commercial development developed by CKPC Properties, designed to reimagine the future of modern workplaces.",
      sizeLabel: "Total Area",
      size: "1 Million Sq.Ft.",
      status: "Delivered",
      clients: "Bosch, Merck, Rockwell Automation",
      image: "/images/about/featured-origin-360.jpg",
      href: "https://www.ckpcproperties.com/",
    },
    {
      category: "Commercial" as const,
      title: "Brickell Tower",
      location: "Outer Ring Road",
      body: "Brickell Tower is strategically located on Outer Ring Road, at the core of Bengaluru's technology corridor. Surrounded by global workplaces, upscale residential communities, and vibrant social infrastructure, the development offers exceptional connectivity.",
      sizeLabel: "Total Area",
      size: "0.25 Million Sq.Ft.",
      status: "Ongoing",
      clients: "Multiple Clients",
      image: "/images/about/ckpc-project-brickell.jpg",
      href: "https://www.ckpcproperties.com/",
    },
    {
      category: "Residential" as const,
      title: "Horizon by CKPC Properties",
      location: "Shubh Enclave, Haralur Road",
      body: "CKPC Horizon is a signature residential development by CKPC Properties, designed to elevate contemporary living. The project delivers a refined lifestyle that blends comfort, elegance, and convenience in one of Bengaluru's most sought-after locations.",
      sizeLabel: "Total Area",
      size: "0.05 Million Sq.Ft.",
      status: "Ongoing",
      clients: "Multiple Clients",
      image: "/images/about/ckpc-horizon-featured.jpg",
      href: "https://www.ckpcproperties.com/",
    },
    {
      category: "Residential" as const,
      title: "Heart of Harmony",
      location: "Hosur Main Road, Bengaluru",
      body: "Heart of Harmony by CKPC Properties is a premium 24-storey residential high-rise at Kudlu Gate, Hosur Main Road (NH48), Bengaluru 560068. The project offers 137 exclusive 3 BHK, 3.5 BHK and 4 BHK sky residences with only 6 homes per floor, zero common walls, and 270° panoramic views.",
      sizeLabel: "Signature Residences",
      size: "3, 3.5 & 4 Bed",
      status: "Ongoing",
      clients: "Multiple Clients",
      image: "/images/about/ckpc-heart-of-harmony-homes-3-3-5-4-bed-residences-1.jpg",
      href: "/project/",
    },
    {
      category: "Residential" as const,
      title: "Winds of Change by CKPC Properties",
      location: "Yelahanka",
      body: "CKPC Winds of Change is thoughtfully designed to nurture harmony and connection. The community brings together lush green landscapes, refined amenities, and a close-knit living experience, creating a place where new beginnings take shape.",
      sizeLabel: "Total Area",
      size: "6.72 Lakh Sq.Ft.",
      status: "Ongoing",
      clients: "Multiple Clients",
      image: "/images/about/ckpc-properties-residential-winds-of-change-01.png",
      href: "https://www.ckpcproperties.com/",
    },
  ],
};

export const mdMessage = {
  eyebrow: "Leadership",
  heading: "Message from the ",
  headingAccent: "Managing Director",
  name: "Chirag Purushotam",
  role: "Managing Director & CEO, CKPC Properties",
  body: "Chirag Purushotam is the Managing Director & CEO of CKPC Properties Pvt. Ltd., Bengaluru. Under his leadership, CKPC has delivered over 8 million sq ft of Grade A+ commercial space to Fortune 100 clients and launched Heart of Harmony — the company's flagship premium residential project on Hosur Road.",
  image: "/images/about/chirag-quote.jpg",
};
