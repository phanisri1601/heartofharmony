// Icons for the "You won't have to travel far..." nearby-places tabs
// (Hospitals / Schools / Shopping / Nature / IT Parks) — ported 1:1 from
// the live site's inline SVGs.

type IconProps = { className?: string };

export function HospitalsIcon({ className }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className={className}>
      <path
        d="M6.75 12.75H1.5C1.30109 12.75 1.11032 12.671 0.96967 12.5303C0.829018 12.3897 0.75 12.1989 0.75 12V7.5C0.75 7.30109 0.829018 7.11032 0.96967 6.96967C1.11032 6.82902 1.30109 6.75 1.5 6.75H6.75V1.5C6.75 1.30109 6.82902 1.11032 6.96967 0.96967C7.11032 0.829018 7.30109 0.75 7.5 0.75H12C12.1989 0.75 12.3897 0.829018 12.5303 0.96967C12.671 1.11032 12.75 1.30109 12.75 1.5V6.75H18C18.1989 6.75 18.3897 6.82902 18.5303 6.96967C18.671 7.11032 18.75 7.30109 18.75 7.5V12C18.75 12.1989 18.671 12.3897 18.5303 12.5303C18.3897 12.671 18.1989 12.75 18 12.75H12.75V18C12.75 18.1989 12.671 18.3897 12.5303 18.5303C12.3897 18.671 12.1989 18.75 12 18.75H7.5C7.30109 18.75 7.11032 18.671 6.96967 18.5303C6.82902 18.3897 6.75 18.1989 6.75 18V12.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SchoolsIcon({ className }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none" className={className}>
      <path
        d="M4.90385 3.51904H10.4423C11.544 3.51904 12.6005 3.95668 13.3795 4.73569C14.1585 5.51469 14.5962 6.57125 14.5962 7.67293V18.0577C14.5962 18.2413 14.5232 18.4174 14.3934 18.5472C14.2636 18.677 14.0875 18.75 13.9039 18.75H1.44231C1.2587 18.75 1.08261 18.677 0.952773 18.5472C0.82294 18.4174 0.75 18.2413 0.75 18.0577V7.67293C0.75 6.57125 1.18764 5.51469 1.96664 4.73569C2.74563 3.95668 3.80218 3.51904 4.90385 3.51904Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.52014 18.75V12.5192C3.52014 12.1519 3.66602 11.7997 3.92569 11.5401C4.18535 11.2804 4.53754 11.1345 4.90476 11.1345H10.4432C10.8105 11.1345 11.1626 11.2804 11.4223 11.5401C11.682 11.7997 11.8278 12.1519 11.8278 12.5192V18.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.90356 3.51926V2.13463C4.90356 1.7674 5.04944 1.41522 5.30911 1.15555C5.56878 0.89588 5.92096 0.75 6.28818 0.75H9.05742C9.42464 0.75 9.77682 0.89588 10.0365 1.15555C10.2962 1.41522 10.442 1.7674 10.442 2.13463V3.51926"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M6.28809 6.98096H9.05732" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.52014 13.9041H11.8278" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.05823 13.9041V15.2887" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ShoppingIcon({ className }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none" className={className}>
      <path d="M2.2041 9.80371V16.7501H16.7496V9.80371" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M2.75 0.75H16.2046C16.3625 0.750031 16.5162 0.801504 16.6424 0.896635C16.7685 0.991767 16.8602 1.12538 16.9037 1.27728L18.2046 5.84094H0.75L2.05364 1.27728C2.09695 1.12583 2.18827 0.992541 2.31385 0.897454C2.43943 0.802367 2.59249 0.750622 2.75 0.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.56819 5.84082V7.29537C6.56819 8.06692 6.26169 8.80686 5.71613 9.35242C5.17057 9.89798 4.43063 10.2045 3.65909 10.2045C2.88755 10.2045 2.14761 9.89798 1.60205 9.35242C1.05649 8.80686 0.75 8.06692 0.75 7.29537V5.84082"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.3862 5.84082V7.29537C12.3862 8.06692 12.0797 8.80686 11.5341 9.35242C10.9886 9.89798 10.2486 10.2045 9.47709 10.2045C8.70555 10.2045 7.96561 9.89798 7.42005 9.35242C6.87449 8.80686 6.56799 8.06692 6.56799 7.29537V5.84082"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.2042 5.84082V7.29537C18.2042 8.06692 17.8977 8.80686 17.3521 9.35242C16.8066 9.89798 16.0666 10.2045 15.2951 10.2045C14.5235 10.2045 13.7836 9.89798 13.238 9.35242C12.6925 8.80686 12.386 8.06692 12.386 7.29537V5.84082"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function NatureIcon({ className }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" className={className}>
      <path d="M8.75037 2.93188V14.5683" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.56921 0.75L8.75113 2.93183L10.9331 0.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.56921 16.7499L8.75113 14.5681L10.9331 16.7499" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.71069 5.84082L13.7893 11.659" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M0.750122 6.56827L3.71117 5.84099L2.93204 2.93188" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.5682 14.5683L13.7891 11.6592L16.7501 10.9319" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.71069 11.659L13.7893 5.84082" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2.93204 14.5683L3.71117 11.6592L0.750122 10.9319" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16.7501 6.56827L13.7891 5.84099L14.5682 2.93188" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ItParksIcon({ className }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className={className}>
      <path
        d="M17.2497 17.2495C18.7686 15.7306 16.7541 11.2535 12.7501 7.24958C8.74623 3.24566 4.2691 1.23114 2.7502 2.75004C1.23131 4.26894 3.24582 8.74607 7.24974 12.75C11.2537 16.7539 15.7308 18.7684 17.2497 17.2495Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.7501 12.7499C16.7541 8.74601 18.7686 4.26888 17.2497 2.74998C15.7308 1.23108 11.2537 3.2456 7.24974 7.24952C3.24582 11.2534 1.23131 15.7306 2.7502 17.2495C4.2691 18.7684 8.74623 16.7539 12.7501 12.7499Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.99988 9.69214C10.1698 9.69214 10.3075 9.82987 10.3075 9.99976C10.3075 10.1696 10.1698 10.3074 9.99988 10.3074C9.82998 10.3074 9.69226 10.1696 9.69226 9.99976C9.69226 9.82987 9.82998 9.69214 9.99988 9.69214Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}
