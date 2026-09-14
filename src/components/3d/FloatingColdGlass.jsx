import React from 'react';
import { motion } from 'framer-motion';

export default function FloatingColdGlass({ className = "" }) {
  return (
    <motion.div
      animate={{
        y: [0, -6, 0],
        rotateZ: [0, 4, -4, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={`relative inline-block pointer-events-none select-none w-8 h-10 sm:w-11 sm:h-14 ${className}`}
    >
      <svg viewBox="0 0 50 65" className="w-full h-full drop-shadow-[0_6px_12px_rgba(0,0,0,0.4)]" fill="none">
        <defs>
          <linearGradient id="coldGlassLiquid" x1="12" y1="20" x2="38" y2="55" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3D241A" />
            <stop offset="0.6" stopColor="#1E130D" />
            <stop offset="1" stopColor="#0C0704" />
          </linearGradient>
          <linearGradient id="glassWall" x1="10" y1="12" x2="40" y2="60" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" stopOpacity="0.4" />
            <stop offset="0.5" stopColor="#FFFFFF" stopOpacity="0.1" />
            <stop offset="1" stopColor="#FFFFFF" stopOpacity="0.25" />
          </linearGradient>
        </defs>

        {/* Straw */}
        <path
          d="M32 4 L28 20 L24 55"
          stroke="#EA580C"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Glass Outer Body */}
        <path
          d="M12 14 H38 L34 58 C34 60 32 62 30 62 H20 C18 62 16 60 16 58 L12 14 Z"
          fill="url(#glassWall)"
          stroke="#D8BFA3"
          strokeWidth="1.2"
        />

        {/* Coffee Liquid Inside */}
        <path
          d="M13.5 22 H36.5 L33.5 57 C33.5 58.5 32 60 30 60 H20 C18 60 16.5 58.5 16.5 57 L13.5 22 Z"
          fill="url(#coldGlassLiquid)"
        />

        {/* Floating Ice Cubes */}
        <rect x="18" y="24" width="8" height="8" rx="2" fill="#FAF4ED" fillOpacity="0.55" stroke="#FFFFFF" strokeWidth="0.8" />
        <rect x="25" y="30" width="7" height="7" rx="1.5" fill="#FAF4ED" fillOpacity="0.5" stroke="#FFFFFF" strokeWidth="0.8" />

        {/* Condensation Highlight Streak */}
        <path
          d="M15 24 L18 56"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>
    </motion.div>
  );
}
