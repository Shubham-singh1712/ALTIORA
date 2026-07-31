'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, Clock, CheckCircle2 } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Hotel Website Package',
    budget: '₹15,000 – ₹30,000',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 lg:py-40 bg-[#050505] relative overflow-hidden">
      {/* Glow Orbs */}
      <div
        className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-[0.05] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)' }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeader
          eyebrow="Get In Touch"
          heading="Let's Talk About Your Project"
          subheading="We help hotels, cafés and restaurants create premium digital experiences that attract more customers and strengthen their online presence."
          align="center"
          className="mb-20"
        />

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Action Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="glass-card p-8 rounded-2xl border border-white/10 space-y-6">
              <h3 className="text-2xl font-serif text-white font-light">Direct Contact</h3>
              <p className="text-xs text-white/50 leading-relaxed font-light">
                Have a project in mind or want a custom quote? Reach out to us directly and we will get back to you promptly.
              </p>

              <div className="space-y-4 pt-4 border-t border-white/10">
                <a
                  href="tel:+919431994162"
                  className="flex items-center gap-4 text-white/80 hover:text-[#D4AF37] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#D4AF37] group-hover:border-[#D4AF37]">
                    <Phone size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/40 uppercase tracking-widest block">Phone / WhatsApp</span>
                    <span className="text-sm font-mono">+91 94319 94162</span>
                  </div>
                </a>

                <a
                  href="mailto:reachaltiora@gmail.com"
                  className="flex items-center gap-4 text-white/80 hover:text-[#D4AF37] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#D4AF37] group-hover:border-[#D4AF37]">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/40 uppercase tracking-widest block">Email</span>
                    <span className="text-sm font-mono">reachaltiora@gmail.com</span>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-white/80">
                  <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#D4AF37]">
                    <Clock size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/40 uppercase tracking-widest block">Working Hours</span>
                    <span className="text-sm font-mono">Mon – Sat: 09:00 – 19:00 IST</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Action Card */}
            <div className="glass-card p-6 rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/5 flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider block mb-1">Quick Inquiry?</span>
                <span className="text-xs text-white/60">Chat directly with our team on WhatsApp.</span>
              </div>
              <a
                href="https://wa.me/919431994162?text=Hello%20Altiora%2C%20I%20would%20like%20to%20discuss%20a%20website%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-full bg-[#D4AF37] text-black text-xs font-semibold uppercase tracking-wider hover:bg-[#F5E17A] transition-colors shrink-0"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>

          {/* Right Column: Project Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-8 sm:p-12 rounded-2xl border border-white/10">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] mx-auto">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-3xl font-serif text-white font-light">Thank You!</h3>
                  <p className="text-sm text-white/60 max-w-md mx-auto">
                    We received your message and will reach out to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2.5 rounded-full border border-white/20 text-xs text-white uppercase tracking-widest hover:border-[#D4AF37] hover:text-[#D4AF37]"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[11px] uppercase tracking-widest text-white/50 block font-medium">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] uppercase tracking-widest text-white/50 block font-medium">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="e.g. rahul@restaurant.com"
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[11px] uppercase tracking-widest text-white/50 block font-medium">Phone Number</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 94319 94162"
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] uppercase tracking-widest text-white/50 block font-medium">Service Needed *</label>
                      <select
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                      >
                        <option value="Premium Landing Page" className="bg-[#101010] text-white">Premium Landing Page (₹9,999+)</option>
                        <option value="Business Website" className="bg-[#101010] text-white">Business Website (₹14,999+)</option>
                        <option value="Hotel Website Package" className="bg-[#101010] text-white">Hotel / Resort Website (₹28,999+)</option>
                        <option value="Menu & Brand Design" className="bg-[#101010] text-white">Menu & Brand Design (₹1,499+)</option>
                        <option value="Reel Editing" className="bg-[#101010] text-white">Reel Editing (₹999/reel+)</option>
                        <option value="Monthly Support" className="bg-[#101010] text-white">Monthly Support (₹4,999/mo+)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] uppercase tracking-widest text-white/50 block font-medium">Estimated Budget *</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {['Under ₹15k', '₹15k – ₹30k', '₹30k – ₹50k', 'Custom'].map((b) => (
                        <button
                          type="button"
                          key={b}
                          onClick={() => setForm({ ...form, budget: b })}
                          className={`py-2.5 px-3 rounded-xl border text-xs font-mono transition-all ${
                            form.budget === b
                              ? 'border-[#D4AF37] bg-[#D4AF37]/15 text-[#D4AF37]'
                              : 'border-white/10 bg-black/40 text-white/60 hover:border-white/30'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] uppercase tracking-widest text-white/50 block font-medium">Project Details</label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your business, website goals, or any specific requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-[#D4AF37] text-black font-semibold text-xs uppercase tracking-widest hover:bg-[#F5E17A] transition-all flex items-center justify-center gap-2 shadow-xl"
                  >
                    <span>Start Your Project</span>
                    <Send size={14} />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
