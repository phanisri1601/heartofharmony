import type { Metadata } from "next";
import { Fraunces, Albert_Sans } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { EnquiryModalProvider } from "@/components/modals/EnquiryModalProvider";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const albertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ckpcheartofharmony.com"),
  title: {
    default: "CKPC Heart of Harmony – 3, 3.5 & 4 BHK Apartments, Kudlu Gate",
    template: "%s | Heart of Harmony by CKPC",
  },
  description:
    "Heart of Harmony by CKPC — premium 3, 3.5 & 4 BHK apartments at Kudlu Gate, Hosur Road, Bengaluru.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${albertSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <EnquiryModalProvider>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </EnquiryModalProvider>
      </body>
    </html>
  );
}
