import { FileText } from "lucide-react";
import miningImage from "@/assets/mining-about.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div className="fade-in">
            <p className="text-gold text-xs tracking-[0.2em] mb-4 font-sans">ABOUT US</p>
            <h2 className="font-serif text-foreground text-3xl md:text-4xl mb-8 leading-relaxed">
              Strategic Vision,<br />Disciplined Execution
            </h2>
            <p className="text-muted-foreground font-sans leading-relaxed mb-6">PT Aurum Italia Nusantara is an Indonesia-based company focused on gold and rare earth mineral ventures, mining partnerships, and strategic investment activities.
            </p>
            <p className="text-muted-foreground font-sans leading-relaxed mb-10">The company operates through a select network of licensed local partners, enabling the connection of Indonesian resource opportunities with international market interests.

Our role is centred on identifying, evaluating, and supporting gold and rare earth mineral initiatives that demonstrate commercial viability, regulatory alignment, and long-term value potential.</p>

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

          {/* Right: Mining image with decorative pattern frame */}
          <div className="fade-in flex items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Decorative corner brackets */}
              <div className="absolute -top-4 -left-4 w-20 h-20 z-10">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gold/70" />
                <div className="absolute top-0 left-0 h-full w-[2px] bg-gold/70" />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 z-10">
                <div className="absolute top-0 right-0 w-full h-[2px] bg-gold/70" />
                <div className="absolute top-0 right-0 h-full w-[2px] bg-gold/70" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 z-10">
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gold/70" />
                <div className="absolute bottom-0 left-0 h-full w-[2px] bg-gold/70" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 z-10">
                <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gold/70" />
                <div className="absolute bottom-0 right-0 h-full w-[2px] bg-gold/70" />
              </div>

              {/* Offset background pattern */}
              <div className="absolute top-3 left-3 w-full h-full border border-gold/20 -z-0" />

              {/* Dot pattern accent */}
              <div className="absolute -right-6 top-1/4 w-16 h-32 z-0 opacity-30"
                style={{
                  backgroundImage: "radial-gradient(circle, hsl(var(--gold)) 1px, transparent 1px)",
                  backgroundSize: "8px 8px",
                }}
              />

              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden z-[1]">
                <img
                  src={miningImage}
                  alt="Gold mining operations in Indonesia"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
