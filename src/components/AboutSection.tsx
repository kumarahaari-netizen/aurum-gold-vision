import { FileText } from "lucide-react";
import { motion } from "framer-motion";
import miningImage from "@/assets/mining-about.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="text-gold text-xs tracking-[0.2em] mb-4 font-sans">ABOUT US</p>
            <h2 className="font-serif text-foreground text-3xl md:text-4xl mb-8 leading-relaxed">
              Strategic Vision,<br />Disciplined Execution
            </h2>
            <p className="text-muted-foreground font-sans leading-relaxed mb-6">PT Aurum Italia Nusantara is an Indonesia-based company focused on gold and rare earth mineral ventures, mining partnerships, and strategic investment activities.
            </p>
            <p className="text-muted-foreground font-sans leading-relaxed mb-10">The company operates through a select network of licensed local partners, enabling the connection of Indonesian resource opportunities with international market interests.

Our role is centred on identifying, evaluating, and supporting gold and rare earth mineral initiatives that demonstrate commercial viability, regulatory alignment, and long-term value potential.</p>

            {/* Prospectus Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="border border-border p-6 flex items-start gap-4"
            >
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
            </motion.div>
          </motion.div>

          {/* Right: Mining image with futuristic pattern */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Futuristic grid pattern background */}
              <div className="absolute -inset-8 z-0">
                {/* Radial glow */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--gold)/0.12)_0%,_transparent_70%)]" />
                {/* Horizontal scan lines */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 3px, hsl(var(--gold) / 0.15) 3px, hsl(var(--gold) / 0.15) 4px)`,
                  }}
                />
                {/* Vertical scan lines */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 20px, hsl(var(--gold) / 0.2) 20px, hsl(var(--gold) / 0.2) 21px)`,
                  }}
                />
              </div>

              {/* Animated corner accents - futuristic brackets */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute -top-3 -left-3 w-16 h-16 z-10 origin-left"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gold" />
                <div className="absolute top-0 left-0 h-full w-[2px] bg-gold" />
                <div className="absolute top-[6px] left-[6px] w-2 h-2 bg-gold/50" />
              </motion.div>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="absolute -top-3 -right-3 w-16 h-16 z-10 origin-right"
              >
                <div className="absolute top-0 right-0 w-full h-[2px] bg-gold" />
                <div className="absolute top-0 right-0 h-full w-[2px] bg-gold" />
                <div className="absolute top-[6px] right-[6px] w-2 h-2 bg-gold/50" />
              </motion.div>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="absolute -bottom-3 -left-3 w-16 h-16 z-10 origin-left"
              >
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gold" />
                <div className="absolute bottom-0 left-0 h-full w-[2px] bg-gold" />
                <div className="absolute bottom-[6px] left-[6px] w-2 h-2 bg-gold/50" />
              </motion.div>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute -bottom-3 -right-3 w-16 h-16 z-10 origin-right"
              >
                <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gold" />
                <div className="absolute bottom-0 right-0 h-full w-[2px] bg-gold" />
                <div className="absolute bottom-[6px] right-[6px] w-2 h-2 bg-gold/50" />
              </motion.div>

              {/* Hexagonal dot pattern emerging from edges */}
              <div className="absolute -right-10 top-1/4 w-20 h-40 z-0 opacity-40"
                style={{
                  backgroundImage: "radial-gradient(circle, hsl(var(--gold)) 1.5px, transparent 1.5px)",
                  backgroundSize: "10px 10px",
                  maskImage: "linear-gradient(to left, transparent, black 60%)",
                  WebkitMaskImage: "linear-gradient(to left, transparent, black 60%)",
                }}
              />
              <div className="absolute -left-10 bottom-1/4 w-20 h-40 z-0 opacity-30"
                style={{
                  backgroundImage: "radial-gradient(circle, hsl(var(--gold)) 1.5px, transparent 1.5px)",
                  backgroundSize: "10px 10px",
                  maskImage: "linear-gradient(to right, transparent, black 60%)",
                  WebkitMaskImage: "linear-gradient(to right, transparent, black 60%)",
                }}
              />

              {/* Glowing edge lines */}
              <div className="absolute top-1/2 -right-6 w-12 h-[1px] bg-gradient-to-r from-gold/60 to-transparent z-10" />
              <div className="absolute top-1/3 -right-8 w-16 h-[1px] bg-gradient-to-r from-gold/40 to-transparent z-10" />
              <div className="absolute top-2/3 -left-6 w-12 h-[1px] bg-gradient-to-l from-gold/60 to-transparent z-10" />

              {/* Image with clip reveal */}
              <motion.div
                initial={{ clipPath: "inset(50% 50% 50% 50%)" }}
                whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                className="relative aspect-[3/4] overflow-hidden z-[1]"
              >
                <img
                  src={miningImage}
                  alt="Gold mining operations in Indonesia"
                  className="w-full h-full object-cover"
                />
                {/* Futuristic overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-gold/5" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
