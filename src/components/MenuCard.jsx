import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Star, Clock, Check, Sprout } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { cafeConfig } from '../config/cafe';

export default function MenuCard({ item, index = 0 }) {
  const { addToCart, updateQuantity, getItemQuantity } = useCart();
  const { addToast } = useToast();
  const quantity = getItemQuantity(item.id);
  const [isJustAdded, setIsJustAdded] = useState(false);

  const handleAdd = (e) => {
    e.stopPropagation();
    addToCart(item, 1);
    setIsJustAdded(true);
    addToast(`Added "${item.name}" to cart! 🍃`, 'success');
    setTimeout(() => {
      setIsJustAdded(false);
    }, 850);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25, delay: (index % 6) * 0.03 }}
      className="group relative glass-card rounded-2xl overflow-hidden border border-leaf-500/20 hover:border-leaf-400/50 transition-all duration-200 hover:-translate-y-1 hover:shadow-glow-leaf flex flex-col justify-between select-none bg-coffee-900/80 backdrop-blur-md"
    >
      {/* Product Image Area */}
      <div className="relative h-32 sm:h-40 md:h-44 w-full overflow-hidden bg-coffee-950 shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-coffee-950/80 via-transparent to-transparent pointer-events-none" />

        {/* Top Badges: Weight & Dietary */}
        <div className="absolute top-2 left-2 flex items-center gap-1.5 flex-wrap">
          {item.weight && (
            <div className="px-2 py-0.5 rounded-full bg-coffee-950/90 backdrop-blur-md border border-leaf-500/40 text-[9px] sm:text-[10px] font-bold text-leaf-300 shadow-md">
              {item.weight}
            </div>
          )}

          {item.goldBadge && (
            <div className="px-2 py-0.5 rounded-full bg-gradient-to-r from-leaf-700 to-caramel-600 border border-leaf-400/60 shadow-md">
              <span className="text-[8px] sm:text-[9px] font-extrabold tracking-wider uppercase text-cream-50">
                {item.goldBadge}
              </span>
            </div>
          )}
        </div>

        {/* Rating Pill */}
        <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded-full bg-coffee-950/85 backdrop-blur-sm border border-coffee-800 flex items-center gap-0.5 text-[9px] sm:text-[10px] font-bold text-cream-100 shadow-sm">
          <Star className="w-2.5 h-2.5 text-gold-400 fill-gold-400" />
          <span>{item.rating || '4.9'}</span>
        </div>

        {/* Subtitle tag overlay on bottom of image */}
        {item.subtitle && (
          <div className="absolute bottom-1.5 left-2 px-2 py-0.5 rounded-md bg-coffee-950/90 text-[10px] sm:text-xs font-semibold text-cream-200 backdrop-blur-sm border border-leaf-500/30">
            {item.subtitle}
          </div>
        )}
      </div>

      {/* Product Content Details */}
      <div className="p-2.5 sm:p-3.5 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="font-serif text-sm sm:text-base font-bold text-cream-50 group-hover:text-leaf-300 transition-colors line-clamp-1 leading-tight mb-1">
            {item.name}
          </h3>

          <p className="text-[11px] sm:text-xs text-cream-300/85 line-clamp-2 leading-relaxed font-light">
            {item.description}
          </p>
        </div>

        {/* Price & Quantity Controls */}
        <div className="flex items-center justify-between mt-3 pt-2 border-t border-coffee-800/80 gap-2">
          <div className="flex flex-col">
            <span className="font-serif text-sm sm:text-lg font-bold text-cream-50">
              {cafeConfig.currency}{item.price}
            </span>
            <span className="text-[9px] text-leaf-400 font-medium">{item.weight} portion</span>
          </div>

          {/* Add button or Stepper */}
          {quantity === 0 ? (
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={handleAdd}
              className="flex items-center justify-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-gradient-to-r from-leaf-600 via-leaf-500 to-caramel-500 hover:shadow-glow-leaf text-cream-50 font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 min-h-[34px]"
              aria-label={`Add ${item.name} to cart`}
            >
              {isJustAdded ? (
                <span className="flex items-center gap-1 text-cream-50 font-bold">
                  <Check className="w-3.5 h-3.5" />
                  <span>Added</span>
                </span>
              ) : (
                <>
                  <Plus className="w-3.5 h-3.5" />
                  <span>+ Add</span>
                </>
              )}
            </motion.button>
          ) : (
            <div className="flex items-center gap-1 bg-coffee-950 border border-leaf-500/40 rounded-xl p-0.5 shadow-inner">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  updateQuantity(item.id, quantity - 1);
                }}
                className="w-7 h-7 rounded-lg bg-coffee-800 hover:bg-coffee-700 active:bg-coffee-900 text-cream-100 flex items-center justify-center transition-colors text-xs"
                aria-label={`Decrease quantity of ${item.name}`}
              >
                <Minus className="w-3 h-3" />
              </button>
              
              <span className="w-5 text-center text-xs font-bold text-leaf-300">
                {quantity}
              </span>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  updateQuantity(item.id, quantity + 1);
                }}
                className="w-7 h-7 rounded-lg bg-leaf-600 hover:bg-leaf-500 active:bg-leaf-700 text-cream-50 flex items-center justify-center transition-colors text-xs font-bold"
                aria-label={`Increase quantity of ${item.name}`}
              >
                <Plus className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>

      </div>
    </motion.div>
  );
}
