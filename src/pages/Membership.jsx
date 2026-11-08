import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { gsap } from "../animations/gsapHelper";
import { motion, AnimatePresence } from "motion/react";
import {
  Check,
  X,
  ShieldCheck,
  Star,
  Sparkles,
  Phone,
  ArrowRight,
  HelpCircle,
  ChevronDown,
  Info,
  CheckCircle2
} from "lucide-react";

import { MEMBERSHIP_PLANS, MEMBERSHIP_BENEFITS } from "../data/memberships";
import { FAQS } from "../data/faqs";
import { BUSINESS_INFO } from "../data/business";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";
import CTASection from "../components/CTASection";

export default function Membership() {
  const [openFaq, setOpenFaq] = useState(null);

  // Form State for Membership Inquiry
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    selectedPlan: "Club All-Access",
    message: ""
  });
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Please enter your full name.";
    if (!formData.phone.trim()) {
      errors.phone = "Please enter your phone number.";
    } else if (!/^[0-9+ -]{8,15}$/.test(formData.phone.trim())) {
      errors.phone = "Please enter a valid phone number.";
    }
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setFormSubmitted(true);
    }
  };

  return (
    <div className="bg-[#080809] text-white">
      
      {/* Page Header */}
      <PageHeader
        badge="Membership & Inquiries"
        title="JOIN THE CLUB. COMMIT TO THE STANDARD."
        subtitle="Transparent tier comparisons for dedicated lifters, swimmers, and wellness seekers at Yellow Fitness Club GYM, Nayagaon, Chandigarh."
        backgroundImage="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80"
        breadcrumbs={[{ name: "Membership" }]}
      />

      {/* ========================================================================= */}
      {/* TRANSPARENT PRICING DISCLOSURE BANNER */}
      {/* ========================================================================= */}
      <div className="bg-[#101014] border-b border-[#27272a] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-xs text-zinc-400">
            <Info className="w-4 h-4 text-[#FFE500] flex-shrink-0" />
            <p>
              <strong className="text-white">Inquiry-Based Pricing Policy:</strong> Yellow Fitness Club GYM tailors membership packages according to facility selection (gym-only vs pool & sauna all-inclusive) and commitment duration (monthly, quarterly, annual). Call <a href={BUSINESS_INFO.phoneTel} className="text-[#FFE500] font-bold underline hover:text-white">094644 54545</a> or submit the form below for personalized rates and seasonal promotions.
            </p>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MEMBERSHIP PLAN COMPARISON CARDS */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#080809] border-b border-[#27272a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            eyebrow="Curated Membership Tiers"
            title="Choose Your Training Protocol"
            subtitle="Explore our structured membership options. All plans provide honest, unhindered access to verified facilities."
            align="center"
          />

          <div className="pricing-grid grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 items-stretch">
            {MEMBERSHIP_PLANS.map((plan, idx) => {
              const isPopular = plan.isPopular;

              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`pricing-card relative flex flex-col justify-between transition-all duration-300 p-8 sm:p-10 ${
                    isPopular
                      ? "bg-gradient-to-b from-[#18181f] to-[#121215] border-2 border-[#FFE500] shadow-[0_0_35px_rgba(255,229,0,0.15)] lg:-translate-y-2"
                      : "bg-[#121215] border border-[#27272a] hover:border-zinc-500"
                  }`}
                >
                  {/* Badge */}
                  {isPopular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1 bg-[#FFE500] text-black font-display font-black text-xs uppercase tracking-widest shadow-lg">
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs uppercase font-mono text-[#FFE500] font-bold tracking-wider">
                        {plan.tagline}
                      </span>
                      {!isPopular && (
                        <span className="text-[10px] font-mono text-zinc-500 uppercase">
                          {plan.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="font-display text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
                      {plan.name}
                    </h3>

                    {/* Price Display */}
                    <div className="my-6 pb-6 border-t border-b border-[#27272a] pt-6">
                      <div className="font-display text-3xl font-extrabold text-[#FFE500]">
                        {plan.priceDisplay}
                      </div>
                      <p className="text-xs text-zinc-400 mt-1">
                        {plan.priceNote}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-400 mb-6 leading-relaxed">
                      {plan.description}
                    </p>

                    {/* Features list */}
                    <div className="space-y-3 pt-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 block mb-2">
                        Plan Inclusions:
                      </span>
                      {plan.features.map((feat, fIdx) => (
                        <div
                          key={fIdx}
                          className={`flex items-start gap-2.5 text-xs sm:text-sm ${
                            feat.included ? "text-zinc-300" : "text-zinc-600 line-through"
                          }`}
                        >
                          {feat.included ? (
                            <Check className="w-4 h-4 text-[#FFE500] flex-shrink-0 mt-0.5" />
                          ) : (
                            <X className="w-4 h-4 text-zinc-600 flex-shrink-0 mt-0.5" />
                          )}
                          <span>{feat.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Plan CTA */}
                  <div className="mt-8 pt-6 border-t border-[#1c1c20]">
                    <Button
                      onClick={() => {
                        setFormData((prev) => ({ ...prev, selectedPlan: plan.name }));
                        const formElement = document.getElementById("inquiry-form-section");
                        if (formElement) formElement.scrollIntoView({ behavior: "smooth" });
                      }}
                      variant={isPopular ? "primary" : "secondary"}
                      size="md"
                      className="w-full justify-between"
                      showArrow
                    >
                      {plan.ctaText}
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* MEMBERSHIP BENEFITS */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#0c0c0e] border-b border-[#27272a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            eyebrow="Club Privileges"
            title="The Yellow Fitness Advantage"
            subtitle="Every membership at Yellow Fitness Club includes essential standards designed to safeguard your experience."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {MEMBERSHIP_BENEFITS.map((benefit, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#121215] border border-[#27272a] hover:border-[#FFE500]/50 transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="font-display text-4xl font-black text-zinc-700 block mb-3">
                    0{idx + 1}
                  </span>
                  <h3 className="font-display text-2xl font-bold uppercase text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* MEMBERSHIP INQUIRY FORM */}
      {/* ========================================================================= */}
      <section id="inquiry-form-section" className="py-20 md:py-28 bg-[#080809] border-b border-[#27272a] scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-[#121215] border border-[#27272a] p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#FFE500]" />

            <SectionHeading
              eyebrow="Direct Membership Inquiry"
              title="Request Rates & Free Gym Tour"
              subtitle="Submit your preferred plan or inquiry. Our reception desk will contact you with accurate pricing and tour scheduling."
            />

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 bg-[#18181b] border border-[#FFE500]/50 text-center space-y-4 my-6"
              >
                <div className="w-12 h-12 bg-[#FFE500] text-black rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-display text-3xl font-black uppercase text-white">
                  Inquiry Registered Successfully
                </h3>
                <p className="text-sm text-zinc-300 max-w-lg mx-auto">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Your inquiry for{" "}
                  <strong className="text-[#FFE500] font-bold">{formData.selectedPlan}</strong> has been logged.
                </p>
                <p className="text-xs text-zinc-400">
                  Our front desk at Nayagaon, Chandigarh will reach out to you at <strong className="text-white">{formData.phone}</strong>. For instant questions, you may also call us directly at <a href={BUSINESS_INFO.phoneTel} className="text-[#FFE500] underline font-bold">{BUSINESS_INFO.phone}</a>.
                </p>
                <div className="pt-4">
                  <Button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: "",
                        phone: "",
                        email: "",
                        selectedPlan: "Club All-Access",
                        message: ""
                      });
                    }}
                    variant="secondary"
                    size="sm"
                  >
                    Submit Another Inquiry
                  </Button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 mt-8">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Rahul Sharma"
                      className={`w-full px-4 py-3 bg-[#18181b] border text-white text-sm focus:outline-none transition-colors ${
                        formErrors.name ? "border-red-500" : "border-[#27272a] focus:border-[#FFE500]"
                      }`}
                    />
                    {formErrors.name && (
                      <span className="text-xs text-red-400 mt-1 block">{formErrors.name}</span>
                    )}
                  </div>

                  {/* Phone Number */}
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
                      <span className="text-xs text-red-400 mt-1 block">{formErrors.phone}</span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                      Email Address <span className="text-zinc-500">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="name@domain.com"
                      className={`w-full px-4 py-3 bg-[#18181b] border text-white text-sm focus:outline-none transition-colors ${
                        formErrors.email ? "border-red-500" : "border-[#27272a] focus:border-[#FFE500]"
                      }`}
                    />
                    {formErrors.email && (
                      <span className="text-xs text-red-400 mt-1 block">{formErrors.email}</span>
                    )}
                  </div>

                  {/* Plan Selection */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                      Selected Plan Tier <span className="text-red-400">*</span>
                    </label>
                    <select
                      name="selectedPlan"
                      value={formData.selectedPlan}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#18181b] border border-[#27272a] text-white text-sm focus:border-[#FFE500] focus:outline-none"
                    >
                      <option value="Club All-Access">Club All-Access (Gym + Pool + Sauna)</option>
                      <option value="Fitness Essential">Fitness Essential (Gym Floor Only)</option>
                      <option value="Elite Performance & PT">Elite Performance & PT (1-on-1 Coaching)</option>
                      <option value="General Tour / Inquiry">General Club Tour / Pricing Inquiry</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                    Questions or Specific Fitness Goals <span className="text-zinc-500">(Optional)</span>
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your objectives (e.g. weight loss, swimming access, powerlifting, personal training)..."
                    className="w-full px-4 py-3 bg-[#18181b] border border-[#27272a] text-white text-sm focus:border-[#FFE500] focus:outline-none"
                  />
                </div>

                {/* Privacy & Direct Call Notice */}
                <div className="p-4 bg-[#18181b] border border-[#27272a] flex items-start gap-3 text-xs text-zinc-400">
                  <Info className="w-4 h-4 text-[#FFE500] flex-shrink-0 mt-0.5" />
                  <p>
                    Your contact information will be used solely by Yellow Fitness Club GYM staff to assist with your inquiry. We do not sell or share customer data.
                  </p>
                </div>

                {/* Submit Button */}
                <Button type="submit" variant="primary" size="lg" className="w-full justify-between" showArrow>
                  Submit Membership Inquiry
                </Button>

              </form>
            )}

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* FREQUENTLY ASKED QUESTIONS ACCORDION */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#0c0c0e] border-b border-[#27272a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            eyebrow="Got Questions?"
            title="Frequently Asked Questions"
            subtitle="Find authentic, transparent answers regarding our facilities, membership policies, and club operations in Nayagaon."
            align="center"
          />

          <div className="space-y-4 mt-12">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={index}
                  className="bg-[#121215] border border-[#27272a] overflow-hidden transition-all hover:border-zinc-500"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-lg sm:text-xl font-bold uppercase text-white tracking-wide">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-6 h-6 rounded-full bg-[#18181b] border border-[#27272a] flex items-center justify-center flex-shrink-0 text-[#FFE500]"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-zinc-400 leading-relaxed border-t border-[#1c1c20]">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Global CTA */}
      <CTASection
        title="JOIN YELLOW FITNESS CLUB TODAY"
        subtitle="Call 094644 54545 or visit Side Hotel The Yellow, Dhillon Road, Nayagaon, Chandigarh."
      />

    </div>
  );
}

