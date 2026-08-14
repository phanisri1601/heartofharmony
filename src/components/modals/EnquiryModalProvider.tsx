"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EnquiryForm } from "@/components/forms/EnquiryForm";

type EnquiryModalContextValue = {
  open: () => void;
  close: () => void;
};

const EnquiryModalContext = createContext<EnquiryModalContextValue | null>(null);

/**
 * Reproduces the site's "Enquire Now" Popup Maker modal — a floating trigger
 * (bottom-right, appears after scroll on the live site) plus any inline CTA
 * button that calls useEnquiryModal().open().
 */
export function EnquiryModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  return (
    <EnquiryModalContext.Provider value={{ open, close }}>
      {children}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.div
              className="relative w-full max-w-md rounded-xl bg-brand-offwhite p-6 shadow-xl sm:p-8"
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label="Enquiry form"
            >
              <button
                onClick={close}
                aria-label="Close"
                className="absolute right-4 top-4 text-2xl leading-none text-brand-gray hover:text-brand-dark"
              >
                &times;
              </button>
              <h3 className="mb-1 font-serif text-2xl text-brand-dark">Enquire Now</h3>
              <p className="mb-5 text-sm text-brand-gray">
                Share your details and our team will get back to you.
              </p>
              <EnquiryForm compact />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <EnquireFab onOpen={open} />
    </EnquiryModalContext.Provider>
  );
}

/** Floating "Enquire Now" trigger, mirrors the fixed-position button on the live site. */
function EnquireFab({ onOpen }: { onOpen: () => void }) {
  return (
    <button
      onClick={onOpen}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-brand-primary px-5 py-3 text-sm font-medium text-brand-white shadow-lg transition hover:opacity-90"
    >
      Enquire Now
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path
          d="M10.089 7.4643L5.71403 11.8393C5.59074 11.9626 5.42354 12.0318 5.24919 12.0318C5.07483 12.0318 4.90763 11.9626 4.78434 11.8393C4.66106 11.716 4.5918 11.5488 4.5918 11.3745C4.5918 11.2001 4.66106 11.0329 4.78434 10.9096L8.69504 7.00001L4.78544 3.0893C4.72439 3.02826 4.67597 2.95579 4.64293 2.87603C4.60989 2.79627 4.59289 2.71079 4.59289 2.62446C4.59289 2.53813 4.60989 2.45265 4.64293 2.37289C4.67597 2.29313 4.72439 2.22066 4.78544 2.15962C4.84648 2.09857 4.91895 2.05015 4.99871 2.01711C5.07847 1.98408 5.16395 1.96707 5.25028 1.96707C5.33661 1.96707 5.42209 1.98408 5.50185 2.01711C5.58161 2.05015 5.65408 2.09857 5.71512 2.15962L10.0901 6.53462C10.1512 6.59566 10.1997 6.66816 10.2327 6.74797C10.2657 6.82777 10.2827 6.91332 10.2826 6.99969C10.2825 7.08606 10.2653 7.17156 10.2321 7.25129C10.1989 7.33102 10.1503 7.40341 10.089 7.4643Z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
}

export function useEnquiryModal() {
  const ctx = useContext(EnquiryModalContext);
  if (!ctx) {
    throw new Error("useEnquiryModal must be used within EnquiryModalProvider");
  }
  return ctx;
}
