import { Building2, KeyRound, BookOpen, Mountain } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Credential {
  Icon: LucideIcon;
  headline: string;
  body: string;
}

const CREDENTIALS: Credential[] = [
  {
    Icon: Building2,
    headline: "City of Eugene",
    body: "Trusted by the City of Eugene for municipal facilities — held to the highest standard of cleanliness and professionalism.",
  },
  {
    Icon: KeyRound,
    headline: "2,000+ Rental Units",
    body: "The go-to carpet cleaning service for Eugene and Springfield's property managers. Fast turnaround, consistent results, every time.",
  },
  {
    Icon: BookOpen,
    headline: "Eugene Public Library",
    body: "Cleaning high-traffic public spaces requires expertise. Signature delivers spotless results in environments where it matters most.",
  },
  {
    Icon: Mountain,
    headline: "Hoodoo Ski Area Lodge",
    body: "A 60,000 sq ft lodge cleaned to resort standards. If we can handle that, we can handle anything in your home or office.",
  },
];

export default function Credentials() {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="w-16 h-0.5 bg-teal mx-auto mb-6" />
        <h2 className="font-display text-4xl md:text-6xl font-semibold text-navy text-center mb-4">
          Why Eugene Trusts Signature
        </h2>
        <p className="text-navy/70 font-body text-center max-w-xl mx-auto mb-16">
          25+ years of results that speak for themselves.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {CREDENTIALS.map((c) => (
            <div
              key={c.headline}
              className="bg-white rounded-xl shadow-sm hover:shadow-md p-10 border-l-4 border-teal transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-full bg-teal/10 flex items-center justify-center mb-5">
                <c.Icon className="text-teal" size={26} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-2xl font-semibold text-navy mb-3">
                {c.headline}
              </h3>
              <p className="text-navy/70 font-body leading-relaxed">
                {c.body}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-16 font-display italic text-2xl text-navy/60 text-center">
          Don&apos;t replace it &mdash; renew it. Serving Eugene since 1998.
        </p>
      </div>
    </section>
  );
}
