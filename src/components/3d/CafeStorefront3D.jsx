import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, Clock, MapPin, Sparkles } from 'lucide-react';
import Floating3DLeaf from './Floating3DLeaf';

export default function CafeStorefront3D() {
  return (
    <div className="relative w-full max-w-4xl mx-auto my-6 sm:my-8 p-4 sm:p-8 rounded-3xl bg-gradient-to-b from-coffee-900/70 via-coffee-950/80 to-coffee-950 border border-caramel-500/25 shadow-2xl overflow-hidden">
      
      {/* Warm Evening Glow Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-gradient-to-tr from-caramel-500/20 via-leaf-500/15 to-gold-500/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Floating 3D Leaf Accents */}
      <div className="absolute top-6 left-6 pointer-events-none z-10">
        <Floating3DLeaf size="md" />
      </div>
      <div className="absolute bottom-6 right-8 pointer-events-none z-10">
        <Floating3DLeaf size="sm" />
      </div>

      <div className="relative z-20 flex flex-col items-center text-center">
        
        {/* Top Tagline */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-caramel-500/15 border border-caramel-500/30 text-caramel-300 text-xs font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Warm Sanctuary</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-cream-50 leading-tight mb-2">
          Come by.{' '}
          <span className="italic font-normal text-caramel-300">
            Stay awhile.
          </span>
        </h2>

        <p className="text-xs sm:text-base text-cream-200/90 font-light max-w-lg leading-relaxed mb-6">
          Step into our botanical coffee bar. Sunlight through leaves, gentle acoustic jazz, freshly pulled espresso, and colorful fruit bowls waiting for you.
        </p>

        {/* Stylized 3D Café Storefront SVG Graphic */}
        <div className="relative w-full max-w-sm sm:max-w-md aspect-[16/10] my-2 flex items-center justify-center">
          
          <svg viewBox="0 0 400 250" className="w-full h-full drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)]" fill="none">
            <defs>
              <linearGradient id="awningStripe1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2E6F40" />
                <stop offset="100%" stopColor="#1E4D2B" />
              </linearGradient>
              <linearGradient id="awningStripe2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FAF4ED" />
                <stop offset="100%" stopColor="#D8BFA3" />
              </linearGradient>
              <linearGradient id="storefrontWall" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1E110A" />
                <stop offset="100%" stopColor="#0C0704" />
              </linearGradient>
              <radialGradient id="windowGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.6" />
                <stop offset="60%" stopColor="#EA580C" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#150D09" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="warmGlass" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#B45309" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            {/* Storefront Ground Shadow */}
            <ellipse cx="200" cy="235" rx="170" ry="12" fill="#0C0704" opacity="0.9" />

            {/* Main Storefront Wall */}
            <rect x="50" y="70" width="300" height="160" rx="8" fill="url(#storefrontWall)" stroke="#3D241A" strokeWidth="2" />

            {/* Warm Illuminated Arched Glass Windows */}
            <rect x="75" y="105" width="105" height="100" rx="12" fill="url(#warmGlass)" stroke="#B97845" strokeWidth="1.5" />
            <ellipse cx="127" cy="155" rx="45" ry="40" fill="url(#windowGlow)" />
            
            {/* Silhouette of Coffee Espresso Machine on Window counter */}
            <rect x="95" y="160" width="30" height="24" rx="3" fill="#0C0704" opacity="0.8" />
            <rect x="135" y="166" width="12" height="18" rx="2" fill="#0C0704" opacity="0.8" />

            {/* Café Entrance Door */}
            <rect x="210" y="105" width="80" height="125" rx="6" fill="#150D09" stroke="#B97845" strokeWidth="1.5" />
            <rect x="220" y="115" width="60" height="65" rx="4" fill="url(#warmGlass)" stroke="#3D241A" strokeWidth="1" />
            <circle cx="225" cy="170" r="3" fill="#E8C793" />

            {/* Classical Café Striped Awning Overhang */}
            <g transform="translate(40, 48)">
              {/* Awning Sloped Polygon */}
              <polygon points="10,25 310,25 325,55 -5,55" fill="#1E4D2B" />
              {/* Vertical Green / Cream Stripes */}
              {[0, 32, 64, 96, 128, 160, 192, 224, 256, 288].map((x, i) => (
                <polygon
                  key={i}
                  points={`${x},25 ${x+16},25 ${x+20},55 ${x+2},55`}
                  fill={i % 2 === 0 ? "url(#awningStripe1)" : "url(#awningStripe2)"}
                />
              ))}
              {/* Awning Scallop Fringe */}
              {[...Array(10)].map((_, i) => (
                <path
                  key={i}
                  d={`M${i * 32} 55 Q${i * 32 + 16} 64 ${i * 32 + 32} 55`}
                  fill={i % 2 === 0 ? "#1E4D2B" : "#FAF4ED"}
                  stroke="#150D09"
                  strokeWidth="0.8"
                />
              ))}
            </g>

            {/* Glowing Neon Sign: Leaf & Lush */}
            <rect x="130" y="24" width="140" height="28" rx="14" fill="#0C0704" stroke="#52B770" strokeWidth="1.5" />
            <text x="200" y="42" textAnchor="middle" fill="#7CD194" fontSize="11" fontFamily="Playfair Display, serif" fontWeight="bold" letterSpacing="1.5">
              🍃 LEAF & LUSH
            </text>

            {/* Warm Lantern Lamps */}
            <g transform="translate(62, 100)">
              <rect x="0" y="0" width="8" height="16" rx="2" fill="#E8C793" opacity="0.9" />
              <circle cx="4" cy="8" r="8" fill="#FDE68A" opacity="0.4" />
            </g>
            <g transform="translate(302, 100)">
              <rect x="0" y="0" width="8" height="16" rx="2" fill="#E8C793" opacity="0.9" />
              <circle cx="4" cy="8" r="8" fill="#FDE68A" opacity="0.4" />
            </g>
          </svg>

        </div>

      </div>

    </div>
  );
}
