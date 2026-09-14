import React from 'react';
import { motion, useSpring, useScroll, useTransform } from 'framer-motion';
import { Sprout } from 'lucide-react';
import Floating3DLeaf from './Floating3DLeaf';
import { Floating3DStrawberry } from './Floating3DFruits';

export default function FreshSaladBowlCanvas({ mousePosition = { x: 0, y: 0 } }) {
  // Smooth spring physics for mouse parallax tilt (desktop)
  const springConfig = { damping: 30, stiffness: 100 };
  const rotateX = useSpring(mousePosition.y * -8, springConfig);
  const rotateY = useSpring(mousePosition.x * 10, springConfig);
  const translateY = useSpring(mousePosition.y * -4, springConfig);

  // Scroll scaling
  const { scrollY } = useScroll();
  const scrollScale = useTransform(scrollY, [0, 350], [1, 0.92]);
  const scrollOpacity = useTransform(scrollY, [0, 450], [1, 0.5]);

  return (
    <div className="relative w-full max-w-[260px] sm:max-w-[440px] lg:max-w-[520px] aspect-square flex items-center justify-center select-none perspective-[1000px] transform-gpu">
      
      {/* Radiant Emerald Glow - Optimized static backdrop */}
      <div className="absolute w-48 h-48 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-full bg-gradient-to-tr from-leaf-500/20 via-emerald-600/25 to-citrus-500/15 blur-2xl pointer-events-none" />

      {/* Floating 3D Interactive Container */}
      <motion.div
        className="relative w-full h-full flex items-center justify-center transform-gpu will-change-transform"
        style={{
          rotateX,
          rotateY,
          y: translateY,
          scale: scrollScale,
          opacity: scrollOpacity,
          transformStyle: "preserve-3d",
        }}
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Floating Accent Fruit & Leaf around the plate */}
        <div className="absolute -top-3 -left-2 z-30 pointer-events-none hidden sm:block">
          <Floating3DLeaf size="sm" />
        </div>
        <div className="absolute -bottom-2 -right-2 z-30 pointer-events-none hidden sm:block">
          <Floating3DStrawberry />
        </div>

        {/* 3D Artisan Ceramic Salad Bowl */}
        <div className="relative z-20 w-52 h-52 sm:w-80 sm:h-80 lg:w-[390px] lg:h-[390px] flex items-center justify-center">
          
          <svg
            viewBox="0 0 320 320"
            className="w-full h-full drop-shadow-[0_16px_28px_rgba(0,0,0,0.65)]"
            fill="none"
          >
            <defs>
              <radialGradient id="plateGroundShadow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#0C0704" stopOpacity="0.9" />
                <stop offset="60%" stopColor="#0C0704" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#0C0704" stopOpacity="0" />
              </radialGradient>

              <linearGradient id="ceramicBowlGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#EAD8C7" />
                <stop offset="40%" stopColor="#D5BFAB" />
                <stop offset="85%" stopColor="#9E8573" />
                <stop offset="100%" stopColor="#6E5646" />
              </linearGradient>

              <radialGradient id="bowlInner" cx="50%" cy="45%" r="50%">
                <stop offset="0%" stopColor="#FAF4ED" />
                <stop offset="70%" stopColor="#E2D0C0" />
                <stop offset="100%" stopColor="#A8907E" />
              </radialGradient>

              <linearGradient id="freshLettuce" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#86EFAC" />
                <stop offset="50%" stopColor="#22C55E" />
                <stop offset="100%" stopColor="#15803D" />
              </linearGradient>

              <linearGradient id="broccoliFloret" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4ADE80" />
                <stop offset="60%" stopColor="#166534" />
                <stop offset="100%" stopColor="#052E16" />
              </linearGradient>

              <linearGradient id="rubyRed" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FDA4AF" />
                <stop offset="40%" stopColor="#E11D48" />
                <stop offset="100%" stopColor="#881337" />
              </linearGradient>

              <linearGradient id="sweetCorn" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FEF08A" />
                <stop offset="60%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#B45309" />
              </linearGradient>

              <radialGradient id="kiwiSlice" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FEF9C3" />
                <stop offset="40%" stopColor="#84CC16" />
                <stop offset="100%" stopColor="#4D7C0F" />
              </radialGradient>

              <linearGradient id="dragonFruitSkin" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F43F5E" />
                <stop offset="100%" stopColor="#9F1239" />
              </linearGradient>
            </defs>

            {/* 1. Ambient Ground Contact Shadow */}
            <ellipse cx="160" cy="265" rx="130" ry="24" fill="url(#plateGroundShadow)" />

            {/* 2. Ceramic Salad Bowl Exterior */}
            <ellipse cx="160" cy="210" rx="142" ry="65" fill="url(#ceramicBowlGrad)" stroke="#B97845" strokeWidth="2" />
            <path
              d="M18 210 C18 265 302 265 302 210 Z"
              fill="url(#ceramicBowlGrad)"
              stroke="#8B6B55"
              strokeWidth="1.5"
            />

            {/* Ceramic Bowl Inner Rim */}
            <ellipse cx="160" cy="200" rx="134" ry="58" fill="url(#bowlInner)" stroke="#FAF4ED" strokeWidth="1.2" />

            {/* 3. Base Layer: Crisp Fresh Salad Greens & Lettuce Bed */}
            <g transform="translate(0, 10)">
              <path d="M45 185 C40 145 75 140 90 170 C105 140 140 145 135 185 Z" fill="url(#freshLettuce)" />
              <path d="M125 180 C135 135 180 135 190 175 C205 135 245 140 240 185 Z" fill="url(#freshLettuce)" />
              <path d="M210 185 C225 145 275 150 275 195 C255 220 230 215 210 185 Z" fill="url(#freshLettuce)" opacity="0.95" />
              <path d="M70 210 C50 170 100 160 115 195 Z" fill="#22C55E" opacity="0.8" />
              <path d="M160 215 C140 165 200 160 215 205 Z" fill="#16A34A" opacity="0.9" />
            </g>

            {/* 4. Healthy Ingredients Layer */}
            <g transform="translate(0, 10)">
              
              {/* Steamed Broccoli */}
              <g transform="translate(75, 140)">
                <circle cx="20" cy="20" r="16" fill="url(#broccoliFloret)" />
                <circle cx="10" cy="14" r="11" fill="url(#broccoliFloret)" />
                <circle cx="30" cy="14" r="11" fill="url(#broccoliFloret)" />
                <circle cx="20" cy="8" r="10" fill="#22C55E" />
              </g>

              <g transform="translate(200, 145)">
                <circle cx="18" cy="18" r="14" fill="url(#broccoliFloret)" />
                <circle cx="10" cy="12" r="10" fill="url(#broccoliFloret)" />
                <circle cx="26" cy="12" r="10" fill="url(#broccoliFloret)" />
              </g>

              {/* Baby Corn */}
              <g transform="translate(130, 165) rotate(-25)">
                <rect x="0" y="0" width="13" height="42" rx="6" fill="url(#sweetCorn)" stroke="#D97706" strokeWidth="0.8" />
                {[4, 12, 20, 28, 36].map((y, i) => (
                  <circle key={i} cx="6.5" cy={y} r="1.8" fill="#FEF08A" />
                ))}
              </g>

              <g transform="translate(175, 155) rotate(30)">
                <rect x="0" y="0" width="12" height="38" rx="6" fill="url(#sweetCorn)" stroke="#D97706" strokeWidth="0.8" />
                {[4, 12, 20, 28].map((y, i) => (
                  <circle key={i} cx="6" cy={y} r="1.8" fill="#FEF08A" />
                ))}
              </g>

              {/* Sliced Cherry Tomatoes */}
              <g transform="translate(115, 175)">
                <circle cx="14" cy="14" r="14" fill="url(#rubyRed)" />
                <ellipse cx="14" cy="14" rx="7" ry="7" fill="#BE123C" />
                <circle cx="11" cy="11" r="1.8" fill="#FEF08A" opacity="0.9" />
                <circle cx="17" cy="11" r="1.8" fill="#FEF08A" opacity="0.9" />
              </g>

              <g transform="translate(210, 180)">
                <circle cx="12" cy="12" r="12" fill="url(#rubyRed)" />
                <ellipse cx="9" cy="9" rx="3" ry="1.5" fill="#FFF1F2" opacity="0.8" />
              </g>

              {/* Kiwi Fruit Slices */}
              <g transform="translate(85, 185)">
                <ellipse cx="16" cy="16" rx="16" ry="14" fill="url(#kiwiSlice)" stroke="#65A30D" strokeWidth="1" />
                <ellipse cx="16" cy="16" rx="5" ry="4" fill="#FEF9C3" />
                {[0, 60, 120, 180, 240, 300].map((ang, i) => (
                  <ellipse key={i} cx={16 + 8 * Math.cos(ang * Math.PI / 180)} cy={16 + 7 * Math.sin(ang * Math.PI / 180)} rx="0.9" ry="1.2" fill="#150D09" />
                ))}
              </g>

              {/* Dragon Fruit Cubes */}
              <g transform="translate(145, 180)">
                <rect x="0" y="0" width="22" height="20" rx="4" fill="#FFFFFF" stroke="url(#dragonFruitSkin)" strokeWidth="2" />
                <circle cx="6" cy="6" r="1.2" fill="#150D09" />
                <circle cx="16" cy="7" r="1.2" fill="#150D09" />
                <circle cx="11" cy="13" r="1.2" fill="#150D09" />
              </g>

              {/* Sweet Corn Kernels */}
              <circle cx="105" cy="170" r="3" fill="#FBBF24" />
              <circle cx="160" cy="155" r="3" fill="#FBBF24" />
              <circle cx="180" cy="195" r="3" fill="#FBBF24" />

              {/* Fresh Garden Mint Crown */}
              <g transform="translate(148, 140)">
                <path d="M12 2 C18 6 22 14 18 20 C14 16 10 16 12 2 Z" fill="#4ADE80" stroke="#15803D" strokeWidth="0.8" />
                <path d="M12 2 C6 6 2 14 6 20 C10 16 14 16 12 2 Z" fill="#22C55E" stroke="#15803D" strokeWidth="0.8" />
                <path d="M12 2 L12 24" stroke="#15803D" strokeWidth="1.2" strokeLinecap="round" />
              </g>

            </g>

            {/* 5. Gold Botanical Brand Mark on Plate */}
            <g transform="translate(160, 240)" textAnchor="middle">
              <ellipse cx="0" cy="0" rx="38" ry="10" fill="#0C0704" opacity="0.4" />
              <text y="3.5" fill="#FAF4ED" fontSize="6.5" fontFamily="Playfair Display, serif" fontWeight="bold" letterSpacing="1.2">
                🍃 LEAF'N'LUSH
              </text>
            </g>

          </svg>

        </div>

        {/* Quality Floating Badge (Desktop & Tablet) */}
        <div className="hidden sm:flex absolute -bottom-1 -left-2 px-3 py-1.5 rounded-xl items-center gap-1.5 shadow-xl border border-leaf-500/30 text-cream-100 bg-coffee-950/90">
          <div className="w-5 h-5 rounded-full bg-leaf-500/20 flex items-center justify-center text-leaf-400">
            <Sprout className="w-3 h-3" />
          </div>
          <div>
            <div className="text-[7px] font-semibold tracking-wider text-leaf-300 uppercase">100% Pure</div>
            <div className="text-[9px] font-bold text-cream-50 font-serif">Handpicked Daily</div>
          </div>
        </div>

      </motion.div>
    </div>
  );
}
