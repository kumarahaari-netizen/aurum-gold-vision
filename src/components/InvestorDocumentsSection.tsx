import { FileText, Download } from "lucide-react";

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
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="text-gold text-xs tracking-[0.2em] mb-4 font-sans">INVESTOR DOCUMENTS</p>
          <h2 className="font-serif text-ivory text-3xl md:text-4xl leading-tight">
            Key Documents
          </h2>
        </div>

        <div className="fade-in grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {documents.map((doc) => (
            <div
              key={doc.title}
              className="border border-ivory/10 p-6 flex flex-col hover:border-gold/30 transition-colors duration-300"
            >
              <div className="text-gold/60 mb-4">
                <FileText size={28} strokeWidth={1} />
              </div>
              <h3 className="font-serif text-ivory text-base mb-2">{doc.title}</h3>
              <p className="text-ivory/40 text-xs leading-relaxed mb-6 flex-1">{doc.desc}</p>
              <button className="flex items-center gap-2 text-gold/70 hover:text-gold text-xs tracking-[0.1em] transition-colors duration-300 self-start">
                <Download size={14} strokeWidth={1.5} />
                DOWNLOAD PDF
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="border border-gold/40 text-gold hover:bg-gold/10 px-8 py-3 text-xs tracking-[0.2em] transition-all duration-300">
            REQUEST FULL INVESTMENT MATERIALS
          </button>
          <p className="text-ivory/30 text-xs font-sans mt-4 max-w-md mx-auto">
            Additional documentation may be provided upon request and subject to qualification.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InvestorDocumentsSection;
