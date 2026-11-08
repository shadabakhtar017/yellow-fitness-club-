import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  Dumbbell,
  Users,
  Award,
  Flame,
  Waves,
  Heart,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Phone
} from "lucide-react";

import { SERVICE_CATEGORIES, ALL_SERVICES } from "../data/services";
import { BUSINESS_INFO } from "../data/business";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";
import CTASection from "../components/CTASection";

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categoryIcons = {
    "strength-conditioning": <Dumbbell className="w-5 h-5 text-amber-500" />,
    "group-fitness": <Users className="w-5 h-5 text-amber-500" />,
    "personal-training": <Award className="w-5 h-5 text-amber-500" />,
    "wellness-recovery": <Flame className="w-5 h-5 text-amber-500" />,
    "aquatic-fitness": <Waves className="w-5 h-5 text-amber-500" />,
    "youth-sports": <Heart className="w-5 h-5 text-amber-500" />
  };

  const filteredCategories =
    activeCategory === "all"
      ? SERVICE_CATEGORIES
      : SERVICE_CATEGORIES.filter((c) => c.id === activeCategory);

  return (
    <div className="bg-[#080809] text-white">
      
      {/* Header */}
      <PageHeader
        badge="14 Verified Fitness Disciplines"
        title="TRAIN WITH DIVERSITY. BUILD WITH INTENTION."
        subtitle="Explore all 14 disciplines available at Yellow Fitness Club GYM—from high-load barbell conditioning and aquatic training to group dance fitness and restorative sauna sessions."
        backgroundImage="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1600&q=80"
        breadcrumbs={[{ name: "Services" }]}
      />

      {/* ========================================================================= */}
      {/* CATEGORY FILTER BAR */}
      {/* ========================================================================= */}
      <div className="sticky top-[60px] z-20 bg-[#080809]/95 backdrop-blur-md border-b border-[#27272a] py-4 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors flex-shrink-0 cursor-pointer ${
                activeCategory === "all"
                  ? "bg-[#FFE500] text-black shadow-md font-extrabold"
                  : "bg-[#18181b] text-zinc-400 hover:text-white border border-[#27272a]"
              }`}
            >
              All 14 Services
            </button>
            {SERVICE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors flex-shrink-0 flex items-center gap-2 cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-[#FFE500] text-black shadow-md font-extrabold"
                    : "bg-[#18181b] text-zinc-400 hover:text-white border border-[#27272a]"
                }`}
              >
                {categoryIcons[cat.id]}
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* DISTINCT SERVICE CATEGORY SECTIONS */}
      {/* ========================================================================= */}
      <div className="py-16 md:py-24 space-y-24">
        {filteredCategories.map((category, catIdx) => (
          <section
            key={category.id}
            id={category.id}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-32"
          >
            {/* Category Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#27272a] pb-6 mb-10 gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FFE500] mb-2">
                  <span className="w-2 h-2 bg-[#FFE500]" />
                  <span>Category 0{catIdx + 1}</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight">
                  {category.name}
                </h2>
                <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mt-1">
                  {category.tagline}
                </p>
              </div>

              <span className="text-xs font-mono uppercase text-zinc-500">
                {category.services.length} {category.services.length === 1 ? "Discipline" : "Disciplines"}
              </span>
            </div>

            {/* Render Distinct Card Formats based on Category */}
            {category.id === "strength-conditioning" && (
              /* Distinct Asymmetric Heavy Power Cards */
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {category.services.map((service) => (
                  <div
                    key={service.id}
                    id={service.id}
                    className="group bg-[#121215] border border-[#27272a] hover:border-[#FFE500]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg"
                  >
                    <div className="relative h-64 sm:h-72 overflow-hidden bg-black">
                      <img
                        src={service.image}
                        alt={service.name}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#121215] via-transparent to-transparent" />
                      <span className="absolute top-4 left-4 px-3 py-1 bg-black/90 border border-[#FFE500]/50 text-[#FFE500] text-xs font-bold uppercase tracking-wider">
                        {service.badge}
                      </span>
                    </div>

                    <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-display text-3xl sm:text-4xl font-bold uppercase text-white group-hover:text-[#FFE500] transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-xs text-[#FFE500] font-semibold italic mt-1">
                          "{service.tagline}"
                        </p>
                        <p className="text-sm text-zinc-300 mt-3 leading-relaxed">
                          {service.description}
                        </p>

                        <div className="mt-5 pt-4 border-t border-[#222226] space-y-2">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block mb-1">
                            Key Focus Areas:
                          </span>
                          {service.highlights.map((h, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#FFE500] flex-shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>

                        <div className="mt-4 pt-3 border-t border-[#222226] text-xs text-zinc-400">
                          <strong className="text-white">Ideal For:</strong> {service.idealFor}
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-[#222226] flex items-center justify-between">
                        <Button
                          to={`/contact?service=${encodeURIComponent(service.name)}`}
                          variant="primary"
                          size="sm"
                          showArrow
                        >
                          Inquire {service.name}
                        </Button>
                        <span className="text-[11px] font-mono text-zinc-500 uppercase">
                          Nayagaon GYM
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {category.id === "group-fitness" && (
              /* Distinct High-Energy 4-Card Studio Rhythm Grid */
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.services.map((service) => (
                  <div
                    key={service.id}
                    id={service.id}
                    className="group bg-[#121215] border border-[#27272a] hover:border-[#FFE500]/50 transition-all flex flex-col justify-between overflow-hidden"
                  >
                    <div className="relative h-48 overflow-hidden bg-black">
                      <img
                        src={service.image}
                        alt={service.name}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#121215] via-transparent to-transparent" />
                      <span className="absolute top-3 left-3 px-2 py-0.5 bg-black/90 border border-[#FFE500]/40 text-[10px] font-bold uppercase text-[#FFE500]">
                        {service.badge}
                      </span>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-display text-2xl font-bold uppercase text-white group-hover:text-[#FFE500] transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-[11px] text-[#FFE500] italic mt-0.5 mb-2">
                          "{service.tagline}"
                        </p>
                        <p className="text-xs text-zinc-400 line-clamp-3 leading-relaxed">
                          {service.description}
                        </p>

                        <div className="mt-4 pt-3 border-t border-[#222226] space-y-1">
                          {service.highlights.slice(0, 2).map((h, i) => (
                            <div key={i} className="flex items-center gap-1.5 text-[11px] text-zinc-400">
                              <CheckCircle2 className="w-3 h-3 text-[#FFE500] flex-shrink-0" />
                              <span className="line-clamp-1">{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-5 pt-3 border-t border-[#222226]">
                        <Link
                          to={`/contact?service=${encodeURIComponent(service.name)}`}
                          className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-[#FFE500]"
                        >
                          <span>Class Inquiries</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#FFE500]" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {category.id === "personal-training" && (
              /* Distinct Mentorship & High-Touch 3-Column Layout */
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.services.map((service) => (
                  <div
                    key={service.id}
                    id={service.id}
                    className="group bg-[#121215] border border-[#27272a] hover:border-[#FFE500]/50 p-6 flex flex-col justify-between transition-colors relative"
                  >
                    <div className="space-y-4">
                      <div className="relative h-44 overflow-hidden border border-[#27272a] bg-black">
                        <img
                          src={service.image}
                          alt={service.name}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        <span className="absolute bottom-2 left-2 text-[11px] font-bold uppercase tracking-wider text-[#FFE500] bg-black px-2 py-0.5">
                          {service.badge}
                        </span>
                      </div>

                      <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-white">
                        {service.name}
                      </h3>
                      <p className="text-xs text-[#FFE500] italic">
                        "{service.tagline}"
                      </p>
                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="space-y-1.5 pt-2">
                        {service.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#FFE500] flex-shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#222226]">
                      <Button
                        to={`/contact?service=${encodeURIComponent(service.name)}`}
                        variant="secondary"
                        size="sm"
                        className="w-full justify-between"
                        showArrow
                      >
                        Request Consultation
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {category.id === "wellness-recovery" && (
              /* Serene Dual Thermal & Flexibility Showcase */
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.services.map((service) => (
                  <div
                    key={service.id}
                    id={service.id}
                    className="bg-[#121215] border border-[#27272a] hover:border-[#FFE500]/50 transition-all p-6 sm:p-8 flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative h-56 sm:h-64 mb-6 overflow-hidden border border-[#27272a] bg-black">
                        <img
                          src={service.image}
                          alt={service.name}
                          loading="lazy"
                          className="w-full h-full object-cover opacity-85"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        <span className="absolute top-3 left-3 px-3 py-1 bg-black text-xs font-bold uppercase text-[#FFE500]">
                          {service.badge}
                        </span>
                      </div>

                      <h3 className="font-display text-3xl font-bold uppercase text-white">
                        {service.name}
                      </h3>
                      <p className="text-xs text-[#FFE500] font-semibold italic mt-1 mb-3">
                        "{service.tagline}"
                      </p>
                      <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                        {service.description}
                      </p>

                      <div className="space-y-2 border-t border-[#222226] pt-4">
                        {service.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#FFE500] flex-shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-[#222226] flex items-center justify-between">
                      <Button
                        to={`/contact?service=${encodeURIComponent(service.name)}`}
                        variant="primary"
                        size="sm"
                        showArrow
                      >
                        Inquire Details
                      </Button>
                      <span className="text-xs text-zinc-500 font-mono">On-Site Facility</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {category.id === "aquatic-fitness" && (
              /* Full-Width Aquatics Banner */
              <div id={category.services[0].id} className="border border-[#27272a] bg-[#121215] overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center scroll-mt-32">
                <div className="lg:col-span-6 relative h-72 sm:h-96 bg-black">
                  <img
                    src={category.services[0].image}
                    alt={category.services[0].name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#121215] hidden lg:block" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-black text-[#FFE500] text-xs font-bold uppercase">
                    Temperature Regulated Pool
                  </span>
                </div>

                <div className="lg:col-span-6 p-8 sm:p-12 space-y-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#FFE500]">
                    Verified Aquatic Facility
                  </span>
                  <h3 className="font-display text-4xl sm:text-5xl font-black uppercase text-white">
                    {category.services[0].name}
                  </h3>
                  <p className="text-xs text-zinc-400 italic">
                    "{category.services[0].tagline}"
                  </p>
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                    {category.services[0].description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-[#222226]">
                    {category.services[0].highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FFE500] flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <Button
                      to={`/contact?service=${encodeURIComponent(category.services[0].name)}`}
                      variant="primary"
                      showArrow
                    >
                      Inquire Swimming Access
                    </Button>
                    <Button to="/facilities#swimming-pool" variant="outline">
                      View Pool Facility
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {category.id === "youth-sports" && (
              /* Community Sports & Youth Grid */
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.services.map((service) => (
                  <div
                    key={service.id}
                    id={service.id}
                    className="bg-[#121215] border border-[#27272a] hover:border-[#FFE500]/50 transition-all p-6 sm:p-8 flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative h-56 overflow-hidden border border-[#27272a] mb-6 bg-black">
                        <img
                          src={service.image}
                          alt={service.name}
                          loading="lazy"
                          className="w-full h-full object-cover opacity-85"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        <span className="absolute bottom-3 left-3 text-xs font-bold uppercase text-[#FFE500] bg-black px-2 py-0.5">
                          {service.badge}
                        </span>
                      </div>

                      <h3 className="font-display text-3xl font-bold uppercase text-white">
                        {service.name}
                      </h3>
                      <p className="text-xs text-zinc-400 italic mt-1 mb-3">
                        "{service.tagline}"
                      </p>
                      <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                        {service.description}
                      </p>

                      <div className="space-y-2 border-t border-[#222226] pt-4">
                        {service.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#FFE500] flex-shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-[#222226] flex items-center justify-between">
                      <Button
                        to={`/contact?service=${encodeURIComponent(service.name)}`}
                        variant="secondary"
                        size="sm"
                        showArrow
                      >
                        Inquire Program
                      </Button>
                      <span className="text-xs text-zinc-500 font-mono">
                        Nayagaon Chandigarh
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </section>
        ))}
      </div>

      {/* Global CTA Section */}
      <CTASection
        title="NEED GUIDANCE CHOOSING A PROGRAM?"
        subtitle="Call 094644 54545 or visit our Nayagaon reception. Our certified staff will guide you toward the program that fits your goals."
      />

    </div>
  );
}
