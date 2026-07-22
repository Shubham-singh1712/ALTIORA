'use client';

import { motion } from 'framer-motion';
import { Globe, Utensils, Sparkles, Film, Video, ArrowRight, CheckCircle2 } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';

const services = [
  {
    icon: Globe,
    title: 'Premium Website Development',
    tagline: 'High-Converting Digital Flagships',
    description:
      'Custom bespoke web applications built from scratch with Next.js & Framer Motion. Engineered specifically for boutique hotels and luxury restaurants to drive direct booking revenue.',
    deliverables: [
      'Next.js 16 + React Server Architecture',
      'Direct Booking & WhatsApp API Flow',
      'Ultra-Fast Lighthouse 95+ Scores',
      'Interactive Room & Amenity Tours',
      'Full SEO Schema & Meta Architecture',
      'Concierge Client Management Portal',
    ],
    accent: '#D4AF37',
  },
  {
    icon: Utensils,
    title: 'Culinary Menu Design',
    tagline: 'Print Meets Digital Prestige',
    description:
      'High-end typography and layouts for print menus, QR touchless digital menus, and seasonal wine lists that elevate average check size and communicate culinary distinction.',
    deliverables: [
      'Bespoke Leather/Linen Print Layouts',
      'Touchless QR Interactive Menus',
      'Cocktail & Sommelier Booklets',
      'High-Resolution Print Files (CMYK)',
      'Instant Seasonal Price Update System',
      'Instagram-Ready Digital Menu Assets',
    ],
    accent: '#F5E17A',
  },
  {
    icon: Sparkles,
    title: 'Brand Identity & Architecture',
    tagline: 'Timeless Aesthetic Strategy',
    description:
      'Comprehensive brand positioning for new opening hotels, cafes, and hospitality groups. We define your visual identity, typography system, tone of voice, and brand guidelines.',
    deliverables: [
      'Logo Suite (Primary, Secondary, Monogram)',
      'Bespoke Brand Color & Typography System',
      'Stationery, Keycard & Packaging Design',
      'Brand Storytelling & Copywriting Book',
      'Social Media Graphic System',
      'Comprehensive 40+ Page Brand Guidelines',
    ],
    accent: '#D4AF37',
  },
  {
    icon: Film,
    title: 'Reel & Short-Form Editing',
    tagline: 'Viral Culinary Content',
    description:
      'Scroll-stopping Instagram Reels and TikTok content cut with rhythmic pacing, custom color grading, sound design, and kinetic captions to turn viewers into diners.',
    deliverables: [
      '4K 60FPS Color Graded Reels',
      'Trend-Focused Audio & Kinetic Text',
      'Atmospheric Sound Design & Mixing',
      'Hook Optimization & Engagement Cuts',
      'Content Calendar & Publishing Strategy',
      'Monthly Engagement Performance Audits',
    ],
    accent: '#F5E17A',
  },
  {
    icon: Video,
    title: 'Commercial Video Production',
    tagline: 'Cinematic Hospitality Storytelling',
    description:
      'Full-scale cinematic video production capturing the grandeur of luxury hotel suites, chef table culinary artistry, and brand mood films for websites and commercials.',
    deliverables: [
      '4K Cinematic Hotel & Dining Films',
      'Aerial Drone Hospitality Videography',
      'Chef Spotlight & Behind-The-Scenes',
      'Full Sound Design & Mastered Audio',
      'Website Background Hero Loop Cuts',
      'Multi-Platform Ad Campaign Exports',
    ],
    accent: '#D4AF37',
  },
];

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
          eyebrow="Core Disciplines"
          heading={`Crafted For Brands Charging\n₹1L+ Per Engagement.`}
          subheading="Every discipline is executed with uncompromising standard. We combine high-end design aesthetics with conversion rate optimization engineered for direct business ROI."
          align="center"
          className="mb-20"
        />

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            const isWide = index === 0;

            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className={`group relative glass-card glass-card-hover p-8 lg:p-10 flex flex-col justify-between overflow-hidden ${
                  isWide ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
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
                      Key Deliverables
                    </h4>
                    <div className={`grid ${isWide ? 'sm:grid-cols-2' : 'grid-cols-1'} gap-2.5`}>
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
                <a
                  href="#contact"
                  className="inline-flex items-center justify-between pt-4 border-t border-white/10 text-xs tracking-widest uppercase text-white/80 group-hover:text-[#D4AF37] transition-colors"
                >
                  <span>Inquire For This Discipline</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

