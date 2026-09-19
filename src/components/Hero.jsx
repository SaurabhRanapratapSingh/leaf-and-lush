import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sprout, Apple, Calendar, Phone } from 'lucide-react';
import { cafeConfig } from '../config/cafe';
import FreshSaladBowlCanvas from './3d/FreshSaladBowlCanvas';
import CoffeeParticles from './3d/CoffeeParticles';
import Floating3DLeaf from './3d/Floating3DLeaf';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth) * 2 - 1;
    const y = (e.clientY / innerHeight) * 2 - 1;
    setMousePosition({ x, y });
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-[48vh] sm:min-h-screen flex items-center justify-center pt-14 pb-4 sm:pt-28 sm:pb-16 overflow-hidden bg-gradient-to-b from-coffee-950 via-coffee-900 to-coffee-950"
    >
      {/* Ambient Floating Particles */}
      <CoffeeParticles />

      {/* Floating 3D Leaf Accent */}
      <div className="hidden sm:block absolute top-24 left-10 z-10">
        <Floating3DLeaf size="lg" />
      </div>

      {/* Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[650px] h-[200px] sm:h-[650px] bg-leaf-500/15 rounded-full blur-2xl sm:blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-28 sm:w-80 h-28 sm:h-80 bg-caramel-500/12 rounded-full blur-xl sm:blur-[80px] pointer-events-none" />

      <div className="relative z-20 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-8 items-center">
          
          {/* Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left pt-0">
            
            {/* Brand Pill */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-1.5 px-3 py-0.5 sm:px-3.5 sm:py-1 rounded-full bg-coffee-900/90 border border-leaf-500/35 text-leaf-300 text-[10px] sm:text-xs font-semibold tracking-wide shadow-md mb-1.5 sm:mb-4 md:backdrop-blur-md"
            >
              <Sprout className="w-3.5 h-3.5 text-leaf-400 shrink-0" />
              <span className="text-cream-50 font-bold uppercase tracking-wider">Leaf'nLush</span>
              <span className="w-1 h-1 rounded-full bg-leaf-400" />
              <span className="text-leaf-300 font-medium">Freshness in Every Bite</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.04 }}
              className="font-serif text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-cream-50 leading-[1.1] mb-1.5 sm:mb-3"
            >
              Pure. Fresh.{' '}
              <span className="bg-gradient-to-r from-leaf-400 via-leaf-300 to-caramel-300 bg-clip-text text-transparent italic">
                Healthy.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08 }}
              className="text-[11px] sm:text-base lg:text-lg text-cream-200/90 max-w-xl font-light leading-snug mb-3 sm:mb-6"
            >
              100% Pure Goodness • No Preservatives • No Added Sugar. Handpicked fresh fruit bowls, energy cups, steam vegetable salads & monthly subscriptions.
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.12 }}
              className="flex flex-row items-center justify-center lg:justify-start gap-2 sm:gap-4 w-full sm:w-auto"
            >
              {/* Primary CTA: ORDER NOW */}
              <Link
                to="/menu"
                className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-5 sm:px-8 py-2.5 sm:py-3.5 rounded-xl sm:rounded-full bg-gradient-to-r from-leaf-600 via-leaf-500 to-caramel-500 text-cream-50 font-bold text-xs sm:text-base shadow-glow-leaf transition-all duration-200 active:scale-[0.97] group min-h-[38px] sm:min-h-[44px]"
              >
                <span>ORDER NOW 🍓</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Secondary CTA: Subscriptions */}
              <a
                href="#subscriptions"
                className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3.5 sm:px-6 py-2.5 sm:py-3.5 rounded-xl sm:rounded-full bg-coffee-900/80 hover:bg-coffee-800 border border-leaf-500/30 text-cream-100 font-semibold text-xs sm:text-base md:backdrop-blur-sm transition-all duration-200 hover:border-leaf-400 active:scale-[0.97] min-h-[38px] sm:min-h-[44px]"
              >
                <Calendar className="w-3.5 h-3.5 text-leaf-400" />
                <span>Monthly Plans</span>
              </a>
            </motion.div>

            {/* Desktop Highlights Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden sm:grid grid-cols-4 gap-4 lg:gap-6 mt-8 pt-5 border-t border-coffee-800/80 w-full"
            >
              {cafeConfig.highlights.map((item, index) => (
                <div key={index} className="flex flex-col items-start text-left">
                  <span className="font-serif text-xl lg:text-2xl font-bold text-leaf-300">
                    {item.value}
                  </span>
                  <span className="text-xs font-semibold text-cream-200 mt-0.5">
                    {item.label}
                  </span>
                  <span className="text-[10px] text-cream-400">
                    {item.subtext}
                  </span>
                </div>
              ))}
            </motion.div>

          </div>

          {/* 3D Fresh Salad Bowl & Plate Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="lg:col-span-5 flex items-center justify-center relative my-0"
          >
            <FreshSaladBowlCanvas mousePosition={mousePosition} />
          </motion.div>

        </div>
      </div>

    </section>
  );
}
