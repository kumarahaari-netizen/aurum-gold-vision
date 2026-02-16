import logo from "@/assets/logo.png";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-navy">
      {/* Subtle radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(40_42%_56%_/_0.04)_0%,_transparent_70%)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <img
          src={logo}
          alt="PT Aurum Italia Nusantara logo"
          className="mx-auto mb-10 w-48 sm:w-56 md:w-64"
        />

        <h1 className="font-serif text-ivory text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight mb-8">
          Connecting Indonesia's Gold Potential
          <br />
          <span className="text-gold">with Global Capital</span>
        </h1>

        <p className="text-ivory/60 font-sans text-base md:text-lg max-w-2xl mx-auto mb-4 leading-relaxed">
          PT Aurum Italia Nusantara is an Indonesia-based company engaged in gold and rare earth mineral ventures, mining partnerships, and strategic investment activities.
        </p>

        <p className="text-ivory/40 font-sans text-sm max-w-xl mx-auto mb-12 leading-relaxed">
          We operate through disciplined partnerships, responsible practices, and international market alignment.
        </p>

        <button
          onClick={() => scrollTo("#contact")}
          className="border border-gold/50 text-gold hover:bg-gold/10 px-8 py-3 text-xs tracking-[0.2em] transition-all duration-300"
        >
          INVEST WITH US
        </button>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy to-transparent" />
    </section>
  );
};

export default HeroSection;
