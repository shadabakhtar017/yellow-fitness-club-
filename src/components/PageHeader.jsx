import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ChevronRight, Home } from "lucide-react";

export default function PageHeader({
  badge = "Yellow Fitness Club",
  title,
  subtitle,
  backgroundImage = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80",
  breadcrumbs = []
}) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#0c0c0e] border-b border-[#27272a] overflow-hidden">
      {/* Background image with subtle overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover object-center opacity-25 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/80 to-[#0c0c0e]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,229,0,0.12),transparent_60%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb nav */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">
            <li>
              <Link to="/" className="hover:text-[#FFE500] flex items-center gap-1 transition-colors">
                <Home className="w-3.5 h-3.5" />
                <span>Home</span>
              </Link>
            </li>
            {breadcrumbs.map((crumb, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <ChevronRight className="w-3 h-3 text-zinc-600" />
                {crumb.path ? (
                  <Link to={crumb.path} className="hover:text-[#FFE500] transition-colors">
                    {crumb.name}
                  </Link>
                ) : (
                  <span className="text-[#FFE500]">{crumb.name}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-[#18181b] border border-[#27272a] text-[#FFE500] text-xs font-bold uppercase tracking-widest mb-4"
        >
          <span className="w-1.5 h-1.5 bg-[#FFE500] rounded-full animate-pulse" />
          {badge}
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase text-white tracking-tight leading-[0.92] max-w-5xl"
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-zinc-300 max-w-3xl leading-relaxed font-normal"
          >
            {subtitle}
          </motion.p>
        )}

        {/* Decorative corner accent */}
        <div className="mt-8 flex items-center gap-2">
          <div className="w-16 h-1 bg-[#FFE500]" />
          <div className="w-4 h-1 bg-zinc-700" />
          <div className="w-2 h-1 bg-zinc-800" />
        </div>

      </div>
    </section>
  );
}
