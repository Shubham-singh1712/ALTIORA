'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, ArrowRight, DollarSign, Percent, TrendingUp, Sparkles } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';

export default function RoiCalculator() {
  const [rooms, setRooms] = useState<number>(25);
  const [adr, setAdr] = useState<number>(6500); // Average Daily Rate in INR
  const [occupancy, setOccupancy] = useState<number>(70); // % occupancy
  const [otaShare, setOtaShare] = useState<number>(60); // % bookings through OTAs
  const [otaCommission, setOtaCommission] = useState<number>(20); // % commission paid to OTAs

  // Calculations
  const totalAnnualRooms = rooms * 365 * (occupancy / 100);
  const otaRooms = totalAnnualRooms * (otaShare / 100);
  const annualOtaRevenue = otaRooms * adr;
  const annualCommissionPaid = annualOtaRevenue * (otaCommission / 100);
  
  // Altiora direct booking target: shift 50% of OTA bookings to direct
  const directShiftRevenue = annualCommissionPaid * 0.5;
  const monthlySavings = Math.round(directShiftRevenue / 12);
  const annualSavings = Math.round(directShiftRevenue);

  return (
    <section id="roi-calculator" className="py-28 lg:py-40 bg-[#080808] relative overflow-hidden">
      {/* Glow Orbs */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)' }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeader
          eyebrow="Interactive ROI Estimator"
          heading={`Calculate Your OTA\nCommission Recovery.`}
          subheading="See how much revenue your hotel or resort loses to 18-25% OTA commissions — and how quickly an Altiora direct booking flagship pays for itself."
          align="center"
          className="mb-16"
        />

        <div className="max-w-5xl mx-auto glass-card border border-white/10 rounded-2xl p-8 sm:p-12 grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Inputs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Rooms Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs uppercase tracking-wider text-white/70 font-medium">
                  Number of Keys / Rooms: <span className="text-[#D4AF37] font-mono font-semibold">{rooms} Keys</span>
                </label>
              </div>
              <input
                type="range"
                min={5}
                max={150}
                step={1}
                value={rooms}
                onChange={(e) => setRooms(Number(e.target.value))}
                className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
              />
            </div>

            {/* ADR Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs uppercase tracking-wider text-white/70 font-medium">
                  Average Room Rate (ADR): <span className="text-[#D4AF37] font-mono font-semibold">₹{adr.toLocaleString('en-IN')}/night</span>
                </label>
              </div>
              <input
                type="range"
                min={2500}
                max={35000}
                step={500}
                value={adr}
                onChange={(e) => setAdr(Number(e.target.value))}
                className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
              />
            </div>

            {/* Occupancy & OTA Share */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="text-xs uppercase tracking-wider text-white/70 font-medium block mb-2">
                  Avg Occupancy: <span className="text-[#D4AF37] font-mono font-semibold">{occupancy}%</span>
                </label>
                <input
                  type="range"
                  min={30}
                  max={95}
                  step={5}
                  value={occupancy}
                  onChange={(e) => setOccupancy(Number(e.target.value))}
                  className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-white/70 font-medium block mb-2">
                  OTA Booking Share: <span className="text-[#D4AF37] font-mono font-semibold">{otaShare}%</span>
                </label>
                <input
                  type="range"
                  min={20}
                  max={90}
                  step={5}
                  value={otaShare}
                  onChange={(e) => setOtaShare(Number(e.target.value))}
                  className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
                />
              </div>
            </div>

            {/* OTA Commission Rate */}
            <div>
              <label className="text-xs uppercase tracking-wider text-white/70 font-medium block mb-2">
                Current OTA Commission Fee: <span className="text-[#D4AF37] font-mono font-semibold">{otaCommission}%</span>
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[15, 18, 20, 25].map((rate) => (
                  <button
                    key={rate}
                    type="button"
                    onClick={() => setOtaCommission(rate)}
                    className={`py-2 rounded-lg text-xs font-mono border transition-all ${
                      otaCommission === rate
                        ? 'border-[#D4AF37] bg-[#D4AF37]/20 text-[#D4AF37]'
                        : 'border-white/10 bg-black/40 text-white/50 hover:border-white/30'
                    }`}
                  >
                    {rate}% Fee
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Calculation Display (5 cols) */}
          <div className="lg:col-span-5 glass-card border border-[#D4AF37]/30 bg-[#D4AF37]/5 p-8 rounded-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20">
                <Sparkles size={12} />
                Projected Recovery
              </div>

              <div>
                <span className="text-xs text-white/40 uppercase tracking-widest block mb-1">
                  Estimated Annual OTA Loss
                </span>
                <div className="text-2xl font-mono text-rose-400 font-medium">
                  ₹{Math.round(annualCommissionPaid).toLocaleString('en-IN')}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <span className="text-xs text-white/60 uppercase tracking-widest block mb-1 font-semibold">
                  Recoverable Annual Savings
                </span>
                <div className="text-4xl font-serif text-[#D4AF37] font-normal">
                  ₹{annualSavings.toLocaleString('en-IN')}
                </div>
                <span className="text-[11px] text-white/40 block mt-1">
                  (Assuming 50% shift to direct commission-free bookings)
                </span>
              </div>

              <div className="p-3 rounded-lg bg-black/40 border border-white/5 text-xs text-white/70">
                <span className="text-[#D4AF37] font-semibold block mb-0.5">Altiora Payback Time</span>
                Our ₹24,999 Hotel Website Package pays for itself in approx{' '}
                <span className="text-white font-mono font-semibold">
                  {Math.max(1, Math.round((24999 / monthlySavings) * 10) / 10)} months
                </span>
                .
              </div>
            </div>

            <a
              href="#contact"
              className="w-full py-3.5 rounded-full bg-[#D4AF37] text-black font-semibold text-xs uppercase tracking-widest hover:bg-[#F5E17A] transition-all flex items-center justify-center gap-2 shadow-xl"
            >
              <span>Get Your Website</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
