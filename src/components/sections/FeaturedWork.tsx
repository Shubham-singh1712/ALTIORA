'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Laptop, Smartphone, Tablet, ArrowUpRight, X } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';

interface Project {
  id: number;
  category: string;
  title: string;
  subtitle: string;
  industry: string;
  problem: string;
  solution: string;
  technologies: string[];
  outcome: string;
  tags: string[];
  device: 'laptop' | 'phone' | 'tablet';
  accentColor: string;
  metrics: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    id: 1,
    category: 'Luxury Hotel Flagship',
    title: 'The Grand Meridian Resort',
    subtitle: 'High-Conversion Direct Booking Engine & Virtual Tour Architecture',
    industry: 'Boutique Hotel & Resort (Goa / Maldives)',
    problem:
      'High dependence on OTAs (Booking.com/Agoda) paying 18–25% commissions due to an outdated, slow legacy website that failed to reflect their 5-star physical luxury.',
    solution:
      'Engineered an ultra-fast Next.js direct booking flagship with immersive suite video tours, interactive amenity concierges, and instant WhatsApp booking integration.',
    technologies: ['Next.js 16', 'Framer Motion', 'Tailwind CSS', 'Razorpay API', 'WhatsApp API'],
    outcome:
      '3.2× Increase in Direct Commission-Free Bookings within 90 days. Reduced bounce rate by 42%.',
    tags: ['Next.js', 'Direct Bookings', 'Luxury Web'],
    device: 'laptop',
    accentColor: '#D4AF37',
    metrics: [
      { label: 'Direct Booking Growth', value: '+320%' },
      { label: 'Lighthouse Speed Score', value: '99/100' },
      { label: 'Commission Saved', value: '₹4.2L/mo' },
    ],
  },
  {
    id: 2,
    category: 'Specialty Cafe & Roastery Brand',
    title: 'Noir Coffee Co.',
    subtitle: 'Brand Architecture, Touchless QR Menu & Instagram Reel Suite',
    industry: 'Specialty Coffee & Fine Dining',
    problem:
      'Generic social presence and standard paper menus led to stagnant customer engagement and low average check sizes per table.',
    solution:
      'Crafted an editorial dark-mode brand identity, print + touchless interactive QR menu system, and 12 cinematic food & beverage reels cut to trending audio rhythms.',
    technologies: ['Brand Architecture', 'Bespoke Typography', 'QR Web Menu', '4K Reel Editing'],
    outcome:
      '38% Increase in Average Order Value (AOV). 140,000+ organic Instagram Reel impressions in 30 days.',
    tags: ['Branding', 'QR Menu', 'Reel Editing'],
    device: 'phone',
    accentColor: '#C0C0C0',
    metrics: [
      { label: 'Average Check Growth', value: '+38%' },
      { label: 'Reel Impression Total', value: '140K+' },
      { label: 'Menu Scan Rate', value: '88%' },
    ],
  },
  {
    id: 3,
    category: 'Contemporary Fine Dining',
    title: 'Saffron & Stone',
    subtitle: 'Editorial Gastronomy Web Showcase & Sommelier Reserve Flow',
    industry: 'High-End Culinary Restaurant',
    problem:
      'Difficulty conveying their artisanal farm-to-table culinary philosophy online, leading to weekend empty tables during off-peak dining slots.',
    solution:
      'Built a dark editorial gastronomy portal with chef stories, dynamic seasonal menu updates, and an automated reservation request system connected straight to the manager.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Schema SEO'],
    outcome:
      'Fully booked weekend reservations 3 weeks in advance. Winner of Local Fine Dining Digital Experience of the Year.',
    tags: ['Restaurant Web', 'Menu Engineering', 'SEO'],
    device: 'tablet',
    accentColor: '#D4AF37',
    metrics: [
      { label: 'Weekend Table Occupancy', value: '100%' },
      { label: 'Advance Reservation Lead', value: '21 Days' },
      { label: 'Organic Search Traffic', value: '+240%' },
    ],
  },
];

export default function FeaturedWork() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="py-28 lg:py-40 bg-[#080808] relative overflow-hidden">
      {/* Background radial glow */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #D4AF37, transparent 70%)' }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeader
          eyebrow="Case Studies"
          heading="Proven Direct ROI For Luxury Brands."
          subheading="Explore how our architecture, design, and content engineering transform hospitality operations into high-yield digital flagships."
          align="left"
          className="mb-20 max-w-2xl"
        />

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: '-60px' }}
              className="group relative glass-card glass-card-hover overflow-hidden rounded-2xl"
            >
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } items-stretch`}
              >
                {/* Device & Visual Mockup */}
                <div className="lg:w-1/2 relative bg-[#0a0a0a] min-h-[320px] lg:min-h-[420px] p-8 sm:p-12 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-white/10 overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${project.accentColor}15, transparent 70%)`,
                    }}
                  />
                  <DeviceMockup device={project.device} accent={project.accentColor} title={project.title} />
                </div>

                {/* Case Study Details */}
                <div className="lg:w-1/2 p-8 sm:p-12 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D4AF37]">
                        {project.category}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-white/30" />
                      <span className="text-xs text-white/40">{project.industry}</span>
                    </div>

                    <h3 className="text-3xl font-serif text-white font-light mb-3 group-hover:text-[#D4AF37] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-white/50 font-mono mb-6 leading-relaxed">
                      {project.subtitle}
                    </p>

                    {/* Quick Problem vs Solution */}
                    <div className="space-y-4 mb-8">
                      <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                        <div className="text-[11px] uppercase tracking-wider text-rose-400 font-semibold mb-1">
                          The Challenge
                        </div>
                        <p className="text-xs text-white/70 leading-relaxed">{project.problem}</p>
                      </div>
                      <div className="p-4 rounded-xl bg-[#D4AF37]/5 border border-[#D4AF37]/20">
                        <div className="text-[11px] uppercase tracking-wider text-[#D4AF37] font-semibold mb-1">
                          The Strategic Outcome
                        </div>
                        <p className="text-xs text-white/90 leading-relaxed">{project.solution}</p>
                      </div>
                    </div>

                    {/* Metrics Banner */}
                    <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-white/5 border border-white/10 mb-8">
                      {project.metrics.map((m) => (
                        <div key={m.label} className="text-center">
                          <div className="text-lg font-serif text-[#D4AF37] font-semibold">
                            {m.value}
                          </div>
                          <div className="text-[10px] text-white/40 uppercase tracking-wide">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions & Tech Stack */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-full border border-white/10 text-[10px] text-white/60 uppercase tracking-wider"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4AF37] hover:text-white transition-colors"
                    >
                      <span>Read Case Study</span>
                      <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl glass-card border border-white/20 p-8 sm:p-12 overflow-y-auto max-h-[90vh]"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-white transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              <div className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-2">
                {selectedProject.category} // Full Breakdown
              </div>
              <h2 className="text-3xl font-serif text-white font-light mb-6">
                {selectedProject.title}
              </h2>

              <div className="space-y-6 text-sm text-white/70 mb-8 leading-relaxed">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-white/40 mb-2 font-semibold">
                    Problem Diagnostics
                  </h4>
                  <p>{selectedProject.problem}</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#D4AF37] mb-2 font-semibold">
                    Architecture & Execution Strategy
                  </h4>
                  <p>{selectedProject.solution}</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-white/40 mb-2 font-semibold">
                    Measured Business Outcome
                  </h4>
                  <p className="text-white font-medium">{selectedProject.outcome}</p>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-xs uppercase tracking-widest text-white/40 mb-3 font-semibold">
                  Technologies Deployed
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-md bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-xs text-[#D4AF37]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-end border-t border-white/10 pt-6">
                <a
                  href="#contact"
                  onClick={() => setSelectedProject(null)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D4AF37] text-black font-medium text-xs uppercase tracking-widest hover:bg-[#F5E17A] transition-colors"
                >
                  Request Similar Transformation
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function DeviceMockup({
  device,
  accent,
  title,
}: {
  device: 'laptop' | 'phone' | 'tablet';
  accent: string;
  title: string;
}) {
  if (device === 'laptop') {
    return (
      <div className="relative w-full max-w-lg aspect-[16/10] bg-[#121212] rounded-xl border border-white/15 p-3 flex flex-col justify-between shadow-2xl">
        <div className="flex items-center justify-between pb-2 border-b border-white/10">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-[10px] text-white/40 font-mono">https://altiora.agency/{title.toLowerCase().replace(/\s+/g, '-')}</span>
        </div>
        <div className="my-auto text-center p-6 border border-dashed border-white/10 rounded-lg">
          <Laptop size={32} className="mx-auto mb-2 text-[#D4AF37]" />
          <div className="text-xs font-serif text-white">{title} Flagship Site</div>
          <div className="text-[10px] text-white/40 font-mono mt-1">Interactive 4K Canvas</div>
        </div>
      </div>
    );
  }

  if (device === 'phone') {
    return (
      <div className="relative w-48 aspect-[9/19] bg-[#121212] rounded-3xl border-2 border-white/20 p-3 flex flex-col justify-between shadow-2xl">
        <div className="w-16 h-3 bg-white/10 rounded-full mx-auto mb-2" />
        <div className="my-auto text-center p-4 border border-dashed border-white/10 rounded-xl">
          <Smartphone size={28} className="mx-auto mb-2 text-[#D4AF37]" />
          <div className="text-[11px] font-serif text-white">{title}</div>
          <div className="text-[9px] text-white/40 font-mono mt-1">QR Menu & Reels</div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-72 aspect-[3/4] bg-[#121212] rounded-2xl border-2 border-white/15 p-4 flex flex-col justify-between shadow-2xl">
      <div className="w-2 h-2 rounded-full bg-white/20 mx-auto mb-2" />
      <div className="my-auto text-center p-6 border border-dashed border-white/10 rounded-xl">
        <Tablet size={32} className="mx-auto mb-2 text-[#D4AF37]" />
        <div className="text-xs font-serif text-white">{title}</div>
        <div className="text-[10px] text-white/40 font-mono mt-1">Tablet Concierge Portal</div>
      </div>
    </div>
  );
}
