'use client';

import { motion } from 'framer-motion';
import { Globe, Palette, Video, ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';

const services = [
  {
    icon: Globe,
    title: 'Premium Website Design',
    tagline: 'Your Digital Flagship',
    description:
      'Custom-built websites engineered to convert visitors into loyal customers. From boutique hotel showcases to full-service restaurant portals — every pixel is intentional.',
    features: [
      'Custom Hotel & Cafe Websites',
      'Landing Page Design',
      'Responsive Development',
      'SEO & Performance Optimization',
      'WhatsApp & Maps Integration',
      'Hosting & Deployment',
    ],
    gradient: 'from-gold/20 to-transparent',
    accent: '#D4AF37',
  },
  {
    icon: Palette,
    title: 'Menu & Creative Design',
    tagline: 'Print Meets Prestige',
    description:
      'Professionally crafted menus and marketing materials that communicate quality before a single word is read. Design that elevates perception and drives ordering behavior.',
    features: [
      'Restaurant & Cafe Menu Design',
      'QR Menu Design',
      'Poster & Flyer Design',
      'Promotional Graphics',
      'Social Media Creatives',
      'Brand Assets & Kits',
    ],
    gradient: 'from-white/10 to-transparent',
    accent: '#ffffff',
  },
  {
    icon: Video,
    title: 'Reel & Video Editing',
    tagline: 'Content That Captivates',
    description:
      'Short-form video content crafted to stop the scroll and ignite engagement. From cinematic food reels to hotel walkthrough films — we tell your story beautifully.',
    features: [
      'Instagram Reels',
      'Food Cinematics',
      'Restaurant & Hotel Videos',
      'Promotional Campaigns',
      'Short-Form Content',
      'Commercial Editing',
    ],
    gradient: 'from-gold/15 to-transparent',
    accent: '#D4AF37',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-32 lg:py-40 bg-[#050505] relative overflow-hidden">
      {/* Subtle divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeader
          eyebrow="What We Do"
          heading={`Three Disciplines.\nOne Standard: Excellence.`}
          subheading="We offer an integrated suite of creative services designed specifically for the hospitality industry — delivered with the precision and artistry your brand deserves."
          align="center"
          className="mb-20"
        />

        <motion.div
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
                className="group relative rounded-2xl border border-white/8 bg-[#101010]/60 backdrop-blur-sm p-8 lg:p-10 cursor-pointer overflow-hidden"
              >
                {/* Gradient top accent */}
                <div
                  className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${service.gradient}`}
                />

                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at 50% 0%, ${service.accent}10 0%, transparent 60%)`,
                  }}
                />

                {/* Icon */}
                <div className="mb-6 relative z-10">
                  <div
                    className="w-14 h-14 rounded-xl border border-white/10 flex items-center justify-center group-hover:border-gold/30 transition-colors duration-500"
                    style={{ background: `${service.accent}10` }}
                  >
                    <Icon size={24} className="text-gold" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <p className="text-gold/70 text-xs tracking-[0.25em] uppercase mb-2">
                    {service.tagline}
                  </p>
                  <h3 className="text-white text-xl font-serif font-light mb-4 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-white/45 text-sm leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Feature list */}
                  <ul className="space-y-2.5 mb-8">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-3 text-white/60 text-sm">
                        <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  {/* Link */}
                  <div className="flex items-center gap-2 text-gold text-sm group-hover:gap-3 transition-all duration-300">
                    <span className="tracking-wider text-xs uppercase">Explore Service</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
