'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';

const faqs = [
  {
    question: 'What types of businesses do you work with?',
    answer:
      'We specialize exclusively in the hospitality industry — hotels, boutique properties, resorts, restaurants, cafes, coffee shops, and hospitality startups. This focus means we deeply understand your audience, your goals, and what makes hospitality brands stand out online.',
  },
  {
    question: 'How long does a website project typically take?',
    answer:
      'Most of our website projects are completed within 2–4 weeks, depending on scope and complexity. We follow a structured process — discovery, design, development, and launch — and keep you informed at every stage. Rush timelines can be accommodated on request.',
  },
  {
    question: 'Do you handle hosting and domain setup?',
    answer:
      'Yes. We manage full deployment — from domain configuration to hosting setup, SSL certificates, and performance optimization. Your website will be live, fast, and secure from day one. We offer ongoing hosting support as well.',
  },
  {
    question: 'Can you redesign our existing website?',
    answer:
      'Absolutely. Whether you need a complete redesign or a strategic refresh, we evaluate your current site and build something that better reflects your brand and converts more visitors into customers.',
  },
  {
    question: 'What is included in the Creative Design package?',
    answer:
      'Our Creative Design service covers everything from restaurant and cafe menu design to QR menus, posters, flyers, social media creatives, festival offers, and comprehensive brand asset kits. Each deliverable is crafted to communicate quality and drive action.',
  },
  {
    question: 'How do you approach video editing for hospitality brands?',
    answer:
      'We approach every video project with a cinematic sensibility. Whether it\'s a 15-second Instagram Reel or a 2-minute hotel walkthrough, we focus on storytelling, lighting, pacing, and sound design — creating content that stops the scroll and inspires visits.',
  },
  {
    question: 'Do you offer ongoing support after project completion?',
    answer:
      'Yes. We offer post-launch support and retainer packages for clients who want us to remain their ongoing digital partner — managing content updates, new design requests, video content, and performance monitoring.',
  },
  {
    question: 'How do we get started?',
    answer:
      'Simply reach out via our contact form or WhatsApp. We\'ll schedule a brief discovery call, understand your needs, and propose a tailored plan with transparent pricing. There\'s no obligation — just a conversation about your vision.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 lg:py-40 bg-[#080808] relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-20 items-start">
          {/* Left */}
          <div className="lg:sticky lg:top-32">
            <SectionHeader
              eyebrow="FAQ"
              heading="Questions Answered."
              subheading="Everything you need to know about working with Altiora."
              align="left"
            />
          </div>

          {/* Right: Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-xl border transition-all duration-500 overflow-hidden ${
                  openIndex === index
                    ? 'border-gold/30 bg-[#101010]/80'
                    : 'border-white/8 bg-[#101010]/40 hover:border-white/15'
                }`}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left gap-4"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                >
                  <span
                    className={`text-base font-medium transition-colors duration-300 ${
                      openIndex === index ? 'text-white' : 'text-white/70'
                    }`}
                  >
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 0 : 0 }}
                    className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      openIndex === index
                        ? 'border-gold/50 bg-gold/10 text-gold'
                        : 'border-white/10 text-white/40'
                    }`}
                  >
                    {openIndex === index ? <Minus size={14} /> : <Plus size={14} />}
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 border-t border-white/5">
                        <p className="text-white/50 text-sm leading-relaxed pt-4">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
