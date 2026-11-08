import React from "react";
import { motion } from "motion/react";
import { Phone, MapPin, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import Button from "./Button";
import { BUSINESS_INFO } from "../data/business";

export default function CTASection({
  title = "BUILT STRONGER. LIVE BETTER.",
  subtitle = "Experience Nayagaon's premier fitness destination with modern equipment, swimming pool, sauna, and expert-led training.",
  variant = "primary" // primary | compact
}) {
  return (
    <section className="relative py-20 md:py-28 bg-[#080809] border-y border-[#27272a] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,229,0,0.08),transparent_65%)] pointer-events-none" />
      
      {/* Subtle grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#121215] border border-[#27272a] p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-2xl">
          
          {/* Top yellow accent stripe */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#FFE500]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Heading & Info */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#18181b] border border-[#27272a] text-[#FFE500] text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Nayagaon, Chandigarh • Side Hotel The Yellow</span>
              </div>

              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase text-white tracking-tight leading-[0.95]">
                {title}
              </h2>

              <p className="text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed">
                {subtitle}
              </p>

              {/* Verified Features Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {BUSINESS_INFO.facilities.map((facility, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#18181b] border border-[#27272a] text-zinc-300 text-xs font-semibold"
                  >
                    <ShieldCheck className="w-3 h-3 text-[#FFE500]" />
                    {facility}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Fast Contact & Action Buttons */}
            <div className="lg:col-span-4 flex flex-col gap-4 bg-[#16161b] border border-[#27272a] p-6">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-bold block mb-1">
                  Direct Line & WhatsApp
                </span>
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="font-display text-2xl sm:text-3xl font-extrabold text-[#FFE500] hover:underline flex items-center gap-2.5 transition-colors"
                >
                  <Phone className="w-5 h-5 text-[#FFE500] flex-shrink-0" />
                  <span>{BUSINESS_INFO.phone}</span>
                </a>
                <p className="text-xs text-zinc-400 mt-1">
                  Call or visit reception for instant consultation.
                </p>
              </div>

              <div className="pt-3 border-t border-[#27272a] space-y-2.5">
                <Button to="/contact" variant="primary" size="lg" className="w-full justify-between" showArrow>
                  Book Free Visit / Consult
                </Button>
                <Button to="/membership" variant="secondary" size="md" className="w-full justify-between">
                  Explore Membership Tiers
                </Button>
              </div>

              <div className="pt-3 border-t border-[#27272a] flex items-center gap-2 text-xs text-zinc-400">
                <MapPin className="w-4 h-4 text-[#FFE500] flex-shrink-0" />
                <span className="line-clamp-2">
                  {BUSINESS_INFO.address.line1}, {BUSINESS_INFO.address.line2}, Chandigarh
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
