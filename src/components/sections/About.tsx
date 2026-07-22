'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Target, Compass, Award } from 'lucide-react';
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
          eyebrow="Our Manifesto"
          heading={`Why Altiora Exists:\nRejecting Mediocrity.`}
          subheading="We were founded on a simple observation — luxury hospitality brands were spending millions on physical architecture while settling for templated, generic digital presences."
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
              We bridges the gap between physical prestige and digital revenue engineering.
            </h3>
            <p>
              When a guest steps into your hotel lobby or sits down at your culinary table, every detail has been intentionally curated — from the lighting and scent to the texture of the linen.
            </p>
            <p>
              Your digital presence should command that exact same emotional reverence. Altiora exists to architect digital flagships that evoke prestige, build immediate trust, and compel high-value clients to act.
            </p>
            <div className="p-6 rounded-xl glass-card border border-[#D4AF37]/20 bg-[#D4AF37]/5 text-sm text-white">
              <span className="text-[#D4AF37] font-semibold block mb-1">Our Core Commitment</span>
              We accept only 4 high-stakes agency engagements per quarter to ensure obsessively meticulous execution.
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
                title: 'Mission Statement',
                description:
                  'To eliminate third-party commission dependency for luxury boutique hotels and restaurants through high-converting web architecture.',
              },
              {
                icon: Compass,
                title: 'Design Vision',
                description:
                  'Creating timeless, editorial digital experiences that look at home on Awwwards and drive direct bottom-line revenue.',
              },
              {
                icon: ShieldCheck,
                title: 'Uncompromising Quality',
                description:
                  'Zero templates, zero bloated page builders. Hand-crafted Next.js & React code built for 95+ Lighthouse speed scores.',
              },
              {
                icon: Award,
                title: 'The ₹1L+ Benchmark',
                description:
                  'We partner exclusively with visionaries who understand that high-end digital design is an investment, not an expense.',
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
