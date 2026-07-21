'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';

const projects = [
  {
    id: 1,
    category: 'Hotel Website',
    title: 'The Grand Meridian',
    description:
      'A luxury 5-star hotel website with an immersive booking experience, virtual room tours, and seamless reservation flow. Resulted in a 3.2× increase in direct bookings.',
    tags: ['Web Design', 'Development', 'SEO'],
    device: 'laptop',
    accentColor: '#D4AF37',
    status: 'live',
  },
  {
    id: 2,
    category: 'Cafe Branding',
    title: 'Noir Coffee Co.',
    description:
      'Complete brand identity and digital presence for a premium specialty coffee brand — from logo system to QR menu design and Instagram-ready creatives.',
    tags: ['Branding', 'Menu Design', 'Social Media'],
    device: 'phone',
    accentColor: '#C0C0C0',
    status: 'live',
  },
  {
    id: 3,
    category: 'Restaurant Website',
    title: 'Saffron & Stone',
    description:
      'An editorial dining experience website for a contemporary Indian restaurant. Full menu integration, reservation system, and a visual gallery that tells the story.',
    tags: ['Web Design', 'Development', 'WhatsApp Integration'],
    device: 'tablet',
    accentColor: '#D4AF37',
    status: 'coming-soon',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function FeaturedWork() {
  return (
    <section id="work" className="py-32 lg:py-40 bg-[#080808] relative">
      {/* Background accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.03] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #D4AF37, transparent 70%)' }}
      />

      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeader
          eyebrow="Featured Work"
          heading="Built to Impress. Designed to Convert."
          subheading="A glimpse into the experiences we've crafted for hospitality brands that refuse to be ordinary."
          align="left"
          className="mb-20 max-w-2xl"
        />

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative rounded-2xl border border-white/8 bg-[#101010]/40 backdrop-blur-sm overflow-hidden cursor-pointer"
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-0`}>
                {/* Device Mockup */}
                <div className="lg:w-1/2 relative bg-[#0a0a0a] min-h-[300px] lg:min-h-[400px] overflow-hidden flex items-center justify-center p-12">
                  {/* Animated glow */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{ background: `radial-gradient(ellipse at 50% 50%, ${project.accentColor}10, transparent 70%)` }}
                  />

                  {project.status === 'coming-soon' ? (
                    <ComingSoonMockup device={project.device} accent={project.accentColor} />
                  ) : (
                    <DeviceMockup device={project.device} accent={project.accentColor} />
                  )}
                </div>

                {/* Content */}
                <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
                  <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">
                    {project.category}
                  </p>
                  <h3 className="text-3xl lg:text-4xl font-serif text-white font-light mb-5 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-white/45 leading-relaxed mb-8 text-sm lg:text-base">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-white/50 border border-white/10 rounded-full px-3 py-1 tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-white/40 group-hover:text-gold transition-colors duration-300">
                    <ExternalLink size={14} />
                    <span className="text-xs tracking-widest uppercase">
                      {project.status === 'coming-soon' ? 'Coming Soon' : 'View Case Study'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom gradient line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(to right, transparent, ${project.accentColor}40, transparent)` }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function DeviceMockup({ device, accent }: { device: string; accent: string }) {
  if (device === 'laptop') {
    return (
      <div className="relative w-full max-w-sm">
        <div className="relative bg-[#1a1a1a] rounded-xl border border-white/10 shadow-2xl overflow-hidden">
          {/* Screen bar */}
          <div className="h-7 bg-[#222] flex items-center px-3 gap-1.5 border-b border-white/5">
            {['#ff5f57', '#febc2e', '#28c840'].map((c) => (
              <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
            ))}
          </div>
          {/* Fake screen content */}
          <div className="h-52 relative overflow-hidden" style={{ background: `linear-gradient(135deg, #0a0a0a, #1a1a1a)` }}>
            <div className="absolute inset-0 flex flex-col p-4 gap-2">
              <div className="h-3 rounded w-3/4" style={{ background: `${accent}30` }} />
              <div className="h-2 rounded w-1/2 bg-white/10" />
              <div className="mt-3 h-16 rounded-lg border border-white/10 bg-white/5" />
              <div className="flex gap-2 mt-2">
                <div className="h-2 rounded flex-1 bg-white/10" />
                <div className="h-2 rounded flex-1 bg-white/5" />
              </div>
            </div>
            <motion.div
              className="absolute bottom-2 right-2 w-8 h-8 rounded-full"
              style={{ background: `${accent}40` }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
        {/* Base */}
        <div className="h-3 bg-[#1a1a1a] rounded-b-xl mx-4 border border-white/5 border-t-0" />
      </div>
    );
  }

  if (device === 'phone') {
    return (
      <div className="relative w-32">
        <div className="bg-[#1a1a1a] rounded-[2rem] border border-white/10 shadow-2xl overflow-hidden">
          <div className="h-6 flex items-center justify-center">
            <div className="w-12 h-1 rounded-full bg-white/20" />
          </div>
          <div className="h-52 relative overflow-hidden">
            <div className="absolute inset-0 flex flex-col gap-1.5 p-2">
              <div className="h-16 rounded-lg border border-white/10 bg-white/5" />
              <div className="h-2 rounded bg-white/10" />
              <div className="h-2 rounded w-2/3" style={{ background: `${accent}30` }} />
              <div className="flex gap-1 mt-1">
                <div className="h-12 flex-1 rounded bg-white/5 border border-white/10" />
                <div className="h-12 flex-1 rounded bg-white/5 border border-white/10" />
              </div>
            </div>
          </div>
          <div className="h-5 flex items-center justify-center">
            <div className="w-16 h-1 rounded-full bg-white/20" />
          </div>
        </div>
      </div>
    );
  }

  // Tablet
  return (
    <div className="relative w-64">
      <div className="bg-[#1a1a1a] rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
        <div className="h-4 flex items-center justify-center border-b border-white/5">
          <div className="w-8 h-1 rounded-full bg-white/20" />
        </div>
        <div className="h-44 relative overflow-hidden p-3">
          <div className="grid grid-cols-2 gap-2 h-full">
            <div className="bg-white/5 rounded border border-white/10" />
            <div className="flex flex-col gap-2">
              <div className="flex-1 bg-white/5 rounded border border-white/10" />
              <div className="h-2 rounded" style={{ background: `${accent}30` }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ComingSoonMockup({ device, accent }: { device: string; accent: string }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <DeviceMockup device={device} accent={accent} />
      <div className="flex items-center gap-2 border border-gold/30 rounded-full px-4 py-1.5 bg-gold/5">
        <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
        <span className="text-gold text-xs tracking-widest">In Development</span>
      </div>
    </div>
  );
}
