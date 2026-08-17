"use client";

import { createContext, useContext, useEffect, useState } from "react";

/**
 * Lets a page's hero tell the header whether it's currently sitting over a
 * dark photo (so the header should render its light/white variant) or a
 * plain light background (dark variant) — matching the live site, where the
 * header is always transparent and just swaps the logo + nav text color per
 * page instead of sitting on a solid bar.
 *
 * Tracks a count rather than a single boolean so nothing breaks if more than
 * one dark hero is ever mounted at once (e.g. during a route transition).
 */
const HeaderThemeContext = createContext<{
  onDarkCount: number;
  setOnDarkCount: React.Dispatch<React.SetStateAction<number>>;
} | null>(null);

export function HeaderThemeProvider({ children }: { children: React.ReactNode }) {
  const [onDarkCount, setOnDarkCount] = useState(0);
  return (
    <HeaderThemeContext.Provider value={{ onDarkCount, setOnDarkCount }}>{children}</HeaderThemeContext.Provider>
  );
}

/** Call from a full-bleed dark-photo hero to switch the header to its light/white variant while mounted. */
export function useHeaderOnDark() {
  const ctx = useContext(HeaderThemeContext);
  useEffect(() => {
    if (!ctx) return;
    ctx.setOnDarkCount((n) => n + 1);
    return () => ctx.setOnDarkCount((n) => Math.max(0, n - 1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

/** Read (in SiteHeader) whether any mounted hero currently wants the light/white header variant. */
export function useIsHeaderOnDark() {
  const ctx = useContext(HeaderThemeContext);
  return (ctx?.onDarkCount ?? 0) > 0;
}
