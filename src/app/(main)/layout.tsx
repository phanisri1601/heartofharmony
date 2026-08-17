import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { EnquiryModalProvider } from "@/components/modals/EnquiryModalProvider";
import { HeaderThemeProvider } from "@/components/layout/HeaderThemeContext";

/**
 * Layout for the main marketing site (every route except /landing-page/,
 * which is a standalone Elementor-style page with its own header/footer and
 * must not inherit this site chrome — see src/app/landing-page/).
 */
export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <EnquiryModalProvider>
      <HeaderThemeProvider>
        <SiteHeader />
        <main className="flex-1">{children}</main>
      </HeaderThemeProvider>
      <SiteFooter />
    </EnquiryModalProvider>
  );
}
