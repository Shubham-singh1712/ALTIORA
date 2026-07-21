'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionHeader from '@/components/shared/SectionHeader';

const milestones = [
  {
    step: '01',
    title: 'Discovery',
    description:
      'We begin by understanding your brand DNA — your values, audience, competitors, and goals. No assumptions, only clarity.',
    icon: '◈',
  },
  {
    step: '02',
    title: 'Strategy',
    description:
      'We map a precise digital roadmap tailored to your hospitality business. Every decision is driven by data and hospitality market insight.',
    icon: '◎',
  },
  {
    step: '03',
    title: 'Design',
    description:
      'Wireframes become world-class visual experiences. We craft every screen with obsessive attention to elegance, hierarchy, and feel.',
    icon: '◇',
  },
  {
    step: '04',
    title: 'Development',
    description:
      'Clean, performant code brings your design to life. Pixel-perfect, fast-loading, and built to scale — on every device.',
    icon: '◆',
  },
  {
    step: '05',
    title: 'Launch',
    description:
      'We handle full deployment, go-live testing, and performance checks. Your brand enters the digital world with complete confidence.',
    icon: '◉',
  },
  {
    step: '06',
    title: 'Growth',
    description:
      'Post-launch, we monitor, refine, and support. Your digital presence is a living asset — and we keep it growing.',
    icon: '◐',
  },
];

export default function WhyAltiora() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-32 lg:py-40 bg-[#050505] relative overflow-hidden">
      {/* Gold top line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeader
          eyebrow="Why Choose Altiora"
          heading="A Partner, Not Just a Vendor."
          subheading="We're invested in your success from day one. Our six-phase approach ensures nothing is left to chance — and everything is built to last."
          align="center"
          className="mb-24"
        />

        <div ref={ref} className="relative max-w-5xl mx-auto">
          {/* Vertical progress line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-gold/60 to-gold/10"
              initial={{ height: '0%' }}
              animate={{ height: isInView ? '100%' : '0%' }}
              transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            />
          </div>

          <div className="space-y-0">
            {milestones.map((milestone, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={milestone.step}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: 0.3 + index * 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`relative flex items-center gap-8 py-10 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-row pl-20 md:pl-0`}
                >
                  {/* Content card */}
                  <div className={`md:w-[45%] ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                    <div
                      className={`relative inline-block rounded-xl border border-white/8 bg-[#101010]/60 backdrop-blur-sm p-6 lg:p-8 group hover:border-gold/20 transition-colors duration-500 ${
                        isLeft ? 'md:ml-auto' : ''
                      }`}
                    >
                      {/* Hover glow */}
                      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.07), transparent 70%)' }}
                      />
                      <p className="text-gold/50 text-xs tracking-[0.3em] uppercase mb-3">
                        Phase {milestone.step}
                      </p>
                      <h3 className="text-white text-xl font-serif font-light mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-white/45 text-sm leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 flex flex-col items-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: 0.4 + index * 0.15, duration: 0.5, type: 'spring' }}
                      className="w-10 h-10 rounded-full border border-gold/30 bg-[#050505] flex items-center justify-center text-gold text-sm shadow-[0_0_20px_rgba(212,175,55,0.15)]"
                    >
                      {milestone.icon}
                    </motion.div>
                  </div>

                  {/* Empty space for the other side */}
                  <div className="hidden md:block md:w-[45%]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
