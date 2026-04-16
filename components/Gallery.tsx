import Image from "next/image";

interface GalleryImage {
  src: string;
  alt: string;
}

const IMAGES: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
    alt: "Professional carpet cleaning in progress",
  },
  {
    src: "https://images.unsplash.com/photo-1527515545081-5db817172677?w=800&q=80",
    alt: "Bright clean living room with freshly cleaned carpet",
  },
  {
    src: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&q=80",
    alt: "Clean residential interior",
  },
  {
    src: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800&q=80",
    alt: "Freshly cleaned bright living room",
  },
  {
    src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    alt: "Clean sofa and upholstery after professional cleaning",
  },
  {
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    alt: "Clean bright interior",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="w-16 h-0.5 bg-teal mx-auto mb-6" />
        <h2 className="font-display text-4xl md:text-6xl font-semibold text-cream text-center mb-4">
          Our Work
        </h2>
        <p className="text-cream/70 font-body text-center max-w-xl mx-auto mb-16">
          Professional results in Eugene homes and businesses.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {IMAGES.map((img) => (
            <div
              key={img.src}
              className="group relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/30 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
