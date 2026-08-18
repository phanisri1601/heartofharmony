// Line-art icons for the About Us "Pillars of (PX)" section — ported
// 1:1 (same paths, viewBox, stroke-width) from the live site's inline SVGs
// at https://www.ckpcheartofharmony.com/about-us/, just swapping the
// hardcoded stroke color for currentColor so they pick up the brand color
// via className like any other icon here.

type IconProps = { className?: string };

const base = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 32,
  height: 32,
  viewBox: "0 0 32 32",
  fill: "none",
} as const;

export function DesignIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M17 15H6V26H17V15Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M26 23V25C26 25.2652 25.8946 25.5196 25.7071 25.7071C25.5196 25.8946 25.2652 26 25 26H22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M26 14V18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M23 6H25C25.2652 6 25.5196 6.10536 25.7071 6.29289C25.8946 6.48043 26 6.73478 26 7V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 6H18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 10V7C6 6.73478 6.10536 6.48043 6.29289 6.29289C6.48043 6.10536 6.73478 6 7 6H9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MobilityIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M2 27H30" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M28 27V9H22V5H10V13H4V27" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 9H17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 13H17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 13H24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 17H10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 21H10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 17H17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 17H24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 21H24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 27V21H18V27" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SustainabilityIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path
        d="M7.97626 24.0238C1.99001 14.0476 9.97626 4.07133 26.9313 5.06883C27.9288 22.0288 17.9525 30.0101 7.97626 24.0238Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M20 12L5 27" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CommunityIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M24 15C25.1645 14.9991 26.3131 15.2698 27.3547 15.7906C28.3963 16.3114 29.302 17.0679 30 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 18C2.698 17.0679 3.60375 16.3114 4.6453 15.7906C5.68686 15.2698 6.83551 14.9991 8 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 23C18.7614 23 21 20.7614 21 18C21 15.2386 18.7614 13 16 13C13.2386 13 11 15.2386 11 18C11 20.7614 13.2386 23 16 23Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 27C9.71786 25.7818 10.7412 24.772 11.9689 24.0705C13.1965 23.369 14.586 23 16 23C17.414 23 18.8035 23.369 20.0311 24.0705C21.2588 24.772 22.2821 25.7818 23 27" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20.125 10C20.312 9.27571 20.6984 8.61836 21.2402 8.10263C21.7821 7.58689 22.4577 7.23343 23.1903 7.08239C23.923 6.93135 24.6833 6.98877 25.3849 7.24815C26.0866 7.50752 26.7014 7.95845 27.1596 8.54971C27.6179 9.14098 27.9011 9.8489 27.9772 10.5931C28.0533 11.3372 27.9192 12.0878 27.5902 12.7596C27.2611 13.4314 26.7502 13.9974 26.1156 14.3935C25.481 14.7895 24.748 14.9996 24 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.99994 15C7.25189 14.9996 6.51894 14.7895 5.88432 14.3935C5.2497 13.9974 4.73884 13.4314 4.40977 12.7596C4.08071 12.0878 3.94661 11.3372 4.02271 10.5931C4.09881 9.8489 4.38206 9.14098 4.84029 8.54971C5.29853 7.95845 5.91338 7.50752 6.61502 7.24815C7.31667 6.98877 8.07698 6.93135 8.80962 7.08239C9.54226 7.23343 10.2179 7.58689 10.7597 8.10263C11.3016 8.61836 11.6879 9.27571 11.8749 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function GovernanceIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 4V28" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 7.05627V24.9438" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 4.68384V27.3163" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function WellnessIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path
        d="M12 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V13C4 12.7348 4.10536 12.4804 4.29289 12.2929C4.48043 12.1054 4.73478 12 5 12H12V5C12 4.73478 12.1054 4.48043 12.2929 4.29289C12.4804 4.10536 12.7348 4 13 4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V12H27C27.2652 12 27.5196 12.1054 27.7071 12.2929C27.8946 12.4804 28 12.7348 28 13V19C28 19.2652 27.8946 19.5196 27.7071 19.7071C27.5196 19.8946 27.2652 20 27 20H20V27C20 27.2652 19.8946 27.5196 19.7071 27.7071C19.5196 27.8946 19.2652 28 19 28H13C12.7348 28 12.4804 27.8946 12.2929 27.7071C12.1054 27.5196 12 27.2652 12 27V20Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TechnologyIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M18 23H4C3.46957 23 2.96086 22.7893 2.58579 22.4142C2.21071 22.0391 2 21.5304 2 21V12C2 11.4696 2.21071 10.9609 2.58579 10.5858C2.96086 10.2107 3.46957 10 4 10H18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 27H8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M26 9H22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M26 13H22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M29 5H19C18.4477 5 18 5.44772 18 6V26C18 26.5523 18.4477 27 19 27H29C29.5523 27 30 26.5523 30 26V6C30 5.44772 29.5523 5 29 5Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11 23V27" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 24C24.8284 24 25.5 23.3284 25.5 22.5C25.5 21.6716 24.8284 21 24 21C23.1716 21 22.5 21.6716 22.5 22.5C22.5 23.3284 23.1716 24 24 24Z" fill="currentColor" />
    </svg>
  );
}

export function InclusivityIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path
        d="M16 9.45379L14.5225 7.97754C13.5785 7.03372 12.3758 6.391 11.0666 6.13063C9.75735 5.87026 8.4003 6.00393 7.16701 6.51474C5.93373 7.02555 4.87959 7.89057 4.13788 9.00043C3.39617 10.1103 3.00019 11.4152 3 12.75C3 21 16 28 16 28C16 28 29 21 29 12.75C28.9998 11.4152 28.6038 10.1103 27.8621 9.00043C27.1204 7.89057 26.0663 7.02555 24.833 6.51474C23.5997 6.00393 22.2426 5.87026 20.9334 6.13063C19.6242 6.391 18.4215 7.03372 17.4775 7.97754L14 11.4538L17.7725 15.2275L15 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const pxIconByTitle: Record<string, (props: IconProps) => React.JSX.Element> = {
  Design: DesignIcon,
  Mobility: MobilityIcon,
  Sustainability: SustainabilityIcon,
  Community: CommunityIcon,
  Governance: GovernanceIcon,
  Wellness: WellnessIcon,
  Technology: TechnologyIcon,
  Inclusivity: InclusivityIcon,
};
