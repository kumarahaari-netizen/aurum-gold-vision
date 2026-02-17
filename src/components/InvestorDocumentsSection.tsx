import { FileText, Download } from "lucide-react";
import { motion } from "framer-motion";

const documents = [
  {
    title: "Prospectus Overview",
    desc: "Comprehensive overview of company strategy and market positioning.",
  },
  {
    title: "Investment Summary",
    desc: "Key investment highlights and financial structure outline.",
  },
  {
    title: "Project Brief — Indonesia Gold Opportunities",
    desc: "Detailed briefing on current gold exploration prospects.",
  },
  {
    title: "Strategic Materials Brief — Rare Earth Opportunities",
    desc: "Analysis of rare earth mineral market potential and projects.",
  },
];

const InvestorDocumentsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-navy">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold text-xs tracking-[0.2em] mb-4 font-sans">INVESTOR DOCUMENTS</p>
          <h2 className="font-serif text-ivory text-3xl md:text-4xl leading-tight">
            Key Documents
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {documents.map((doc, i) => (
            <motion.div
              key={doc.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.02, borderColor: "hsl(43 80% 50% / 0.4)" }}
              className="border border-ivory/10 p-6 flex flex-col transition-colors duration-300"
            >
              <div className="text-gold/60 mb-4">
                <FileText size={28} strokeWidth={1} />
              </div>
              <h3 className="font-serif text-ivory text-base mb-2">{doc.title}</h3>
              <p className="text-ivory/40 text-xs leading-relaxed mb-6 flex-1">{doc.desc}</p>
              <motion.button
                whileHover={{ x: 4 }}
                className="flex items-center gap-2 text-gold/70 hover:text-gold text-xs tracking-[0.1em] transition-colors duration-300 self-start"
              >
                <Download size={14} strokeWidth={1.5} />
                DOWNLOAD PDF
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(43 80% 50% / 0.2)" }}
            whileTap={{ scale: 0.97 }}
            className="border border-gold/40 text-gold hover:bg-gold/10 px-8 py-3 text-xs tracking-[0.2em] transition-all duration-300"
          >
            REQUEST FULL INVESTMENT MATERIALS
          </motion.button>
          <p className="text-ivory/30 text-xs font-sans mt-4 max-w-md mx-auto">
            Additional documentation may be provided upon request and subject to qualification.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestorDocumentsSection;
