import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ChevronRight, Apple, ArrowRight } from 'lucide-react';
import { useMenu } from '../context/MenuContext';
import MenuCard from './MenuCard';
import { Floating3DStrawberry } from './3d/Floating3DFruits';

export default function BestSellers() {
  const { items } = useMenu();
  const bestSellers = items.slice(0, 4);

  return (
    <section id="bestsellers" className="py-8 sm:py-16 bg-coffee-950 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div className="flex items-center gap-2">
            <div>
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-coffee-900 border border-leaf-500/30 text-leaf-400 text-[10px] sm:text-xs font-semibold mb-1">
                <Apple className="w-3 h-3 text-leaf-400" />
                <span>Customer Favourites</span>
              </div>
              <h2 className="font-serif text-xl sm:text-3xl md:text-4xl font-bold text-cream-50">
                Fresh Bowls & Cups
              </h2>
            </div>
            {/* Small Floating Strawberry Accent */}
            <div className="hidden sm:block">
              <Floating3DStrawberry />
            </div>
          </div>

          <Link
            to="/menu"
            className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-leaf-300 hover:text-leaf-200 transition-colors"
          >
            <span>View All ({items.length})</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Product Cards Grid: 2 columns on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4">
          {bestSellers.map((item, index) => (
            <MenuCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* View Full Menu Banner */}
        <div className="mt-5 sm:mt-8 text-center">
          <Link
            to="/menu"
            className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-2xl bg-coffee-900/90 border border-leaf-500/30 text-cream-100 font-bold text-xs sm:text-sm hover:bg-coffee-800 transition-all shadow-md"
          >
            <span>Explore All Fruit Bowls & Salads</span>
            <ArrowRight className="w-3.5 h-3.5 text-leaf-400" />
          </Link>
        </div>

      </div>

    </section>
  );
}
