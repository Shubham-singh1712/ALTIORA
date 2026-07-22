'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';

const pricingTiers = [
  {
    title: 'Landing Page Flagship',
    category: 'High-Converting Campaign Page',
    startingPrice: '₹1.2L',
    description:
      'Engineered for boutique hotels launching a new wing, seasonal promotional campaigns, or luxury culinary venue openings.',
    features: [
      'Single-Page High-Conversion Flagship',
      'Direct Booking / Table Reservation Flow',
      'Framer Motion Micro-Interactions',
      'Mobile-First Touch Architecture',
      'Lighthouse 95+ Speed & Performance',
      'WhatsApp Concierge Integration',
    ],
    popular: false,
    accent: '#white',
  },
  {
    title: 'Boutique Hotel & Resort',
    category: 'Full Digital Presence Engine',
    startingPrice: '₹2.8L',
    description:
      'Comprehensive digital ecosystem for luxury hotels, resorts, and multi-location properties looking to eliminate OTA commission dependency.',
    features: [
      'Multi-Page Next.js 16 Architecture',
      'Suite & Amenity Virtual Tour Showcase',
      'Commission-Free Direct Booking Engine',
      'Multi-Language & Currency Ready',
      'Custom Concierge & Event Request Forms',
      'Full SEO Schema.org Hospitality Setup',
      'Priority 30-Day Go-Live SLA',
    ],
    popular: true,
    accent: '#D4AF37',
  },
  {
    title: 'Culinary Menu & Brand Suite',
    category: 'Print, QR & Video Package',
    startingPrice: '₹1.5L',
    description:
      'Complete brand identity overhaul, leather/linen print menu designs, interactive touchless QR menus, and 8 cinematic Instagram reels.',
    features: [
      'Full Brand Architecture & Guidelines',
      'Bespoke Print Menu Layouts (CMYK Ready)',
      'Touchless QR Interactive Digital Menu',
      '8 Color-Graded 4K Culinary Reels',
      'Cocktail & Sommelier Booklet Design',
      'Social Media Creative Starter Kit',
    ],
    popular: false,
    accent: '#white',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 lg:py-40 bg-[#050505] relative overflow-hidden">
      {/* Background Accent */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.03] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)' }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeader
          eyebrow="Transparent Investments"
          heading="Built For Brands Seeking High Yield."
          subheading="Clear starting thresholds tailored for high-end hospitality brands. No hidden fees — just transparent, high-ROI digital architecture."
          align="center"
          className="mb-20"
        />

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {pricingTiers.map((tier) => (
            <motion.div
              key={tier.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
              viewport={{ once: true, margin: '-40px' }}
              className={`relative glass-card p-8 lg:p-10 flex flex-col justify-between rounded-2xl overflow-hidden ${
                tier.popular
                  ? 'border-[#D4AF37]/50 shadow-[0_0_50px_-15px_rgba(212,175,55,0.15)] bg-[#101010]/80'
                  : 'border-white/10'
              }`}
            >
              {tier.popular && (
                <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37] text-black font-semibold text-[10px] uppercase tracking-wider">
                  <Sparkles size={12} />
                  Most Requested
                </div>
              )}

              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#D4AF37] block mb-2">
                  {tier.category}
                </span>
                <h3 className="text-2xl font-serif text-white font-light mb-4">{tier.title}</h3>
                <p className="text-xs text-white/50 leading-relaxed mb-8">{tier.description}</p>

                <div className="mb-8 pb-6 border-b border-white/10">
                  <span className="text-xs text-white/40 uppercase tracking-widest block mb-1">
                    Starting From
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-serif text-[#D4AF37] font-normal">
                      {tier.startingPrice}
                    </span>
                    <span className="text-xs text-white/40 font-mono">+ GST</span>
                  </div>
                </div>

                <div className="space-y-3 mb-10">
                  <span className="text-[11px] uppercase tracking-widest text-white/40 font-semibold block mb-2">
                    Included Architecture
                  </span>
                  {tier.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5 text-xs text-white/70">
                      <Check size={14} className="text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                className={`w-full py-4 rounded-full flex items-center justify-center gap-2 text-xs uppercase tracking-widest font-semibold transition-all ${
                  tier.popular
                    ? 'bg-[#D4AF37] text-black hover:bg-[#F5E17A]'
                    : 'border border-white/20 text-white hover:border-[#D4AF37] hover:text-[#D4AF37]'
                }`}
              >
                <span>Initiate Engagement</span>
                <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
