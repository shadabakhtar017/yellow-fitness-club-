import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Fast, punchy preloader counter
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            if (onComplete) onComplete();
          }, 350);
          return 100;
        }
        // Accelerating progress curve
        const step = Math.floor(Math.random() * 14) + 6;
        return Math.min(prev + step, 100);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  const handleSkip = () => {
    setIsDone(true);
    if (onComplete) onComplete();
  };

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.77, 0, 0.175, 1] }}
          className="fixed inset-0 z-50 bg-[#080809] flex flex-col justify-between p-6 sm:p-12 overflow-hidden select-none"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#FFE500] rounded-none rotate-45" />
              <span className="font-display tracking-widest text-xs uppercase font-bold text-zinc-400">
                Yellow Fitness Club GYM • Chandigarh
              </span>
            </div>

            <button
              onClick={handleSkip}
              className="text-xs uppercase font-mono tracking-wider text-zinc-500 hover:text-[#FFE500] cursor-pointer transition-colors"
            >
              [ Skip Intro ]
            </button>
          </div>

          {/* Center Title Sequence */}
          <div className="max-w-4xl my-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-3 py-1 bg-[#18181b] border border-[#27272a] text-[#FFE500] text-xs font-bold uppercase tracking-widest mb-4"
            >
              Nayagaon, Chandigarh
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase text-white tracking-tight leading-[0.88]"
            >
              BUILT <span className="text-[#FFE500]">STRONGER.</span>
              <br />
              LIVE BETTER.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-xs sm:text-sm uppercase tracking-widest text-zinc-400 font-medium"
            >
              Modern Gym • Swimming Pool • Sauna • Steam Bath • 14 Disciplines
            </motion.p>
          </div>

          {/* Bottom Progress Bar & Percentage */}
          <div className="w-full">
            <div className="flex items-end justify-between mb-2">
              <span className="text-xs uppercase font-mono tracking-wider text-zinc-400">
                Initializing Elite Environment...
              </span>
              <span className="font-display text-4xl sm:text-5xl font-extrabold text-[#FFE500]">
                {progress}%
              </span>
            </div>

            {/* Progress track */}
            <div className="w-full h-1 bg-zinc-800 overflow-hidden">
              <motion.div
                className="h-full bg-[#FFE500] shadow-[0_0_15px_#FFE500]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

