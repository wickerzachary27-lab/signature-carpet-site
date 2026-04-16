import Image from "next/image";

interface GalleryImage {
  src: string;
  alt: string;
}

const IMAGES: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&q=80",
    alt: "Carpeted living room interior",
  },
  {
    src: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&q=80",
    alt: "Close-up carpet texture",
  },
  {
    src: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&q=80",
    alt: "Carpet cleaning in progress",
  },
  {
    src: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&q=80",
    alt: "Clean carpeted room",
  },
  {
    src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    alt: "Hotel room with clean carpet",
  },
  {
    src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&q=80",
    alt: "Clean bright carpeted room",
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
