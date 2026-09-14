import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { cafeConfig } from '../config/cafe';

export default function FloatingCart() {
  const { totalItems, subtotal, isCartOpen, openCart } = useCart();
  const currency = cafeConfig.currency || '₹';

  if (totalItems === 0 || isCartOpen) return null;

  return (
    <AnimatePresence>
      <motion.aside
        aria-label="Floating mobile cart bar"
        initial={{ y: 90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 90, opacity: 0 }}
        transition={{ type: 'spring', damping: 24, stiffness: 280 }}
        className="fixed bottom-3 inset-x-3 sm:inset-x-auto sm:right-6 sm:bottom-6 z-40 max-w-lg sm:max-w-xs pointer-events-auto pb-safe"
      >
        <button
          onClick={() => openCart('cart')}
          className="w-full flex items-center justify-between gap-3 p-3 sm:px-4 rounded-2xl bg-gradient-to-r from-caramel-500 via-caramel-400 to-gold-500 text-coffee-950 shadow-glow-lg active:scale-[0.98] transition-all duration-150 border border-caramel-300/40"
          aria-label={`View Cart with ${totalItems} items, total ${currency}${subtotal}`}
        >
          {/* Left item details */}
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-coffee-950 text-caramel-300 flex items-center justify-center font-bold text-xs shadow-inner shrink-0">
              <ShoppingBag className="w-4 h-4" />
            </div>

            <div className="flex flex-col text-left">
              <span className="text-[10px] sm:text-[11px] font-bold text-coffee-950 uppercase tracking-wider">
                {totalItems} {totalItems === 1 ? 'Item' : 'Items'} in Order
              </span>
              <span className="font-serif text-sm sm:text-base font-bold leading-tight text-coffee-950">
                {currency}{subtotal}
              </span>
            </div>
          </div>

          {/* Right CTA */}
          <div className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-coffee-950/20 text-coffee-950 font-bold text-xs sm:text-sm">
            <span>View Cart</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </button>
      </motion.aside>
    </AnimatePresence>
  );
}
