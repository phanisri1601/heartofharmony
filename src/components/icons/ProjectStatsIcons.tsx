// Icons for the "Project at a Glance" stats row on the homepage (Just 137 /
// Only 6 Residences / 2B+G+24 / 2 Levels) — live has no icons here, these
// are simple line icons matching the site's existing icon style (stroke,
// currentColor, rounded caps — see TravelTabIcons.tsx / ContactIcons.tsx).

type IconProps = { className?: string };

/** "Just 137 / Signature Residences" — a single building/home. */
export function ResidencesIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 21V6.5L12 3l8 3.5V21" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 21h16" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 21v-5.5a3 3 0 0 1 6 0V21" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 9.5h1M14.5 9.5h1M8.5 13h1M14.5 13h1" />
    </svg>
  );
}

/** "Only 6 Residences / Per floor" — a floor plan grid (units per floor). */
export function PerFloorIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="1.5" />
      <path strokeLinecap="round" d="M12 3.5v17M3.5 12h17" />
    </svg>
  );
}

/** "2B + G + 24 / floors" — a high-rise with stacked floor lines. */
export function FloorsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <rect x="6" y="2.5" width="12" height="19" rx="1" />
      <path strokeLinecap="round" d="M6 7.5h12M6 12h12M6 16.5h12" />
      <path strokeLinecap="round" d="M2.5 21.5h19" />
    </svg>
  );
}

/** "2 Levels / of Amenities (ground + terrace)" — a terrace/sun deck. */
export function AmenitiesLevelsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <circle cx="12" cy="8" r="3" />
      <path
        strokeLinecap="round"
        d="M12 2.5v1M12 12.5v1M17.5 8h1M5.5 8h1M15.9 4.1l.7-.7M7.4 12.6l.7-.7M15.9 11.9l.7.7M7.4 3.4l.7.7"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.5 21.5h19M4.5 21.5v-3h15v3" />
    </svg>
  );
}
