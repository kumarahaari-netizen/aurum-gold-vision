const focusAreas = [
  "Gold exploration prospects and rare earth exploration prospects",
  "Cooperation with authorised local partners",
  "Structuring of compliant participation models",
  "Coordination of commercial pathways for future production",
];

const OperationsSection = () => {
  return (
    <section id="operations" className="py-24 md:py-32 bg-navy">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <p className="text-gold text-xs tracking-[0.2em] mb-4 font-sans">OPERATIONS & PROJECTS</p>

        <div className="grid md:grid-cols-2 gap-16 mt-8">
          {/* Left: Intro */}
          <div className="fade-in">
            <h2 className="font-serif text-ivory text-3xl md:text-4xl mb-8 leading-tight">
              Focused on Indonesia's<br />Mineral Wealth
            </h2>
            <p className="text-ivory/50 font-sans leading-relaxed">
              Our operational framework centres on identifying, evaluating, and structuring participation in gold and rare earth mineral opportunities across Indonesia. Every project is approached with institutional rigour and a commitment to sustainable, compliant practices.
            </p>
          </div>

          {/* Right: Focus Areas Box */}
          <div className="fade-in">
            <div className="border border-ivory/10 p-8">
              <h3 className="font-serif text-ivory text-xl mb-6">Operational Focus Areas</h3>
              <ul className="space-y-4">
                {focusAreas.map((area, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    <span className="text-ivory/60 font-sans text-sm leading-relaxed">{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className="text-ivory/30 text-xs font-sans mt-12 max-w-3xl leading-relaxed">
          Each opportunity is reviewed with emphasis on regulatory compliance, operational credibility, and sustainable economic value.
        </p>
      </div>
    </section>
  );
};

export default OperationsSection;
