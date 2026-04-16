"use client";

import { useCallback } from "react";

export default function HeroCTAs() {
  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-8">
      <button
        onClick={() => scrollTo("contact")}
        className="bg-cream text-navy px-8 py-4 rounded text-lg font-semibold hover:bg-white transition-colors"
      >
        Get a Free Quote
      </button>
      <button
        onClick={() => scrollTo("gallery")}
        className="border-2 border-teal text-teal px-8 py-4 rounded text-lg font-semibold hover:bg-teal hover:text-white transition-colors"
      >
        See Our Work
      </button>
    </div>
  );
}
