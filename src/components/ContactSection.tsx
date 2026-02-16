import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — no backend
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="text-gold text-xs tracking-[0.2em] mb-4 font-sans">CONTACT</p>
        <h2 className="font-serif text-foreground text-3xl md:text-4xl mb-12 leading-tight">
          Get in Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left: Details */}
          <div className="fade-in">
            <h3 className="font-serif text-foreground text-xl mb-6">PT Aurum Italia Nusantara</h3>
            <div className="text-muted-foreground font-sans text-sm leading-relaxed space-y-1 mb-8">
              <p>Jl. Tjilik Riwut Km 1 No. 1

Palangkaraya
Central Kalimantan 73112
Indonesia</p>
              <p>
              </p>
              <p>
              </p>
            </div>
            <p className="text-muted-foreground font-sans text-sm mb-8">
              Email:{" "}
              <a href="mailto:info@aurumitalia.co.id" className="text-gold hover:text-gold/80 transition-colors">
                info@aurumitalia.co.id
              </a>
            </p>
            <p className="text-muted-foreground/60 font-sans text-xs leading-relaxed">
              For business and investment enquiries, please use the contact form or reach us directly via email. We welcome institutional and qualified investor dialogue.
            </p>
          </div>

          {/* Right: Form */}
          <div className="fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-foreground text-xs tracking-[0.1em] mb-2 block">NAME</Label>
                <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="bg-transparent border-border focus:border-gold/50 rounded-none" required />

              </div>
              <div>
                <Label htmlFor="email" className="text-foreground text-xs tracking-[0.1em] mb-2 block">EMAIL</Label>
                <Input id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="bg-transparent border-border focus:border-gold/50 rounded-none"
                required />

              </div>
              <div>
                <Label htmlFor="message" className="text-foreground text-xs tracking-[0.1em] mb-2 block">MESSAGE</Label>
                <Textarea
                  id="message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  className="bg-transparent border-border focus:border-gold/50 rounded-none resize-none"
                  required />

              </div>
              <button
                type="submit"
                className="border border-gold/40 text-gold hover:bg-gold/10 px-8 py-3 text-xs tracking-[0.2em] transition-all duration-300">

                SUBMIT ENQUIRY
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>);

};

export default ContactSection;