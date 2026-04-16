const STATS = [
  { number: "25+", label: "Years in Business" },
  { number: "2,000+", label: "Rental Units Served" },
  { number: "3", label: "Major Eugene Institutions" },
];

export default function TrustBar() {
  return (
    <section className="bg-navy py-16">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <p className="font-display text-5xl md:text-6xl font-semibold text-teal">
              {stat.number}
            </p>
            <p className="mt-2 text-cream/70 text-sm tracking-wide uppercase font-body">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
