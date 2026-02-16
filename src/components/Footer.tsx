const Footer = () => {
  return (
    <footer className="bg-navy py-12 border-t border-ivory/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
          <div>
            <h3 className="font-serif text-ivory text-base mb-3">PT Aurum Italia Nusantara</h3>
            <div className="text-ivory/40 font-sans text-xs leading-relaxed space-y-0.5">
              <p>Jl. Tjilik Riwut Km 1 No. 1
Palangkaraya
Central Kalimantan 73112
Indonesia</p>
              <p>
              </p>
              <p>
              </p>
            </div>
          </div>
          <div className="text-ivory/40 font-sans text-xs">
            <a href="mailto:info@aurumitalia.co.id" className="hover:text-gold transition-colors duration-300">
              info@aurumitalia.co.id
            </a>
          </div>
        </div>
        <div className="border-t border-ivory/5 pt-6">
          <p className="text-ivory/25 font-sans text-xs leading-relaxed">
            All activities are conducted in accordance with applicable Indonesian laws and regulations.
          </p>
        </div>
      </div>
    </footer>);};export default Footer;