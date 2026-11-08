import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  ShieldCheck,
  CheckCircle2,
  Waves,
  Flame,
  Dumbbell,
  Sparkles,
  Bath,
  ArrowRight,
  Info,
  X,
  Maximize2
} from "lucide-react";

import { VERIFIED_FACILITIES, FACILITY_GALLERY } from "../data/facilities";
import { BUSINESS_INFO } from "../data/business";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";
import CTASection from "../components/CTASection";

export default function Facilities() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="bg-[#080809] text-white">
      
      {/* Page Header */}
      <PageHeader
        badge="Verified Club Amenities"
        title="BUILT FOR PERFORMANCE. EQUIPPED FOR RECOVERY."
        subtitle="Explore our verified training floor, temperature-regulated swimming pool, dry cedarwood sauna, steam bath chambers, and pristine restrooms in Nayagaon, Chandigarh."
        backgroundImage="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1600&q=80"
        breadcrumbs={[{ name: "Facilities" }]}
      />

      {/* ========================================================================= */}
      {/* TRANSPARENT EDITORIAL DISCLOSURE BANNER */}
      {/* ========================================================================= */}
      <div className="bg-[#101014] border-b border-[#27272a] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-xs text-zinc-400">
            <Info className="w-4 h-4 text-[#FFE500] flex-shrink-0" />
            <p>
              <strong className="text-white">Facility Verification Notice:</strong> All five facility categories shown below—Modern Gym Equipment, Swimming Pool, Sauna, Steam Bath, and Restrooms—are verified amenities of Yellow Fitness Club GYM, Side Hotel The Yellow, Nayagaon. Photography demonstrates high-fidelity architectural previews of these exact amenities.
            </p>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* DETAILED VERIFIED FACILITIES BREAKDOWN */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#080809]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            eyebrow="On-Site Infrastructure"
            title="The 5 Verified Club Facilities"
            subtitle="Designed to support athletes through the entire cycle of exertion, hydration, and cellular heat recovery."
          />

          <div className="facility-details-list space-y-16 sm:space-y-24 mt-12">
            {VERIFIED_FACILITIES.map((facility, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={facility.id}
                  id={facility.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="facility-detail-card bg-[#121215] border border-[#27272a] hover:border-[#FFE500]/60 transition-all duration-300 overflow-hidden scroll-mt-32 shadow-xl"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-12 ${isEven ? "" : "lg:grid-flow-dense"}`}>
                    
                    {/* Visual Media (6 cols) */}
                    <div className={`lg:col-span-6 relative h-72 sm:h-96 lg:h-auto overflow-hidden bg-black ${isEven ? "" : "lg:col-start-7"}`}>
                      <img
                        src={facility.image}
                        alt={facility.title}
                        loading="lazy"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#121215] via-transparent to-transparent lg:hidden" />
                      
                      {/* Facility Index Badge */}
                      <span className="absolute top-4 left-4 px-3 py-1 bg-black/85 backdrop-blur-md border border-[#FFE500]/50 text-[#FFE500] text-xs font-bold uppercase tracking-wider">
                        Facility 0{idx + 1} • {facility.badge}
                      </span>

                      {/* Stat Pill */}
                      <span className="absolute bottom-4 right-4 px-3 py-1 bg-black/80 text-[11px] font-mono text-zinc-300 border border-[#27272a]">
                        {facility.stats}
                      </span>
                    </div>

                    {/* Content Area (6 cols) */}
                    <div className={`lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between ${isEven ? "" : "lg:col-start-1"}`}>
                      <div className="space-y-4">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#FFE500]">
                          {facility.category}
                        </span>

                        <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight">
                          {facility.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-[#FFE500] font-semibold italic">
                          "{facility.shortDesc}"
                        </p>

                        <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                          {facility.longDesc}
                        </p>

                        {/* Feature points */}
                        <div className="space-y-2 pt-4 border-t border-[#27272a]">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block mb-1">
                            Architectural & Functional Highlights:
                          </span>
                          {facility.features.map((feature, fIdx) => (
                            <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                              <CheckCircle2 className="w-4 h-4 text-[#FFE500] flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="mt-8 pt-6 border-t border-[#27272a] flex flex-wrap items-center gap-4">
                        <Button
                          to={`/contact?service=${encodeURIComponent(facility.title)}`}
                          variant="primary"
                          size="sm"
                          showArrow
                        >
                          Inquire Facility Access
                        </Button>
                        <Button to="/membership" variant="secondary" size="sm">
                          View Membership Tiers
                        </Button>
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* IMMERSIVE VISUAL GALLERY */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#0c0c0e] border-t border-[#27272a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            eyebrow="Architectural Gallery"
            title="Experience The Space"
            subtitle="Take an immersive tour across our strength floor, aquatic lanes, sauna heat rooms, and private restrooms."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {FACILITY_GALLERY.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedImage(item)}
                className="group relative bg-[#121215] border border-[#27272a] hover:border-[#FFE500]/60 overflow-hidden aspect-[4/3] cursor-pointer shadow-lg transition-all"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 rounded-full bg-black/80 text-[#FFE500] flex items-center justify-center border border-[#FFE500]/40">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#FFE500] block mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-display text-xl font-bold uppercase text-white tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1 line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Location Callout Banner */}
          <div className="mt-14 p-6 sm:p-8 bg-[#121215] border border-[#27272a] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FFE500]">
                On-Site Inspection Welcome
              </span>
              <h4 className="font-display text-2xl font-bold uppercase text-white mt-1">
                Want to inspect the pool, sauna, or gym floor in person?
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Visitors are welcome to tour our Nayagaon facility during working hours before committing to a membership.
              </p>
            </div>

            <div className="flex items-center gap-3 flex-shrink-0">
              <Button to="/contact" variant="primary" showArrow>
                Schedule Facility Tour
              </Button>
            </div>
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#121215] border border-[#27272a] overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/80 hover:bg-black text-white flex items-center justify-center cursor-pointer transition-colors border border-white/20"
              >
                <X className="w-5 h-5 text-[#FFE500]" />
              </button>

              <div className="max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full max-h-[70vh] object-cover"
                />
              </div>

              <div className="p-6 bg-[#121215]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FFE500]">
                  {selectedImage.category}
                </span>
                <h3 className="font-display text-2xl font-black uppercase text-white mt-1">
                  {selectedImage.title}
                </h3>
                <p className="text-sm text-zinc-400 mt-1">
                  {selectedImage.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global CTA */}
      <CTASection
        title="JOIN CHANDIGARH'S PREMIER FITNESS CLUB"
        subtitle="Modern gym equipment, swimming pool, sauna, steam bath, and restrooms all in one dedicated Nayagaon facility."
      />

    </div>
  );
}

