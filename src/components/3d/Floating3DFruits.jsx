import React from 'react';
import { motion } from 'framer-motion';

export function Floating3DStrawberry({ className = "" }) {
  return (
    <motion.div
      animate={{
        y: [0, -7, 0],
        rotateZ: [0, -6, 6, 0],
        rotateY: [0, 20, -10, 0],
      }}
      transition={{
        duration: 5.2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={`relative inline-block pointer-events-none select-none w-8 h-8 sm:w-11 sm:h-11 ${className}`}
    >
      <svg viewBox="0 0 50 50" className="w-full h-full drop-shadow-[0_4px_8px_rgba(225,29,72,0.4)]" fill="none">
        <defs>
          <linearGradient id="strawberryGrad" x1="10" y1="10" x2="40" y2="45" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FB7185" />
            <stop offset="0.4" stopColor="#E11D48" />
            <stop offset="1" stopColor="#9F1239" />
          </linearGradient>
        </defs>
        {/* Berry Body */}
        <path
          d="M25 46 C21 46 10 32 10 20 C10 12 16 8 25 8 C34 8 40 12 40 20 C40 32 29 46 25 46 Z"
          fill="url(#strawberryGrad)"
        />
        {/* Seed Dots */}
        {[
          [20, 18], [25, 22], [30, 18], [17, 26], [23, 30],
          [29, 28], [34, 25], [20, 36], [27, 38], [25, 14]
        ].map(([cx, cy], i) => (
          <ellipse key={i} cx={cx} cy={cy} rx="1" ry="1.5" fill="#FEF08A" opacity="0.85" />
        ))}
        {/* Green Crown Leaves */}
        <path d="M25 8 C22 4 17 4 14 6 C17 9 21 9 25 8 Z" fill="#22C55E" />
        <path d="M25 8 C28 4 33 4 36 6 C33 9 29 9 25 8 Z" fill="#22C55E" />
        <path d="M25 8 C25 2 24 0 25 0 C26 0 25 2 25 8 Z" stroke="#15803D" strokeWidth="2" strokeLinecap="round" />
        <path d="M25 8 C23 7 20 12 25 11 C30 12 27 7 25 8 Z" fill="#16A34A" />
      </svg>
    </motion.div>
  );
}

export function Floating3DOrangeSlice({ className = "" }) {
  return (
    <motion.div
      animate={{
        y: [0, -6, 0],
        rotateZ: [0, 12, -8, 0],
        rotateX: [0, 15, -15, 0],
      }}
      transition={{
        duration: 5.8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.5
      }}
      className={`relative inline-block pointer-events-none select-none w-8 h-8 sm:w-11 sm:h-11 ${className}`}
    >
      <svg viewBox="0 0 50 50" className="w-full h-full drop-shadow-[0_4px_8px_rgba(234,88,12,0.4)]" fill="none">
        <defs>
          <linearGradient id="orangeRind" x1="0" y1="0" x2="50" y2="50" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F97316" />
            <stop offset="1" stopColor="#C2410C" />
          </linearGradient>
          <linearGradient id="orangePulp" x1="10" y1="10" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FB923C" />
            <stop offset="1" stopColor="#EA580C" />
          </linearGradient>
        </defs>
        {/* Outer Rind */}
        <circle cx="25" cy="25" r="22" fill="url(#orangeRind)" stroke="#FFF7ED" strokeWidth="1.8" />
        {/* Inner White Pith */}
        <circle cx="25" cy="25" r="19" fill="#FFFBEB" />
        {/* Pulp Segments */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <g key={i} transform={`rotate(${angle} 25 25)`}>
            <path
              d="M25 22 C23 15 27 10 25 9 C23 10 27 15 25 22 Z"
              fill="url(#orangePulp)"
              transform="translate(0, -2)"
            />
            <path
              d="M25 21 L22 11 A 15 15 0 0 1 28 11 Z"
              fill="url(#orangePulp)"
            />
          </g>
        ))}
        {/* Center Pith */}
        <circle cx="25" cy="25" r="3.5" fill="#FFFBEB" />
      </svg>
    </motion.div>
  );
}

export function Floating3DWatermelon({ className = "" }) {
  return (
    <motion.div
      animate={{
        y: [0, -8, 0],
        rotateZ: [0, -10, 8, 0],
        rotateY: [0, 15, -15, 0],
      }}
      transition={{
        duration: 6.2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.8
      }}
      className={`relative inline-block pointer-events-none select-none w-9 h-9 sm:w-12 sm:h-12 ${className}`}
    >
      <svg viewBox="0 0 50 50" className="w-full h-full drop-shadow-[0_4px_8px_rgba(225,29,72,0.35)]" fill="none">
        <defs>
          <linearGradient id="watermelonPulp" x1="10" y1="10" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F43F5E" />
            <stop offset="0.8" stopColor="#E11D48" />
            <stop offset="1" stopColor="#BE123C" />
          </linearGradient>
        </defs>
        {/* Green Outer Rind Arc */}
        <path d="M6 34 A 23 23 0 0 0 44 34 L 25 10 Z" fill="#15803D" />
        {/* White Inner Rind Arc */}
        <path d="M8 33 A 21 21 0 0 0 42 33 L 25 12 Z" fill="#F0FDF4" />
        {/* Red Juicy Pulp */}
        <path d="M10 31 A 19 19 0 0 0 40 31 L 25 14 Z" fill="url(#watermelonPulp)" />
        {/* Black Seeds */}
        <circle cx="21" cy="24" r="1.2" fill="#150D09" />
        <circle cx="28" cy="23" r="1.2" fill="#150D09" />
        <circle cx="25" cy="28" r="1.2" fill="#150D09" />
        <circle cx="18" cy="29" r="1.2" fill="#150D09" />
        <circle cx="32" cy="28" r="1.2" fill="#150D09" />
      </svg>
    </motion.div>
  );
}
