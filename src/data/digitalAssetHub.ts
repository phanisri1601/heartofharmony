// Content mirrored from the live /digital-asset-hub/ page — a standalone
// press-kit/media page (own header, no site nav, own disclaimer footer),
// not part of the main site's design system. See src/app/digital-asset-hub/.

export const digitalAssetHub = {
  hero: {
    line1: "Experience",
    accent: "Heart of Harmony",
  },
  videos: {
    label: "Videos",
    items: [
      {
        title: "360° Drone View",
        body: "Get a bird's-eye perspective of the entire project and its lush surroundings.",
        image: "/images/digital-asset-hub/drone-view-bg.jpg",
        videoSrc:
          "https://www.ckpcheartofharmony.com/wp-content/uploads/2026/04/PR0355_CKPC%20properties_Chamundi%20project_Drone%20Route%20Map_Final.mp4",
      },
      {
        title: "Project Walkthrough",
        body: "Step into the experience — watch a cinematic tour of the project and lifestyle.",
        image: "/images/digital-asset-hub/walkthrough-bg.jpg",
        videoSrc:
          "https://www.ckpcheartofharmony.com/wp-content/uploads/2026/04/CKPC%20properties_Chamundi%20project_3D%20walkthrough_Compressed_Final.mp4",
      },
    ],
  },
  images: {
    label: "Images",
    items: [
      {
        title: "View Gallery",
        body: "Discover the exterior architecture and outdoor spaces of Heart of Harmony.",
        image: "/images/digital-asset-hub/exterior-gallery-bg.png",
        href: "https://www.ckpcheartofharmony.com/wp-content/uploads/2026/04/HOH-Gallery-Images.zip",
      },
      {
        title: "View Gallery",
        body: "Discover the interior design and premium living spaces of Heart of Harmony.",
        image: "/images/digital-asset-hub/interior-gallery-bg.jpg",
        href: "https://www.ckpcheartofharmony.com/wp-content/uploads/2026/06/Gallery-of-Events.zip",
      },
    ],
  },
  creativeAssets: {
    label: "Creative Assets",
    items: [
      {
        title: "Images More",
        body: "Ready-to-use creatives, designed to elevate your marketing.",
        image: "/images/digital-asset-hub/creative-images-bg.webp",
        href: "https://www.ckpcheartofharmony.com/wp-content/uploads/2026/07/Image-HOH-Creative-Assets.zip",
      },
      {
        title: "Videos More",
        body: "Ready-to-use videos, created to enhance your promotions.",
        image: "/images/digital-asset-hub/creative-videos-bg.webp",
        href: "https://www.ckpcheartofharmony.com/wp-content/uploads/2026/07/Video-HOH-Creative-Assets.zip",
      },
    ],
  },
  documents: {
    label: "Documents",
    items: [
      {
        label: "Download Brochure",
        image: "/images/digital-asset-hub/doc-brochure-thumb.png",
        href: "https://www.ckpcheartofharmony.com/wp-content/uploads/2026/04/A4_HOH_Handout_V16_Low_Res-1.pdf",
      },
      {
        label: "Download Masterplan",
        image: "/images/digital-asset-hub/doc-masterplan-thumb.jpg",
        href: "https://www.ckpcheartofharmony.com/wp-content/uploads/2026/05/CKPC-Heart-of-Harmony-Masterplan.pdf",
      },
      // Live has no real link wired up for this one yet — points at our own
      // floor-plans section instead of leaving a dead button.
      {
        label: "Download Floor & Unit Plans",
        image: "/images/digital-asset-hub/doc-floorplans-thumb.png",
        href: "/homes/#floor-plans",
      },
      {
        label: "Download location Map",
        image: "/images/digital-asset-hub/doc-locationmap-thumb.jpg",
        href: "https://www.ckpcheartofharmony.com/wp-content/uploads/2026/05/HOH_A3_Sales-Presenter_V6.pdf",
      },
    ],
  },
  pricing: {
    label: "Pricing",
    heading: "3, 3.5 & 4 Bed Signature Residences",
    cta: "Download Indicative Price",
    image: "/images/digital-asset-hub/pricing-bg.jpg",
    href: "https://www.ckpcheartofharmony.com/wp-content/uploads/2026/07/INDICATIVE-PRICE-SHEET-01-Jul26-v1.pdf",
  },
  disclaimer: {
    label: "Disclaimer",
    body: "Information on this website is for general reference only and does not constitute a legal offer or contract. Images, plans, layouts, and visuals are indicative and subject to change. Furniture, fixtures, and décor shown are for representational purposes only. Buyers are advised to verify all details independently with the developer. Amenities and facilities will be available post project completion and subject to statutory approvals and adequate occupancy.",
    rera: "RERA No: PRM/KA/RERA/1251/310/PR/310326/008560",
  },
};
