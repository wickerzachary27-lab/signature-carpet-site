"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Services", target: "services" },
  { label: "About", target: "about" },
  { label: "Gallery", target: "gallery" },
  { label: "Contact", target: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = useCallback((id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-navy shadow-lg border-b border-cream/10"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
          <button
            onClick={() => scrollTo("hero")}
            className="font-display text-2xl md:text-2xl font-semibold text-cream tracking-[0.08em]"
          >
            Signature Carpet Cleaning
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.target}
                onClick={() => scrollTo(link.target)}
                className="nav-underline text-cream/80 hover:text-cream transition-colors text-sm tracking-wide uppercase font-body"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="bg-cream text-navy px-5 py-2.5 rounded text-sm font-semibold hover:bg-white transition-colors"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-cream"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-navy flex flex-col items-center justify-center gap-8">
          <button
            className="absolute top-5 right-6 text-cream"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
          {NAV_LINKS.map((link) => (
            <button
              key={link.target}
              onClick={() => scrollTo(link.target)}
              className="font-display text-3xl text-cream hover:text-teal transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="mt-4 bg-cream text-navy px-8 py-3 rounded text-lg font-semibold hover:bg-white transition-colors"
          >
            Get a Quote
          </button>
        </div>
      )}
    </>
  );
}
