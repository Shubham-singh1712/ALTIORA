'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import MagneticButton from '@/components/shared/MagneticButton';
import AnimatedCounter from '@/components/shared/AnimatedCounter';

const words = ['Elevating', 'Hospitality', 'Brands', 'Beyond', 'Expectations.'];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#050505]"
      id="home"
    >
      {/* Floating gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full opacity-[0.07]"
          style={{
            background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] rounded-full opacity-[0.05]"
          style={{
            background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 right-1/6 w-[300px] h-[300px] rounded-full opacity-[0.04]"
          style={{
            background: 'radial-gradient(circle, #ffffff 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <motion.div
        className="container mx-auto px-6 lg:px-12 relative z-10 pt-32 pb-24"
        style={{ y, opacity }}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="h-px w-12 bg-gold" />
              <span className="text-gold text-xs tracking-[0.35em] uppercase font-medium">
                Premium Hospitality Agency
              </span>
            </motion.div>

            {/* Headline — word by word stagger */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light leading-[1.05] text-white mb-8">
              {words.map((word, i) => (
                <motion.span
                  key={word}
                  className="inline-block mr-[0.25em]"
                  initial={{ opacity: 0, y: 60, rotateX: -20 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.4 + i * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {word === 'Beyond' || word === 'Expectations.' ? (
                    <span className="text-gold">{word}</span>
                  ) : (
                    word
                  )}
                </motion.span>
              ))}
            </h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.05 }}
              className="text-white/50 text-lg leading-relaxed mb-12 max-w-lg"
            >
              We create premium websites, stunning menus, and engaging visual content
              that help hotels and cafés stand out, build trust, and attract more customers.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-wrap items-center gap-5"
            >
              <MagneticButton href="#contact" variant="primary">
                Start Your Project
                <ArrowRight size={16} className="ml-1" />
              </MagneticButton>
              <MagneticButton href="#work" variant="secondary">
                <Play size={14} className="mr-1 fill-current" />
                View Our Work
              </MagneticButton>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="mt-16 pt-10 border-t border-white/10 grid grid-cols-3 gap-8"
            >
              {[
                { value: 50, suffix: '+', label: 'Projects Delivered' },
                { value: 100, suffix: '%', label: 'Client Satisfaction' },
                { value: 3, suffix: 'x', label: 'Avg. Traffic Growth' },
              ].map(({ value, suffix, label }) => (
                <div key={label}>
                  <div className="text-3xl font-serif text-gold mb-1">
                    <AnimatedCounter target={value} suffix={suffix} />
                  </div>
                  <div className="text-white/40 text-xs tracking-wider uppercase">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Abstract 3D visual */}
          <div className="hidden lg:flex items-center justify-center relative">
            <HeroVisual />
          </div>
        </div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative w-[520px] h-[520px]">
      {/* Outer rotating ring */}
      <motion.div
        className="absolute inset-0 rounded-full border border-gold/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        {[0, 60, 120, 180, 240, 300].map((deg) => (
          <div
            key={deg}
            className="absolute w-2 h-2 rounded-full bg-gold/30"
            style={{
              top: '50%',
              left: '50%',
              transform: `rotate(${deg}deg) translateX(256px) translateY(-50%)`,
            }}
          />
        ))}
      </motion.div>

      {/* Mid rotating ring */}
      <motion.div
        className="absolute inset-[60px] rounded-full border border-white/5"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        {[0, 90, 180, 270].map((deg) => (
          <div
            key={deg}
            className="absolute w-1.5 h-1.5 rounded-full bg-white/20"
            style={{
              top: '50%',
              left: '50%',
              transform: `rotate(${deg}deg) translateX(196px) translateY(-50%)`,
            }}
          />
        ))}
      </motion.div>

      {/* Inner ring */}
      <motion.div
        className="absolute inset-[120px] rounded-full border border-gold/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      />

      {/* Central glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* Glow */}
          <div
            className="absolute inset-0 rounded-full blur-3xl opacity-30"
            style={{ background: 'radial-gradient(circle, #D4AF37, transparent 70%)' }}
          />
          {/* Main shape */}
          <div className="relative w-48 h-48 rounded-full bg-[#101010] border border-white/10 flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
            <div className="w-24 h-24 border border-gold/40 rotate-45 flex items-center justify-center">
              <div className="w-12 h-12 border border-gold/60 rotate-0 flex items-center justify-center">
                <div className="w-6 h-6 bg-gold/80 rounded-sm rotate-45" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating tags */}
      {[
        { label: 'Premium Design', x: '-100%', y: '10%', delay: 0 },
        { label: 'Hotel Websites', x: '85%', y: '15%', delay: 0.5 },
        { label: 'Visual Content', x: '-80%', y: '75%', delay: 1 },
        { label: 'Brand Strategy', x: '80%', y: '78%', delay: 1.5 },
      ].map(({ label, x, y: yPos, delay }) => (
        <motion.div
          key={label}
          className="absolute glass-card px-3 py-1.5 text-xs text-white/70 tracking-wider whitespace-nowrap"
          style={{ left: '50%', top: '50%', translateX: x, translateY: yPos }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + 1.8, duration: 0.6 }}
        >
          <span className="text-gold mr-1.5">◆</span>
          {label}
        </motion.div>
      ))}
    </div>
  );
}
