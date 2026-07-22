'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Check, ArrowRight, Eye, X, Sparkles } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';

export default function MenuShowcase() {
  const [activeTab, setActiveTab] = useState<'paper' | 'altiora'>('altiora');
  const [activeCategory, setActiveCategory] = useState<'cocktails' | 'mains' | 'desserts'>('cocktails');

  return (
    <section id="menu-demo" className="py-28 lg:py-40 bg-[#050505] relative overflow-hidden">
      {/* Background Accent */}
      <div
        className="absolute right-10 top-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full opacity-[0.03] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)' }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeader
          eyebrow="Interactive Experience Demo"
          heading={`Paper Menus Vs.\nAltiora Touchless Prestige.`}
          subheading="Test our interactive digital menu architecture. Engineered to elevate order perception, showcase high-margin items, and drive +38% higher check sizes."
          align="center"
          className="mb-16"
        />

        {/* Tab Toggle */}
        <div className="flex justify-center mb-12">
          <div className="p-1 rounded-full bg-white/5 border border-white/10 flex items-center gap-2">
            <button
              onClick={() => setActiveTab('paper')}
              className={`px-6 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                activeTab === 'paper'
                  ? 'bg-rose-500/20 border border-rose-500/40 text-rose-300'
                  : 'text-white/40 hover:text-white'
              }`}
            >
              Standard Paper PDF
            </button>
            <button
              onClick={() => setActiveTab('altiora')}
              className={`px-6 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeTab === 'altiora'
                  ? 'bg-[#D4AF37] text-black font-semibold shadow-lg'
                  : 'text-white/40 hover:text-white'
              }`}
            >
              <Sparkles size={14} />
              Altiora Touchless Luxury
            </button>
          </div>
        </div>

        {/* Live Mockup Stage */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-12 gap-8 items-center">
          {/* Left Description Card */}
          <div className="md:col-span-6 space-y-6">
            {activeTab === 'paper' ? (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass-card p-8 rounded-2xl border border-rose-500/20 bg-rose-500/5 space-y-4"
              >
                <div className="text-xs uppercase font-mono tracking-widest text-rose-400 font-semibold">
                  Standard PDF / Paper Issues
                </div>
                <h3 className="text-2xl font-serif text-white font-light">Static & Low Engagement</h3>
                <ul className="space-y-3 text-xs text-white/60">
                  <li className="flex items-start gap-2">
                    <X size={14} className="text-rose-400 shrink-0 mt-0.5" />
                    <span>Requires pinching & zooming on mobile screen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X size={14} className="text-rose-400 shrink-0 mt-0.5" />
                    <span>Zero visual imagery for high-margin signature items</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X size={14} className="text-rose-400 shrink-0 mt-0.5" />
                    <span>Costly reprint fees for seasonal price changes</span>
                  </li>
                </ul>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass-card p-8 rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/5 space-y-4"
              >
                <div className="text-xs uppercase font-mono tracking-widest text-[#D4AF37] font-semibold">
                  Altiora Luxury QR Architecture
                </div>
                <h3 className="text-2xl font-serif text-white font-light">Interactive Gastronomy Showcase</h3>
                <ul className="space-y-3 text-xs text-white/80">
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>Bespoke Dark Editorial UI matched to restaurant interior</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>Instant category navigation & allergen tagging</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>Instant seasonal price updates with zero reprint costs</span>
                  </li>
                </ul>
              </motion.div>
            )}
          </div>

          {/* Right Phone Mockup Container */}
          <div className="md:col-span-6 flex justify-center">
            <div className="relative w-72 aspect-[9/18] bg-[#0c0c0c] rounded-[36px] border-4 border-white/20 p-3 shadow-2xl overflow-hidden flex flex-col">
              {/* Notch */}
              <div className="w-20 h-4 bg-black rounded-b-xl mx-auto shrink-0 mb-3" />

              {/* Screen Content */}
              {activeTab === 'paper' ? (
                <div className="flex-1 bg-white/90 p-4 text-black text-[9px] font-mono opacity-40 overflow-hidden flex flex-col justify-between">
                  <div className="border-b border-black/20 pb-2 font-bold text-center">MENU_v2_FINAL.pdf</div>
                  <div className="space-y-2">
                    <div className="h-2 bg-black/20 rounded w-3/4" />
                    <div className="h-2 bg-black/10 rounded w-full" />
                    <div className="h-2 bg-black/10 rounded w-5/6" />
                    <div className="h-2 bg-black/20 rounded w-2/3" />
                  </div>
                  <div className="text-center text-[8px] text-black/50">Pinch to Zoom</div>
                </div>
              ) : (
                <div className="flex-1 flex flex-col justify-between overflow-hidden text-white">
                  {/* Header */}
                  <div className="text-center pb-2 border-b border-white/10">
                    <div className="text-[10px] font-serif text-[#D4AF37]">NOIR COFFEE & BAR</div>
                    <div className="text-[8px] text-white/40 tracking-widest uppercase">Touchless Selection</div>
                  </div>

                  {/* Categories */}
                  <div className="flex justify-around py-2 border-b border-white/10 text-[9px]">
                    {(['cocktails', 'mains', 'desserts'] as const).map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`capitalize ${
                          activeCategory === cat ? 'text-[#D4AF37] font-bold underline' : 'text-white/40'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>

                  {/* Items list */}
                  <div className="flex-1 py-2 space-y-2 overflow-y-auto">
                    {activeCategory === 'cocktails' && (
                      <>
                        <div className="p-2 rounded bg-white/5 border border-white/10 flex justify-between items-center">
                          <div>
                            <div className="text-[10px] font-medium text-white">Smoked Old Fashioned</div>
                            <div className="text-[8px] text-white/40">Bourbon, bitters, oak smoke</div>
                          </div>
                          <span className="text-[10px] text-[#D4AF37] font-mono font-bold">₹850</span>
                        </div>
                        <div className="p-2 rounded bg-white/5 border border-white/10 flex justify-between items-center">
                          <div>
                            <div className="text-[10px] font-medium text-white">Gold Leaf Espresso Martini</div>
                            <div className="text-[8px] text-white/40">Single-origin espresso, Kahlúa</div>
                          </div>
                          <span className="text-[10px] text-[#D4AF37] font-mono font-bold">₹950</span>
                        </div>
                      </>
                    )}
                    {activeCategory === 'mains' && (
                      <div className="p-2 rounded bg-white/5 border border-white/10 flex justify-between items-center">
                        <div>
                          <div className="text-[10px] font-medium text-white">Truffle Wild Mushroom Risotto</div>
                          <div className="text-[8px] text-white/40">Arborio rice, aged parmesan</div>
                        </div>
                        <span className="text-[10px] text-[#D4AF37] font-mono font-bold">₹1,250</span>
                      </div>
                    )}
                    {activeCategory === 'desserts' && (
                      <div className="p-2 rounded bg-white/5 border border-white/10 flex justify-between items-center">
                        <div>
                          <div className="text-[10px] font-medium text-white">Valrhona Dark Chocolate Sphere</div>
                          <div className="text-[8px] text-white/40">Warm caramel pour</div>
                        </div>
                        <span className="text-[10px] text-[#D4AF37] font-mono font-bold">₹650</span>
                      </div>
                    )}
                  </div>

                  {/* Order Button */}
                  <div className="pt-2">
                    <div className="w-full py-1.5 rounded-full bg-[#D4AF37] text-black text-[9px] font-bold text-center uppercase tracking-wider">
                      Request Sommelier
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
