'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown, Sparkles, ShieldCheck } from 'lucide-react';
import MagneticButton from '@/components/shared/MagneticButton';
import AnimatedCounter from '@/components/shared/AnimatedCounter';

const headlineWords = [
  'We',
  'Build',
  'Digital',
  'Experiences',
  'That',
  'Turn',
  'Visitors',
  'Into',
  'Customers.',
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#050505] bg-grid-pattern pt-28 pb-16 lg:pt-36 lg:pb-20"
      id="home"
    >
      {/* Floating dynamic luxury mesh gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-32 right-10 w-[700px] h-[700px] rounded-full opacity-[0.12] blur-[120px]"
          style={{
            background: 'radial-gradient(circle, #D4AF37 0%, #F5E17A 35%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-[550px] h-[550px] rounded-full opacity-[0.08] blur-[100px]"
          style={{
            background: 'radial-gradient(circle, #ffffff 0%, #D4AF37 40%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.25, 1],
            x: [0, -30, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

      <motion.div
        className="container mx-auto px-6 lg:px-12 relative z-10 my-auto"
        style={{ y, opacity }}
      >
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Persuasive CRO Copy */}
          <div className="lg:col-span-7">
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 backdrop-blur-md mb-8"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
              <span className="text-[#D4AF37] text-xs tracking-[0.25em] uppercase font-semibold">
                Luxury Hospitality & Brand Architecture
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light leading-[1.06] text-white mb-8 tracking-tight">
              {headlineWords.map((word, i) => {
                const isHighlight =
                  word === 'Digital' || word === 'Experiences' || word === 'Customers.';
                return (
                  <motion.span
                    key={word + i}
                    className="inline-block mr-[0.22em] origin-bottom"
                    initial={{ opacity: 0, y: 50, rotateX: -15 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.35 + i * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {isHighlight ? (
                      <span className="text-gold-gradient font-normal">{word}</span>
                    ) : (
                      word
                    )}
                  </motion.span>
                );
              })}
            </h1>

            {/* Subheading / CRO Statement */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="text-white/60 text-lg sm:text-xl font-light leading-relaxed mb-10 max-w-xl"
            >
              We engineer bespoke digital flagship websites, high-converting culinary menus, and high-impact visual assets for luxury hotels, fine dining restaurants, and ambitious brands charging premium rates.
            </motion.p>

            {/* CTAs & Trust Signal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.25 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-14"
            >
              <MagneticButton href="#contact" variant="primary">
                Book ₹1L+ Strategy Call
                <ArrowRight size={16} className="ml-1" />
              </MagneticButton>
              <MagneticButton href="#work" variant="secondary">
                Explore Case Studies
              </MagneticButton>
            </motion.div>

            {/* Proof Counters */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.45 }}
              className="pt-8 border-t border-white/10 grid grid-cols-3 gap-6 sm:gap-10"
            >
              {[
                { value: 50, suffix: '+', label: 'Bespoke Projects' },
                { value: 3.2, suffix: 'x', label: 'Avg Direct Bookings' },
                { value: 100, suffix: '%', label: 'Client Retention' },
              ].map(({ value, suffix, label }) => (
                <div key={label}>
                  <div className="text-2xl sm:text-4xl font-serif text-[#D4AF37] mb-1">
                    <AnimatedCounter target={value} suffix={suffix} />
                  </div>
                  <div className="text-white/40 text-[11px] sm:text-xs tracking-wider uppercase font-medium">
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Floating Luxury Geometry */}
          <div className="lg:col-span-5 hidden lg:flex items-center justify-center relative">
            <HeroVisual />
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="container mx-auto px-6 relative z-10 flex justify-center pt-8"
      >
        <a
          href="#services"
          className="flex flex-col items-center gap-2 text-white/40 hover:text-[#D4AF37] transition-colors group"
          aria-label="Scroll down to services"
        >
          <span className="text-[11px] tracking-[0.25em] uppercase">Scroll To Explore</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#D4AF37]"
          >
            <ChevronDown size={14} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative w-[480px] h-[480px]">
      {/* Outer concentric rings */}
      <motion.div
        className="absolute inset-0 rounded-full border border-[#D4AF37]/15"
        animate={{ rotate: 360 }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
      >
        {[0, 90, 180, 270].map((deg) => (
          <div
            key={deg}
            className="absolute w-2.5 h-2.5 rounded-full bg-[#D4AF37]"
            style={{
              top: '50%',
              left: '50%',
              transform: `rotate(${deg}deg) translateX(240px) translateY(-50%)`,
            }}
          />
        ))}
      </motion.div>

      <motion.div
        className="absolute inset-16 rounded-full border border-white/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      />

      {/* Central 3D Card Glass Stack */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative w-72 h-80 glass-card p-6 flex flex-col justify-between shadow-2xl border border-white/15"
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]" />
              <span className="text-xs text-white/80 font-mono">ALTIORA // FLAGSHIP</span>
            </div>
            <ShieldCheck size={16} className="text-[#D4AF37]" />
          </div>

          <div className="my-auto space-y-3">
            <div className="text-xs text-[#D4AF37] uppercase tracking-widest font-semibold">
              Conversion Architecture
            </div>
            <div className="text-xl font-serif text-white leading-snug">
              Luxury Hotel & Culinary Digital Elevation
            </div>
            <div className="flex items-center gap-2 text-xs text-white/50">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Direct Booking Engine Integrated
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex justify-between items-center text-[11px] text-white/40">
            <span>ROI ESTIMATE</span>
            <span className="text-[#D4AF37] font-semibold">+320% Revenue</span>
          </div>
        </motion.div>
      </div>

      {/* Floating Badges */}
      {[
        { label: 'Boutique Hotel Flagships', x: '-110%', y: '-10%', delay: 0 },
        { label: 'QR & Print Menu Systems', x: '80%', y: '10%', delay: 0.4 },
        { label: 'High-Impact Reels', x: '-100%', y: '80%', delay: 0.8 },
        { label: '₹1L+ Client Standard', x: '75%', y: '85%', delay: 1.2 },
      ].map(({ label, x, y: yPos, delay }) => (
        <motion.div
          key={label}
          className="absolute glass-card px-4 py-2 text-xs text-white/80 tracking-wider whitespace-nowrap shadow-lg border border-white/10"
          style={{ left: '50%', top: '50%', translateX: x, translateY: yPos }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + 1.2, duration: 0.6 }}
        >
          <span className="text-[#D4AF37] mr-2">✦</span>
          {label}
        </motion.div>
      ))}
    </div>
  );
}

