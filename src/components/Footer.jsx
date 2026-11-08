import React from "react";
import { Link } from "react-router-dom";
import { Phone, MapPin, Star, ShieldCheck, ArrowUpRight } from "lucide-react";
import { BUSINESS_INFO } from "../data/business";
import { FOOTER_LINKS } from "../data/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0c0c0e] border-t border-[#27272a] text-zinc-400 text-sm">
      {/* Top Banner: Rating & Direct Hotline */}
      <div className="border-b border-[#27272a] bg-[#121215]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#FFE500] text-black font-display font-black flex items-center justify-center text-lg">
              YF
            </div>
            <div>
              <span className="font-display text-lg font-bold text-white uppercase tracking-tight">
                YELLOW FITNESS CLUB GYM
              </span>
              <p className="text-xs text-zinc-400">
                Chandigarh's Dedicated Strength, Swimming & Thermal Recovery Club
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2 px-3 py-1 bg-[#18181b] border border-[#27272a] text-xs text-zinc-300">
              <Star className="w-3.5 h-3.5 fill-[#FFE500] text-[#FFE500]" />
              <span className="font-bold text-white">{BUSINESS_INFO.rating} Rating</span>
              <span className="text-zinc-600">|</span>
              <span className="text-zinc-400">{BUSINESS_INFO.reviewsCount} Google Reviews</span>
            </div>

            <a
              href={BUSINESS_INFO.phoneTel}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-white hover:text-[#FFE500] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#FFE500]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Col 1: Brand & Location (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#FFE500]" />
              <span className="font-display text-2xl font-black uppercase text-white tracking-tight">
                BUILT STRONGER. LIVE BETTER.
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Yellow Fitness Club GYM offers a complete athletic ecosystem in Nayagaon, Chandigarh. Featuring commercial strength equipment, swimming pool, sauna, steam bath, and 14 specialized fitness disciplines.
            </p>

            <div className="bg-[#121215] border border-[#27272a] p-4 space-y-2.5">
              <div className="flex items-start gap-2.5 text-xs text-zinc-300">
                <MapPin className="w-4 h-4 text-[#FFE500] flex-shrink-0 mt-0.5" />
                <span>
                  {BUSINESS_INFO.address.line1}, {BUSINESS_INFO.address.line2}, {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.postalCode}, {BUSINESS_INFO.address.country}
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                <Phone className="w-4 h-4 text-[#FFE500] flex-shrink-0" />
                <a href={BUSINESS_INFO.phoneTel} className="hover:text-[#FFE500] transition-colors font-bold text-white">
                  {BUSINESS_INFO.phone} (Reception & Inquiries)
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FFE500] hover:underline"
                >
                  <span>Open in Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white border-b border-[#27272a] pb-2">
              Explore Pages
            </h4>
            <ul className="space-y-2 text-xs">
              {FOOTER_LINKS.explore.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path} className="text-zinc-400 hover:text-white transition-colors block py-0.5">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Key Disciplines (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white border-b border-[#27272a] pb-2">
              Fitness Services
            </h4>
            <ul className="space-y-2 text-xs">
              {FOOTER_LINKS.services.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path} className="text-zinc-400 hover:text-white transition-colors block py-0.5">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Verified Facilities (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white border-b border-[#27272a] pb-2">
              Verified Club Facilities
            </h4>
            <ul className="space-y-2 text-xs">
              {FOOTER_LINKS.facilities.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path} className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5 py-0.5">
                    <ShieldCheck className="w-3 h-3 text-[#FFE500] flex-shrink-0" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-3">
              <span className="text-[11px] text-zinc-500 block leading-tight">
                * Membership tiers are inquiry-based. Call 094644 54545 for tailored quotes.
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Attribution */}
        <div className="mt-12 pt-8 border-t border-[#27272a] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            © {currentYear} Yellow Fitness Club GYM. All rights reserved. Side Hotel The Yellow, Nayagaon, Chandigarh.
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            <span className="text-zinc-700">•</span>
            <Link to="/membership" className="hover:text-white transition-colors">Membership</Link>
            <span className="text-zinc-700">•</span>
            <a href={BUSINESS_INFO.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#FFE500] transition-colors font-medium">
              Google Profile
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
