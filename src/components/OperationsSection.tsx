import { motion } from "framer-motion";
import opsExploration from "@/assets/ops-exploration.jpg";
import opsPartnership from "@/assets/ops-partnership.jpg";
import opsProcessing from "@/assets/ops-processing.jpg";

const focusAreas = [
  "Gold exploration prospects and rare earth exploration prospects",
  "Cooperation with authorised local partners",
  "Structuring of compliant participation models",
  "Coordination of commercial pathways for future production",
];

const images = [
  { src: opsExploration, alt: "Gold ore exploration in Indonesian jungle", caption: "Field Exploration" },
  { src: opsPartnership, alt: "Indonesian local mining community partnership", caption: "Local Partnerships" },
  { src: opsProcessing, alt: "Gold processing facility", caption: "Processing & Development" },
];

const OperationsSection = () => {
  return (
    <section id="operations" className="py-24 md:py-32 bg-navy">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gold text-xs tracking-[0.2em] mb-4 font-sans"
        >
          OPERATIONS & PROJECTS
        </motion.p>

        <div className="grid md:grid-cols-2 gap-16 mt-8">
          {/* Left: Intro */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="font-serif text-ivory text-3xl md:text-4xl mb-8 leading-relaxed">
              Focused on Indonesia's<br />Mineral Wealth
            </h2>
            <p className="text-ivory/50 font-sans leading-relaxed">
              Our activities include the evaluation and participation in gold and rare earth mineral exploration and development opportunities across Indonesia.
              {"\n\n"}
              PT Aurum Italia Nusantara collaborates with licensed concession holders, local operators, and industry stakeholders to support compliant project development.
            </p>
          </motion.div>

          {/* Right: Focus Areas Box */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="border border-ivory/10 p-8">
              <h3 className="font-serif text-ivory text-xl mb-6">Operational Focus Areas</h3>
              <ul className="space-y-4">
                {focusAreas.map((area, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * i + 0.4 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    <span className="text-ivory/60 font-sans text-sm leading-relaxed">{area}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Photo Gallery — Modern staggered layout */}
        <div className="mt-16 grid grid-cols-3 gap-4 md:gap-6 items-end">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 * i }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -8 }}
              className={`relative group overflow-hidden ${
                i === 1 ? "row-span-1 -mt-8" : ""
              }`}
              style={{ height: i === 1 ? "340px" : "280px" }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Diagonal clip overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-12 h-12">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gold/60" />
                <div className="absolute top-0 left-0 h-full w-[2px] bg-gold/60" />
              </div>
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-ivory/90 font-sans text-xs tracking-[0.15em] uppercase">{img.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-ivory/30 text-xs font-sans mt-12 max-w-3xl leading-relaxed"
        >
          Each opportunity is reviewed with emphasis on regulatory compliance, operational credibility, and sustainable economic value.
        </motion.p>
      </div>
    </section>
  );
};

export default OperationsSection;
