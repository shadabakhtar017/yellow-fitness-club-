import React from "react";
import { motion } from "motion/react";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left", // left | center
  className = "",
  titleClassName = "",
  light = false
}) {
  const isCenter = align === "center";

  return (
    <div className={`mb-10 md:mb-14 ${isCenter ? "text-center max-w-3xl mx-auto" : "max-w-3xl"} ${className}`}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className={`inline-flex items-center gap-2 px-3 py-1 bg-[#18181b] border border-[#27272a] text-[#FFE500] text-xs font-bold uppercase tracking-widest mb-3 ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          <span className="w-1.5 h-1.5 bg-[#FFE500] rounded-full animate-pulse" />
          {eyebrow}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className={`font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[0.95] ${titleClassName}`}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`mt-4 text-sm sm:text-base md:text-lg text-zinc-400 font-normal leading-relaxed ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </motion.p>
      )}

      {/* Decorative accent underline */}
      <div className={`mt-5 flex items-center gap-1.5 ${isCenter ? "justify-center" : "justify-start"}`}>
        <div className="w-12 h-1 bg-[#FFE500]" />
        <div className="w-3 h-1 bg-zinc-300" />
        <div className="w-1.5 h-1 bg-zinc-200" />
      </div>
    </div>
  );
}
