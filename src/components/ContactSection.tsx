import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-stretch">
          {/* Left: Details */}
          <div className="fade-in flex flex-col">
            <p className="text-gold text-xs tracking-[0.2em] mb-4 font-sans">CONTACT</p>
            <h3 className="font-serif text-foreground text-xl mb-6">PT Aurum Italia
Nusantara</h3>
            <div className="text-muted-foreground font-sans text-sm leading-relaxed space-y-1 mb-8">
              <p>Address: Jl. Tjilik Riwut Km 1 No. 1 Palangkaraya, Central Kalimantan 73112 Indonesia






              </p>
            </div>
            <p className="text-muted-foreground font-sans text-sm mb-2">
              Email:{" "}
              <a href="mailto:info@aurumitalia.co.id" className="text-gold hover:text-gold/80 transition-colors">info@aurumitalianusantara</a>
            </p>
            <p className="text-muted-foreground font-sans text-sm mb-8">
              Phone:{" "}
              <a href="tel:+628123456789" className="text-gold hover:text-gold/80 transition-colors">+62 812 3456 7890</a>
            </p>
            <p className="text-muted-foreground/60 font-sans text-xs leading-relaxed mb-4">For business and investment enquiries, please use the contact form or reach us directly via email. We welcome institutional and qualified investor dialogue.

            </p>
            {/* Map fills remaining space */}
            <div className="block w-full flex-1 min-h-[180px] border border-gold/20 shadow-lg overflow-hidden relative mt-4 bg-muted/30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.0!2d113.9213!3d-2.2096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de19ee3824ca38b%3A0x2a491e80604a1ae0!2sJl.+Tjilik+Riwut+No.Km.+1%2C+Palangka+Raya%2C+Kalimantan+Tengah+73112%2C+Indonesia!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(0.4) contrast(1.1) brightness(0.95)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PT Aurum Italia Nusantara Location"
                className="absolute inset-0" />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/80 to-transparent px-4 py-3 pointer-events-none">
                <p className="text-foreground/80 text-xs font-sans tracking-wide flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                  Palangkaraya, Central Kalimantan
                </p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="fade-in">
            <h2 className="font-serif text-foreground text-3xl md:text-4xl mb-8 leading-tight">
              Get in Touch
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-foreground text-xs tracking-[0.1em] mb-2 block">NAME</Label>
                <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="bg-transparent border-border focus:border-gold/50 rounded-none" required />
              </div>
              <div>
                <Label htmlFor="email" className="text-foreground text-xs tracking-[0.1em] mb-2 block">EMAIL</Label>
                <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="bg-transparent border-border focus:border-gold/50 rounded-none" required />
              </div>
              <div>
                <Label htmlFor="message" className="text-foreground text-xs tracking-[0.1em] mb-2 block">MESSAGE</Label>
                <Textarea id="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5} className="bg-transparent border-border focus:border-gold/50 rounded-none resize-none" required />
              </div>
              <button type="submit" className="bg-navy text-gold border border-navy hover:bg-navy/80 px-8 py-3 text-xs tracking-[0.2em] transition-all duration-300">
                SUBMIT ENQUIRY
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>);

};

export default ContactSection;