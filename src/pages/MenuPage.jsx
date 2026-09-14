import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sparkles, Apple, CupSoda, Sprout, Flame, X, ArrowLeft, ShoppingBag, Calendar, MessageCircle } from 'lucide-react';
import { useMenu } from '../context/MenuContext';
import MenuCard from '../components/MenuCard';
import SubscriptionPlans from '../components/SubscriptionPlans';
import Floating3DLeaf from '../components/3d/Floating3DLeaf';
import { Floating3DStrawberry } from '../components/3d/Floating3DFruits';
import { useCart } from '../context/CartContext';
import { cafeConfig } from '../config/cafe';

const iconMap = {
  Sparkles: Sparkles,
  Apple: Apple,
  CupSoda: CupSoda,
  Sprout: Sprout,
  Flame: Flame,
};

export default function MenuPage() {
  const { items, categories } = useMenu();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [portionFilter, setPortionFilter] = useState('all'); // 'all' | '200gm' | '400gm'
  const { totalItems, subtotal, openCart } = useCart();

  // Filtered menu items
  const filteredItems = useMemo(() => {
    return items.filter(item => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      
      const matchesSearch = searchQuery.trim() === '' || 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.subtitle && item.subtitle.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());

      let matchesPortion = true;
      if (portionFilter === '200gm') {
        matchesPortion = item.weight === '200gm';
      } else if (portionFilter === '400gm') {
        matchesPortion = item.weight === '400gm';
      }

      return matchesCategory && matchesSearch && matchesPortion;
    });
  }, [items, activeCategory, searchQuery, portionFilter]);

  const clearAllFilters = () => {
    setActiveCategory('all');
    setSearchQuery('');
    setPortionFilter('all');
  };

  return (
    <main className="min-h-screen pt-16 sm:pt-24 pb-20 sm:pb-24 bg-coffee-950/95 relative overflow-hidden">
      
      {/* Subtle Floating 3D Accents */}
      <div className="hidden lg:block absolute top-28 left-6 pointer-events-none z-10">
        <Floating3DLeaf size="md" />
      </div>
      <div className="hidden lg:block absolute top-32 right-8 pointer-events-none z-10">
        <Floating3DStrawberry />
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-20">
        
        {/* Top Header Strip */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-3 sm:mb-6 pt-1 sm:pt-0">
          
          <div className="flex items-center gap-2.5">
            <Link
              to="/"
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-coffee-900 border border-coffee-800 hover:border-leaf-500/30 text-cream-200 text-xs font-semibold transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </Link>

            <div>
              <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-leaf-500/15 text-leaf-300 text-[10px] font-bold uppercase tracking-wider">
                <Sprout className="w-3 h-3 text-leaf-400" />
                <span>Handpicked & Hygienic</span>
              </div>
              <h1 className="font-serif text-lg sm:text-3xl font-bold text-cream-50 leading-tight">
                Leaf & Lush Fresh Menu
              </h1>
            </div>
          </div>

          {/* Quick Cart Pill */}
          {totalItems > 0 && (
            <button
              onClick={() => openCart('cart')}
              className="self-start sm:self-auto flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-leaf-600 to-caramel-500 text-cream-50 font-bold text-xs shadow-md active:scale-95 transition-all"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>{totalItems} in Bag (₹{subtotal})</span>
            </button>
          )}

        </div>

        {/* Search & Portion Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 mb-3 sm:mb-5">
          
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-cream-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search fruit cup, salad bowl, steam salad..."
              className="w-full pl-9 pr-8 py-2 rounded-xl bg-coffee-900/90 border border-leaf-500/20 text-cream-100 placeholder-cream-400/50 text-xs sm:text-sm focus:outline-none focus:border-leaf-400 transition-colors shadow-inner"
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

          {/* Portion Quick Filter Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-0.5 md:pb-0 scrollbar-none">
            {[
              { id: 'all', label: 'All Portions 🍃' },
              { id: '200gm', label: '200gm Cups 🍓' },
              { id: '400gm', label: '400gm Bowls 🥗' },
            ].map(filter => (
              <button
                key={filter.id}
                onClick={() => setPortionFilter(filter.id)}
                className={`px-3 py-1 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  portionFilter === filter.id
                    ? 'bg-leaf-600 text-white shadow-sm font-bold'
                    : 'bg-coffee-900/70 text-cream-200 border border-coffee-800 hover:border-leaf-500/30'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

        </div>

        {/* Categories Bar */}
        <div className="sticky top-14 sm:top-20 z-30 py-1.5 -mx-3 px-3 sm:mx-0 sm:px-0 mb-3 sm:mb-6 backdrop-blur-md bg-coffee-950/90 rounded-2xl border border-leaf-500/15 shadow-xl">
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-0.5 scrollbar-none">
            {categories.map((cat) => {
              const IconComponent = iconMap[cat.icon] || Apple;
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

        {/* If Subscriptions Category Selected */}
        {activeCategory === 'Subscriptions' ? (
          <div className="py-2">
            <SubscriptionPlans />
          </div>
        ) : (
          <>
            {/* Results Counter */}
            <div className="flex items-center justify-between text-[11px] text-cream-400 mb-2.5 px-1">
              <span>Showing {filteredItems.length} fresh products</span>
              {(searchQuery || activeCategory !== 'all' || portionFilter !== 'all') && (
                <button
                  onClick={clearAllFilters}
                  className="text-leaf-400 hover:text-leaf-300 font-semibold underline underline-offset-2"
                >
                  Reset filters
                </button>
              )}
            </div>

            {/* 2-Column Mobile Grid / 3-4 on Desktop */}
            {filteredItems.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2.5 sm:gap-4">
                {filteredItems.map((item, index) => (
                  <MenuCard key={item.id} item={item} index={index} />
                ))}
              </div>
            ) : (
              <div className="py-10 text-center glass-card rounded-2xl p-5 border border-leaf-500/20 max-w-sm mx-auto">
                <div className="w-10 h-10 rounded-full bg-coffee-800/80 border border-leaf-500/30 flex items-center justify-center mx-auto mb-2 text-leaf-400">
                  <Sprout className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-sm font-bold text-cream-100">No items match your filter</h3>
                <p className="text-cream-300 text-xs mt-0.5 mb-3">
                  Try viewing all bowls and cups.
                </p>
                <button
                  onClick={clearAllFilters}
                  className="px-4 py-1.5 rounded-full bg-leaf-600 text-white font-bold text-xs hover:bg-leaf-500 transition-colors"
                >
                  Show All Items
                </button>
              </div>
            )}

            {/* Subscription banner on Menu page */}
            <div className="mt-10 sm:mt-16">
              <SubscriptionPlans />
            </div>
          </>
        )}

      </div>

    </main>
  );
}
