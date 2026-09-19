import React from 'react';
import { motion } from 'framer-motion';
import Floating3DLeaf from './Floating3DLeaf';
import { Floating3DStrawberry, Floating3DOrangeSlice, Floating3DWatermelon } from './Floating3DFruits';
import FloatingBeans from './FloatingBeans';
import { Sprout, Coffee, Sparkles } from 'lucide-react';

export default function Story3DStage() {
  return (
    <div className="relative w-full max-w-4xl mx-auto my-6 sm:my-10 p-4 sm:p-8 rounded-3xl bg-gradient-to-b from-coffee-900/60 to-coffee-950/80 border border-leaf-500/25 shadow-2xl overflow-hidden">
      
      {/* Dynamic Ambient Radiant Lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-leaf-500/15 rounded-full blur-xl sm:blur-[90px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-caramel-500/15 rounded-full blur-xl sm:blur-[90px] pointer-events-none" />

      {/* Floating Animated 3D Botanical & Fruit Elements (Desktop / Tablet) */}
      <div className="hidden sm:block absolute top-6 left-6 pointer-events-none z-10">
        <Floating3DLeaf size="md" />
      </div>
      <div className="hidden sm:block absolute bottom-8 left-10 pointer-events-none z-10">
        <Floating3DOrangeSlice />
      </div>
      <div className="hidden sm:block absolute top-8 right-8 pointer-events-none z-10">
        <Floating3DStrawberry />
      </div>
      <div className="hidden sm:block absolute bottom-6 right-12 pointer-events-none z-10">
        <Floating3DWatermelon />
      </div>

      {/* Central 3D Interactive Stage */}
      <div className="relative z-20 flex flex-col items-center text-center py-4 sm:py-8">
        
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-leaf-500/15 border border-leaf-500/30 text-leaf-300 text-xs font-bold uppercase tracking-wider mb-3 md:backdrop-blur-md"
        >
          <Sprout className="w-3.5 h-3.5 text-leaf-400" />
          <span>The Botanical Harmony</span>
        </motion.div>

        {/* Central Unique Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-cream-50 leading-tight mb-3"
        >
          Where coffee meets{' '}
          <span className="bg-gradient-to-r from-leaf-400 via-caramel-300 to-citrus-400 bg-clip-text text-transparent italic">
            freshness.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-xs sm:text-base text-cream-200/90 font-light max-w-xl leading-relaxed mb-6"
        >
          From the mist-covered estates of Chikmagalur to daily morning fruit harvests, we unite the warmth of artisan espresso with the vitality of farm-fresh bowls.
        </motion.p>

        {/* 3-Pillar Interactive Glass Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full text-left">
          
          <motion.div
            whileHover={{ y: -4 }}
            className="glass-card p-4 rounded-2xl border border-leaf-500/20 bg-coffee-900/60"
          >
            <div className="w-8 h-8 rounded-xl bg-leaf-500/20 flex items-center justify-center text-leaf-400 mb-2">
              <Coffee className="w-4 h-4" />
            </div>
            <h4 className="font-serif text-sm font-bold text-cream-100">100% Shaded Arabica</h4>
            <p className="text-[11px] text-cream-300 mt-1 font-light leading-relaxed">
              Slow-grown under natural forest canopies for complex caramel and chocolate undertones.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="glass-card p-4 rounded-2xl border border-caramel-500/20 bg-coffee-900/60"
          >
            <div className="w-8 h-8 rounded-xl bg-caramel-500/20 flex items-center justify-center text-caramel-400 mb-2">
              <Sprout className="w-4 h-4" />
            </div>
            <h4 className="font-serif text-sm font-bold text-cream-100">Farm-To-Bowl Daily</h4>
            <p className="text-[11px] text-cream-300 mt-1 font-light leading-relaxed">
              Selected local orchards, hand-sliced upon order for crisp natural vitamins and vitality.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="glass-card p-4 rounded-2xl border border-citrus-500/20 bg-coffee-900/60"
          >
            <div className="w-8 h-8 rounded-xl bg-citrus-500/20 flex items-center justify-center text-citrus-400 mb-2">
              <Sparkles className="w-4 h-4" />
            </div>
            <h4 className="font-serif text-sm font-bold text-cream-100">Zero-Preservative Craft</h4>
            <p className="text-[11px] text-cream-300 mt-1 font-light leading-relaxed">
              No artificial syrups or canned fillers. Pure unadulterated taste in every bite and sip.
            </p>
          </motion.div>

        </div>

      </div>

    </div>
  );
}
