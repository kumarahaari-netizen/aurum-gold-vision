import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "About Us", href: "#about" },
  { label: "Operations", href: "#operations" },
  { label: "Investors", href: "#investors" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-navy py-12 border-t border-ivory/5 overflow-hidden">
      {/* Multi-layer pattern design */}

      {/* Layer 1: Fine dot grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(var(--gold)) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Layer 2: Diagonal lines */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 30px, hsl(var(--gold) / 0.3) 30px, hsl(var(--gold) / 0.3) 31px)`,
        }}
      />

      {/* Layer 3: Reverse diagonal lines for cross-hatch */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 30px, hsl(var(--gold) / 0.3) 30px, hsl(var(--gold) / 0.3) 31px)`,
        }}
      />

      {/* Layer 4: Horizontal accent lines */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 60px, hsl(var(--ivory) / 0.2) 60px, hsl(var(--ivory) / 0.2) 61px)`,
        }}
      />

      {/* Top gold accent lines */}
      <div className="absolute top-0 left-6 md:left-12 w-24 h-[2px] bg-gold/40" />
      <div className="absolute top-0 right-6 md:right-12 w-16 h-[2px] bg-gold/20" />
      <div className="absolute top-[3px] left-6 md:left-12 w-16 h-[1px] bg-gold/15" />

      {/* Corner geometric accents */}
      <div className="absolute top-4 left-4 w-8 h-8 pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gold" />
        <div className="absolute top-0 left-0 h-full w-[1px] bg-gold" />
      </div>
      <div className="absolute top-4 right-4 w-8 h-8 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-full h-[1px] bg-gold" />
        <div className="absolute top-0 right-0 h-full w-[1px] bg-gold" />
      </div>
      <div className="absolute bottom-4 left-4 w-8 h-8 pointer-events-none opacity-20">
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gold" />
        <div className="absolute bottom-0 left-0 h-full w-[1px] bg-gold" />
      </div>
      <div className="absolute bottom-4 right-4 w-8 h-8 pointer-events-none opacity-20">
        <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gold" />
        <div className="absolute bottom-0 right-0 h-full w-[1px] bg-gold" />
      </div>

      {/* Radial glow accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-[radial-gradient(ellipse_at_top,_hsl(var(--gold)/0.06)_0%,_transparent_70%)] pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10"
        >
          {/* Brand */}
          <div>
            <div className="gap-3 mb-4 flex-row flex items-end justify-start">
              <img alt="PT Aurum Italia Nusantara" className="h-14 w-14 object-contain" src="/lovable-uploads/fdd6b1c1-f6f1-43ac-8670-b5ceafabbed8.svg" />
            </div>
            <p className="text-ivory/40 font-sans text-xs leading-relaxed max-w-xs">
              Connecting Indonesia's gold potential with global capital through disciplined partnerships and responsible practices.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h4 className="font-serif text-ivory text-sm mb-4 tracking-wide text-center">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label} className="text-left">
                  <a
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className="text-ivory/40 hover:text-gold text-xs font-sans transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-ivory text-sm mb-4 tracking-wide">Contact</h4>
            <div className="text-ivory/40 font-sans text-xs leading-relaxed space-y-1">
              <p>Jl. Tjilik Riwut Km 1 No. 1</p>
              <p>Palangkaraya, Central Kalimantan 73112</p>
              <p>Indonesia</p>
            </div>
            <a
              href="mailto:info@aurumitalia.co.id"
              className="text-ivory/40 hover:text-gold text-xs font-sans transition-colors duration-300 mt-3 inline-block"
            >
              info@aurumitalia.co.id
            </a>
            <a
              href="tel:+628123456789"
              className="text-ivory/40 hover:text-gold text-xs font-sans transition-colors duration-300 mt-1 block"
            >
              +62 812 3456 7890
            </a>
            <a
              href="https://www.google.com/maps/place/Jl.+Tjilik+Riwut+No.Km.+1,+Palangka+Raya,+Kalimantan+Tengah+73112,+Indonesia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-ivory/40 hover:text-gold text-xs font-sans transition-colors duration-300 mt-3"
            >
              <MapPin size={14} strokeWidth={1.5} />
              View on Map
            </a>
          </div>
        </motion.div>

        {/* Bottom bar with decorative divider */}
        <div className="relative border-t border-ivory/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Small diamond accent on the divider */}
          <div className="absolute -top-[5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 rotate-45 bg-gold/30 border border-ivory/10" />
          {/* Additional diamonds */}
          <div className="absolute -top-[3px] left-1/2 -translate-x-1/2 ml-6 w-1.5 h-1.5 rotate-45 bg-gold/15" />
          <div className="absolute -top-[3px] left-1/2 -translate-x-1/2 -ml-6 w-1.5 h-1.5 rotate-45 bg-gold/15" />

          <p className="text-ivory/25 font-sans text-xs leading-relaxed">
            All activities are conducted in accordance with applicable Indonesian laws and regulations.
          </p>
          <p className="text-ivory/25 font-sans text-xs leading-relaxed">
            &copy; {new Date().getFullYear()} PT Aurum Italia Nusantara. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
