import { FileText } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <div className="fade-in">
            <p className="text-gold text-xs tracking-[0.2em] mb-4 font-sans">ABOUT US</p>
            <h2 className="font-serif text-foreground text-3xl md:text-4xl mb-8 leading-tight">
              Strategic Vision,<br />Disciplined Execution
            </h2>
            <p className="text-muted-foreground font-sans leading-relaxed mb-6">
              PT Aurum Italia Nusantara operates at the intersection of Indonesia's rich mineral endowment and international capital markets. Our approach is rooted in disciplined due diligence, responsible partnership structures, and a long-term commitment to value creation.
            </p>
            <p className="text-muted-foreground font-sans leading-relaxed mb-10">
              We focus on gold and rare earth mineral opportunities, working alongside authorised local partners to ensure regulatory compliance and operational credibility at every stage.
            </p>

            {/* Prospectus Card */}
            <div className="border border-border p-6 flex items-start gap-4">
              <div className="mt-1 text-gold">
                <FileText size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-serif text-foreground text-lg mb-1">Company Prospectus</h3>
                <p className="text-muted-foreground text-sm mb-4">An overview of the company's positioning and strategic direction.</p>
                <button className="border border-gold/40 text-gold hover:bg-gold/10 px-5 py-2 text-xs tracking-[0.15em] transition-all duration-300">
                  CORPORATE PROSPECTUS — PDF — DOWNLOAD
                </button>
              </div>
            </div>
          </div>

          {/* Right: Abstract mineral visualization */}
          <div className="fade-in flex items-center justify-center">
            <div className="w-full aspect-square max-w-md bg-navy relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,_hsl(40_42%_56%_/_0.12)_0%,_transparent_60%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_60%,_hsl(40_42%_56%_/_0.08)_0%,_transparent_50%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,_transparent_40%,_hsl(40_42%_56%_/_0.05)_50%,_transparent_60%)]" />
              {/* Geometric lines */}
              <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 400">
                <line x1="80" y1="0" x2="320" y2="400" stroke="hsl(40 42% 56%)" strokeWidth="0.5" />
                <line x1="0" y1="120" x2="400" y2="280" stroke="hsl(40 42% 56%)" strokeWidth="0.5" />
                <circle cx="200" cy="200" r="80" fill="none" stroke="hsl(40 42% 56%)" strokeWidth="0.5" />
                <circle cx="200" cy="200" r="140" fill="none" stroke="hsl(40 42% 56%)" strokeWidth="0.3" />
              </svg>
              <div className="absolute bottom-6 left-6 right-6 text-ivory/30 text-xs tracking-[0.15em] font-sans">
                STRATEGIC MINERAL ASSETS
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
