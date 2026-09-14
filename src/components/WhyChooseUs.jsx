import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, Flame, Sparkles, MessageSquare, Apple } from 'lucide-react';
import { whyChooseUs } from '../data/menu';

const iconMap = {
  Sprout: Sprout,
  Flame: Flame,
  Sparkles: Sparkles,
  MessageSquare: MessageSquare,
  Apple: Apple
};

export default function WhyChooseUs() {
  return (
    <section className="py-8 sm:py-16 bg-coffee-950/90 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-coffee-900 border border-leaf-500/30 text-leaf-400 text-[10px] sm:text-xs font-semibold mb-1">
            <Sparkles className="w-3 h-3" />
            <span>The Leaf & Lush Promise</span>
          </div>
          <h2 className="font-serif text-xl sm:text-3xl md:text-4xl font-bold text-cream-50">
            Why Our Guests Love Us
          </h2>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-5">
          {whyChooseUs.map((pillar, index) => {
            const Icon = iconMap[pillar.icon] || Sprout;
            return (
              <div
                key={index}
                className="glass-card rounded-2xl p-3.5 sm:p-5 border border-coffee-800 hover:border-leaf-500/30 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-leaf-500/20 to-caramel-500/20 border border-leaf-500/30 flex items-center justify-center text-leaf-400 mb-2.5 shadow-inner">
                    <Icon className="w-4 h-4" />
                  </div>

                  <h3 className="font-serif text-xs sm:text-base font-bold text-cream-50 leading-tight">
                    {pillar.title}
                  </h3>

                  <p className="text-[10px] sm:text-xs text-cream-300/80 mt-1 leading-relaxed font-light hidden sm:block">
                    {pillar.description}
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
