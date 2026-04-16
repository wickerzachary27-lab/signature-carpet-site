import Image from "next/image";
import HeroCTAs from "./HeroCTAs";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&q=80"
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy/60" />
      {/* Texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Decorative vertical line above eyebrow */}
        <div className="w-px h-16 bg-teal/40 mb-6 animate-fade-up" />

        <p className="text-teal text-sm md:text-base tracking-[0.25em] uppercase font-body mb-6 animate-fade-up-delay-1">
          Eugene, Oregon &middot; Est. 25+ Years
        </p>

        {/* Thin horizontal rule between eyebrow and headline */}
        <div className="w-24 border-t border-cream/20 mb-8 animate-fade-up-delay-1" />

        <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-semibold text-cream leading-tight animate-fade-up-delay-2">
          Don&apos;t Replace It&thinsp;&mdash;&thinsp;Renew It.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-cream/80 max-w-2xl mx-auto font-body leading-relaxed animate-fade-up-delay-3">
          Eugene&apos;s trusted carpet and upholstery cleaning specialists.
          Residential, commercial, and rental properties.
        </p>
        <div className="animate-fade-up-delay-3">
          <HeroCTAs />
        </div>
      </div>
    </section>
  );
}
