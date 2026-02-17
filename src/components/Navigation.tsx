import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";

const navItems = [
{ label: "HOME", href: "#hero" },
{ label: "ABOUT", href: "#about" },
{ label: "OPERATIONS", href: "#operations" },
{ label: "INVESTORS", href: "#investors" },
{ label: "CONTACT", href: "#contact" }];


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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "bg-navy/95 backdrop-blur-sm shadow-lg" : "bg-transparent"}`
      }>

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        <a href="#hero" onClick={(e) => handleClick(e, "#hero")} className="flex items-center gap-2">
          <img src={logo} alt="PT Aurum Italia Nusantara" className="h-10 w-auto" />
          <span className="font-serif text-ivory text-sm md:text-base tracking-wider hidden sm:inline">PT Aurum Italia Nusantara</span>
        </a>
        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) =>
          <a
            key={item.label}
            href={item.href}
            onClick={(e) => handleClick(e, item.href)}
            className="text-ivory/70 hover:text-gold text-xs tracking-[0.2em] transition-colors duration-300">

              {item.label}
            </a>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-ivory/70 hover:text-gold transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu">

          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {mobileOpen ?
            <path d="M6 6l12 12M6 18L18 6" /> :

            <path d="M4 8h16M4 16h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen &&
      <div className="md:hidden bg-navy/95 backdrop-blur-sm border-t border-ivory/10 px-6 py-6 flex flex-col gap-4">
          {navItems.map((item) =>
        <a
          key={item.label}
          href={item.href}
          onClick={(e) => handleClick(e, item.href)}
          className="text-ivory/70 hover:text-gold text-xs tracking-[0.2em] transition-colors duration-300">

              {item.label}
            </a>
        )}
        </div>
      }
    </nav>);

};

export default Navigation;