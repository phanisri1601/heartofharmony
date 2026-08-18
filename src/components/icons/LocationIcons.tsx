// Icons for the Lifestyle page's "The Location" section — ported 1:1 from
// the live site's inline SVGs (same paths/viewBox), swapped to currentColor.

type IconProps = { className?: string };

export function HouseIcon({ className }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="19" viewBox="0 0 22 19" fill="none" className={className}>
      <path
        d="M11.7502 18.4999V1.24957C11.7501 1.11383 11.7132 0.980657 11.6434 0.864251C11.5736 0.747845 11.4735 0.652567 11.3538 0.588576C11.234 0.524585 11.0992 0.494279 10.9636 0.50089C10.8281 0.507501 10.6968 0.550781 10.5839 0.626115L3.08376 5.6259C2.98088 5.69454 2.89658 5.78755 2.83835 5.89665C2.78012 6.00575 2.74977 6.12756 2.75 6.25123V18.4999"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.75 6.49976H18.5001C18.6991 6.49976 18.8898 6.57878 19.0305 6.71943C19.1711 6.86009 19.2502 7.05085 19.2502 7.24977V18.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M0.5 18.5H21.5004" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.75 8.74976V10.2498" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.75 8.74976V10.2498" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.75 13.9999V15.4999" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.75 13.9999V15.4999" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ConnectIcon({ className }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none" className={className}>
      <path
        d="M3.9375 17.0625C5.38725 17.0625 6.5625 15.8872 6.5625 14.4375C6.5625 12.9878 5.38725 11.8125 3.9375 11.8125C2.48775 11.8125 1.3125 12.9878 1.3125 14.4375C1.3125 15.8872 2.48775 17.0625 3.9375 17.0625Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M17.0625 3.9375L19.6875 6.5625L17.0625 9.1875" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.5625 14.4375C13.7812 14.4375 9.84375 6.5625 17.0625 6.5625H19.6875" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
