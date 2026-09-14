import React from 'react';
import { motion } from 'framer-motion';

export default function CoffeeSteam({ className = "h-44 w-36" }) {
  return (
    <div className={`relative pointer-events-none overflow-visible flex items-end justify-center ${className}`}>
      
      {/* Ambient Rising Heat Glow */}
      <motion.div
        className="absolute bottom-2 w-16 h-12 rounded-full bg-cream-200/25 blur-xl"
        animate={{
          scale: [1, 1.35, 1],
          opacity: [0.25, 0.55, 0.25],
        }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Steam Strand 1 - Left Drift */}
      <motion.svg
        viewBox="0 0 50 120"
        className="absolute bottom-0 w-9 h-32 opacity-40 text-cream-200"
        fill="none"
        animate={{
          y: [-5, -55, -105],
          x: [0, -10, 6],
          opacity: [0, 0.5, 0],
          scale: [0.8, 1.25, 1.7],
        }}
        transition={{
          duration: 4.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.2
        }}
      >
        <path
          d="M25 120 Q12 85 30 55 T22 0"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          filter="blur(3.5px)"
        />
      </motion.svg>

      {/* Steam Strand 2 - Main Center Plume */}
      <motion.svg
        viewBox="0 0 50 120"
        className="absolute bottom-0 w-11 h-40 opacity-55 text-cream-100"
        fill="none"
        animate={{
          y: [-10, -70, -125],
          x: [0, 14, -8],
          opacity: [0, 0.6, 0],
          scale: [0.9, 1.35, 1.9],
        }}
        transition={{
          duration: 4.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.2
        }}
      >
        <path
          d="M25 120 Q38 90 18 60 T30 0"
          stroke="currentColor"
          strokeWidth="4.5"
          strokeLinecap="round"
          filter="blur(4px)"
        />
      </motion.svg>

      {/* Steam Strand 3 - Right Wisp */}
      <motion.svg
        viewBox="0 0 50 120"
        className="absolute bottom-0 w-9 h-34 opacity-35 text-caramel-200"
        fill="none"
        animate={{
          y: [-15, -60, -110],
          x: [0, 8, -6],
          opacity: [0, 0.45, 0],
          scale: [0.85, 1.2, 1.6],
        }}
        transition={{
          duration: 3.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2.3
        }}
      >
        <path
          d="M25 120 Q16 80 28 45 T20 0"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          filter="blur(3px)"
        />
      </motion.svg>

      {/* Steam Strand 4 - Soft Micro Wisp */}
      <motion.svg
        viewBox="0 0 50 120"
        className="absolute bottom-0 w-7 h-28 opacity-30 text-cream-300"
        fill="none"
        animate={{
          y: [-8, -48, -95],
          x: [0, -6, 10],
          opacity: [0, 0.4, 0],
          scale: [0.75, 1.1, 1.5],
        }}
        transition={{
          duration: 3.4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3.1
        }}
      >
        <path
          d="M25 120 Q20 70 32 40 T24 0"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          filter="blur(2.5px)"
        />
      </motion.svg>

    </div>
  );
}
