'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';

const primaryTiers = [
  {
    title: 'Premium Landing Page',
    category: 'Single Page Website',
    startingPrice: '₹14,999',
    description:
      'Ideal for promotional campaigns, new menu launches, or single-location cafés looking for a sleek online presence.',
    features: [
      'Single Page Custom Design',
      'Mobile Responsive Layout',
      'Direct WhatsApp Inquiry Integration',
      'Location & Google Maps Setup',
      'Fast Loading Speed',
      'Basic SEO Setup',
    ],
    popular: false,
  },
  {
    title: 'Business Website',
    category: 'Multi-Page Website',
    startingPrice: '₹14,999',
    description:
      'Perfect for growing cafés, restaurants, and small hospitality businesses wanting a complete digital presence.',
    features: [
      '3 to 5 Custom Designed Pages',
      'Interactive Digital Menu Showcase',
      'Table Reservation / Contact Form',
      'Mobile Responsive Layout',
      'Fast Loading & Smooth Animations',
      'SEO Basics & Meta Tags',
    ],
    popular: true,
  },
  {
    title: 'Hotel Website Package',
    category: 'Complete Hotel / Resort Web',
    startingPrice: '₹28,999',
    description:
      'Designed specifically for boutique hotels, resorts, and homestays to showcase rooms and drive direct inquiries.',
    features: [
      'Full Multi-Page Hotel Website',
      'Room & Amenity Gallery Showcase',
      'Direct Booking & Inquiry System',
      'WhatsApp Booking Integration',
      'Google Maps & Local SEO Setup',
      'Dedicated Support & Revisions',
    ],
    popular: false,
  },
];

const addOnServices = [
  {
    title: 'Menu & Brand Design',
    price: 'Starting from ₹1,499',
    description: 'Bespoke print menu layouts and touchless QR menus for your guests.',
  },
  {
    title: 'Reel Editing',
    price: 'Starting from ₹999 / reel',
    description: 'High-quality short-form video edits with captions and sound design.',
  },
  {
    title: 'Monthly Digital Support',
    price: 'Starting from ₹4,999 / mo',
    description: 'Website updates, menu price changes, backups, and technical maintenance.',
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
          eyebrow="Transparent Pricing"
          heading="Simple & Honest Investment."
          subheading="Clear, upfront pricing with zero hidden fees. Built specifically for hotels, cafés, restaurants, and hospitality businesses."
          align="center"
          className="mb-20"
        />

        {/* Main Website Packages */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch mb-16">
          {primaryTiers.map((tier) => (
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
                  Most Popular
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
                  </div>
                </div>

                <div className="space-y-3 mb-10">
                  <span className="text-[11px] uppercase tracking-widest text-white/40 font-semibold block mb-2">
                    What's Included
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
                <span>Start Your Project</span>
                <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Additional Services Bar */}
        <div className="glass-card p-8 lg:p-10 rounded-2xl border border-white/10">
          <h4 className="text-center font-serif text-xl text-white mb-8">
            Additional Design & Support Services
          </h4>
          <div className="grid md:grid-cols-3 gap-8">
            {addOnServices.map((addon) => (
              <div key={addon.title} className="p-4 border-l border-[#D4AF37]/30">
                <h5 className="text-white font-medium text-base mb-1">{addon.title}</h5>
                <span className="text-[#D4AF37] text-sm font-serif font-medium block mb-2">
                  {addon.price}
                </span>
                <p className="text-xs text-white/50">{addon.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-xs text-[#D4AF37] uppercase tracking-widest hover:underline"
            >
              Need a custom bundle or quote? Let's Talk <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
