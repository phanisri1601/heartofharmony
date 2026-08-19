// Icons for the homepage "The Address" section (Highway/Metro/Lifestyle
// Access) — ported 1:1 from the live site's inline SVGs, circle background
// baked in at 80x80 exactly like the source (fill #FEF4EA, stroke #8E3628).

type IconProps = { className?: string };

export function HighwayAccessIcon({ className }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none" className={className}>
      <rect width="80" height="80" rx="40" fill="#FEF4EA" />
      <path
        d="M47.1999 29.6131V46.7923C46.9848 47.0609 46.809 47.359 46.6779 47.6774H33.322C32.9711 46.8734 32.3944 46.1895 31.6623 45.7091C30.9302 45.2288 30.0746 44.973 29.2 44.973C28.3254 44.973 27.4697 45.2288 26.7377 45.7091C26.0056 46.1895 25.4289 46.8734 25.078 47.6774H23.8C23.3226 47.6774 22.8648 47.487 22.5272 47.1483C22.1896 46.8096 22 46.3501 22 45.871V29.6131C22 28.6549 22.3793 27.736 23.0544 27.0584C23.7295 26.3809 24.6452 26.0002 25.6 26.0002H43.6C44.5547 26.0002 45.4703 26.3809 46.1455 27.0584C46.8207 27.736 47.1999 28.6549 47.1999 29.6131Z"
        stroke="#8E3628"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M58.0001 42.4565V47.6771H54.9221C54.6094 46.9509 54.1113 46.3203 53.4783 45.8488C52.8452 45.3773 52.0995 45.082 51.3163 44.9922C50.5331 44.9024 49.74 45.0214 49.0173 45.3374C48.2947 45.6535 47.6679 46.1552 47.2001 46.7919V31.4192H51.5741C51.8864 31.4192 52.1934 31.5009 52.4649 31.6561C52.7363 31.8113 52.9628 32.0347 53.1221 32.3043L54.7601 35.0321L56.9741 38.7352C57.646 39.8594 58.0008 41.1456 58.0001 42.4565Z"
        stroke="#8E3628"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33.7006 49.4837C33.7006 50.6814 33.2265 51.8301 32.3826 52.6772C31.5387 53.524 30.3941 53.9998 29.2006 53.9998C28.0072 53.9998 26.8626 53.524 26.0187 52.6772C25.1748 51.8301 24.7006 50.6814 24.7006 49.4837C24.6971 48.8614 24.826 48.2456 25.0786 47.6773C25.4295 46.8733 26.0062 46.1894 26.7383 45.709C27.4704 45.2287 28.326 44.9729 29.2006 44.9729C30.0752 44.9729 30.9309 45.2287 31.663 45.709C32.395 46.1894 32.9717 46.8733 33.3226 47.6773C33.5753 48.2456 33.7042 48.8614 33.7006 49.4837Z"
        stroke="#8E3628"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M55.3007 49.4835C55.3007 50.6812 54.8266 51.8299 53.9828 52.6769C53.1387 53.5238 51.9941 53.9996 50.8007 53.9996C49.6073 53.9996 48.4627 53.5238 47.6187 52.6769C46.7749 51.8299 46.3007 50.6812 46.3007 49.4835C46.2971 48.8612 46.426 48.2454 46.6787 47.6771C46.8098 47.3586 46.9856 47.0606 47.2007 46.792C47.6685 46.1552 48.2953 45.6535 49.018 45.3374C49.7407 45.0215 50.5338 44.9024 51.317 44.9922C52.1001 45.082 52.8459 45.3773 53.4789 45.8488C54.112 46.3203 54.6101 46.9509 54.9227 47.6771C55.1754 48.2454 55.3043 48.8612 55.3007 49.4835Z"
        stroke="#8E3628"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M38.1998 38.6448H29.1998" stroke="#8E3628" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M38.1998 33.2258H29.1998" stroke="#8E3628" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MetroAccessIcon({ className }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none" className={className}>
      <rect width="80" height="80" rx="40" fill="#FEF4EA" />
      <path
        d="M55 35.059V37.5296C55 37.9664 54.8244 38.3853 54.5119 38.6942C54.1992 39.003 53.7754 39.1766 53.3333 39.1766L43.3334 41.6472V40.8237C43.3334 40.3869 43.1578 39.968 42.8451 39.659C42.5326 39.3502 42.1088 39.1766 41.6667 39.1766H38.3333C37.8912 39.1766 37.4674 39.3502 37.1549 39.659C36.8422 39.968 36.6667 40.3869 36.6667 40.8237V41.6472L26.6667 39.1766C26.2246 39.1766 25.8007 39.003 25.4882 38.6942C25.1756 38.3853 25 37.9664 25 37.5296V35.059C25 33.967 25.439 32.9196 26.2204 32.1474C27.0018 31.3752 28.0616 30.9414 29.1667 30.9414H50.8334C51.9384 30.9414 52.9983 31.3752 53.7796 32.1474C54.561 32.9196 55 33.967 55 35.059Z"
        stroke="#8E3628"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.6667 39.1768L27.2501 50.8378C27.3405 51.7029 27.7514 52.5043 28.4036 53.088C29.0559 53.6718 29.9035 53.9966 30.7834 54.0001H49.2167C50.0968 53.9966 50.9443 53.6718 51.5965 53.088C52.2489 52.5043 52.6596 51.7029 52.7501 50.8378L53.3334 39.1768"
        stroke="#8E3628"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M41.6664 39.1768H38.333C37.4126 39.1768 36.6664 39.9142 36.6664 40.8238V42.4708C36.6664 43.3804 37.4126 44.1178 38.333 44.1178H41.6664C42.5869 44.1178 43.3331 43.3804 43.3331 42.4708V40.8238C43.3331 39.9142 42.5869 39.1768 41.6664 39.1768Z"
        stroke="#8E3628"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M44.9995 30.9411V27.647C44.9995 27.2102 44.824 26.7913 44.5113 26.4824C44.1989 26.1735 43.7748 26 43.3329 26H36.6662C36.2242 26 35.8002 26.1735 35.4877 26.4824C35.1751 26.7913 34.9995 27.2102 34.9995 27.647V30.9411"
        stroke="#8E3628"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** The small terracotta "pin drop" decoration the live site hangs below
 * each Address icon (a circle-backed teardrop) — ported 1:1 from
 * pointer-vector.svg. */
export function AddressPointerIcon({ className }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="42" viewBox="0 0 20 42" fill="none" className={className}>
      <rect y="22" width="20" height="20" rx="10" fill="#8E3628" fillOpacity="0.1" />
      <path
        d="M10.5 28.0312C12.4731 28.2773 14 29.9602 14 32C14 34.2091 12.2091 36 10 36C7.79086 36 6 34.2091 6 32C6 29.9602 7.52686 28.2773 9.5 28.0312V0H10.5V28.0312Z"
        fill="#8E3628"
      />
    </svg>
  );
}

export function LifestyleAccessIcon({ className }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none" className={className}>
      <rect width="80" height="80" rx="40" fill="#FEF4EA" />
      <path
        d="M30.2356 26H41.4857C42.679 26 43.8237 26.4658 44.6676 27.2949C45.5115 28.124 45.9857 29.2485 45.9857 30.421V53.9996H25.7356V30.421C25.7356 29.2485 26.2097 28.124 27.0536 27.2949C27.8975 26.4658 29.0421 26 30.2356 26Z"
        stroke="#8E3628"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M25 54H55" stroke="#8E3628" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M34.375 43.6836H37.3749C37.9717 43.6836 38.5441 43.9165 38.9661 44.331C39.388 44.7456 39.6249 45.3078 39.6249 45.8941V53.9992H32.125V45.8941C32.125 45.3078 32.362 44.7456 32.784 44.331C33.206 43.9165 33.7783 43.6836 34.375 43.6836Z"
        stroke="#8E3628"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M31.3596 31.8945H40.3596" stroke="#8E3628" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M31.3596 37.79H40.3596" stroke="#8E3628" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M45.9851 35.5791H48.9851C50.1785 35.5791 51.3232 36.0449 52.1671 36.874C53.0109 37.7031 53.4851 38.8275 53.4851 40.0001V53.9999"
        stroke="#8E3628"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
