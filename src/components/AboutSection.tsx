import { FileText } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import miningImage from "@/assets/mining-about.jpg";
import aboutVertical from "@/assets/about-vertical.jpg";
import approach1 from "@/assets/approach-1.jpg";
import approach2 from "@/assets/approach-2.jpg";
import approach3 from "@/assets/approach-3.jpg";

const approachPoints = [
  "Responsible and compliant project participation",
  "Long-term asset value development",
  "Structured partnership models",
  "Alignment with international commercial standards",
];

const AboutSection = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="about" className="bg-background overflow-hidden">
      {/* Block 1 — Editorial About */}
      <div ref={parallaxRef} className="relative">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-[1fr_400px] gap-0 min-h-[700px]">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ amount: 0.2 }}
              className="py-24 md:py-32 pr-0 md:pr-16"
            >
              <p className="text-gold text-xs tracking-[0.2em] mb-4 font-sans">ABOUT US</p>
              <h2 className="font-serif text-foreground text-3xl md:text-4xl mb-8 leading-relaxed">
                Strategic Vision,<br />Disciplined Execution
              </h2>
              <p className="text-muted-foreground font-sans leading-relaxed mb-6">
                PT Aurum Italia Nusantara is an Indonesia-based company focused on gold and rare earth mineral ventures, mining partnerships, and strategic investment activities.
              </p>
              <p className="text-muted-foreground font-sans leading-relaxed mb-10">
                The company operates through a select network of licensed local partners, enabling the connection of Indonesian resource opportunities with international market interests.
                {"\n\n"}
                Our role is centred on identifying, evaluating, and supporting gold and rare earth mineral initiatives that demonstrate commercial viability, regulatory alignment, and long-term value potential.
              </p>

              {/* Prospectus Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{}}
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

            {/* Right: Tall vertical image with parallax */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ amount: 0.1 }}
              className="relative hidden md:block"
            >
              <div className="absolute inset-0 overflow-hidden">
                <motion.img
                  src={aboutVertical}
                  alt="Indonesian mining terrain"
                  className="w-full h-[120%] object-cover"
                  style={{ y: parallaxY }}
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/80" />
                <div className="absolute inset-0 bg-navy/20" />
              </div>
              {/* Gold accent line */}
              <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Block 2 — Our Approach */}
      <div className="py-24 md:py-32 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ amount: 0.2 }}
            >
              <p className="text-gold text-xs tracking-[0.2em] mb-4 font-sans">OUR APPROACH</p>
              <h2 className="font-serif text-foreground text-3xl md:text-4xl mb-8 leading-relaxed">
                Our Approach
              </h2>
              <p className="text-muted-foreground font-sans leading-relaxed mb-8">
                PT Aurum Italia Nusantara takes a disciplined approach to resource participation, combining local operational partnerships with international commercial alignment.
              </p>
              <p className="text-muted-foreground font-sans leading-relaxed mb-6">We focus on:</p>
              <ul className="space-y-4">
                {approachPoints.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * i + 0.3 }}
                    viewport={{}}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    <span className="text-muted-foreground font-sans text-sm leading-relaxed">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Right: Layered overlapping images */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ amount: 0.2 }}
              className="relative h-[500px]"
            >
              {/* Image 1 — back layer */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{}}
                className="absolute top-0 right-0 w-[65%] h-[60%] rounded-lg overflow-hidden shadow-2xl shadow-navy/30"
              >
                <img src={approach1} alt="Gold ore minerals" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-navy/15" />
              </motion.div>

              {/* Image 2 — middle layer */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                viewport={{}}
                className="absolute bottom-0 left-0 w-[60%] h-[55%] rounded-lg overflow-hidden shadow-2xl shadow-navy/30 z-10"
              >
                <img src={approach2} alt="Mining equipment at dusk" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-navy/15" />
              </motion.div>

              {/* Image 3 — top accent */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                viewport={{}}
                className="absolute bottom-[15%] right-[5%] w-[45%] h-[40%] rounded-lg overflow-hidden shadow-2xl shadow-navy/30 z-20"
              >
                <img src={approach3} alt="Aerial mineral formations" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-navy/10" />
              </motion.div>

              {/* Decorative gold corner */}
              <div className="absolute -top-3 -right-3 w-16 h-16 z-0">
                <div className="absolute top-0 right-0 w-full h-[2px] bg-gold/40" />
                <div className="absolute top-0 right-0 h-full w-[2px] bg-gold/40" />
              </div>
              <div className="absolute -bottom-3 -left-3 w-16 h-16 z-0">
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gold/40" />
                <div className="absolute bottom-0 left-0 h-full w-[2px] bg-gold/40" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
