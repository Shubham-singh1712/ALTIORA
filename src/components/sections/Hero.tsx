'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown, Sparkles, Globe, Smartphone, Utensils, Video } from 'lucide-react';
import MagneticButton from '@/components/shared/MagneticButton';

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
      {/* Subtle ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-32 right-10 w-[600px] h-[600px] rounded-full opacity-[0.10] blur-[120px]"
          style={{
            background: 'radial-gradient(circle, #D4AF37 0%, #F5E17A 35%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-[500px] h-[500px] rounded-full opacity-[0.06] blur-[100px]"
          style={{
            background: 'radial-gradient(circle, #ffffff 0%, #D4AF37 40%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

      <motion.div
        className="container mx-auto px-6 lg:px-12 relative z-10 my-auto"
        style={{ y, opacity }}
      >
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Left Column: Clear Direct Headline & Simple Business Copy */}
          <div className="lg:col-span-6 text-left">
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 backdrop-blur-md mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="text-[#D4AF37] text-[11px] tracking-[0.2em] uppercase font-semibold">
                Digital Agency for Hotels, Cafés & Restaurants
              </span>
            </motion.div>

            {/* Clear Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light leading-[1.1] text-white mb-6 tracking-tight"
            >
              We Design Premium Websites That Bring You{' '}
              <span className="text-gold-gradient font-normal">More Customers.</span>
            </motion.h1>

            {/* Supporting Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="text-white/70 text-base sm:text-lg font-light leading-relaxed mb-8 max-w-xl"
            >
              Altiora helps boutique hotels, resorts, cafés, and restaurants stand out online. We create elegant websites, digital menus, and video content that make a lasting first impression and turn online visitors into paying guests.
            </motion.p>

            {/* Service Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-wrap gap-2.5 mb-10 text-xs text-white/70"
            >
              {[
                { icon: Globe, label: 'Website Development' },
                { icon: Smartphone, label: 'Landing Pages' },
                { icon: Utensils, label: 'Menu Design' },
                { icon: Video, label: 'Reel Editing' },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5"
                >
                  <Icon size={13} className="text-[#D4AF37]" />
                  <span>{label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8"
            >
              <MagneticButton href="#contact" variant="primary">
                Start Your Project
                <ArrowRight size={16} className="ml-1" />
              </MagneticButton>
              <MagneticButton href="#work" variant="secondary">
                View Portfolio
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right Column: Realistic Website & Mobile Device Mockup */}
          <div className="lg:col-span-6 relative">
            <HeroMockupVisual />
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
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

function HeroMockupVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.4 }}
      className="relative w-full max-w-lg mx-auto py-4"
    >
      {/* Primary Realistic Desktop Window Mockup */}
      <div className="relative rounded-2xl glass-card border border-white/15 overflow-hidden shadow-2xl bg-[#0d0d0d]">
        {/* Browser Top Header */}
        <div className="px-4 py-3 bg-black/60 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>
          <div className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-white/50 w-52 text-center truncate">
            meridian-hotel.com
          </div>
          <div className="w-10" />
        </div>

        {/* Website Content Preview */}
        <div className="p-6 space-y-5 bg-gradient-to-b from-[#0a0a0a] to-[#121212]">
          {/* Mock Header Nav */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              <span className="font-serif text-sm text-white tracking-widest uppercase">The Meridian</span>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#D4AF37] text-black text-[10px] font-semibold uppercase tracking-wider">
              Book Direct
            </span>
          </div>

          {/* Mock Hero Content */}
          <div className="space-y-3 pt-2">
            <span className="text-[10px] text-[#D4AF37] uppercase tracking-widest font-mono">Boutique Stay & Dining</span>
            <h4 className="text-xl sm:text-2xl font-serif text-white font-light leading-snug">
              Luxury Oceanfront Suites & Culinary Dining
            </h4>
            <p className="text-xs text-white/50 leading-relaxed max-w-xs">
              Experience handcrafted comfort with direct sea views, private plunge pools, and artisanal cuisine.
            </p>
          </div>

          {/* Mock Feature Highlights Grid */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-3 rounded-xl border border-white/10 bg-white/5">
              <span className="text-[#D4AF37] text-xs font-serif font-semibold block mb-0.5">Rooms & Suites</span>
              <span className="text-[10px] text-white/40 block">From ₹8,500/night</span>
            </div>
            <div className="p-3 rounded-xl border border-white/10 bg-white/5">
              <span className="text-[#D4AF37] text-xs font-serif font-semibold block mb-0.5">Chef Table Menu</span>
              <span className="text-[10px] text-white/40 block">Seasonal Tasting Menu</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Realistic Smartphone Mockup Overlay */}
      <motion.div
        className="absolute -bottom-6 -right-4 sm:-right-8 w-44 sm:w-52 rounded-2xl glass-card border border-[#D4AF37]/30 bg-[#080808] p-3 shadow-2xl"
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-12 h-1 bg-white/20 rounded-full mx-auto mb-2" />
        <div className="p-3 rounded-xl border border-white/10 bg-black/80 space-y-2">
          <div className="flex items-center justify-between text-[10px] text-white/50 font-mono">
            <span>DIGITAL MENU</span>
            <span className="text-[#D4AF37]">QR CODE</span>
          </div>
          <div className="text-xs font-serif text-white">Noir Coffee Co.</div>
          <div className="space-y-1.5 pt-1">
            <div className="flex justify-between items-center text-[10px] text-white/70">
              <span>Artisanal Espresso</span>
              <span className="text-[#D4AF37]">₹280</span>
            </div>
            <div className="flex justify-between items-center text-[10px] text-white/70">
              <span>Truffle Croissant</span>
              <span className="text-[#D4AF37]">₹340</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

