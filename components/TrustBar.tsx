const STATS = [
  { number: "25+", label: "Years in Business" },
  { number: "2,000+", label: "Rental Units Served" },
  { number: "3", label: "Major Eugene Institutions" },
];

export default function TrustBar() {
  return (
    <section className="bg-navy py-16 border-y border-cream/10">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:divide-x md:divide-teal/30">
        {STATS.map((stat) => (
          <div key={stat.label} className="md:px-6">
            <p className="font-display text-6xl sm:text-7xl font-semibold text-teal">
              {stat.number}
            </p>
            <p className="mt-3 text-cream/70 text-sm tracking-[0.2em] uppercase font-body">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
