'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import MagneticButton from '@/components/shared/MagneticButton';

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative py-40 lg:py-56 overflow-hidden bg-[#050505]"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.12]"
          style={{ background: 'radial-gradient(circle, #D4AF37 0%, transparent 60%)' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Decorative rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full border border-gold/5" />
        <div className="absolute w-[700px] h-[700px] rounded-full border border-white/3" />
        <div className="absolute w-[900px] h-[900px] rounded-full border border-white/2" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-4xl mx-auto"
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="h-px w-12 bg-gold/60" />
            <span className="text-gold text-xs tracking-[0.35em] uppercase font-medium">
              Ready to Begin
            </span>
            <div className="h-px w-12 bg-gold/60" />
          </div>

          {/* Headline */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-light text-white leading-[1.0] mb-8">
            Let&apos;s Build Something{' '}
            <span
              className="block"
              style={{
                background: 'linear-gradient(135deg, #D4AF37, #F5E17A, #D4AF37)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Extraordinary.
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-white/45 text-lg md:text-xl leading-relaxed mb-14 max-w-2xl mx-auto">
            Whether you're launching a new hospitality brand or elevating an existing one —
            we're ready to make your digital presence unforgettable.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-5">
            <MagneticButton
              href="https://wa.me/919876543210?text=Hello%20Altiora%2C%20I%27d%20like%20to%20discuss%20a%20project."
              variant="primary"
            >
              <MessageCircle size={16} />
              Start on WhatsApp
            </MagneticButton>
            <MagneticButton href="mailto:hello@altiora.in" variant="secondary">
              Send Us an Email
              <ArrowRight size={14} />
            </MagneticButton>
          </div>

          {/* Trust indicator */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 text-white/25 text-xs tracking-widest uppercase"
          >
            No commitment required · Responses within 24 hours
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
