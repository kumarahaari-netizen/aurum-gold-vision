import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "ABOUT", href: "#about" },
  { label: "OPERATIONS", href: "#operations" },
  { label: "INVESTORS", href: "#investors" },
  { label: "CONTACT", href: "#contact" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-navy/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between h-20 md:h-22">
        <a href="#hero" onClick={(e) => handleClick(e, "#hero")} className="flex items-center gap-2 min-w-0">
          <img alt="PT Aurum Italia Nusantara" className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 object-contain flex-shrink-0" src="/lovable-uploads/ce8906e1-86ae-4e98-bc2a-41419ccbebea.svg" />
          <span className="font-serif text-ivory text-[11px] sm:text-sm md:text-base tracking-wider leading-tight whitespace-nowrap">PT Aurum Italia Nusantara</span>
        </a>
        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * i + 0.5 }}
              whileHover={{ color: "hsl(43, 80%, 50%)" }}
              className="text-ivory/70 text-xs tracking-[0.2em] transition-colors duration-300"
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-ivory/70 hover:text-gold transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-navy/95 backdrop-blur-sm border-t border-ivory/10 px-6 py-6 flex flex-col gap-4 overflow-hidden"
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.05 * i }}
                className="text-ivory/70 hover:text-gold text-xs tracking-[0.2em] transition-colors duration-300"
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
