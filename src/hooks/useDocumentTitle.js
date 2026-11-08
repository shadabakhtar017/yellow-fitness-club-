import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ROUTE_TITLES = {
  "/": "Yellow Fitness Club GYM | Built Stronger. Live Better | Nayagaon, Chandigarh",
  "/about": "About Us | Yellow Fitness Club GYM | Nayagaon, Chandigarh",
  "/services": "14 Fitness Services & Classes | Yellow Fitness Club GYM",
  "/facilities": "Verified Club Facilities (Gym, Pool, Sauna) | Yellow Fitness Club",
  "/trainers": "Coaching Philosophy & Trainers | Yellow Fitness Club GYM",
  "/membership": "Membership Plans & Rates Inquiry | Yellow Fitness Club GYM",
  "/contact": "Contact Reception & Directions | Yellow Fitness Club GYM"
};

const ROUTE_DESCRIPTIONS = {
  "/": "Yellow Fitness Club GYM in Nayagaon, Chandigarh (Side Hotel The Yellow). 4.5 Google Rating (166 Reviews). Modern gym equipment, swimming pool, sauna, steam bath, CrossFit, personal training, and group fitness.",
  "/about": "Discover the fitness philosophy, authentic gym culture, and complete athletic ecosystem of Yellow Fitness Club GYM in Nayagaon, Chandigarh.",
  "/services": "Explore all 14 disciplines: Weight Training, CrossFit, Swimming, Saunas, Personal Training, Private Lessons, Nutrition Consulting, Yoga Classes, Zumba, Aerobics, Dance Fitness, Jazzercise, Adult Sports, and Youth Classes.",
  "/facilities": "Tour our verified facilities: modern gym equipment, swimming pool, dry cedarwood sauna, steam bath, and hygienic restrooms in Nayagaon, Chandigarh.",
  "/trainers": "Learn about our coaching standards, specialization tracks across strength, swimming, and wellness, and 1-on-1 personal training mentorship.",
  "/membership": "Transparent membership plan comparisons for Yellow Fitness Club GYM. Inquire for rates and book a complimentary club tour.",
  "/contact": "Visit Yellow Fitness Club GYM at Side Hotel The Yellow, Dhillon Road, Nayagaon, Chandigarh, 160103. Call 094644 54545 for direct inquiries."
};

export default function useDocumentTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    const title = ROUTE_TITLES[pathname] || "Yellow Fitness Club GYM | Chandigarh";
    document.title = title;

    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) {
      descMeta.setAttribute("content", ROUTE_DESCRIPTIONS[pathname] || ROUTE_DESCRIPTIONS["/"]);
    }
  }, [pathname]);
}

