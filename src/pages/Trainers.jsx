import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { gsap } from "../animations/gsapHelper";
import { motion } from "motion/react";
import {
  Award,
  ShieldCheck,
  CheckCircle2,
  Users,
  Compass,
  ArrowRight,
  UserCheck,
  Phone,
  Sparkles,
  Info
} from "lucide-react";

import {
  COACHING_PHILOSOPHY,
  SPECIALIZATION_TRACKS,
  TRAINER_PROFILE_PLACEHOLDERS
} from "../data/trainers";
import { BUSINESS_INFO } from "../data/business";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";
import CTASection from "../components/CTASection";

export default function Trainers() {
  return (
    <div className="bg-[#080809] text-white">
      
      {/* Page Header */}
      <PageHeader
        badge="Coaching Staff & Disciplines"
        title="EXPERT COACHING. MEASURABLE TRANSFORMATION."
        subtitle="Learn about our coaching philosophy, training specializations, and dedicated 1-on-1 personal training mentorship in Nayagaon, Chandigarh."
        backgroundImage="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1600&q=80"
        breadcrumbs={[{ name: "Trainers" }]}
      />

      {/* ========================================================================= */}
      {/* SECTION 1: COACHING PHILOSOPHY & INTRO */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#080809] border-b border-[#27272a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                eyebrow="Our Coaching Standard"
                title="Guidance Rooted In Science & Form Integrity"
                subtitle="At Yellow Fitness Club GYM, our certified coaching staff approaches physical training not as mindless exhaustion, but as a deliberate craft."
              />

              <div className="space-y-4 text-sm sm:text-base text-zinc-400 leading-relaxed">
                <p>
                  Whether you are stepping into a gym for the first time, learning to swim proper freestyle laps, or breaking personal records with heavy compound deadlifts, our coaching methodology is built around safety, biomechanical efficiency, and progressive overload.
                </p>
                <p>
                  Every member receives attentive guidance on proper bar paths, bracing mechanics, and recovery protocols. Our mentors actively observe the floor to prevent injuries and ensure you perform every movement with supreme confidence.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button to="/contact?service=Personal%20Training" variant="primary" showArrow>
                  Book 1-on-1 Consultation
                </Button>
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="px-6 py-3 bg-[#121215] border border-[#27272a] text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-[#FFE500] hover:border-[#FFE500] transition-colors"
                >
                  Call Staff: {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#121215] border border-[#27272a] p-8 space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#FFE500] flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  The Yellow Standard
                </span>
                <h3 className="font-display text-2xl font-bold uppercase text-white">
                  Why Work With A Yellow Fitness Coach?
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-zinc-300 pt-2 border-t border-[#27272a]">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FFE500] flex-shrink-0 mt-0.5" />
                    <span>Personalized progressive volume and load adaptation</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FFE500] flex-shrink-0 mt-0.5" />
                    <span>Cross-discipline integration (gym, pool & thermal sauna)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FFE500] flex-shrink-0 mt-0.5" />
                    <span>Evidence-based nutritional and caloric consultation</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FFE500] flex-shrink-0 mt-0.5" />
                    <span>Empathetic, judgment-free mentorship for all ages</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: SPECIALIZATION TRACKS */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#0c0c0e] border-b border-[#27272a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            eyebrow="Coaching Specializations"
            title="Disciplines Coached At The Club"
            subtitle="Whatever your objective, our trainers possess focused expertise across strength, conditioning, aquatic skills, and restorative wellness."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {SPECIALIZATION_TRACKS.map((track, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#121215] border border-[#27272a] hover:border-[#FFE500]/50 transition-colors flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 bg-[#18181b] border border-[#27272a] flex items-center justify-center font-display font-black text-sm text-[#FFE500]">
                      0{idx + 1}
                    </span>
                    <span className="text-[10px] font-mono uppercase text-zinc-500">
                      Coaching Track
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold uppercase text-white group-hover:text-[#FFE500] transition-colors mb-2">
                    {track.discipline}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {track.focus}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1c1c20]">
                  <Link
                    to={`/contact?service=${encodeURIComponent(track.discipline)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FFE500] hover:underline"
                  >
                    <span>Inquire This Specialization</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: ELEGANT "MEET OUR TRAINERS" VERIFICATION PLACEHOLDER */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#080809] border-b border-[#27272a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#121215] border border-[#27272a] text-[#FFE500] text-xs font-bold uppercase tracking-widest mb-3">
              <UserCheck className="w-3.5 h-3.5" />
              On-Site Coaching Roster
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-black uppercase text-white tracking-tight">
              Meet Our Certified Coaches In Person
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-400 leading-relaxed">
              In accordance with our strict data transparency standards, we do not publish unverified staff portraits online. Our floor coaches and specialists are active on-site every day at our Nayagaon club.
            </p>
          </div>

          {/* Roster Cards Grid */}
          <div className="trainer-cards-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRAINER_PROFILE_PLACEHOLDERS.map((role, idx) => (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="trainer-fade-card bg-[#121215] border border-[#27272a] hover:border-[#FFE500]/50 p-6 flex flex-col justify-between transition-all group"
              >
                <div>
                  <div className="w-16 h-16 bg-[#1a1a20] border border-[#27272a] flex items-center justify-center text-[#FFE500] mb-6 mx-auto">
                    <UserCheck className="w-8 h-8" />
                  </div>

                  <span className="text-[10px] font-mono uppercase text-[#FFE500] font-bold block text-center mb-1">
                    {role.status}
                  </span>

                  <h3 className="font-display text-xl font-bold uppercase text-white text-center">
                    {role.roleTitle}
                  </h3>

                  <p className="text-xs text-zinc-400 text-center font-medium mt-1 mb-4">
                    Specialty: {role.specialization}
                  </p>

                  <p className="text-xs text-zinc-400 text-center leading-relaxed">
                    {role.bioPlaceholder}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1c1c20]">
                  <Link
                    to="/contact?service=Personal%20Training"
                    className="block text-center text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-[#FFE500] transition-colors"
                  >
                    Connect With Coach →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Invite Box */}
          <div className="mt-12 p-6 sm:p-8 bg-[#101014] border border-[#27272a] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <h4 className="font-display text-xl sm:text-2xl font-bold uppercase text-white">
                Looking for 1-on-1 Personal Training?
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400">
                Visit reception at Side Hotel The Yellow, Dhillon Road, Nayagaon, or call 094644 54545 to schedule a free fitness orientation with our head coach.
              </p>
            </div>

            <div className="flex items-center gap-3 flex-shrink-0">
              <Button to="/contact?service=Personal%20Training" variant="primary" showArrow>
                Request Coach Match
              </Button>
            </div>
          </div>

        </div>
      </section>

      {/* Global CTA Section */}
      <CTASection
        title="START YOUR COACHING JOURNEY"
        subtitle="Experience structured coaching, continuous accountability, and biomechanical precision at Yellow Fitness Club GYM."
      />

    </div>
  );
}

