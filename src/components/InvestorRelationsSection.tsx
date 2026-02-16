import { Shield, BarChart3, AlertTriangle, Target } from "lucide-react";

const principles = [
  {
    icon: Shield,
    title: "Regulatory Compliance",
    desc: "Full alignment with Indonesian regulatory frameworks",
  },
  {
    icon: BarChart3,
    title: "Commercial Clarity",
    desc: "Transparent structuring of all investment pathways",
  },
  {
    icon: AlertTriangle,
    title: "Risk-Aware Structuring",
    desc: "Measured approach to opportunity evaluation",
  },
  {
    icon: Target,
    title: "Long-Term Alignment",
    desc: "Partnerships built for sustained value creation",
  },
];

const InvestorRelationsSection = () => {
  return (
    <section id="investors" className="py-24 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <p className="text-gold text-xs tracking-[0.2em] mb-4 font-sans">INVESTOR RELATIONS</p>
        <h2 className="font-serif text-ivory text-3xl md:text-4xl mb-4 leading-tight">
          Guiding Principles
        </h2>
        <p className="text-ivory/50 font-sans max-w-2xl mx-auto mb-16">
          Our approach to investor engagement is underpinned by four core principles that shape every decision and partnership we pursue.
        </p>

        <div className="fade-in grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {principles.map((p) => (
            <div key={p.title} className="flex flex-col items-center text-center group">
              <div className="mb-4 text-gold/70 group-hover:text-gold transition-colors duration-300">
                <p.icon size={32} strokeWidth={1} />
              </div>
              <h3 className="font-serif text-ivory text-sm md:text-base mb-2">{p.title}</h3>
              <p className="text-ivory/40 text-xs leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestorRelationsSection;
