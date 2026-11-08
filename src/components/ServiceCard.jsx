import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Check, ArrowUpRight } from "lucide-react";
import { cardHover } from "../animations/motionPresets";

export default function ServiceCard({ service, layout = "grid" }) {
  const isCompact = layout === "compact";

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 25 },
        visible: { opacity: 1, y: 0 }
      }}
      whileHover={{ y: -6, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.05)" }}
      id={service.id}
      className="group relative bg-[#121215] border border-[#27272a] hover:border-[#FFE500]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden"
    >
      {/* Top Image Container */}
      <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-black">
        <img
          src={service.image}
          alt={service.name}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-85 group-hover:opacity-100"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121215] via-transparent to-transparent" />
        
        {/* Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-2.5 py-1 bg-black/85 backdrop-blur-md border border-[#FFE500]/50 text-[#FFE500] text-[11px] font-bold uppercase tracking-wider">
            {service.badge || service.category}
          </span>
        </div>

        {/* Diagonal corner accent */}
        <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden">
          <div className="w-12 h-1 bg-[#FFE500] rotate-45 translate-x-3 -translate-y-1" />
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#FFE500] font-bold block mb-1">
            {service.category}
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white tracking-tight group-hover:text-[#FFE500] transition-colors">
            {service.name}
          </h3>
          <p className="text-xs text-[#FFE500] font-medium italic mt-1 mb-3">
            "{service.tagline}"
          </p>
          <p className="text-sm text-zinc-300 leading-relaxed line-clamp-3">
            {service.description}
          </p>

          {/* Highlights */}
          {service.highlights && service.highlights.length > 0 && (
            <div className="mt-4 pt-4 border-t border-[#222226] space-y-1.5">
              {service.highlights.slice(0, 3).map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-zinc-400">
                  <Check className="w-3.5 h-3.5 text-[#FFE500] flex-shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{highlight}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Action Button */}
        <div className="mt-6 pt-4 border-t border-[#222226] flex items-center justify-between">
          <Link
            to={`/contact?service=${encodeURIComponent(service.name)}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white hover:text-[#FFE500] transition-colors"
          >
            <span>Inquire This Service</span>
            <ArrowUpRight className="w-4 h-4 text-[#FFE500] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <span className="text-[10px] text-zinc-500 font-mono uppercase">
            Yellow Club
          </span>
        </div>
      </div>
    </motion.div>
  );
}
