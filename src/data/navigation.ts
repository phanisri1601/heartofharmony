export type NavLink = {
  label: string;
  href: string;
};

// Primary header nav — extracted from the live site's #ast-hf-menu-1
export const primaryNav: NavLink[] = [
  { label: "Project", href: "/project/" },
  { label: "Lifestyle", href: "/lifestyle/" },
  { label: "Homes", href: "/homes/" },
  { label: "About Us", href: "/about-us/" },
  { label: "Resources", href: "/resources/" },
];

export const headerCta: NavLink = { label: "Contact Us", href: "/contact-us/" };

// Footer columns — extracted from the live site's footer widget areas
export const footerPagesColumn: NavLink[] = [
  { label: "Project", href: "/project/" },
  { label: "Lifestyle", href: "/lifestyle/" },
  { label: "Homes", href: "/homes/" },
  { label: "About", href: "/about-us/" },
  { label: "Resources", href: "/resources/" },
];

export const footerQuickLinksColumn: NavLink[] = [
  { label: "Location", href: "/project/#location-map" },
  { label: "Amenities", href: "/lifestyle/#amenities" },
  { label: "Floor plans", href: "/homes/#floor-plans" },
  { label: "The Clubhouse", href: "/project/#clubhouse" },
  { label: "Contact Us", href: "/contact-us/" },
  { label: "Privacy policy", href: "/privacy-policy/" },
  { label: "Heart of Harmony Brochure", href: "/contact-us/" },
];

export const footerContact = {
  phone: "+91 76499 99586",
  phoneHref: "tel:+917649999586",
  email: "sales@ckpcproperties.com",
  address: "Heart of Harmony, Hosur Main Road, Bengaluru - 560 068",
};

export const footerDisclaimer =
  "Information on this website is for general reference only and does not constitute a legal offer or contract. Images, plans, and impressions are indicative; actual details may vary. Furniture and décor shown are for illustration purposes only. Buyers should independently verify all information with the company before making decisions. Amenities will be available after project completion and adequate occupancy. The company is not responsible for any loss from reliance on this content.";

export const footerRera = {
  number: "PRM/KA/RERA/1251/310/PR/310326/008560",
  href: "https://rera.karnataka.gov.in/",
};

export const footerBrandBlurb =
  "A high-rise community in Hosur road designed for people who want their home, lifestyle and neighbours to be in sync.";

export const footerBuilderBlurb =
  "CKPC is driven by a bold vision: to re-imagine people experience (PX) across offices, residential, retail and healthcare real estate.";
