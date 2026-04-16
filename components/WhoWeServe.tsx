import { ShieldCheck, Building2, Key } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ClientType {
  label: string;
  Icon: LucideIcon;
}

const CLIENT_TYPES: ClientType[] = [
  { label: "Residential Homes", Icon: ShieldCheck },
  { label: "Commercial Properties", Icon: Building2 },
  { label: "Property Managers & Rentals", Icon: Key },
];

export default function WhoWeServe() {
  return (
    <section id="about" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="w-16 h-0.5 bg-teal mx-auto mb-6" />
        <h2 className="font-display text-4xl md:text-6xl font-semibold text-navy text-center mb-16">
          Built for Eugene
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div
            className="p-8 md:p-10 rounded-2xl"
            style={{
              background:
                "radial-gradient(ellipse at top left, rgba(45,158,142,0.08) 0%, transparent 60%)",
            }}
          >
            <p className="text-navy/70 font-body text-lg leading-relaxed">
              For over 25 years, Signature has been the quiet backbone of
              Eugene&apos;s rental market, commercial spaces, and family homes.
              We&apos;ve cleaned for the City of Eugene, the Eugene Public
              Library, and the 60,000-square-foot lodge at Hoodoo Ski Area. Our
              state-of-the-art hot-water extraction technology reaches deep into
              carpet fibers, flushing out unhealthy contaminants and lifting
              stains others leave behind.
            </p>
            <p className="mt-6 text-navy/70 font-body text-lg leading-relaxed">
              When it matters, Eugene calls Signature.
            </p>
          </div>
          <div className="grid gap-4">
            {CLIENT_TYPES.map((type) => (
              <div
                key={type.label}
                className="flex items-center gap-5 bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center">
                  <type.Icon className="text-teal" size={24} strokeWidth={1.5} />
                </div>
                <span className="font-display text-lg font-semibold text-navy">
                  {type.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
