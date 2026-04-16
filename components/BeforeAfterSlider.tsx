"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";

export default function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      draggingRef.current = true;
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!draggingRef.current) return;
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handlePointerUp = useCallback(() => {
    draggingRef.current = false;
  }, []);

  useEffect(() => {
    const onTouchMove = (e: TouchEvent) => {
      if (draggingRef.current) e.preventDefault();
    };
    const container = containerRef.current;
    container?.addEventListener("touchmove", onTouchMove, { passive: false });
    return () => container?.removeEventListener("touchmove", onTouchMove);
  }, []);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-navy text-center mb-16">
          The Signature Difference
        </h2>
        <div className="max-w-3xl mx-auto">
          <div
            ref={containerRef}
            className="relative aspect-[16/10] rounded-lg overflow-hidden cursor-col-resize select-none touch-none"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
          >
            {/* After image (full width behind) */}
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80"
              alt="Clean carpet after professional cleaning"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />

            {/* Before image (clipped) */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            >
              <Image
                src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1200&q=80"
                alt="Stained carpet before professional cleaning"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>

            {/* Slider line */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10"
              style={{ left: `${position}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="text-navy"
                >
                  <path
                    d="M6 4L2 10L6 16M14 4L18 10L14 16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Labels */}
            <span className="absolute top-4 left-4 bg-navy/70 text-cream px-3 py-1 rounded text-xs font-display tracking-wider uppercase z-10">
              Before
            </span>
            <span className="absolute top-4 right-4 bg-navy/70 text-cream px-3 py-1 rounded text-xs font-display tracking-wider uppercase z-10">
              After
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
