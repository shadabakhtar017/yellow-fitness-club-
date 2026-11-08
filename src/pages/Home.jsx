import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "../animations/gsapHelper";
import { motion } from "motion/react";
import {
  ShieldCheck,
  Star,
  MapPin,
  Phone,
  ArrowRight,
  Flame,
  Waves,
  Dumbbell,
  Clock,
  Sparkles,
  CheckCircle2,
  ChevronRight
} from "lucide-react";

import { BUSINESS_INFO } from "../data/business";
import { SERVICE_CATEGORIES, ALL_SERVICES } from "../data/services";
import { VERIFIED_FACILITIES, FACILITY_GALLERY } from "../data/facilities";
import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import GoogleRatingBadge from "../components/GoogleRatingBadge";
import CTASection from "../components/CTASection";

export default function Home() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const heroTitleRef = useRef(null);
  const heroBadgeRef = useRef(null);
  const heroTextRef = useRef(null);
  const heroCTARef = useRef(null);
  const statsRef = useRef(null);
  const quoteRef = useRef(null);

  // GSAP Cinematic Timelines and ScrollTriggers
  useGSAP(
    () => {
      // 1. Cinematic Hero Entrance Timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(heroBadgeRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 0.2
      })
        .from(
          heroTitleRef.current?.querySelectorAll(".hero-line"),
          {
            opacity: 0,
            y: 50,
            stagger: 0.15,
            duration: 0.8
          },
          "-=0.3"
        )
        .from(
          heroTextRef.current,
          {
            opacity: 0,
            y: 25,
            duration: 0.6
          },
          "-=0.4"
        )
        .from(
          heroCTARef.current?.children,
          {
            opacity: 0,
            y: 20,
            stagger: 0.1,
            duration: 0.5
          },
          "-=0.3"
        );

      // 2. Parallax background movement on Hero
      gsap.to(".hero-bg-img", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      // 3. Large Statement Kinetic Reveal
      if (quoteRef.current) {
        gsap.from(quoteRef.current.querySelectorAll(".quote-word"), {
          opacity: 0.2,
          color: "#A1A1AA",
          stagger: 0.08,
          ease: "none",
          scrollTrigger: {
            trigger: quoteRef.current,
            start: "top 80%",
            end: "bottom 50%",
            scrub: true
          }
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="relative bg-[#080809] text-white overflow-hidden">
      
      {/* ========================================================================= */}
      {/* SECTION 1: CINEMATIC HERO SECTION */}
      {/* ========================================================================= */}
      <section
        ref={heroRef}
        className="relative min-h-[92vh] lg:min-h-screen flex items-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-[#27272a] bg-[#080809]"
      >
        {/* Background image with parallax */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=85"
            alt="Yellow Fitness Club Gym Floor"
            className="hero-bg-img w-full h-[120%] object-cover object-center opacity-30 -translate-y-10 scale-105"
          />
          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080809] via-[#080809]/80 to-[#080809]/70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_40%,rgba(255,229,0,0.12),transparent_60%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-4xl">
            
            {/* Eyebrow Badge */}
            <div ref={heroBadgeRef} className="mb-4 sm:mb-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#18181b] border border-[#27272a] text-[#FFE500] text-xs font-bold uppercase tracking-widest shadow-sm">
                <span className="w-2 h-2 bg-[#FFE500] rounded-none rotate-45" />
                Nayagaon, Chandigarh • Side Hotel The Yellow
              </span>

              {/* Verified Rating Pill */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#121215] border border-[#27272a] text-xs text-zinc-300 shadow-sm">
                <Star className="w-3.5 h-3.5 fill-[#FFE500] text-[#FFE500]" />
                <span className="font-bold text-white">{BUSINESS_INFO.rating}</span>
                <span className="text-zinc-500">/ 5.0</span>
                <span className="text-zinc-400 font-medium">({BUSINESS_INFO.reviewsCount} Google Reviews)</span>
              </div>
            </div>

            {/* Giant Bold Headline */}
            <h1
              ref={heroTitleRef}
              className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase text-white tracking-tight leading-[0.88] select-none"
            >
              <div className="hero-line overflow-hidden">
                BUILT <span className="text-[#FFE500]">STRONGER.</span>
              </div>
              <div className="hero-line overflow-hidden text-white">
                LIVE BETTER.
              </div>
            </h1>

            {/* Supporting Introduction */}
            <p
              ref={heroTextRef}
              className="mt-6 text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl font-normal leading-relaxed"
            >
              Welcome to <strong className="text-white">Yellow Fitness Club GYM</strong>. 
              Chandigarh’s dedicated wellness and athletic club integrating heavy-duty strength equipment, a temperature-managed swimming pool, traditional dry sauna, steam bath facilities, and 14 specialized fitness disciplines.
            </p>

            {/* Hero CTAs */}
            <div
              ref={heroCTARef}
              className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4"
            >
              <Button to="/membership" variant="primary" size="lg" showArrow>
                Explore Membership
              </Button>
              <Button to="/facilities" variant="secondary" size="lg">
                Explore Facilities
              </Button>
              <Button to="/contact" variant="outline" size="lg">
                Inquire & Visit
              </Button>
            </div>

            {/* Verified Facilities Quick Check */}
            <div className="mt-12 pt-8 border-t border-[#27272a] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 text-xs text-zinc-400">
              {BUSINESS_INFO.facilities.map((facility, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FFE500] flex-shrink-0" />
                  <span className="font-semibold text-zinc-200">{facility}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: VERIFIED METRICS & HIGHLIGHTS */}
      {/* ========================================================================= */}
      <section ref={statsRef} className="py-12 bg-[#0c0c0e] border-b border-[#27272a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="stat-card p-6 bg-[#121215] border border-[#27272a] hover:border-[#FFE500]/50 transition-colors shadow-sm"
            >
              <div className="flex items-center gap-2 mb-2 text-[#FFE500]">
                <Star className="w-5 h-5 fill-[#FFE500] text-[#FFE500]" />
                <span className="font-display text-4xl sm:text-5xl font-black text-white">4.5</span>
              </div>
              <h3 className="font-display text-lg font-bold uppercase text-white tracking-wide">
                Google Rating
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Verified high score across 166 member reviews.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="stat-card p-6 bg-[#121215] border border-[#27272a] hover:border-[#FFE500]/50 transition-colors shadow-sm"
            >
              <div className="flex items-center gap-2 mb-2 text-[#FFE500]">
                <ShieldCheck className="w-5 h-5" />
                <span className="font-display text-4xl sm:text-5xl font-black text-white">166</span>
              </div>
              <h3 className="font-display text-lg font-bold uppercase text-white tracking-wide">
                Google Reviews
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Real feedback from our Nayagaon community.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="stat-card p-6 bg-[#121215] border border-[#27272a] hover:border-[#FFE500]/50 transition-colors shadow-sm"
            >
              <div className="flex items-center gap-2 mb-2 text-[#FFE500]">
                <Sparkles className="w-5 h-5" />
                <span className="font-display text-4xl sm:text-5xl font-black text-white">14</span>
              </div>
              <h3 className="font-display text-lg font-bold uppercase text-white tracking-wide">
                Fitness Disciplines
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                From CrossFit & Weight Training to Yoga & Swim.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="stat-card p-6 bg-[#121215] border border-[#27272a] hover:border-[#FFE500]/50 transition-colors shadow-sm"
            >
              <div className="flex items-center gap-2 mb-2 text-[#FFE500]">
                <Flame className="w-5 h-5" />
                <span className="font-display text-4xl sm:text-5xl font-black text-white">5</span>
              </div>
              <h3 className="font-display text-lg font-bold uppercase text-white tracking-wide">
                Verified Amenities
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Gym, Pool, Sauna, Steam Bath & Restrooms.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: GYM INTRODUCTION & EDITORIAL MANIFESTO */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#080809] border-b border-[#27272a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Image Composition */}
            <div className="lg:col-span-6 relative">
              <div className="relative border border-[#27272a] overflow-hidden bg-black aspect-[4/3] shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80"
                  alt="Athletes training at Yellow Fitness Club"
                  loading="lazy"
                  className="w-full h-full object-cover transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                
                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/85 backdrop-blur-md border border-[#27272a]">
                  <span className="text-xs uppercase tracking-widest text-[#FFE500] font-bold block">
                    Authentic Fitness Culture
                  </span>
                  <p className="font-display text-lg text-white font-bold uppercase mt-1">
                    Every Rep, Every Lap, Every Drop of Sweat.
                  </p>
                </div>
              </div>

              {/* Decorative offset border */}
              <div className="hidden sm:block absolute -top-4 -left-4 w-28 h-28 border-t-2 border-l-2 border-[#FFE500] pointer-events-none" />
            </div>

            {/* Right Column: Editorial Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                eyebrow="The Yellow Fitness Identity"
                title="A Complete Athletic Sanctuary In Chandigarh"
                subtitle="We believe fitness should never be limited to a row of identical treadmills. Yellow Fitness Club was engineered as an all-encompassing facility where rigorous strength conditioning, aerobic vitality, aquatic endurance, and thermal muscle recovery converge."
              />

              <div className="space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
                <p>
                  Conveniently situated adjacent to <strong className="text-white">Side Hotel The Yellow on Dhillon Road, Nayagaon</strong>, our club offers members a focused, results-driven environment.
                </p>
                <p>
                  Whether your mission is increasing raw power on the deadlift platform, shedding body fat through high-cadence CrossFit and Zumba classes, perfecting your swimming stroke, or unwinding tired muscles inside the cedarwood sauna, our facility provides the exact tools required to succeed.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Button to="/about" variant="primary" showArrow>
                  Read Our Philosophy
                </Button>
                <Button to="/services" variant="secondary">
                  View All 14 Services
                </Button>
              </div>

            </div>

          </div>

          {/* Large Kinetic Typography Scroll Quote */}
          <div ref={quoteRef} className="mt-24 pt-16 border-t border-[#27272a] text-center">
            <p className="font-display text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-tight max-w-5xl mx-auto">
              <span className="quote-word">NO </span>
              <span className="quote-word">SHORTCUTS. </span>
              <span className="quote-word text-[#FFE500]">NO </span>
              <span className="quote-word text-[#FFE500]">GIMMICKS. </span>
              <span className="quote-word">JUST </span>
              <span className="quote-word">HONEST </span>
              <span className="quote-word">SWEAT, </span>
              <span className="quote-word">ELITE </span>
              <span className="quote-word">FACILITIES, </span>
              <span className="quote-word">AND </span>
              <span className="quote-word text-[#FFE500]">MEASURABLE </span>
              <span className="quote-word text-[#FFE500]">RESULTS.</span>
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: FITNESS SERVICES SHOWCASE (14 Disciplines) */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#0c0c0e] border-b border-[#27272a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <SectionHeading
              eyebrow="14 Disciplines Under One Roof"
              title="Targeted Fitness Services"
              subtitle="From heavy Olympic weight training to rejuvenating aquatic laps and dance fitness, discover programs customized for every stage of your journey."
              className="mb-0"
            />

            <Button to="/services" variant="secondary" showArrow className="self-start md:self-auto">
              Explore All 14 Services
            </Button>
          </div>

          {/* Featured Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {ALL_SERVICES.slice(0, 6).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {/* Service Categories Quick Navigation Bar */}
          <div className="mt-14 p-6 bg-[#121215] border border-[#27272a] flex flex-wrap items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#FFE500]" />
              <span className="font-display uppercase font-bold text-sm tracking-wide text-white">
                Explore Specialized Categories:
              </span>
            </div>

            <div className="flex flex-wrap gap-2 text-xs">
              {SERVICE_CATEGORIES.map((cat) => (
                <Link
                  key={cat.id}
                  to={`/services#${cat.id}`}
                  className="px-3 py-1.5 bg-[#18181b] hover:bg-[#FFE500] hover:text-black border border-[#27272a] text-zinc-300 font-semibold uppercase tracking-wider transition-colors"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: SWIMMING POOL & SAUNA DUAL FEATURE */}
      {/* ========================================================================= */}
      <section className="facilities-section py-20 md:py-28 bg-[#080809] border-b border-[#27272a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            eyebrow="Hydrotherapy & Heat Therapy"
            title="The Aquatic & Thermal Recovery Center"
            subtitle="True athletic progress happens when high-intensity training is balanced with deliberate recovery. Experience our crystal-clear swimming pool and therapeutic cedarwood sauna."
            align="center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-12">
            
            {/* Swimming Pool Feature Box */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-[#121215] border border-[#27272a] hover:border-[#FFE500]/50 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-lg"
            >
              <div className="relative h-72 sm:h-80 overflow-hidden bg-black">
                <img
                  src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80"
                  alt="Swimming Pool at Yellow Fitness Club"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/90 border border-[#FFE500]/50 text-[#FFE500] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Waves className="w-3.5 h-3.5 text-[#FFE500]" />
                    Verified Facility
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <h3 className="font-display text-3xl font-black uppercase text-white">
                  Temperature-Regulated Swimming Pool
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Engineered for both rigorous lap swimming and gentle zero-impact aquatic exercise. Continuous sanitization ensures crystal-clear water conditions year-round, ideal for rebuilding joint resilience, core stability, and lung endurance.
                </p>

                <ul className="space-y-2 text-xs text-zinc-300 pt-2 border-t border-[#222226]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FFE500]" />
                    <span>Continuous water filtration & chlorine balance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FFE500]" />
                    <span>Lap training corridors & private swimming lessons</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FFE500]" />
                    <span>Zero joint compression cardio for rehabilitation</span>
                  </li>
                </ul>

                <div className="pt-4">
                  <Button to="/facilities#swimming-pool" variant="outline" size="sm" showArrow>
                    Discover Swimming Facility
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Sauna & Steam Bath Feature Box */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="bg-[#121215] border border-[#27272a] hover:border-[#FFE500]/50 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-lg"
            >
              <div className="relative h-72 sm:h-80 overflow-hidden bg-black">
                <img
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
                  alt="Dry Sauna and Steam Bath at Yellow Fitness Club"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/90 border border-[#FFE500]/50 text-[#FFE500] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-[#FFE500]" />
                    Verified Facility
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <h3 className="font-display text-3xl font-black uppercase text-white">
                  Dry Heat Sauna & Steam Bath
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Step from the lifting floor into our soothing thermal suites. The dry cedarwood sauna accelerates muscle recovery through vasodilation, while our high-humidity steam room eases bronchial passages and relieves deep connective tissue soreness.
                </p>

                <ul className="space-y-2 text-xs text-zinc-300 pt-2 border-t border-[#222226]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FFE500]" />
                    <span>Aromatic cedarwood dry thermal heat chamber</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FFE500]" />
                    <span>High-moisture steam bath for respiratory relaxation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FFE500]" />
                    <span>Assists in delayed-onset muscle soreness (DOMS)</span>
                  </li>
                </ul>

                <div className="pt-4">
                  <Button to="/facilities#sauna" variant="outline" size="sm" showArrow>
                    Discover Thermal Recovery
                  </Button>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: MODERN GYM EQUIPMENT SHOWCASE */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#0c0c0e] border-b border-[#27272a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <SectionHeading
                eyebrow="Commercial Strength Floor"
                title="Modern Gym Equipment Engineered For Output"
                subtitle="From heavy compound power cages and competition-spec barbells to isolation pin-loaded machinery, our floor is built to support your progressive overload."
              />

              <div className="space-y-3">
                <div className="p-4 bg-[#121215] border border-[#27272a]">
                  <h4 className="font-display text-lg font-bold uppercase text-white flex items-center gap-2">
                    <Dumbbell className="w-4 h-4 text-[#FFE500]" />
                    Free Weights & Heavy Iron
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1">
                    Calibrated Olympic barbells, urethane bumper plates, multi-tier dumbbell racks, and dedicated deadlift platforms.
                  </p>
                </div>

                <div className="p-4 bg-[#121215] border border-[#27272a]">
                  <h4 className="font-display text-lg font-bold uppercase text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#FFE500]" />
                    Selectorized & Cable Stations
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1">
                    Biomechanical pin-selected machines for safe muscle isolation, latency-free cables, and lat pulldown towers.
                  </p>
                </div>

                <div className="p-4 bg-[#121215] border border-[#27272a]">
                  <h4 className="font-display text-lg font-bold uppercase text-white flex items-center gap-2">
                    <Flame className="w-4 h-4 text-[#FFE500]" />
                    Cardio & Functional Conditioning
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1">
                    Commercial treadmills, stationary spin bikes, rowing simulators, battle ropes, and plyometric boxes.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Button to="/facilities" variant="primary" showArrow>
                  Tour All Verified Facilities
                </Button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative overflow-hidden border border-[#27272a] aspect-square">
                  <img
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80"
                    alt="Strength Floor"
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs font-bold uppercase tracking-wider text-white">
                    Power Platforms
                  </span>
                </div>
                <div className="relative overflow-hidden border border-[#27272a] aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80"
                    alt="Functional Turf"
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs font-bold uppercase tracking-wider text-white">
                    Functional CrossFit Zone
                  </span>
                </div>
              </div>

              <div className="space-y-4 sm:pt-8">
                <div className="relative overflow-hidden border border-[#27272a] aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
                    alt="Restrooms & Showers"
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs font-bold uppercase tracking-wider text-white">
                    Hygienic Restrooms & Showers
                  </span>
                </div>
                <div className="relative overflow-hidden border border-[#27272a] aspect-square">
                  <img
                    src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80"
                    alt="Coaching Floor"
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs font-bold uppercase tracking-wider text-white">
                    Personal Training Bays
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7: WHY CHOOSE YELLOW FITNESS CLUB */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#080809] border-b border-[#27272a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            eyebrow="The Club Advantage"
            title="Why Members Choose Yellow Fitness"
            subtitle="Explore the factors that make our Nayagaon facility a trusted hub for athletic individuals across Chandigarh."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            
            <div className="p-8 bg-[#121215] border border-[#27272a] hover:border-[#FFE500]/50 transition-colors relative">
              <span className="font-display text-5xl font-black text-zinc-800 absolute top-4 right-6 select-none">
                01
              </span>
              <div className="w-10 h-10 bg-[#FFE500] text-black font-display font-black flex items-center justify-center text-xl mb-6">
                <Dumbbell className="w-5 h-5" />
              </div>
              <h3 className="font-display text-2xl font-bold uppercase text-white mb-2">
                Uncompromising Equipment
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                We select equipment with lifters in mind—heavy-gauge steel racks, smooth pulley movements, and precision tolerances to protect your joints while maximizing overload.
              </p>
            </div>

            <div className="p-8 bg-[#121215] border border-[#27272a] hover:border-[#FFE500]/50 transition-colors relative">
              <span className="font-display text-5xl font-black text-zinc-800 absolute top-4 right-6 select-none">
                02
              </span>
              <div className="w-10 h-10 bg-[#FFE500] text-black font-display font-black flex items-center justify-center text-xl mb-6">
                <Waves className="w-5 h-5" />
              </div>
              <h3 className="font-display text-2xl font-bold uppercase text-white mb-2">
                True Aquatic & Heat Recovery
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Few gyms in the area feature an on-site swimming pool, dry sauna, and steam room together. This synergy ensures you recover faster and perform better session after session.
              </p>
            </div>

            <div className="p-8 bg-[#121215] border border-[#27272a] hover:border-[#FFE500]/50 transition-colors relative">
              <span className="font-display text-5xl font-black text-zinc-800 absolute top-4 right-6 select-none">
                03
              </span>
              <div className="w-10 h-10 bg-[#FFE500] text-black font-display font-black flex items-center justify-center text-xl mb-6">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-display text-2xl font-bold uppercase text-white mb-2">
                Hygienic & Inclusive Environment
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                From our spotless locker restrooms to structured youth and adult sports programs, everyone from beginners to competitive lifters finds an encouraging training home.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 8: GOOGLE RATING & SOCIAL PROOF */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#0c0c0e] border-b border-[#27272a]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            eyebrow="Verified Community Reputation"
            title="Google Business Profile Rating"
            subtitle="Supplied directly from our official Google listing in Nayagaon, Chandigarh."
            align="center"
          />

          <div className="mt-8">
            <GoogleRatingBadge />
          </div>

          <div className="mt-8 p-6 bg-[#121215] border border-[#27272a] text-center space-y-3">
            <p className="text-sm text-zinc-300 leading-relaxed max-w-2xl mx-auto">
              Our 4.5/5 rating reflects the dedication of our training team, the cleanliness of our pool and sauna facilities, and our welcoming member culture.
            </p>
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FFE500] hover:underline uppercase tracking-wider"
            >
              <span>View Official Google Reviews & Directions</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 9: VISUAL GALLERY PREVIEW */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#080809] border-b border-[#27272a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <SectionHeading
              eyebrow="Visual Experience"
              title="Inside Yellow Fitness Club"
              subtitle="A preview of our verified facilities and athletic training zones in Nayagaon."
              className="mb-0"
            />

            <Button to="/facilities" variant="secondary" showArrow className="self-start md:self-auto">
              Full Facilities Tour
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FACILITY_GALLERY.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-zinc-900 border border-zinc-200 overflow-hidden aspect-[4/3] shadow-sm hover:shadow-md"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
                
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#FFE500] block mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-display text-xl font-bold uppercase text-white tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-zinc-300 mt-1 line-clamp-1">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 10: MEMBERSHIP INQUIRY CTA & LOCATION SECTION */}
      {/* ========================================================================= */}
      <CTASection />

    </div>
  );
}
