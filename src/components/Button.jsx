import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { buttonHover, buttonTap } from "../animations/motionPresets";

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = "primary", // primary | secondary | outline | ghost
  size = "md", // sm | md | lg
  showArrow = false,
  className = "",
  type = "button",
  disabled = false,
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer select-none rounded-none";
  
  const sizeStyles = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-6 py-3 text-sm gap-2",
    lg: "px-8 py-4 text-base gap-2.5"
  };

  const variantStyles = {
    primary: "bg-[#FFE500] text-black hover:bg-[#E5CE00] shadow-[0_0_20px_rgba(255,229,0,0.2)] hover:shadow-[0_0_25px_rgba(255,229,0,0.4)] border border-[#FFE500] font-extrabold",
    secondary: "bg-[#18181b] text-white hover:bg-[#27272a] hover:text-[#FFE500] border border-[#27272a]",
    outline: "bg-transparent text-white border-2 border-white/20 hover:border-[#FFE500] hover:text-[#FFE500]",
    ghost: "bg-transparent text-zinc-400 hover:text-white hover:bg-white/5",
    accent: "bg-white text-black hover:bg-[#FFE500] hover:text-black border border-white"
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${disabled ? "opacity-50 pointer-events-none cursor-not-allowed" : ""} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className={`transition-transform duration-200 ${size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4"} group-hover:translate-x-1`} />
      )}
    </>
  );

  if (to) {
    return (
      <motion.div whileHover={buttonHover} whileTap={buttonTap} className="inline-block">
        <Link to={to} className={`group ${combinedStyles}`} {...props}>
          {content}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div whileHover={buttonHover} whileTap={buttonTap} className="inline-block">
        <a href={href} className={`group ${combinedStyles}`} {...props}>
          {content}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? undefined : buttonHover}
      whileTap={disabled ? undefined : buttonTap}
      className={`group ${combinedStyles}`}
      {...props}
    >
      {content}
    </motion.button>
  );
}
