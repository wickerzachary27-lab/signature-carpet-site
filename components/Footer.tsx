"use client";

import { useCallback } from "react";

const NAV_LINKS = [
  { label: "Services", target: "services" },
  { label: "About", target: "about" },
  { label: "Gallery", target: "gallery" },
  { label: "Contact", target: "contact" },
];

export default function Footer() {
  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <footer className="bg-navy border-t-2 border-teal">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left */}
          <div>
            <p className="font-display text-xl font-semibold text-cream">
              Signature Carpet Cleaning
            </p>
            <p className="text-cream/50 text-sm font-body mt-1">
              Eugene &amp; Springfield, OR &middot; (541) 342-5326
            </p>
          </div>

          {/* Center */}
          <div className="flex justify-center gap-6">
            {NAV_LINKS.map((link) => (
              <button
                key={link.target}
                onClick={() => scrollTo(link.target)}
                className="text-cream/60 hover:text-cream text-sm font-body transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right */}
          <div className="md:text-right">
            <p className="text-cream/40 text-sm font-body">
              &copy; 2025 Signature Carpet Cleaning. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
