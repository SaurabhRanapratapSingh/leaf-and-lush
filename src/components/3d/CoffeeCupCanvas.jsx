import React from 'react';
import { motion, useSpring, useScroll, useTransform } from 'framer-motion';
import CoffeeSteam from './CoffeeSteam';
import { Sparkles, Sprout } from 'lucide-react';

export default function CoffeeCupCanvas({ mousePosition = { x: 0, y: 0 } }) {
  // Smooth spring physics for mouse parallax tilt
  const springConfig = { damping: 28, stiffness: 120 };
  const rotateX = useSpring(mousePosition.y * -10, springConfig);
  const rotateY = useSpring(mousePosition.x * 14, springConfig);
  const translateY = useSpring(mousePosition.y * -5, springConfig);

  // Scroll scaling
  const { scrollY } = useScroll();
  const scrollScale = useTransform(scrollY, [0, 380], [1, 0.9]);
  const scrollOpacity = useTransform(scrollY, [0, 480], [1, 0.4]);

  return (
    <div className="relative w-full max-w-[280px] sm:max-w-[460px] lg:max-w-[560px] aspect-square flex items-center justify-center select-none perspective-[1000px]">
      
      {/* Cinematic Radial Backlight */}
      <motion.div
        className="absolute w-56 h-56 sm:w-88 sm:h-88 lg:w-[460px] lg:h-[460px] rounded-full bg-gradient-to-tr from-caramel-500/22 via-coffee-600/28 to-leaf-500/22 blur-2xl sm:blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.08, 0.96, 1],
          opacity: [0.65, 0.85, 0.7, 0.65]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating 3D Interactive Container */}
      <motion.div
        className="relative w-full h-full flex items-center justify-center transform-gpu"
        style={{
          rotateX,
          rotateY,
          y: translateY,
          scale: scrollScale,
          opacity: scrollOpacity,
          transformStyle: "preserve-3d",
        }}
        animate={{
          y: [0, -8, 0],
          rotateZ: [0, 1.2, -1.2, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Steam Wisps Rising Naturally */}
        <div className="absolute -top-10 sm:-top-18 z-30 pointer-events-none">
          <CoffeeSteam className="h-32 sm:h-52 w-32 sm:w-48" />
        </div>

        {/* 3D Specialty Ceramic Coffee Cup & Saucer SVG */}
        <div className="relative z-20 w-56 h-56 sm:w-88 sm:h-88 lg:w-[420px] lg:h-[420px] flex items-center justify-center">
          
          <svg
            viewBox="0 0 300 300"
            className="w-full h-full drop-shadow-[0_18px_32px_rgba(0,0,0,0.7)]"
            fill="none"
          >
            <defs>
              {/* Radial Shadow */}
              <radialGradient id="cupGroundShadow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#0C0704" stopOpacity="0.85" />
                <stop offset="60%" stopColor="#0C0704" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#0C0704" stopOpacity="0" />
              </radialGradient>

              {/* Saucer Gradients */}
              <linearGradient id="saucerRimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3D241A" />
                <stop offset="40%" stopColor="#1E130D" />
                <stop offset="100%" stopColor="#0C0704" />
              </linearGradient>
              <linearGradient id="saucerGoldBorder" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#B97845" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#E8C793" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#B97845" stopOpacity="0.3" />
              </linearGradient>

              {/* Ceramic Mug Wall Gradient */}
              <linearGradient id="ceramicWallGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2F1B12" />
                <stop offset="25%" stopColor="#1E110A" />
                <stop offset="70%" stopColor="#150C07" />
                <stop offset="100%" stopColor="#0D0704" />
              </linearGradient>

              {/* Specular Highlight Strip */}
              <linearGradient id="specularGlint" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
                <stop offset="50%" stopColor="#F4E8D5" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </linearGradient>

              {/* Espresso Liquid & Crema Gradients */}
              <radialGradient id="espressoLiquid" cx="50%" cy="40%" r="55%">
                <stop offset="0%" stopColor="#78472C" />
                <stop offset="45%" stopColor="#452718" />
                <stop offset="85%" stopColor="#25140C" />
                <stop offset="100%" stopColor="#140905" />
              </radialGradient>
              <linearGradient id="cremaGloss" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0" />
                <stop offset="100%" stopColor="#C99A5B" stopOpacity="0.15" />
              </linearGradient>

              {/* Gold Botanical Brand Emblem */}
              <linearGradient id="goldEmblem" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F4DEB9" />
                <stop offset="50%" stopColor="#DCB074" />
                <stop offset="100%" stopColor="#9B5B28" />
              </linearGradient>
            </defs>

            {/* 1. Ambient Ground Contact Shadow */}
            <ellipse cx="150" cy="254" rx="115" ry="22" fill="url(#cupGroundShadow)" />

            {/* 2. Ceramic Saucer Plate */}
            <ellipse cx="150" cy="235" rx="108" ry="26" fill="url(#saucerRimGrad)" stroke="url(#saucerGoldBorder)" strokeWidth="1.5" />
            <ellipse cx="150" cy="234" rx="86" ry="19" fill="#150D09" stroke="#3D241A" strokeWidth="1" />
            <ellipse cx="150" cy="233" rx="60" ry="13" fill="#1E130D" opacity="0.8" />

            {/* 3. Ceramic Mug Handle (Right Side) */}
            <path
              d="M210 135 C265 135 270 205 210 215"
              stroke="url(#ceramicWallGrad)"
              strokeWidth="20"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M210 135 C265 135 270 205 210 215"
              stroke="#B97845"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
              opacity="0.45"
            />

            {/* 4. Ceramic Cup Body Wall */}
            <path
              d="M75 110 H225 C225 110 222 225 150 225 C78 225 75 110 75 110 Z"
              fill="url(#ceramicWallGrad)"
              stroke="#452718"
              strokeWidth="1.2"
            />

            {/* Cup Body Specular Light Reflection */}
            <path
              d="M92 118 C88 150 95 195 118 214"
              stroke="url(#specularGlint)"
              strokeWidth="14"
              strokeLinecap="round"
              fill="none"
            />

            {/* Base Contact Shadow on Saucer */}
            <ellipse cx="150" cy="225" rx="38" ry="8" fill="#0C0704" opacity="0.9" />

            {/* 5. Delicate Leaf & Lush Botanical Gold Foil Logo on Cup Body */}
            <g transform="translate(150, 168)" textAnchor="middle">
              {/* Sprout Leaf Mark */}
              <path
                d="M0 -14 C0 -22 8 -27 12 -30 C12 -23 10 -15 0 -14 Z"
                fill="url(#goldEmblem)"
              />
              <path
                d="M0 -14 C-3 -19 -9 -23 -13 -25 C-11 -19 -7 -14 0 -14 Z"
                fill="#52B770"
                opacity="0.9"
              />
              {/* Brand Typography */}
              <text
                y="2"
                fill="url(#goldEmblem)"
                fontSize="8.5"
                fontFamily="Playfair Display, Georgia, serif"
                fontWeight="bold"
                letterSpacing="3"
              >
                LEAF & LUSH
              </text>
              <text
                y="11"
                fill="#FAF4ED"
                fontSize="5"
                fontFamily="Plus Jakarta Sans, sans-serif"
                fontWeight="500"
                letterSpacing="2"
                opacity="0.75"
              >
                SPECIALTY ROAST
              </text>
            </g>

            {/* 6. Top Outer Rim of Ceramic Mug */}
            <ellipse cx="150" cy="110" rx="75" ry="24" fill="#3D241A" stroke="url(#saucerGoldBorder)" strokeWidth="1.8" />
            <ellipse cx="150" cy="110" rx="71" ry="22" fill="#1E130D" />

            {/* 7. Espresso Liquid Surface & Crema */}
            <ellipse cx="150" cy="111" rx="67" ry="20" fill="url(#espressoLiquid)" />
            <ellipse cx="150" cy="111" rx="67" ry="20" fill="url(#cremaGloss)" />

            {/* Golden Crema Ring Outline */}
            <ellipse cx="150" cy="111" rx="64" ry="18.5" stroke="#C99A5B" strokeWidth="0.8" strokeDasharray="6 3" opacity="0.4" />

            {/* 8. Handcrafted Rosetta Latte Art Pattern */}
            <g transform="translate(150, 111) scale(0.95)">
              {/* Central Leaf Heart Spine */}
              <path
                d="M0 -10 C-18 -10 -28 3 -12 11 C-2 16 0 18 0 18 C0 18 2 16 12 11 C28 3 18 -10 0 -10 Z"
                fill="#FAF4ED"
                opacity="0.92"
              />
              {/* Inner Rosetta Layers */}
              <path
                d="M0 -5 C-12 -5 -18 4 -8 9 C-1 13 0 15 0 15 C0 15 1 13 8 9 C18 4 12 -5 0 -5 Z"
                fill="#B97845"
                opacity="0.5"
              />
              <path
                d="M0 -1 C-7 -1 -11 5 -4 8 C-1 10 0 12 0 12 C0 12 1 10 4 8 C11 5 7 -1 0 -1 Z"
                fill="#FAF4ED"
                opacity="0.85"
              />
              {/* Stem Pull Line */}
              <path
                d="M0 -14 Q0 4 0 19"
                stroke="#6F4030"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              {/* Micro Crema Bubble Accents */}
              <circle cx="-16" cy="2" r="1" fill="#FAF4ED" opacity="0.6" />
              <circle cx="18" cy="1" r="0.8" fill="#FAF4ED" opacity="0.6" />
              <circle cx="-10" cy="-6" r="0.7" fill="#FAF4ED" opacity="0.5" />
            </g>

          </svg>

        </div>

        {/* Floating Quality Pill (Visible on Desktop / Tablet) */}
        <motion.div
          className="hidden sm:flex absolute -bottom-1 -left-2 glass-card px-3 py-1.5 rounded-xl items-center gap-1.5 shadow-xl border border-leaf-500/30 text-cream-100 backdrop-blur-md"
          animate={{ y: [0, 3, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <div className="w-5 h-5 rounded-full bg-leaf-500/20 flex items-center justify-center text-leaf-400">
            <Sprout className="w-3 h-3" />
          </div>
          <div>
            <div className="text-[7px] font-semibold tracking-wider text-leaf-300 uppercase">Single Origin</div>
            <div className="text-[9px] font-bold text-cream-50 font-serif">100% Arabica</div>
          </div>
        </motion.div>

        {/* Floating Freshly Brewed Temperature Pill (Visible on Desktop / Tablet) */}
        <motion.div
          className="hidden sm:flex absolute -top-2 -right-2 glass-card px-2.5 py-1 rounded-xl items-center gap-1.5 shadow-xl border border-caramel-500/30 text-cream-100 backdrop-blur-md"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-[9px] font-semibold text-cream-200">Freshly Pulled</span>
        </motion.div>

      </motion.div>
    </div>
  );
}
