import logo from "@/assets/logo.png";

const quickLinks = [
{ label: "Home", href: "#hero" },
{ label: "About Us", href: "#about" },
{ label: "Operations", href: "#operations" },
{ label: "Investors", href: "#investors" },
{ label: "Contact", href: "#contact" }];


const Footer = () => {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-navy py-12 border-t border-ivory/5">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="PT Aurum Italia Nusantara" className="h-12 w-auto" />
            </div>
            <p className="text-ivory/40 font-sans text-xs leading-relaxed max-w-xs">
              Connecting Indonesia's gold potential with global capital through disciplined partnerships and responsible practices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-ivory text-sm mb-4 tracking-wide">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) =>
              <li key={link.label}>
                  <a
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className="text-ivory/40 hover:text-gold text-xs font-sans transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              )}
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
              className="text-ivory/40 hover:text-gold text-xs font-sans transition-colors duration-300 mt-3 inline-block">
              info@aurumitalia.co.id
            </a>
          </div>
        </div>

        <div className="border-t border-ivory/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
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
