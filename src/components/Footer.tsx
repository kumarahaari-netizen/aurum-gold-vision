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
      {/* Wavy stripe pattern - multiple flowing waves */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 1440 400">
        <defs>
          <linearGradient id="waveGold1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(43, 80%, 50%)" stopOpacity="0.06" />
            <stop offset="50%" stopColor="hsl(43, 80%, 50%)" stopOpacity="0.12" />
            <stop offset="100%" stopColor="hsl(43, 80%, 50%)" stopOpacity="0.04" />
          </linearGradient>
          <linearGradient id="waveGold2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(43, 80%, 50%)" stopOpacity="0.04" />
            <stop offset="50%" stopColor="hsl(43, 80%, 50%)" stopOpacity="0.08" />
            <stop offset="100%" stopColor="hsl(43, 80%, 50%)" stopOpacity="0.06" />
          </linearGradient>
        </defs>
        {/* Wave 1 */}
        <path d="M0,80 C240,140 480,20 720,80 C960,140 1200,20 1440,80 L1440,100 C1200,40 960,160 720,100 C480,40 240,160 0,100 Z" fill="url(#waveGold1)" />
        {/* Wave 2 */}
        <path d="M0,140 C320,200 640,100 960,160 C1120,190 1280,120 1440,150 L1440,170 C1280,140 1120,210 960,180 C640,120 320,220 0,160 Z" fill="url(#waveGold2)" />
        {/* Wave 3 */}
        <path d="M0,220 C200,260 400,200 600,240 C800,280 1000,210 1200,250 C1320,270 1380,240 1440,260 L1440,280 C1380,260 1320,290 1200,270 C1000,230 800,300 600,260 C400,220 200,280 0,240 Z" fill="url(#waveGold1)" />
        {/* Wave 4 */}
        <path d="M0,300 C360,340 720,280 1080,320 C1260,340 1360,310 1440,330 L1440,350 C1360,330 1260,360 1080,340 C720,300 360,360 0,320 Z" fill="url(#waveGold2)" />
        {/* Wave 5 - subtle bottom */}
        <path d="M0,360 C180,380 360,350 540,370 C720,390 900,355 1080,375 C1260,395 1350,365 1440,380 L1440,400 C1350,385 1260,400 1080,395 C900,375 720,400 540,390 C360,370 180,400 0,380 Z" fill="url(#waveGold1)" />
      </svg>

      {/* Flowing horizontal stripe lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[200%] h-[1px] top-[15%] left-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent" style={{ transform: 'rotate(-2deg)' }} />
        <div className="absolute w-[200%] h-[1px] top-[30%] left-[-20%] bg-gradient-to-r from-transparent via-gold/8 to-transparent" style={{ transform: 'rotate(1.5deg)' }} />
        <div className="absolute w-[200%] h-[1px] top-[50%] left-[-10%] bg-gradient-to-r from-transparent via-gold/6 to-transparent" style={{ transform: 'rotate(-1deg)' }} />
        <div className="absolute w-[200%] h-[1px] top-[70%] left-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent" style={{ transform: 'rotate(2deg)' }} />
        <div className="absolute w-[200%] h-[1px] top-[85%] left-[-15%] bg-gradient-to-r from-transparent via-gold/7 to-transparent" style={{ transform: 'rotate(-1.5deg)' }} />
      </div>

      {/* Top gold accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

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
