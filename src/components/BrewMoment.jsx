import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Clock, Sparkles, Sprout, Apple } from 'lucide-react';

export default function BrewMoment() {
  const metrics = [
    {
      value: "93.5°C",
      label: "Brew Temp",
      detail: "Precision extraction for balanced aroma & zero bitterness",
      icon: Flame,
      color: "text-caramel-400"
    },
    {
      value: "Daily Cut",
      label: "Farm Fresh",
      detail: "Cut only when ordered for natural crunch & max vitamins",
      icon: Sprout,
      color: "text-leaf-400"
    },
    {
      value: "100%",
      label: "Arabica & Fruits",
      detail: "Ethical Chikmagalur beans & local farm produce",
      icon: Apple,
      color: "text-citrus-400"
    },
    {
      value: "0%",
      label: "Artificial Flavors",
      detail: "Pure house spices, natural cane sugar & rock salt",
      icon: Sparkles,
      color: "text-gold-400"
    }
  ];

  return (
    <section className="py-8 sm:py-16 bg-gradient-to-b from-coffee-950 via-coffee-900 to-coffee-950 relative overflow-hidden border-y border-coffee-800/40">
      
      {/* Background Soft Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-leaf-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-caramel-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Heading */}
        <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto mb-6 sm:mb-10">
          <span className="text-[10px] sm:text-xs font-serif tracking-[0.25em] text-leaf-400 uppercase font-semibold block mb-1">
            Our Philosophy
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-cream-50 leading-tight">
            Freshly brewed. <span className="italic font-normal text-leaf-300">Naturally good.</span>
          </h2>
          <p className="text-cream-300 text-xs sm:text-sm mt-1.5 font-light leading-relaxed">
            We believe in honest craft: slow-extracted Arabica espresso paired with sun-ripened, hand-cut fruits.
          </p>
        </div>

        {/* 4 Standard Metrics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-5">
          {metrics.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="glass-card rounded-2xl p-3.5 sm:p-5 border border-coffee-800/80 hover:border-leaf-500/30 transition-all duration-200 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-8 h-8 rounded-xl bg-coffee-900 border border-coffee-800 flex items-center justify-center ${item.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[9px] uppercase tracking-wider text-cream-400 font-medium">Standard</span>
                </div>

                <div>
                  <div className={`font-serif text-lg sm:text-2xl font-bold ${item.color}`}>
                    {item.value}
                  </div>
                  <div className="font-bold text-cream-100 text-xs mt-0.5">
                    {item.label}
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-cream-300/80 mt-1 leading-relaxed font-light hidden sm:block">
                    {item.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
