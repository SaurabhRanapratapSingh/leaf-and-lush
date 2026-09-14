import React from 'react';
import { motion } from 'framer-motion';

export default function Floating3DLeaf({ className = "", size = "md" }) {
  const sizeClasses = {
    sm: "w-8 h-8 sm:w-10 sm:h-10",
    md: "w-10 h-10 sm:w-14 sm:h-14",
    lg: "w-14 h-14 sm:w-20 sm:h-20"
  }[size] || "w-10 h-10 sm:w-14 sm:h-14";

  return (
    <motion.div
      animate={{
        y: [0, -8, 0],
        rotateZ: [0, 8, -6, 0],
        rotateY: [0, 15, -15, 0],
        rotateX: [0, 10, -5, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={`relative inline-block pointer-events-none select-none perspective-[600px] ${sizeClasses} ${className}`}
    >
      {/* Soft Ambient Shadow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-2 bg-coffee-950/60 rounded-full blur-[3px]" />

      {/* 3D Botanical Leaf SVG */}
      <svg
        viewBox="0 0 60 60"
        className="w-full h-full drop-shadow-[0_6px_10px_rgba(46,111,64,0.35)]"
        fill="none"
      >
        <defs>
          <linearGradient id="leafGrad3D" x1="10" y1="10" x2="50" y2="50" gradientUnits="userSpaceOnUse">
            <stop stopColor="#52B770" />
            <stop offset="0.5" stopColor="#2E6F40" />
            <stop offset="1" stopColor="#1E4D2B" />
          </linearGradient>
          <linearGradient id="leafHighlight" x1="15" y1="15" x2="35" y2="35" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7CD194" stopOpacity="0.8" />
            <stop offset="1" stopColor="#2E6F40" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Leaf Shape Main Body */}
        <path
          d="M30 4 C44 14 54 28 54 42 C54 52 44 56 30 56 C16 56 6 52 6 42 C6 28 16 14 30 4 Z"
          fill="url(#leafGrad3D)"
          stroke="#52B770"
          strokeWidth="1.2"
        />

        {/* Highlight Curvature */}
        <path
          d="M30 6 C40 16 48 28 48 40 C48 48 40 52 30 54 C30 54 34 32 30 6 Z"
          fill="url(#leafHighlight)"
        />

        {/* Central Spine Vein */}
        <path
          d="M30 6 Q30 32 30 56"
          stroke="#7CD194"
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        {/* Side Veins */}
        <path d="M30 20 Q38 16 44 20" stroke="#7CD194" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
        <path d="M30 20 Q22 16 16 20" stroke="#7CD194" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
        <path d="M30 32 Q40 28 48 34" stroke="#7CD194" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
        <path d="M30 32 Q20 28 12 34" stroke="#7CD194" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
        <path d="M30 44 Q38 42 44 48" stroke="#7CD194" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
        <path d="M30 44 Q22 42 16 48" stroke="#7CD194" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
      </svg>
    </motion.div>
  );
}
