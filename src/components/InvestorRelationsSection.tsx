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
    <section id="investors" className="py-24 md:py-32 bg-background">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
        <p className="text-gold text-xs tracking-[0.2em] mb-4 font-sans">INVESTOR RELATIONS</p>
        <h2 className="font-serif text-foreground text-3xl md:text-4xl mb-4 leading-tight">
          Guiding Principles
        </h2>
        <p className="text-muted-foreground font-sans max-w-2xl mx-auto mb-16">
          Our approach to investor engagement is underpinned by four core principles that shape every decision and partnership we pursue.
        </p>

        <div className="fade-in grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {principles.map((p) => (
            <div key={p.title} className="flex flex-col items-center text-center group border border-border bg-background p-8 md:p-10 hover:border-gold hover:bg-gold/5 hover:shadow-[0_8px_30px_-8px_hsl(var(--gold)/0.2)] transition-all duration-500 cursor-pointer">
              <div className="mb-5 text-gold group-hover:scale-110 transition-transform duration-500">
                <p.icon size={44} strokeWidth={1.3} />
              </div>
              <h3 className="font-serif text-foreground text-base md:text-lg mb-3 leading-snug">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestorRelationsSection;
