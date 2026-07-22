'use client';

import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';

const testimonials = [
  {
    name: 'Arjun Mehta',
    role: 'Owner, The Meridian Boutique Hotel',
    location: 'Goa / Jaipur',
    rating: 5,
    outcome: '+320% Direct Bookings',
    text:
      'Altiora completely redefined our direct booking engine. We eliminated 60% of OTA commissions within 90 days. The website feels like stepping into our actual lobby.',
  },
  {
    name: 'Priya Kapoor',
    role: 'Founder, Noir Coffee Co.',
    location: 'Mumbai',
    rating: 5,
    outcome: '+38% Average Check Size',
    text:
      'From our print leather menus to the touchless QR system — everything feels like an Awwwards showcase. Our guests photograph the menus daily.',
  },
  {
    name: 'Ravi Sharma',
    role: 'Managing Director, Saffron & Stone',
    location: 'Udaipur',
    rating: 5,
    outcome: '100% Weekend Occupancy',
    text:
      'Working with Altiora was seamless. They understood culinary storytelling better than any traditional agency. Our weekend tables are fully booked 3 weeks out.',
  },
  {
    name: 'Sneha Patel',
    role: 'Marketing Lead, Artisanal Hospitality',
    location: 'Bengaluru',
    rating: 5,
    outcome: '140K+ Organic Reel Reach',
    text:
      'The 4K cinematic reels Altiora edited achieved over 140,000 organic views in month one. The pacing and sound design are unmatched.',
  },
  {
    name: 'Vikram Nair',
    role: 'Director, Coastal Fine Dining Group',
    location: 'Goa',
    rating: 5,
    outcome: 'Saved ₹4.2L/mo in Fees',
    text:
      'Altiora doesn’t just design pages; they build digital flagships that drive true bottom-line ROI. They are our permanent creative agency partners.',
  },
  {
    name: 'Ananya Reddy',
    role: 'Owner, Petals Luxury Patisserie',
    location: 'Hyderabad',
    rating: 5,
    outcome: '99/100 Speed & Conversion',
    text:
      'The WhatsApp order flow combined with the sleek dark aesthetics doubled our online gift box sales during peak festival season.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 lg:py-40 bg-[#050505] overflow-hidden relative">
      <div className="container mx-auto px-6 lg:px-12 mb-16">
        <SectionHeader
          eyebrow="Client Trust & Proof"
          heading="Trusted By Hospitality Leaders Charging Premium Rates."
          subheading="Real outcomes, measurable ROI. Here is how Altiora helps luxury hotel and culinary brands stand apart."
          align="center"
        />
      </div>

      {/* Infinite Auto-Scrolling Marquee */}
      <div className="relative">
        {/* Soft edge blur overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-40 z-10 pointer-events-none bg-gradient-to-r from-[#050505] to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-40 z-10 pointer-events-none bg-gradient-to-l from-[#050505] to-transparent" />

        {/* Row 1 — Left Scroll */}
        <div className="flex overflow-hidden mb-6">
          <motion.div
            className="flex gap-6 flex-shrink-0"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 35, ease: 'linear', repeat: Infinity }}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <TestimonialCard key={'r1-' + i} testimonial={t} />
            ))}
          </motion.div>
        </div>

        {/* Row 2 — Right Scroll */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-6 flex-shrink-0"
            animate={{ x: ['-50%', '0%'] }}
            transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
          >
            {[
              ...testimonials.slice(3),
              ...testimonials.slice(0, 3),
              ...testimonials.slice(3),
              ...testimonials.slice(0, 3),
            ].map((t, i) => (
              <TestimonialCard key={'r2-' + i} testimonial={t} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[0] }) {
  return (
    <div className="flex-shrink-0 w-[380px] sm:w-[420px] rounded-2xl glass-card glass-card-hover p-8 flex flex-col justify-between">
      <div>
        {/* Header: Rating & Verified ROI Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-1 text-[#D4AF37]">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} size={14} className="fill-[#D4AF37]" />
            ))}
          </div>
          <span className="inline-flex items-center gap-1 text-[10px] uppercase font-mono tracking-wider text-[#D4AF37] px-2.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20">
            <CheckCircle size={10} />
            {testimonial.outcome}
          </span>
        </div>

        <Quote size={20} className="text-[#D4AF37]/30 mb-3" />

        {/* Testimonial Copy */}
        <p className="text-white/70 text-sm leading-relaxed mb-6 font-light">
          "{testimonial.text}"
        </p>
      </div>

      {/* Author Footer */}
      <div className="flex items-center gap-3 border-t border-white/10 pt-4">
        <div className="w-10 h-10 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] text-sm font-serif font-semibold">
          {testimonial.name[0]}
        </div>
        <div>
          <p className="text-white text-sm font-medium">{testimonial.name}</p>
          <p className="text-white/40 text-xs">{testimonial.role}</p>
          <p className="text-[#D4AF37]/70 text-[11px] font-mono mt-0.5">{testimonial.location}</p>
        </div>
      </div>
    </div>
  );
}

