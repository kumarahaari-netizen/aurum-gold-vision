import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import strategicMinerals from "@/assets/strategic-minerals.jpg";

const sectors = [
  "Advanced manufacturing",
  "Renewable energy systems",
  "Electronics and infrastructure",
];

const StrategicMineralSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-0 items-stretch min-h-[550px]">
          {/* Left: Large image with parallax */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative overflow-hidden rounded-sm"
          >
            <motion.img
              src={strategicMinerals}
              alt="Rare earth and strategic mineral specimens"
              className="w-full h-[120%] object-cover"
              style={{ y: imgY }}
            />
            <div className="absolute inset-0 bg-navy/20" />
          </motion.div>

          {/* Gold divider */}
          <div className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2 h-full z-10 pointer-events-none" style={{ position: "relative", width: 0 }}>
          </div>

          {/* Right: Text with gold divider */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex items-center relative"
          >
            {/* Vertical gold divider */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="hidden md:block absolute left-0 top-[10%] h-[80%] w-[2px] bg-gradient-to-b from-transparent via-gold/60 to-transparent origin-top"
            />

            <div className="md:pl-16 py-12">
              <p className="text-gold text-xs tracking-[0.2em] mb-4 font-sans">STRATEGIC RESOURCES</p>
              <h2 className="font-serif text-foreground text-3xl md:text-4xl mb-8 leading-relaxed">
                Strategic Mineral<br />Focus
              </h2>
              <p className="text-muted-foreground font-sans leading-relaxed mb-8">
                PT Aurum Italia Nusantara's activities extend beyond gold into rare earth and strategic minerals that are critical to global industrial and technology supply chains.
              </p>
              <p className="text-muted-foreground font-sans leading-relaxed mb-6">
                These materials support sectors such as:
              </p>
              <ul className="space-y-4 mb-8">
                {sectors.map((sector, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * i + 0.4 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    <span className="text-muted-foreground font-sans text-sm leading-relaxed">{sector}</span>
                  </motion.li>
                ))}
              </ul>
              <p className="text-muted-foreground font-sans leading-relaxed">
                Our involvement is focused on responsible sourcing, structured participation, and long-term resource value alignment.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StrategicMineralSection;
