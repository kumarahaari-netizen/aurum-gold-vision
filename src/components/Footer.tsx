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
      {/* Futuristic "Cyber-Grid" Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Perspective Grid */}
        <div 
          className="absolute inset-0 opacity-[0.08]" 
          style={{
            backgroundImage: `linear-gradient(hsl(var(--gold)/0.2) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--gold)/0.2) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            transform: 'perspective(500px) rotateX(60deg) translateY(-100px)',
            transformOrigin: 'top',
          }}
        />
        
        {/* Animated Data Flow Lines */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: '200%', opacity: [0, 1, 1, 0] }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                delay: i * 3,
                ease: "linear"
              }}
              className="absolute h-[1px] w-[300px] bg-gradient-to-r from-transparent via-gold to-transparent"
              style={{ top: `${15 + i * 15}%` }}
            />
          ))}
        </div>

        {/* Glowing Nodes (Diamonds) */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.4, 0.1] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 1.5,
              }}
              className="absolute w-1.5 h-1.5 rotate-45 bg-gold shadow-[0_0_10px_hsl(var(--gold))]"
              style={{ 
                top: `${Math.random() * 100}%`, 
                left: `${Math.random() * 100}%` 
              }}
            />
          ))}
        </div>

        {/* Digital Scanlines */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(var(--gold)) 2px, hsl(var(--gold)) 3px)',
            backgroundSize: '100% 4px'
          }}
        />
      </div>

      {/* Cyber Brackets / Geometric Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-gold/30 rounded-tl-xl" />
        <div className="absolute top-8 right-8 w-12 h-12 border-r-2 border-t-2 border-gold/30 rounded-tr-xl" />
        <div className="absolute bottom-8 left-8 w-12 h-12 border-l-2 border-b-2 border-gold/30 rounded-bl-xl" />
        <div className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-gold/30 rounded-br-xl" />
      </div>

      {/* Top data-bus line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent shadow-[0_0_15px_hsl(var(--gold)/0.3)]" />

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
