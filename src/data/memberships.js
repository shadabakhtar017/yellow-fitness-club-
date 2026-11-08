// Membership Plans and Comparison Data for Yellow Fitness Club GYM
// Strictly adheres to data rules:
// - Does not invent prices; uses clear inquiry-based placeholders.
// - All plans feature honest tier breakdowns with direct contact CTAs.

export const MEMBERSHIP_PLANS = [
  {
    id: "fitness-essential",
    name: "Fitness Essential",
    tagline: "Dedicated Strength & Floor Training",
    badge: "Core Access",
    isPopular: false,
    priceDisplay: "Inquire for Rates",
    priceNote: "Custom duration options (Monthly / Quarterly / Annual)",
    description: "Ideal for committed lifters who want unlimited access to the gym floor, free weights, and cardio equipment.",
    features: [
      { text: "Full access to modern gym equipment", included: true },
      { text: "Free weight and powerlifting stations", included: true },
      { text: "Locker room and clean restroom access", included: true },
      { text: "General floor trainer form orientation", included: true },
      { text: "Access to group fitness studio classes", included: false },
      { text: "Swimming pool sessions", included: false },
      { text: "Sauna and steam bath access", included: false },
      { text: "Dedicated 1-on-1 personal training", included: false }
    ],
    ctaText: "Inquire About Essential Tier",
    inquiryTopic: "Fitness Essential Membership"
  },
  {
    id: "club-all-access",
    name: "Club All-Access",
    tagline: "Gym + Swimming Pool + Thermal Recovery",
    badge: "Most Popular",
    isPopular: true,
    priceDisplay: "Inquire for Rates",
    priceNote: "Flexible multi-month memberships available",
    description: "The complete club experience combining heavy iron, swimming pool laps, group fitness, and post-workout sauna relaxation.",
    features: [
      { text: "Full access to modern gym equipment", included: true },
      { text: "Free weight and powerlifting stations", included: true },
      { text: "Locker room, hot showers and restrooms", included: true },
      { text: "Access to group classes (Zumba, Aerobics, Yoga)", included: true },
      { text: "Swimming pool access for laps & aquatic workouts", included: true },
      { text: "Therapeutic sauna and steam bath recovery", included: true },
      { text: "Discounted rates on personal training packages", included: true },
      { text: "Dedicated 1-on-1 personal training sessions", included: false }
    ],
    ctaText: "Inquire About All-Access",
    inquiryTopic: "Club All-Access Membership"
  },
  {
    id: "elite-performance",
    name: "Elite Performance & PT",
    tagline: "All-Access + Personalized 1-on-1 Coaching",
    badge: "Maximum Results",
    isPopular: false,
    priceDisplay: "Inquire for Rates",
    priceNote: "Personalized coaching blocks tailored to your goals",
    description: "Designed for individuals demanding accelerated transformation through private coaching, tailored programming, and recovery.",
    features: [
      { text: "Full access to modern gym equipment", included: true },
      { text: "Unlimited swimming pool, sauna and steam bath", included: true },
      { text: "Dedicated 1-on-1 certified Personal Training blocks", included: true },
      { text: "Comprehensive nutritional consulting guidance", included: true },
      { text: "Biomechanics, body composition and progress tracking", included: true },
      { text: "Priority access to all group and specialty classes", included: true },
      { text: "Custom periodization programs for sports & hypertrophy", included: true },
      { text: "Dedicated recovery protocols", included: true }
    ],
    ctaText: "Inquire About Elite Coaching",
    inquiryTopic: "Elite Performance & PT Membership"
  }
];

export const MEMBERSHIP_BENEFITS = [
  {
    title: "All-In-One Wellness Hub",
    description: "Train with heavy weights, swim laps, and unwind in the sauna all under one roof in Nayagaon, Chandigarh."
  },
  {
    title: "Top-Tier Hygiene Standards",
    description: "Restrooms, showers, pool water, and gym floor sanitized multiple times daily for pristine member safety."
  },
  {
    title: "Supportive Training Atmosphere",
    description: "Whether you are stepping into a gym for the first time or setting powerlifting PRs, the club culture is welcoming."
  },
  {
    title: "14 Diverse Disciplines",
    description: "Never hit a plateau. Alternate between CrossFit, Yoga, Zumba, swimming, and private coaching whenever you choose."
  }
];

