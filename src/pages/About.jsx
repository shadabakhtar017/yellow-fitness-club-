import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ShieldCheck,
  Star,
  Flame,
  Waves,
  Dumbbell,
  CheckCircle2,
  HeartHandshake,
  Compass,
  Trophy,
  ArrowRight
} from "lucide-react";

import { BUSINESS_INFO } from "../data/business";
import { COACHING_PHILOSOPHY } from "../data/trainers";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import GoogleRatingBadge from "../components/GoogleRatingBadge";
import Button from "../components/Button";
import CTASection from "../components/CTASection";

export default function About() {
  return (
    <div className="bg-[#080809] text-white">
      
      {/* Page Header */}
      <PageHeader
        badge="About Yellow Fitness Club"
        title="BUILT WITH PURPOSE. DRIVEN BY DISCIPLINE."
        subtitle="Discover Chandigarh's dedicated fitness sanctuary in Nayagaon—combining modern gym engineering, aquatic fitness, and thermal sauna recovery."
        backgroundImage="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1600&q=80"
        breadcrumbs={[{ name: "About Us" }]}
      />

      {/* ========================================================================= */}
      {/* SECTION 1: BRAND INTRODUCTION & GYM IDENTITY */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#080809] border-b border-[#27272a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Manifesto */}
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                eyebrow="Our Identity"
                title="A Gym Built For Real Athletic Effort"
                subtitle="Yellow Fitness Club GYM stands apart as a focused, high-standard training destination located adjacent to Side Hotel The Yellow on Dhillon Road, Nayagaon, Chandigarh."
              />

              <div className="space-y-4 text-base text-zinc-300 leading-relaxed">
                <p>
                  In a fitness landscape often cluttered with superficial gimmicks, Yellow Fitness Club was established with an authentic commitment: to provide everyday athletes, busy working professionals, and fitness enthusiasts with the exact physical tools and atmosphere required to push past physical boundaries.
                </p>
                <p>
                  Our gym floor is anchored by commercial-grade free weights, heavy power cages, Olympic barbells, and calibrated selectorized machinery. Complemented by our on-site swimming pool, therapeutic dry heat sauna, and steam bath, our facility provides a rare 360-degree ecosystem for physical transformation and rapid recovery.
                </p>
                <p>
                  With an independently verified <strong className="text-white">4.5/5 Google Rating backed by 166 member reviews</strong>, our community stands as proof that honest training in a clean, professional space yields enduring results.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Button to="/services" variant="primary" showArrow>
                  Explore All 14 Services
                </Button>
                <Button to="/facilities" variant="secondary">
                  Tour Our Facilities
                </Button>
              </div>
            </div>

            {/* Right: Visual composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative border border-[#27272a] bg-[#121215] p-3 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80"
                  alt="Training environment at Yellow Fitness"
                  className="w-full h-auto object-cover"
                />
                
                {/* Yellow Accent Corner */}
                <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-2 border-r-2 border-[#FFE500]" />
              </div>

              {/* Rating Card */}
              <div className="mt-6">
                <GoogleRatingBadge />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: FITNESS PHILOSOPHY (The 4 Pillars) */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#0c0c0e] border-b border-[#27272a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            eyebrow="Core Philosophy"
            title="The Four Pillars of Yellow Fitness"
            subtitle="Our approach to training is grounded in exercise science, functional biomechanics, and sustainable athletic longevity."
            align="center"
          />

          <div className="about-cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {COACHING_PHILOSOPHY.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="about-fade-card p-6 bg-[#121215] border border-[#27272a] hover:border-[#FFE500]/50 transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="font-display text-4xl font-black text-zinc-800 block mb-3">
                    0{idx + 1}
                  </span>
                  <h3 className="font-display text-2xl font-bold uppercase text-white mb-2">
                    {pillar.pillar}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#222226]">
                  <span className="text-[11px] font-mono uppercase text-[#FFE500]">
                    Pillar Protocol
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: GYM ENVIRONMENT & VERIFIED AMENITIES */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#080809] border-b border-[#27272a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            eyebrow="The Training Environment"
            title="Engineered For Focus, Hygiene & Longevity"
            subtitle="Take a closer look at what awaits you inside our Nayagaon facility."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            
            <div className="bg-[#121215] border border-[#27272a] p-8 space-y-4">
              <div className="w-12 h-12 bg-[#18181b] border border-[#27272a] flex items-center justify-center text-[#FFE500]">
                <Dumbbell className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-bold uppercase text-white">
                Modern Gym Floor
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Spacious layout arranged for optimal workflow during workouts. High-load squat racks, deadlift platforms, and isolate cable stations reduce waiting times and maximize training efficiency.
              </p>
              <ul className="text-xs text-zinc-300 space-y-1.5 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FFE500]" />
                  <span>Free weights & power racks</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FFE500]" />
                  <span>Biomechanically aligned machines</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#121215] border border-[#27272a] p-8 space-y-4">
              <div className="w-12 h-12 bg-[#18181b] border border-[#27272a] flex items-center justify-center text-[#FFE500]">
                <Waves className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-bold uppercase text-white">
                Swimming Pool
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Clean, temperature-regulated water providing complete cardiovascular conditioning with zero joint impact. Perfect for cross-training, active recovery, or learning stroke mechanics.
              </p>
              <ul className="text-xs text-zinc-300 space-y-1.5 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FFE500]" />
                  <span>Continuous water sanitization</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FFE500]" />
                  <span>Lap corridors for endurance training</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#121215] border border-[#27272a] p-8 space-y-4">
              <div className="w-12 h-12 bg-[#18181b] border border-[#27272a] flex items-center justify-center text-[#FFE500]">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-bold uppercase text-white">
                Sauna & Steam Bath
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Dual thermal recovery facilities. Traditional dry cedarwood heat facilitates circulation and relieves muscular stiffness, while the high-humidity steam room restores breathing and skin hydration.
              </p>
              <ul className="text-xs text-zinc-300 space-y-1.5 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FFE500]" />
                  <span>Cedarwood dry heat sauna</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FFE500]" />
                  <span>Mineralized steam bath chamber</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: LOCATION AND ACCESSIBILITY */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#0c0c0e] border-b border-[#27272a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 bg-[#121215] border border-[#27272a] shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FFE500]">
                Accessible Tri-City Location
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-white">
                Visit Yellow Fitness Club GYM In Nayagaon
              </h3>
              <p className="text-sm sm:text-base text-zinc-300">
                Located right alongside <strong>Hotel The Yellow on Dhillon Road, Nayagaon</strong>, our club offers easy access with ample surrounding parking, making it a convenient stop on your daily commute.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-zinc-300 pt-2">
                <span className="px-3 py-1.5 bg-[#18181b] border border-[#27272a]">Pin: 160103</span>
                <span className="px-3 py-1.5 bg-[#18181b] border border-[#27272a]">Chandigarh / Punjab Region</span>
                <span className="px-3 py-1.5 bg-[#18181b] border border-[#27272a]">Phone: 094644 54545</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <Button to="/contact" variant="primary" size="lg" className="w-full justify-between" showArrow>
                Get Directions & Visit
              </Button>
              <a
                href={BUSINESS_INFO.phoneTel}
                className="px-6 py-3.5 bg-[#18181b] hover:bg-[#27272a] text-white border border-[#27272a] text-xs font-bold uppercase tracking-wider text-center transition-colors"
              >
                Call Front Desk: 094644 54545
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Global CTA Section */}
      <CTASection
        title="READY TO ELEVATE YOUR FITNESS?"
        subtitle="Step into Yellow Fitness Club GYM and experience our modern gym floor, swimming pool, and sauna first-hand."
      />

    </div>
  );
}
