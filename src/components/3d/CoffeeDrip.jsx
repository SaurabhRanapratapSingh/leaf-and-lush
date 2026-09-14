import React from 'react';
import { motion } from 'framer-motion';

export default function CoffeeDrip() {
  return (
    <div className="absolute top-2 left-6 z-30 pointer-events-none">
      
      {/* Liquid Lip Overhang (Rim pool) */}
      <div className="w-5 h-2.5 rounded-full bg-gradient-to-r from-[#2A150A] via-[#4A2814] to-[#1F0D05] shadow-md border-t border-caramel-400/30" />

      {/* Dripping Stream SVG Container */}
      <svg
        viewBox="0 0 24 60"
        className="w-5 h-14 overflow-visible"
        fill="none"
      >
        <defs>
          <linearGradient id="dripGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3E2010" />
            <stop offset="60%" stopColor="#251208" />
            <stop offset="100%" stopColor="#140904" />
          </linearGradient>
          <radialGradient id="dropletHighlight" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#D49156" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#3E2010" />
            <stop offset="100%" stopColor="#150A05" />
          </radialGradient>
        </defs>

        {/* Slow Liquid Path Flowing Down Rim */}
        <motion.path
          d="M8 0 Q10 15 9 30 Q8 38 12 42 Q16 38 15 30 Q14 15 16 0 Z"
          fill="url(#dripGradient)"
          animate={{
            d: [
              "M9 0 Q10 8 9.5 14 Q9 18 12 20 Q15 18 14.5 14 Q14 8 15 0 Z",
              "M8 0 Q10 18 9 32 Q8 40 12 44 Q16 40 15 32 Q14 18 16 0 Z",
              "M8.5 0 Q10 22 9.2 38 Q8.5 48 12 52 Q15.5 48 14.8 38 Q14 22 15.5 0 Z",
              "M9 0 Q10 8 9.5 14 Q9 18 12 20 Q15 18 14.5 14 Q14 8 15 0 Z",
            ]
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Specular White Gloss Highlight Line */}
        <motion.path
          d="M10 2 L10 28"
          stroke="rgba(255, 240, 220, 0.4)"
          strokeWidth="1"
          strokeLinecap="round"
          animate={{
            opacity: [0.3, 0.8, 0.4, 0.3],
            strokeDasharray: ["0, 30", "15, 30", "0, 30"]
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Detaching Suspended Droplet */}
        <motion.circle
          cx="12"
          cy="48"
          r="3"
          fill="url(#dropletHighlight)"
          animate={{
            cy: [42, 50, 68, 75],
            opacity: [0, 0.9, 0.8, 0],
            scaleY: [1, 1.3, 1.5, 0.5],
            scaleX: [1, 0.9, 0.8, 0.3]
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: "easeIn",
            times: [0, 0.7, 0.92, 1]
          }}
        />
      </svg>

    </div>
  );
}
