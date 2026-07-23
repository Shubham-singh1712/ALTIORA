'use client';

import { motion } from 'framer-motion';
import SectionHeader from '@/components/shared/SectionHeader';

const steps = [
  {
    number: '01',
    phase: 'Discovery',
    title: 'Consultation & Planning',
    description:
      'We discuss your goals, target guests, brand aesthetic, and key website requirements.',
  },
  {
    number: '02',
    phase: 'Strategy',
    title: 'Structure & Content',
    description:
      'Mapping out clear page structures, photo highlights, digital menu items, and direct inquiry buttons.',
  },
  {
    number: '03',
    phase: 'Design',
    title: 'Custom Visual Design',
    description:
      'Crafting clean layouts, elegant typography, dark luxury accents, and high-impact visual elements.',
  },
  {
    number: '04',
    phase: 'Development',
    title: 'Code & Integration',
    description:
      'Building responsive pages with fast load speeds, smooth animations, and WhatsApp integration.',
  },
  {
    number: '05',
    phase: 'Launch',
    title: 'Testing & Go-Live',
    description:
      'Testing across mobile devices and desktop browsers before launching your site live.',
  },
  {
    number: '06',
    phase: 'Support',
    title: 'Ongoing Maintenance',
    description:
      'Assisting with content updates, menu price changes, and technical support as your business grows.',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-28 lg:py-40 bg-[#080808] relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeader
          eyebrow="How We Work"
          heading="Our Simple 6-Step Process."
          subheading="A clear and collaborative workflow to take your project from initial idea to live website without hassle."
          align="center"
          className="mb-20"
        />

        <div className="relative">
          {/* Animated Connecting Line */}
          <div className="hidden lg:block absolute top-[52px] left-8 right-8 h-px bg-white/10">
            <motion.div
              className="h-full bg-gradient-to-r from-[#D4AF37] via-[#F5E17A] to-[#D4AF37] origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] as const, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1] as const,
                }}
                viewport={{ once: true, margin: '-40px' }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step Circle */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-full border border-white/15 bg-[#101010] flex items-center justify-center relative group-hover:border-[#D4AF37] transition-colors duration-500 shadow-xl">
                    <span className="text-[#D4AF37] font-serif text-xl font-medium">{step.number}</span>
                    <div className="absolute inset-0 rounded-full border border-[#D4AF37]/0 group-hover:border-[#D4AF37]/30 group-hover:scale-110 transition-all duration-500" />
                  </div>
                </div>

                {/* Phase Tag */}
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#D4AF37] font-semibold mb-2">
                  {step.phase}
                </span>

                {/* Title */}
                <h3 className="text-white text-base font-serif font-light mb-3 leading-snug group-hover:text-[#D4AF37] transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-white/50 text-xs leading-relaxed font-light">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

