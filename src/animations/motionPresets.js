// Standard spring & easing presets for Motion for React (motion/react)

export const springTransition = {
  type: "spring",
  stiffness: 400,
  damping: 30
};

export const gentleSpring = {
  type: "spring",
  stiffness: 260,
  damping: 24
};

export const snappySpring = {
  type: "spring",
  stiffness: 500,
  damping: 28
};

export const smoothEase = {
  duration: 0.45,
  ease: [0.25, 0.1, 0.25, 1.0]
};

// Fade & Slide in variant for sections and cards
export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1.0] }
  }
};

// Staggered list container
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08
    }
  }
};

// Hover micro-interactions
export const buttonHover = {
  scale: 1.03,
  transition: { duration: 0.2, ease: "easeOut" }
};

export const buttonTap = {
  scale: 0.96,
  transition: { duration: 0.1 }
};

// Card interactive hover
export const cardHover = {
  y: -6,
  boxShadow: "0 20px 35px -10px rgba(0, 0, 0, 0.8), 0 0 25px -5px rgba(255, 229, 0, 0.25)",
  transition: { duration: 0.3, ease: "easeOut" }
};

