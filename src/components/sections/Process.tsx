'use client';

import { motion } from 'framer-motion';
import SectionHeader from '@/components/shared/SectionHeader';

const steps = [
  {
    number: '01',
    title: 'Understand Your Business',
    description:
      'We deep dive into your hospitality brand — your story, your guests, your goals. This becomes the foundation of everything we build.',
  },
  {
    number: '02',
    title: 'Research & Benchmark',
    description:
      'We study your competitive landscape, identify gaps, and find opportunities that will give your brand a clear edge.',
  },
  {
    number: '03',
    title: 'Design the Experience',
    description:
      'From wireframes to high-fidelity visuals — we design a digital experience that captures your brand essence and wows your guests.',
  },
  {
    number: '04',
    title: 'Develop & Engineer',
    description:
      'Clean, fast, and scalable code. Your website is built for performance, accessibility, and conversion from day one.',
  },
  {
    number: '05',
    title: 'Deliver & Deploy',
    description:
      'We launch with precision — full testing, performance audits, and a smooth go-live. You\'re in good hands every step of the way.',
  },
  {
    number: '06',
    title: 'Support & Grow',
    description:
      'Post-launch, we remain your digital partner — monitoring performance, making improvements, and scaling your presence.',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-32 lg:py-40 bg-[#080808] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeader
          eyebrow="Our Process"
          heading="Six Steps to Digital Excellence."
          subheading="A clear, collaborative process that keeps you informed at every stage — and delivers extraordinary results."
          align="center"
          className="mb-20"
        />

        {/* Horizontal scrollable timeline on mobile, grid on desktop */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-[52px] left-0 right-0 h-px bg-white/8">
            <motion.div
              className="h-full bg-gradient-to-r from-gold/30 via-gold/60 to-gold/30 origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              viewport={{ once: true }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true, margin: '-40px' }}
                className="relative flex flex-col items-center lg:items-center text-center"
              >
                {/* Step circle */}
                <div className="relative mb-8">
                  <div className="w-[104px] h-[104px] rounded-full border border-white/10 bg-[#101010] flex items-center justify-center relative group hover:border-gold/30 transition-colors duration-500">
                    <span className="text-gold font-serif text-2xl font-light">{step.number}</span>
                    {/* Pulse ring on hover */}
                    <div className="absolute inset-0 rounded-full border border-gold/0 group-hover:border-gold/20 group-hover:scale-110 transition-all duration-500" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-white text-sm font-medium tracking-wide mb-3 leading-tight">
                  {step.title}
                </h3>
                <p className="text-white/40 text-xs leading-relaxed hidden lg:block">
                  {step.description}
                </p>
                <p className="text-white/40 text-sm leading-relaxed lg:hidden">
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
