'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Target, Compass, Sparkles } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';

export default function About() {
  return (
    <section id="about" className="py-28 lg:py-40 bg-[#050505] relative overflow-hidden">
      {/* Subtle diagonal background glow */}
      <div
        className="absolute left-0 top-1/3 w-[500px] h-[500px] rounded-full opacity-[0.05] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)' }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeader
          eyebrow="Our Story"
          heading="Honest & Dedicated Hospitality Partners."
          subheading="We build websites and digital assets that give boutique hotels, cafés, and restaurants a modern online identity without inflated corporate costs."
          align="center"
          className="mb-20"
        />

        {/* Editorial Story Layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-6 text-white/70 font-light text-base lg:text-lg leading-relaxed"
          >
            <h3 className="text-3xl font-serif text-white font-normal leading-snug">
              Altiora was founded with one mission:
            </h3>
            <p>
              To help hospitality businesses create premium digital experiences without agency complexity.
            </p>
            <p>
              Whether you run a luxury resort, a boutique hotel, a local café, or a vibrant restaurant, we believe your digital presence should match the quality of experience you deliver in person.
            </p>
            <div className="p-6 rounded-xl glass-card border border-[#D4AF37]/20 bg-[#D4AF37]/5 text-sm text-white">
              <span className="text-[#D4AF37] font-semibold block mb-1">Our Promise</span>
              Direct communication with the team building your website, transparent pricing, and zero corporate overhead.
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-6 grid sm:grid-cols-2 gap-6"
          >
            {[
              {
                icon: Target,
                title: 'Our Mission',
                description:
                  'Helping hotels, cafés, and restaurants attract more direct bookings and inquiries with clean, modern websites.',
              },
              {
                icon: Compass,
                title: 'Design Focus',
                description:
                  'Combining elegant typography, dark luxury styling, and fast performance tailored to your unique venue.',
              },
              {
                icon: ShieldCheck,
                title: 'Custom Built',
                description:
                  'Hand-crafted Next.js & React websites optimized for mobile responsiveness and fast page load speeds.',
              },
              {
                icon: Sparkles,
                title: 'Fair Pricing',
                description:
                  'High-end design made accessible to hospitality businesses of all sizes with clear starting packages.',
              },
            ].map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="glass-card glass-card-hover p-6 rounded-xl border border-white/10 space-y-3"
              >
                <div className="w-10 h-10 rounded-lg border border-[#D4AF37]/30 bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                  <Icon size={20} />
                </div>
                <h4 className="text-lg font-serif text-white font-normal">{title}</h4>
                <p className="text-xs text-white/50 leading-relaxed">{description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
