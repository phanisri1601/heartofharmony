"use client";

import type { ReactNode } from "react";
import { useEnquiryModal } from "@/components/modals/EnquiryModalProvider";

export function HeroEnquiryButton({ children, className }: { children: ReactNode; className: string }) {
  const { open } = useEnquiryModal();
  return <button onClick={open} className={className}>{children}</button>;
}
