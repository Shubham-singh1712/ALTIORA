'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Star } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 lg:py-40 bg-[#050505] overflow-hidden relative">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeader
          eyebrow="Client Stories"
          heading="Partner With Us."
          subheading="As a newly launched agency, we are dedicated to delivering exceptional results for every single client we partner with."
          align="center"
          className="mb-16"
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Card 1: Client stories coming soon */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card p-8 lg:p-10 rounded-2xl border border-white/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex gap-1 text-[#D4AF37] mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-[#D4AF37]" />
                ))}
              </div>
              <h3 className="text-2xl font-serif text-white mb-3">Client Stories Coming Soon</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                We are currently building customized websites, digital menus, and content strategies for our founding hospitality partners. Complete case studies and feedback will be published here soon.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 text-xs text-[#D4AF37] uppercase font-mono tracking-widest">
              ✦ Launch Phase
            </div>
          </motion.div>

          {/* Card 2: Your project could be featured here */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-8 lg:p-10 rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/5 flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-6">
                <Sparkles size={12} />
                Founding Clients
              </div>
              <h3 className="text-2xl font-serif text-white mb-3">Your Project Could Be Featured Here</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Partner with us today to give your hotel, café, or restaurant a premium digital presence. Get hands-on attention directly from our core agency team.
              </p>
            </div>
            <div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D4AF37] text-black text-xs font-semibold uppercase tracking-widest hover:bg-[#F5E17A] transition-all"
              >
                <span>Start Your Project</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

