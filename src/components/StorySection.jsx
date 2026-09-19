import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Sprout, Heart, Flame } from 'lucide-react';
import { cafeConfig } from '../config/cafe';

export default function StorySection() {
  return (
    <section id="story" className="py-8 sm:py-18 bg-coffee-900/40 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Mobile Compact Layout */}
        <div className="md:hidden space-y-3.5">
          <div className="text-center">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-coffee-800 border border-leaf-500/30 text-leaf-400 text-[10px] font-semibold mb-1">
              <Sprout className="w-3 h-3" />
              <span>About Leaf & Lush</span>
            </div>
            <h2 className="font-serif text-2xl font-bold text-cream-50 leading-tight">
              More than coffee.
            </h2>
            <p className="text-xs text-leaf-300 font-medium mt-0.5">
              Fresh coffee. Fresh fruits. Fresh moments.
            </p>
            <p className="text-xs text-cream-300/85 mt-1 leading-relaxed font-light">
              Crafted as a lush everyday sanctuary. We combine ethically sourced single-estate Arabica with seasonal, sun-ripened farm fruits and tangy chaats to nourish your body and mind.
            </p>
          </div>

          {/* Single Compact Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-leaf-500/20 aspect-[16/9] relative">
            <img
              src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"
              alt="Fresh fruits and artisanal coffee"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coffee-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] text-cream-100 font-medium">
              <span>🍃 Farm Fruits & Arabica</span>
              <span className="text-leaf-300 font-serif font-bold">Est. 2022</span>
            </div>
          </div>

          {/* Small 3-Pill Statistic/Highlight Row */}
          <div className="grid grid-cols-3 gap-2 pt-1 text-center">
            <div className="glass-card p-2 rounded-xl border border-leaf-500/20">
              <div className="text-leaf-300 font-serif font-bold text-xs">100%</div>
              <div className="text-[9px] text-cream-300">Farm Fresh</div>
            </div>
            <div className="glass-card p-2 rounded-xl border border-leaf-500/20">
              <div className="text-leaf-300 font-serif font-bold text-xs">Daily</div>
              <div className="text-[9px] text-cream-300">Hand-Cut Fruits</div>
            </div>
            <div className="glass-card p-2 rounded-xl border border-leaf-500/20">
              <div className="text-leaf-300 font-serif font-bold text-xs">Crafted</div>
              <div className="text-[9px] text-cream-300">With Love</div>
            </div>
          </div>
        </div>

        {/* Desktop Spacious Editorial Layout */}
        <div className="hidden md:grid md:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Images Grid */}
          <div className="md:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-leaf-500/20 aspect-[4/5] group">
                  <img
                    src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80"
                    alt="Barista brewing coffee"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
              decoding="async"
                  />
                </div>
                <div className="glass-card p-4 rounded-2xl border border-leaf-500/25">
                  <Flame className="w-5 h-5 text-caramel-400 mb-1" />
                  <div className="font-serif text-base font-bold text-cream-100">Micro-Roasted Arabica</div>
                  <p className="text-xs text-cream-300/80 mt-0.5 leading-relaxed font-light">
                    Single origin beans from Chikmagalur hills.
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="glass-card p-4 rounded-2xl border border-leaf-500/25">
                  <Sprout className="w-5 h-5 text-leaf-400 mb-1" />
                  <div className="font-serif text-base font-bold text-cream-100">Daily Farm Sourced</div>
                  <p className="text-xs text-cream-300/80 mt-0.5 leading-relaxed font-light">
                    Fresh fruit bowls, chaat masalas, and healthy bites.
                  </p>
                </div>
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-leaf-500/20 aspect-[4/5] group">
                  <img
                    src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"
                    alt="Fresh fruit bowl arrangement"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
              decoding="async"
                  />
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-20 h-20 rounded-full bg-coffee-950/90 border border-leaf-400/60 p-2 shadow-2xl backdrop-blur-md flex items-center justify-center text-center">
              <span className="font-serif text-[10px] font-bold text-leaf-300 uppercase tracking-widest leading-tight">
                Leaf &<br /><span className="text-xs text-cream-50 font-sans">Lush</span>
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Text */}
          <div className="md:col-span-6 flex flex-col">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-coffee-800/80 border border-leaf-500/30 text-leaf-400 text-xs font-semibold w-fit mb-3">
              <Sprout className="w-3.5 h-3.5" />
              <span>The Leaf & Lush Philosophy</span>
            </div>

            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-cream-50 leading-tight mb-4">
              More Than Just Coffee.{' '}
              <span className="italic font-normal text-leaf-300">
                Fresh fruits. Fresh moments.
              </span>
            </h2>

            <p className="text-cream-200/90 text-sm lg:text-base leading-relaxed font-light mb-4">
              Leaf & Lush was founded with a simple, refreshing belief: you shouldn't have to choose between rich artisanal espresso and energizing, farm-fresh fruit nutrition. We bring together single-origin Arabica roasts with handcrafted fruit bowls and zesty chaats under one welcoming botanical roof.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-coffee-800">
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 rounded-full bg-leaf-500/20 flex items-center justify-center text-leaf-400 shrink-0 mt-0.5 text-xs font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-cream-100 text-xs">Farm to Bowl</h4>
                  <p className="text-[10px] text-cream-400">Hand-selected fruits cut fresh to order.</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="w-6 h-6 rounded-full bg-leaf-500/20 flex items-center justify-center text-leaf-400 shrink-0 mt-0.5 text-xs font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-cream-100 text-xs">Artisanal Roast</h4>
                  <p className="text-[10px] text-cream-400">100% single origin Arabica coffee.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
