import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sparkles, Coffee, GlassWater, CupSoda, Utensils, Flame, X, Sprout, Apple } from 'lucide-react';
import { menuItems, categories } from '../data/menu';
import MenuCard from './MenuCard';
import Floating3DLeaf from './3d/Floating3DLeaf';
import { Floating3DStrawberry, Floating3DOrangeSlice, Floating3DWatermelon } from './3d/Floating3DFruits';
import FloatingColdGlass from './3d/FloatingColdGlass';

const iconMap = {
  Sparkles: Sparkles,
  Coffee: Coffee,
  GlassWater: GlassWater,
  CupSoda: CupSoda,
  Utensils: Utensils,
  Flame: Flame,
  Apple: Apple,
  Sprout: Sprout
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState('all');

  // Filtered menu items
  const filteredItems = useMemo(() => {
    return menuItems.filter(item => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      
      const matchesSearch = searchQuery.trim() === '' || 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());

      let matchesDietary = true;
      if (dietaryFilter === 'veg') {
        matchesDietary = item.dietary === 'veg';
      } else if (dietaryFilter === 'vegan') {
        matchesDietary = item.dietary === 'vegan';
      } else if (dietaryFilter === 'special') {
        matchesDietary = item.isBestseller || Boolean(item.goldBadge);
      }

      return matchesCategory && matchesSearch && matchesDietary;
    });
  }, [activeCategory, searchQuery, dietaryFilter]);

  const clearAllFilters = () => {
    setActiveCategory('all');
    setSearchQuery('');
    setDietaryFilter('all');
  };

  return (
    <section id="menu" className="py-6 sm:py-16 bg-coffee-950/80 relative border-t border-coffee-800/60 overflow-hidden">
      
      {/* Decorative Floating 3D Elements (Lightweight & Tasteful) */}
      <div className="hidden lg:block absolute top-12 left-8 pointer-events-none z-10">
        <Floating3DLeaf size="md" />
      </div>
      <div className="hidden lg:block absolute top-16 right-10 pointer-events-none z-10">
        <Floating3DStrawberry />
      </div>
      <div className="hidden lg:block absolute bottom-24 left-6 pointer-events-none z-10">
        <Floating3DOrangeSlice />
      </div>
      <div className="hidden lg:block absolute bottom-28 right-8 pointer-events-none z-10">
        <FloatingColdGlass />
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-20">
        
        {/* Dedicated Order Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-3 sm:mb-6">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-leaf-500/15 border border-leaf-500/30 text-leaf-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1">
            <Sprout className="w-3 h-3 text-leaf-400" />
            <span>Leaf & Lush Kitchen</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <h2 className="font-serif text-xl sm:text-4xl md:text-5xl font-bold text-cream-50 leading-tight">
              What are you craving?
            </h2>
            {/* Tiny Floating Leaf in Header on mobile/tablet */}
            <div className="inline-block sm:hidden">
              <Floating3DLeaf size="sm" />
            </div>
          </div>
          <p className="text-cream-300 text-[11px] sm:text-sm font-light mt-0.5">
            Artisanal single-origin coffee, crisp farm-fresh fruit bowls, and zesty fruit chaats.
          </p>
        </div>

        {/* Search & Dietary Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 mb-3 sm:mb-5">
          
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-cream-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search coffee, fruit bowl, chaat, sandwich..."
              className="w-full pl-9 pr-8 py-2 rounded-xl bg-coffee-900/90 border border-caramel-500/20 text-cream-100 placeholder-cream-400/50 text-xs sm:text-sm focus:outline-none focus:border-leaf-400 transition-colors shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-cream-400 hover:text-cream-100 p-1"
                aria-label="Clear search query"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>

          {/* Dietary Filter Pills with Contextual 3D Fruit Accents */}
          <div className="flex items-center gap-1 overflow-x-auto w-full md:w-auto pb-0.5 md:pb-0 scrollbar-none">
            {[
              { id: 'all', label: 'All 🍃' },
              { id: 'vegan', label: 'Vegan / Fruits 🍓' },
              { id: 'veg', label: 'Veg 🌱' },
              { id: 'special', label: "Top Picks ⭐" },
            ].map(filter => (
              <button
                key={filter.id}
                onClick={() => setDietaryFilter(filter.id)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold whitespace-nowrap transition-all ${
                  dietaryFilter === filter.id
                    ? 'bg-leaf-600 text-white shadow-sm font-bold'
                    : 'bg-coffee-900/70 text-cream-200 border border-coffee-800 hover:border-leaf-500/30'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

        </div>

        {/* Compact Horizontally Scrollable Category Bar */}
        <div className="sticky top-14 sm:top-20 z-30 py-1.5 -mx-3 px-3 sm:mx-0 sm:px-0 mb-3 sm:mb-6 backdrop-blur-md bg-coffee-950/90 rounded-2xl border border-leaf-500/15 shadow-xl">
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-0.5 scrollbar-none">
            {categories.map((cat) => {
              const IconComponent = iconMap[cat.icon] || Coffee;
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-150 active:scale-95 ${
                    isActive
                      ? 'bg-gradient-to-r from-leaf-600 to-leaf-500 text-white shadow-glow-leaf font-bold'
                      : 'bg-coffee-900/80 text-cream-200 hover:text-cream-50 hover:bg-coffee-800 border border-leaf-500/15'
                  }`}
                >
                  <IconComponent className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-leaf-400'}`} />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-[11px] text-cream-400 mb-2.5 px-1">
          <span>Showing {filteredItems.length} items</span>
          {(searchQuery || activeCategory !== 'all' || dietaryFilter !== 'all') && (
            <button
              onClick={clearAllFilters}
              className="text-leaf-400 hover:text-leaf-300 font-semibold underline underline-offset-2"
            >
              Reset filters
            </button>
          )}
        </div>

        {/* Compact 2-Column Grid on Mobile, 3-4 on Tablet/Desktop */}
        {filteredItems.length > 0 ? (
          <motion.div
            key={activeCategory + dietaryFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3.5"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <MenuCard key={item.id} item={item} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          /* Empty State */
          <div className="py-8 text-center glass-card rounded-2xl p-4 border border-leaf-500/20 max-w-sm mx-auto">
            <div className="w-10 h-10 rounded-full bg-coffee-800/80 border border-leaf-500/30 flex items-center justify-center mx-auto mb-2 text-leaf-400">
              <Sprout className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-sm font-bold text-cream-100">No items found</h3>
            <p className="text-cream-300 text-xs mt-0.5 mb-2.5">
              Try resetting your search query or category filter.
            </p>
            <button
              onClick={clearAllFilters}
              className="px-4 py-1.5 rounded-full bg-leaf-600 text-white font-bold text-xs hover:bg-leaf-500 transition-colors"
            >
              Show Full Menu
            </button>
          </div>
        )}

      </div>

    </section>
  );
}
