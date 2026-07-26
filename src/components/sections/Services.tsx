'use client';

import { motion } from 'framer-motion';
import { Globe, Utensils, Sparkles, Film, ArrowRight, CheckCircle2 } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    tagline: 'High-Converting Web Experiences',
    description:
      'Custom websites designed specifically for hotels, cafés, restaurants, and resorts to showcase your space, attract direct guests, and increase table/room bookings.',
    deliverables: [
      'Mobile-Optimized Responsive Design',
      'WhatsApp & Direct Booking Integration',
      'Fast Load Times & Smooth Animations',
      'Photo & Gallery Showcase',
      'SEO & Google Business Mapping',
      'Easy Content Management',
    ],
    accent: '#D4AF37',
    demoUrl: 'https://hotel-management-lpu1.vercel.app/',
  },
  {
    icon: Utensils,
    title: 'Menu Design',
    tagline: 'Print & Digital Menus',
    description:
      'Beautiful layouts for physical print menus and touchless QR menus that highlight your dishes and elevate the dining experience for your guests.',
    deliverables: [
      'Custom Print Menu Layouts',
      'QR Code Digital Menus',
      'Beverage & Dessert Cards',
      'High-Resolution Print Ready Files',
      'Easy Price & Dish Updates',
      'Social Media Menu Assets',
    ],
    accent: '#F5E17A',
    demoUrl: 'https://cafe-menu-sooty-omega.vercel.app/',
  },
  {
    icon: Sparkles,
    title: 'Brand Identity',
    tagline: 'Visual Identity & Assets',
    description:
      'Clean visual identity for hotels, cafés, and restaurants. We create memorable logos, color palettes, and brand elements tailored to your atmosphere.',
    deliverables: [
      'Logo Suite (Primary & Secondary)',
      'Color Palette & Font Selection',
      'Business Cards & Stationery',
      'Signage & Packaging Design',
      'Social Media Templates',
      'Brand Style Guide',
    ],
    accent: '#D4AF37',
  },
  {
    icon: Film,
    title: 'Reel & Short-Form Video Editing',
    tagline: 'Social Media Video Content',
    description:
      'Engaging Instagram Reels and short-form videos featuring your dishes, ambiance, and hospitality stories to turn social media followers into customers.',
    deliverables: [
      'High-Quality Color Graded Edits',
      'Trending Audio & Captions',
      'Ambience & Sound Editing',
      'Food & Interior Highlights',
      'Optimized for Instagram & Reels',
      'Fast Turnaround Deliveries',
    ],
    accent: '#F5E17A',
  },
];

type Service = (typeof services)[number];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-28 lg:py-40 bg-[#050505] relative overflow-hidden">
      {/* Decorative center accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-[#D4AF37]/40 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeader
          eyebrow="What We Do"
          heading={`Crafted For Hotels, Cafés & Restaurants.`}
          subheading="We build simple, elegant, and effective digital experiences designed to attract more customers and build trust in your brand."
          align="center"
          className="mb-20"
        />

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className="group relative glass-card glass-card-hover p-8 lg:p-10 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Glowing Edge */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div>
                  {/* Icon & Category Tagline */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-14 h-14 rounded-xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-500">
                      <Icon size={26} />
                    </div>
                    <span className="text-[11px] tracking-[0.25em] uppercase text-[#D4AF37] font-semibold">
                      0{index + 1} // SERVICE
                    </span>
                  </div>

                  <h3 className="text-2xl font-serif text-white font-light mb-3 group-hover:text-[#D4AF37] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#D4AF37] tracking-wider uppercase mb-4 font-mono">
                    {service.tagline}
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="border-t border-white/10 pt-6 mb-8">
                    <h4 className="text-xs uppercase tracking-widest text-white/40 mb-4 font-semibold">
                      What's Included
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-2.5">
                      {service.deliverables.map((item) => (
                        <div key={item} className="flex items-start gap-2.5 text-xs text-white/70">
                          <CheckCircle2 size={14} className="text-[#D4AF37] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10 gap-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-white/80 group-hover:text-[#D4AF37] transition-colors"
                  >
                    <span>Request a Quote</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  {'demoUrl' in service && (service as { demoUrl?: string }).demoUrl && (
                    <a
                      href={(service as { demoUrl: string }).demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/40 text-[10px] uppercase tracking-widest text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 shrink-0"
                    >
                      <span>Live Demo</span>
                      <ArrowRight size={11} />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
