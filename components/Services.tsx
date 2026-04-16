import {
  Layers,
  Armchair,
  Rows3,
  Grid3x3,
  BedDouble,
  Scissors,
  Droplets,
  Shield,
  Building2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Service {
  name: string;
  description: string;
  Icon: LucideIcon;
}

const SERVICES: Service[] = [
  {
    name: "Carpet Cleaning",
    description:
      "Deep hot-water extraction that flushes out contaminants and restores your carpet's original vibrancy.",
    Icon: Layers,
  },
  {
    name: "Upholstery Cleaning",
    description:
      "Gentle yet thorough cleaning for sofas, chairs, and fabric furniture — extending their life and beauty.",
    Icon: Armchair,
  },
  {
    name: "Rug Cleaning",
    description:
      "Specialized care for area rugs of all types, from delicate orientals to modern synthetics.",
    Icon: Rows3,
  },
  {
    name: "Hardwood Floors",
    description:
      "Professional hardwood cleaning that removes buildup and brings back the natural shine.",
    Icon: Grid3x3,
  },
  {
    name: "Mattress Cleaning",
    description:
      "Eliminate dust mites, allergens, and stains for a healthier night's sleep.",
    Icon: BedDouble,
  },
  {
    name: "Carpet Repair",
    description:
      "Expert stretching, patching, and seam repair — saving you the cost of full replacement.",
    Icon: Scissors,
  },
  {
    name: "Stain Removal",
    description:
      "Targeted treatment for stubborn spots — pet stains, wine, coffee, and more.",
    Icon: Droplets,
  },
  {
    name: "Fiber Protectant",
    description:
      "A professional-grade coating that shields fibers from future spills and everyday wear.",
    Icon: Shield,
  },
  {
    name: "Commercial Cleaning",
    description:
      "Large-scale cleaning for offices, retail spaces, and institutions — fast turnaround, minimal disruption.",
    Icon: Building2,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-navy text-center mb-16">
          What We Clean
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.name}
              className="bg-white rounded-lg p-8 border border-transparent hover:border-teal hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <service.Icon className="text-teal mb-4" size={32} strokeWidth={1.5} />
              <h3 className="font-display text-xl font-semibold text-navy mb-2">
                {service.name}
              </h3>
              <p className="text-navy/70 font-body text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
