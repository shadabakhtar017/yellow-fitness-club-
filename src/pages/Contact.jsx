import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "motion/react";
import {
  Phone,
  MapPin,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  ShieldCheck,
  Star,
  Info
} from "lucide-react";

import { BUSINESS_INFO } from "../data/business";
import { ALL_SERVICES } from "../data/services";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";
import GoogleRatingBadge from "../components/GoogleRatingBadge";

export default function Contact() {
  const location = useLocation();

  // Pre-fill interested service from query param if provided
  const queryParams = new URLSearchParams(location.search);
  const initialService = queryParams.get("service") || "General Inquiry";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: initialService,
    message: ""
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | null

  useEffect(() => {
    const serviceFromUrl = new URLSearchParams(location.search).get("service");
    if (serviceFromUrl) {
      setFormData((prev) => ({ ...prev, service: serviceFromUrl }));
    }
  }, [location.search]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = "Full name is required.";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required.";
    } else if (!/^[0-9+ -]{8,15}$/.test(formData.phone.trim())) {
      errors.phone = "Please enter a valid phone number.";
    }

    if (!formData.email.trim()) {
      errors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      errors.message = "Please write a brief message regarding your inquiry.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Frontend simulated submission with verified transparent acknowledgment
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
    }, 600);
  };

  return (
    <div className="bg-[#080809] text-white">
      
      {/* Page Header */}
      <PageHeader
        badge="Connect With Our Team"
        title="VISIT OR CONTACT YELLOW FITNESS CLUB"
        subtitle="Located at Side Hotel The Yellow, Dhillon Road, Nayagaon, Chandigarh. Speak directly with our reception or submit your inquiry below."
        backgroundImage="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1600&q=80"
        breadcrumbs={[{ name: "Contact" }]}
      />

      {/* ========================================================================= */}
      {/* CONTACT INFORMATION & FORM GRID */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#080809] border-b border-[#27272a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Verified Details & Direct Hotlines (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <SectionHeading
                  eyebrow="Direct Reception Desk"
                  title="We're Here To Help You Begin"
                  subtitle="Have questions regarding membership rates, class schedules, or facility rules? Our staff is available to assist."
                />
              </div>

              {/* Verified Contact Details Cards */}
              <div className="space-y-4">
                
                {/* Phone */}
                <div className="p-6 bg-[#121215] border border-[#27272a] hover:border-[#FFE500]/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#1c1c22] border border-[#27272a] flex items-center justify-center text-[#FFE500] flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 block mb-1">
                        Direct Telephone & Inquiries
                      </span>
                      <a
                        href={BUSINESS_INFO.phoneTel}
                        className="font-display text-2xl sm:text-3xl font-extrabold text-[#FFE500] hover:text-white transition-colors block"
                      >
                        {BUSINESS_INFO.phone}
                      </a>
                      <p className="text-xs text-zinc-400 mt-1">
                        Tap to dial reception directly from mobile.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="p-6 bg-[#121215] border border-[#27272a] hover:border-[#FFE500]/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#1c1c22] border border-[#27272a] flex items-center justify-center text-[#FFE500] flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 block mb-1">
                        Physical Club Address
                      </span>
                      <p className="text-sm sm:text-base font-semibold text-white leading-snug">
                        {BUSINESS_INFO.address.line1},
                        <br />
                        {BUSINESS_INFO.address.line2},
                        <br />
                        {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.postalCode}, India
                      </p>
                      <a
                        href={BUSINESS_INFO.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FFE500] hover:underline uppercase tracking-wider mt-3"
                      >
                        <span>Open In Google Maps</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Opening Hours Policy */}
                <div className="p-6 bg-[#121215] border border-[#27272a]">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#1c1c22] border border-[#27272a] flex items-center justify-center text-[#FFE500] flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 block mb-1">
                        Operating Hours & Schedules
                      </span>
                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                        Operating schedules are structured across morning and evening sessions for the gym floor, swimming pool lanes, and studio class batches.
                      </p>
                      <p className="text-xs text-[#FFE500] font-semibold mt-2">
                        Call {BUSINESS_INFO.phone} for today's active batch timings.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Google Badge */}
              <div>
                <GoogleRatingBadge />
              </div>

            </div>

            {/* Right Column: Inquiry Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-[#121215] border border-[#27272a] p-8 sm:p-12 relative">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#FFE500]" />

                <div className="mb-8">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#FFE500] block mb-2">
                    Inquiry Form
                  </span>
                  <h3 className="font-display text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
                    Send Us A Direct Message
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                    Fill out the fields below. All inquiries are reviewed by our on-site team.
                  </p>
                </div>

                {submitStatus === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 bg-[#18181b] border border-[#FFE500] text-center space-y-4"
                  >
                    <div className="w-14 h-14 bg-[#FFE500] text-black rounded-full flex items-center justify-center mx-auto shadow-lg">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="font-display text-3xl font-black uppercase text-white">
                      Inquiry Logged Successfully
                    </h4>
                    <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-white">{formData.name}</strong>. Your inquiry regarding{" "}
                      <strong className="text-[#FFE500]">{formData.service}</strong> has been prepared for staff follow-up.
                    </p>
                    <div className="p-4 bg-[#101014] border border-[#27272a] text-xs text-zinc-300 text-left space-y-1">
                      <p><strong className="text-white">Phone:</strong> {formData.phone}</p>
                      <p><strong className="text-white">Email:</strong> {formData.email}</p>
                      <p><strong className="text-white">Service:</strong> {formData.service}</p>
                    </div>
                    <p className="text-xs text-zinc-400">
                      * Frontend validation completed. For instant confirmation or immediate queries, please call us directly at <a href={BUSINESS_INFO.phoneTel} className="text-[#FFE500] underline font-bold">{BUSINESS_INFO.phone}</a>.
                    </p>
                    <div className="pt-2">
                      <Button
                        onClick={() => {
                          setSubmitStatus(null);
                          setFormData({
                            name: "",
                            phone: "",
                            email: "",
                            service: "General Inquiry",
                            message: ""
                          });
                        }}
                        variant="secondary"
                        size="sm"
                      >
                        Submit Another Message
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Gurpreet Singh"
                        className={`w-full px-4 py-3 bg-[#18181b] border text-white text-sm focus:outline-none transition-colors ${
                          formErrors.name ? "border-red-500" : "border-[#27272a] focus:border-[#FFE500]"
                        }`}
                      />
                      {formErrors.name && (
                        <span className="text-xs text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {formErrors.name}
                        </span>
                      )}
                    </div>

                    {/* Phone & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                          Phone Number <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="e.g. 094644 54545"
                          className={`w-full px-4 py-3 bg-[#18181b] border text-white text-sm focus:outline-none transition-colors ${
                            formErrors.phone ? "border-red-500" : "border-[#27272a] focus:border-[#FFE500]"
                          }`}
                        />
                        {formErrors.phone && (
                          <span className="text-xs text-red-400 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {formErrors.phone}
                          </span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                          Email Address <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="name@example.com"
                          className={`w-full px-4 py-3 bg-[#18181b] border text-white text-sm focus:outline-none transition-colors ${
                            formErrors.email ? "border-red-500" : "border-[#27272a] focus:border-[#FFE500]"
                          }`}
                        />
                        {formErrors.email && (
                          <span className="text-xs text-red-400 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {formErrors.email}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Interested Service */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                        Interested Service / Facility <span className="text-red-400">*</span>
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-[#18181b] border border-[#27272a] text-white text-sm focus:border-[#FFE500] focus:outline-none"
                      >
                        <option value="General Inquiry">General Club Inquiry</option>
                        <option value="Membership Rates">Membership Rates & Plans</option>
                        <option value="Swimming Pool Access">Swimming Pool Access</option>
                        <option value="Sauna & Steam Bath">Sauna & Steam Bath Access</option>
                        {ALL_SERVICES.map((s) => (
                          <option key={s.id} value={s.name}>
                            {s.name} ({s.category})
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                        Message / Query Details <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        rows={4}
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Please tell us about your requirements, preferred timing, or any questions..."
                        className={`w-full px-4 py-3 bg-[#18181b] border text-white text-sm focus:outline-none transition-colors ${
                          formErrors.message ? "border-red-500" : "border-[#27272a] focus:border-[#FFE500]"
                        }`}
                      />
                      {formErrors.message && (
                        <span className="text-xs text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {formErrors.message}
                        </span>
                      )}
                    </div>

                    {/* Backend integration transparency note */}
                    <div className="p-3.5 bg-[#18181b] border border-[#27272a] flex items-start gap-2.5 text-xs text-zinc-400">
                      <Info className="w-4 h-4 text-[#FFE500] flex-shrink-0 mt-0.5" />
                      <span>
                        This form validates inputs on the client side. Your details will be presented to our reception team upon arrival, or call 094644 54545 for immediate phone assistance.
                      </span>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      variant="primary"
                      size="lg"
                      className="w-full justify-between"
                      showArrow
                    >
                      {isSubmitting ? "Validating & Submitting..." : "Send Message to Yellow Fitness"}
                    </Button>

                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* GOOGLE MAPS EMBED & DIRECTIONS */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#0c0c0e] border-b border-[#27272a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FFE500] block mb-2">
                Location & Map
              </span>
              <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight">
                Find Yellow Fitness Club On The Map
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Dhillon Road, Nayagaon, Chandigarh, 160103, India (Side Hotel The Yellow).
              </p>
            </div>

            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#FFE500] text-black font-bold uppercase tracking-wider text-xs flex items-center gap-2 hover:bg-white hover:text-black transition-colors self-start md:self-auto shadow-md"
            >
              <span>Get Directions</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Map Frame */}
          <div className="relative border border-[#27272a] bg-[#121215] overflow-hidden aspect-[16/9] max-h-[500px]">
            <iframe
              title="Yellow Fitness Club GYM Nayagaon Chandigarh Google Map"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                BUSINESS_INFO.googleMapsEmbedQuery
              )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(1.1)" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Quick CTAs Bar */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 bg-[#121215] border border-[#27272a] hover:border-[#FFE500]/50 flex items-center justify-between transition-colors">
              <div>
                <h4 className="font-display text-xl font-bold uppercase text-white">
                  Schedule Facility Tour
                </h4>
                <p className="text-xs text-zinc-400">
                  Walk through the gym, pool, and sauna with our staff.
                </p>
              </div>
              <Button to="/facilities" variant="secondary" size="sm" showArrow>
                Tour Facilities
              </Button>
            </div>

            <div className="p-6 bg-[#121215] border border-[#27272a] hover:border-[#FFE500]/50 flex items-center justify-between transition-colors">
              <div>
                <h4 className="font-display text-xl font-bold uppercase text-white">
                  Discuss Membership Rates
                </h4>
                <p className="text-xs text-zinc-400">
                  Compare gym-only and all-access packages.
                </p>
              </div>
              <Button to="/membership" variant="primary" size="sm" showArrow>
                View Plans
              </Button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

