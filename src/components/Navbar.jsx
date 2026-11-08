import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Menu, X, Star, ArrowRight, MapPin } from "lucide-react";
import { NAV_LINKS } from "../data/navigation";
import { BUSINESS_INFO } from "../data/business";
import Button from "./Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle sticky navbar background change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile nav is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#080809]/95 backdrop-blur-md border-b border-[#27272a] shadow-lg py-3"
            : "bg-[#080809]/80 backdrop-blur-sm border-b border-[#27272a]/60 py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group focus-visible:outline-none">
              <div className="w-10 h-10 sm:w-11 sm:h-11 bg-[#FFE500] flex items-center justify-center font-display font-black text-black text-2xl tracking-tighter shadow-md group-hover:scale-105 transition-transform duration-200">
                YF
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl sm:text-2xl font-black uppercase tracking-tight text-white leading-none group-hover:text-[#FFE500] transition-colors">
                  YELLOW <span className="text-[#FFE500]">FITNESS</span>
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400">
                  CLUB GYM • CHANDIGARH
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors duration-200 relative ${
                      isActive
                        ? "text-[#FFE500] font-black"
                        : "text-zinc-300 hover:text-white hover:bg-white/5"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.name}</span>
                      {isActive && (
                        <motion.div
                          layoutId="activeNavIndicator"
                          className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#FFE500] shadow-[0_0_8px_#FFE500]"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Desktop Right CTAs: Rating + Phone + Join */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Google rating indicator */}
              <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 bg-[#121215] border border-[#27272a] text-xs">
                <Star className="w-3.5 h-3.5 fill-[#FFE500] text-[#FFE500]" />
                <span className="font-bold text-white">{BUSINESS_INFO.rating}</span>
                <span className="text-zinc-500">/5</span>
                <span className="text-[11px] text-zinc-400 font-medium">({BUSINESS_INFO.reviewsCount})</span>
              </div>

              {/* Call Link */}
              <a
                href={BUSINESS_INFO.phoneTel}
                aria-label={`Call Yellow Fitness at ${BUSINESS_INFO.phone}`}
                className="hidden md:flex items-center gap-2 px-3 py-2 text-xs font-bold uppercase text-zinc-300 hover:text-[#FFE500] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#FFE500]" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>

              {/* Join CTA */}
              <Button to="/membership" variant="primary" size="sm" showArrow>
                Join Now
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="p-2 text-zinc-300 hover:text-[#FFE500] bg-[#121215] border border-[#27272a]"
                aria-label="Direct Phone Call"
              >
                <Phone className="w-4 h-4 text-[#FFE500]" />
              </a>

              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 bg-[#121215] border border-[#27272a] text-white hover:text-[#FFE500] transition-colors focus-visible:outline-none"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-5 h-5 text-[#FFE500]" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Navigation Overlay with Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobileNav"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 z-30 bg-[#080809]/98 backdrop-blur-xl pt-24 pb-8 px-6 flex flex-col justify-between overflow-y-auto lg:hidden"
          >
            {/* Top Info */}
            <div className="border-b border-[#27272a] pb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex text-[#FFE500]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#FFE500]" />
                  ))}
                </div>
                <span className="text-xs text-white font-bold">
                  {BUSINESS_INFO.rating} Rating ({BUSINESS_INFO.reviewsCount} Google Reviews)
                </span>
              </div>
              <span className="text-[10px] text-zinc-500 uppercase font-mono">Nayagaon, CHD</span>
            </div>

            {/* Navigation Links with Stagger */}
            <nav className="my-6 space-y-1">
              {NAV_LINKS.map((link, idx) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx, duration: 0.2 }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between py-3.5 px-3 text-2xl font-display font-black uppercase tracking-tight transition-colors border-b border-[#18181b] ${
                        isActive
                          ? "text-[#FFE500] bg-[#FFE500]/10 pl-4 border-l-4 border-l-[#FFE500]"
                          : "text-zinc-300 hover:text-white"
                      }`
                    }
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 text-zinc-500" />
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            {/* Bottom Actions & Address */}
            <div className="space-y-4 pt-4 border-t border-[#27272a]">
              <div className="grid grid-cols-2 gap-3">
                <Button
                  to="/membership"
                  variant="primary"
                  size="md"
                  className="w-full text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Membership
                </Button>
                <Button
                  to="/contact"
                  variant="secondary"
                  size="md"
                  className="w-full text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </Button>
              </div>

              <div className="bg-[#121215] border border-[#27272a] p-3 text-xs text-zinc-400 space-y-1.5">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <Phone className="w-3.5 h-3.5 text-[#FFE500]" />
                  <a href={BUSINESS_INFO.phoneTel}>{BUSINESS_INFO.phone}</a>
                </div>
                <div className="flex items-start gap-2 text-zinc-400 text-[11px]">
                  <MapPin className="w-3.5 h-3.5 text-[#FFE500] flex-shrink-0 mt-0.5" />
                  <span>Side Hotel The Yellow, Dhillon Road, Nayagaon, Chandigarh 160103</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
