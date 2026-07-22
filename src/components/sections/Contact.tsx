'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, Clock, MessageSquare, CheckCircle2 } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Boutique Hotel Website',
    budget: '₹1.5L – ₹3L',
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
          eyebrow="Initiate Project"
          heading={`Let's Architect Your\nDigital Flagship.`}
          subheading="Ready to elevate your hospitality brand and drive direct booking revenue? Schedule a consultation or send us your project requirements."
          align="center"
          className="mb-20"
        />

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Studio Details & Direct Action */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="glass-card p-8 rounded-2xl border border-white/10 space-y-6">
              <h3 className="text-2xl font-serif text-white font-light">Studio Concierge</h3>
              <p className="text-xs text-white/50 leading-relaxed font-light">
                We work with visionaries across India, Maldives, and Southeast Asia. We respond to every ₹1L+ inquiry within 4 business hours.
              </p>

              <div className="space-y-4 pt-4 border-t border-white/10">
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-4 text-white/80 hover:text-[#D4AF37] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#D4AF37] group-hover:border-[#D4AF37]">
                    <Phone size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/40 uppercase tracking-widest block">Direct Phone / WhatsApp</span>
                    <span className="text-sm font-mono">+91 98765 43210</span>
                  </div>
                </a>

                <a
                  href="mailto:concierge@altiora.agency"
                  className="flex items-center gap-4 text-white/80 hover:text-[#D4AF37] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#D4AF37] group-hover:border-[#D4AF37]">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/40 uppercase tracking-widest block">Official Inquiry Email</span>
                    <span className="text-sm font-mono">concierge@altiora.agency</span>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-white/80">
                  <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#D4AF37]">
                    <Clock size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/40 uppercase tracking-widest block">Studio Hours (IST)</span>
                    <span className="text-sm font-mono">Mon – Sat: 09:00 – 19:00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Action Card */}
            <div className="glass-card p-6 rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/5 flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider block mb-1">Need Urgent Consultation?</span>
                <span className="text-xs text-white/60">Connect instantly with our Principal Architect.</span>
              </div>
              <a
                href="https://wa.me/919876543210?text=Hello%20Altiora%2C%20I%20want%20to%20discuss%20a%20%E2%82%B91L%2B%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-full bg-[#D4AF37] text-black text-xs font-semibold uppercase tracking-wider hover:bg-[#F5E17A] transition-colors shrink-0"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>

          {/* Right Column: High-Converting Project Estimator Form */}
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
                  <h3 className="text-3xl font-serif text-white font-light">Inquiry Received.</h3>
                  <p className="text-sm text-white/60 max-w-md mx-auto">
                    Thank you for reaching out. Our Senior Creative Director will review your project requirements and get in touch within 4 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2.5 rounded-full border border-white/20 text-xs text-white uppercase tracking-widest hover:border-[#D4AF37] hover:text-[#D4AF37]"
                  >
                    Submit Another Requirement
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[11px] uppercase tracking-widest text-white/50 block font-medium">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. Arjun Mehta"
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] uppercase tracking-widest text-white/50 block font-medium">Work Email *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="e.g. arjun@grandmeridian.com"
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
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] uppercase tracking-widest text-white/50 block font-medium">Primary Requirement *</label>
                      <select
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                      >
                        <option value="Boutique Hotel Website" className="bg-[#101010] text-white">Boutique Hotel / Resort Website</option>
                        <option value="Restaurant Web & Reservation" className="bg-[#101010] text-white">Restaurant Web & Reservation Engine</option>
                        <option value="Culinary Menu & Branding" className="bg-[#101010] text-white">Culinary Menu & Brand Architecture</option>
                        <option value="4K Reels & Video Production" className="bg-[#101010] text-white">4K Reels & Video Production</option>
                        <option value="Full Retainer Partnership" className="bg-[#101010] text-white">Full Agency Retainer (₹2.5L+/mo)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] uppercase tracking-widest text-white/50 block font-medium">Estimated Investment Budget *</label>
                    <div className="grid grid-cols-3 gap-3">
                      {['₹1L – ₹2.5L', '₹2.5L – ₹5L', '₹5L+ (Enterprise)'].map((b) => (
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
                    <label className="text-[11px] uppercase tracking-widest text-white/50 block font-medium">Project Scope Details</label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your property, target launch timeline, and primary objectives..."
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-[#D4AF37] text-black font-semibold text-xs uppercase tracking-widest hover:bg-[#F5E17A] transition-all flex items-center justify-center gap-2 shadow-xl"
                  >
                    <span>Submit Project Brief</span>
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
