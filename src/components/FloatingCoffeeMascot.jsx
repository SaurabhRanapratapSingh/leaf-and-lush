import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { Sprout, Sparkles, Apple } from 'lucide-react';

const MASCOT_QUOTES = [
  "Fresh fruit bowls or steamed salad today? 🍓🥗",
  "100% pure goodness in every bite! ✨",
  "Check out our daily monthly subscription bowls! 📅",
  "Handpicked, fresh-cut & hygienic! 🍃",
  "Eat fresh, live healthy! 🥑",
];

export default function FloatingCoffeeMascot() {
  const { isCartOpen, totalItems } = useCart();
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isBubbleVisible, setIsBubbleVisible] = useState(false);
  const [isWiggling, setIsWiggling] = useState(false);
  const [blink, setBlink] = useState(false);

  // Periodic subtle blinks
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 200);
    }, 4000);
    return () => clearInterval(blinkInterval);
  }, []);

  // Show welcome bubble on load, then hide
  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setIsBubbleVisible(true);
    }, 1200);

    const hideTimer = setTimeout(() => {
      setIsBubbleVisible(false);
    }, 5500);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  // On Tap / Click
  const handleMascotTap = () => {
    setIsWiggling(true);
    setCurrentQuoteIndex((prev) => (prev + 1) % MASCOT_QUOTES.length);
    setIsBubbleVisible(true);

    setTimeout(() => {
      setIsWiggling(false);
    }, 600);

    setTimeout(() => {
      setIsBubbleVisible(false);
    }, 4500);
  };

  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener('resize', check, { passive: true });
    return () => window.removeEventListener('resize', check);
  }, []);

  if (isCartOpen) {
    return null;
  }

  return (
    <aside
      aria-label="Leaf & Lush Assistant"
      className={`fixed z-30 right-3 sm:right-6 pointer-events-none transition-all duration-300 ${
        totalItems > 0 ? 'bottom-20 sm:bottom-24' : 'bottom-4 sm:bottom-6'
      }`}
    >
      <div className="relative flex flex-col items-end pointer-events-auto select-none">
        
        {/* Speech Bubble */}
        <AnimatePresence>
          {isBubbleVisible && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.88 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.88 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="mb-2 max-w-[210px] sm:max-w-[240px] px-3.5 py-2 rounded-2xl bg-coffee-950/95 border border-leaf-500/40 shadow-xl md:backdrop-blur-md text-cream-50 text-[11px] sm:text-xs leading-snug font-medium text-left relative"
            >
              <span>{MASCOT_QUOTES[currentQuoteIndex]}</span>
              {/* Bubble Arrow */}
              <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-coffee-950 border-b border-r border-leaf-500/40 transform rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* 3D Fresh Bowl Mascot Character */}
        <motion.button
          onClick={handleMascotTap}
          animate={
            isWiggling
              ? { rotateZ: [0, -12, 12, -8, 8, 0], scale: [1, 1.1, 1] }
              : isDesktop
              ? { y: [0, -5, 0] }
              : undefined
          }
          transition={
            isWiggling
              ? { duration: 0.5 }
              : isDesktop
              ? { duration: 4, repeat: Infinity, ease: "easeInOut" }
              : undefined
          }
          className="relative group cursor-pointer focus:outline-none rounded-2xl p-1 select-none"
          aria-label="Tap Leaf & Lush fresh bowl mascot"
        >
          {/* Ambient Glow */}
          <div className="absolute inset-0 rounded-full bg-leaf-500/20 blur-md group-hover:bg-leaf-400/35 transition-colors pointer-events-none" />

          {/* Fresh Salad Bowl Mascot Graphic */}
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
            
            {/* Mascot SVG */}
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg" fill="none">
              <defs>
                <linearGradient id="mascotBowlGrad" x1="0" y1="0" x2="100" y2="100">
                  <stop offset="0%" stopColor="#2E6F40" />
                  <stop offset="60%" stopColor="#1E4D2B" />
                  <stop offset="100%" stopColor="#140D09" />
                </linearGradient>
                <linearGradient id="mascotGreens" x1="0" y1="0" x2="100" y2="0">
                  <stop offset="0%" stopColor="#86EFAC" />
                  <stop offset="100%" stopColor="#22C55E" />
                </linearGradient>
              </defs>

              {/* Ceramic Bowl Body */}
              <ellipse cx="50" cy="85" rx="35" ry="7" fill="#0C0704" opacity="0.6" />
              <path
                d="M15 48 C15 78 85 78 85 48 Z"
                fill="url(#mascotBowlGrad)"
                stroke="#52B770"
                strokeWidth="2.5"
              />

              {/* Greens & Strawberry Topping */}
              <path d="M22 48 Q35 32 50 48 Q65 32 78 48 Z" fill="url(#mascotGreens)" />
              <circle cx="50" cy="36" r="6" fill="#E11D48" />
              <circle cx="38" cy="40" r="4.5" fill="#F59E0B" />
              <circle cx="62" cy="40" r="4.5" fill="#84CC16" />

              {/* Cute Sprout on Head */}
              <path d="M50 30 Q54 22 60 25 Q56 32 50 30 Z" fill="#4ADE80" />
              <path d="M50 30 Q46 22 40 25 Q44 32 50 30 Z" fill="#22C55E" />
              <line x1="50" y1="30" x2="50" y2="35" stroke="#15803D" strokeWidth="1.5" />

              {/* Expressive Smiling Eyes */}
              {blink ? (
                <>
                  <line x1="36" y1="60" x2="44" y2="60" stroke="#FAF4ED" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="56" y1="60" x2="64" y2="60" stroke="#FAF4ED" strokeWidth="2.5" strokeLinecap="round" />
                </>
              ) : (
                <>
                  <circle cx="40" cy="60" r="3.5" fill="#FAF4ED" />
                  <circle cx="60" cy="60" r="3.5" fill="#FAF4ED" />
                  <circle cx="41" cy="59" r="1.2" fill="#150D09" />
                  <circle cx="61" cy="59" r="1.2" fill="#150D09" />
                </>
              )}

              {/* Rosy Cheeks */}
              <circle cx="32" cy="65" r="3" fill="#F43F5E" opacity="0.6" />
              <circle cx="68" cy="65" r="3" fill="#F43F5E" opacity="0.6" />

              {/* Cute Happy Mouth */}
              <path d="M46 66 Q50 71 54 66" stroke="#FAF4ED" strokeWidth="2" strokeLinecap="round" fill="none" />
            </svg>
          </div>
        </motion.button>

      </div>
    </aside>
  );
}
