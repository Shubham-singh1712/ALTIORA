'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';

const testimonials = [
  {
    name: 'Arjun Mehta',
    role: 'Owner, The Meridian Boutique Hotel',
    location: 'Jaipur, Rajasthan',
    rating: 5,
    text:
      'Altiora transformed our digital presence completely. Our website now reflects the luxury experience we offer. Direct bookings increased by 40% in the first month alone.',
  },
  {
    name: 'Priya Kapoor',
    role: 'Founder, Noir Coffee Co.',
    location: 'Mumbai, Maharashtra',
    rating: 5,
    text:
      'From our QR menu to Instagram creatives — everything feels premium and intentional. Our customers constantly compliment how beautiful our branding looks.',
  },
  {
    name: 'Ravi Sharma',
    role: 'General Manager, Saffron Resort',
    location: 'Udaipur, Rajasthan',
    rating: 5,
    text:
      'Working with Altiora was a seamless experience. They truly understood our vision and delivered a website that speaks to our high-end clientele. Exceptional work.',
  },
  {
    name: 'Sneha Patel',
    role: 'Co-Founder, The Chai Lab',
    location: 'Bengaluru, Karnataka',
    rating: 5,
    text:
      'Our reels now consistently hit 50K+ views. The video editing quality is cinematic — exactly the kind of content that makes people want to visit us immediately.',
  },
  {
    name: 'Vikram Nair',
    role: 'Director, Coastal Dine Group',
    location: 'Goa',
    rating: 5,
    text:
      'Altiora doesn\'t just build websites — they build digital identities. Our new online presence has positioned us as a premium dining destination in the region.',
  },
  {
    name: 'Ananya Reddy',
    role: 'Owner, Petals Café & Bakery',
    location: 'Hyderabad, Telangana',
    rating: 5,
    text:
      'The menu design they created for us is stunning. Customers literally photograph it. The WhatsApp integration has made order management so much easier. 10/10.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 lg:py-40 bg-[#050505] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 mb-16">
        <SectionHeader
          eyebrow="Client Stories"
          heading="Trusted by Hospitality Brands Across India."
          subheading="Real results, real relationships. Here's what our clients say about working with Altiora."
          align="center"
        />
      </div>

      {/* Auto-scrolling marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-r from-[#050505] to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-l from-[#050505] to-transparent" />

        {/* Row 1 — scroll left */}
        <div className="flex overflow-hidden mb-6">
          <motion.div
            className="flex gap-6 flex-shrink-0"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </motion.div>
        </div>

        {/* Row 2 — scroll right */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-6 flex-shrink-0"
            animate={{ x: ['-50%', '0%'] }}
            transition={{ duration: 45, ease: 'linear', repeat: Infinity }}
          >
            {[...testimonials.slice(3), ...testimonials.slice(0, 3), ...testimonials.slice(3), ...testimonials.slice(0, 3)].map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <div className="flex-shrink-0 w-[380px] rounded-2xl border border-white/8 bg-[#101010]/60 backdrop-blur-sm p-7 group hover:border-gold/20 transition-all duration-500">
      {/* Quote icon */}
      <Quote size={20} className="text-gold/40 mb-4" />

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={12} className="text-gold fill-gold" />
        ))}
      </div>

      {/* Text */}
      <p className="text-white/60 text-sm leading-relaxed mb-6">"{testimonial.text}"</p>

      {/* Author */}
      <div className="flex items-center gap-3 border-t border-white/8 pt-5">
        {/* Avatar initial */}
        <div className="w-10 h-10 rounded-full border border-gold/30 bg-gold/10 flex items-center justify-center text-gold text-sm font-serif font-medium">
          {testimonial.name[0]}
        </div>
        <div>
          <p className="text-white text-sm font-medium">{testimonial.name}</p>
          <p className="text-white/40 text-xs">{testimonial.role}</p>
          <p className="text-gold/60 text-xs mt-0.5">{testimonial.location}</p>
        </div>
      </div>
    </div>
  );
}
