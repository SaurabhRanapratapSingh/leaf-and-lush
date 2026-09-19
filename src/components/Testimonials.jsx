import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Sparkles } from 'lucide-react';
import { testimonials } from '../data/menu';

export default function Testimonials() {
  return (
    <section className="py-10 sm:py-20 bg-coffee-950 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-coffee-900 border border-caramel-500/30 text-caramel-400 text-[10px] sm:text-xs font-semibold mb-1.5">
            <Sparkles className="w-3 h-3" />
            <span>Customer Love</span>
          </div>
          <h2 className="font-serif text-xl sm:text-3xl md:text-4xl font-bold text-cream-50">
            Loved By Coffee Enthusiasts
          </h2>
        </div>

        {/* Testimonials: Swipeable on Mobile, Grid on Tablet/Desktop */}
        <div className="flex gap-3 overflow-x-auto snap-x scrollbar-none pb-2 sm:pb-0 md:grid md:grid-cols-3 md:gap-5">
          {testimonials.map((test) => (
            <div
              key={test.id}
              className="w-[260px] sm:w-[300px] md:w-auto shrink-0 snap-start glass-card rounded-2xl p-4 sm:p-5 border border-caramel-500/20 hover:border-caramel-400/40 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-0.5 mb-2">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-gold-400 fill-gold-400" />
                  ))}
                </div>

                <p className="text-cream-200 text-xs sm:text-sm leading-relaxed italic font-serif">
                  "{test.comment}"
                </p>
              </div>

              {/* Author Profile */}
              <div className="flex items-center gap-2.5 mt-4 pt-3 border-t border-coffee-800/80">
                <img
                  src={test.avatar}
                  alt={test.name}
                  className="w-8 h-8 rounded-full object-cover border border-caramel-400/40"
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <h4 className="font-serif font-bold text-cream-50 text-xs">{test.name}</h4>
                  <p className="text-[10px] text-caramel-400 font-medium">{test.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
