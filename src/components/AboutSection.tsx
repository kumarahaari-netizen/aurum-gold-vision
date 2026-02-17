import { FileText } from "lucide-react";
import miningImage from "@/assets/mining-about.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
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

          {/* Right: Mining image */}
          <div className="fade-in flex items-center justify-center">
            <div className="w-full aspect-square max-w-md overflow-hidden relative">
              <img
                src={miningImage}
                alt="Gold mining operations in Indonesia"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 text-ivory/80 text-xs tracking-[0.15em] font-sans bg-navy/60 backdrop-blur-sm px-3 py-2">
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
