import { Star } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  type: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Our rental units have used Signature for years. They show up on time, do excellent work, and leave every unit guest-ready. Wouldn't use anyone else.",
    name: "Portland Property Management Co.",
    type: "Property Management",
  },
  {
    quote:
      "I was ready to replace the carpet entirely. Signature saved it. Stains I thought were permanent are completely gone.",
    name: "Sarah T., Eugene",
    type: "Residential",
  },
  {
    quote:
      "The team cleaned our entire office — fast, professional, and the carpet looks brand new. Highly recommend for commercial work.",
    name: "Local Eugene Business Owner",
    type: "Commercial",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-navy text-center mb-16">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-navy rounded-lg p-8 flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="text-teal fill-teal"
                    size={18}
                  />
                ))}
              </div>
              <blockquote className="text-cream/90 font-body leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-6 pt-4 border-t border-cream/10">
                <p className="text-cream font-display font-semibold">
                  {t.name}
                </p>
                <p className="text-cream/50 text-sm font-body">{t.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
