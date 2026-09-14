import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageCircle, Home, Store, ArrowRight, X, Sprout } from 'lucide-react';
import { cafeConfig } from '../../config/cafe';

export default function OrderSuccessModal({ isOpen, onClose, customerDetails, subtotal }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-coffee-950/85 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 15 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="w-full max-w-md rounded-3xl bg-coffee-900 border border-leaf-500/30 p-5 sm:p-6 shadow-2xl relative text-center overflow-hidden"
      >
        {/* Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-32 bg-leaf-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-coffee-800 text-cream-300 hover:text-cream-50 transition-colors"
          aria-label="Close success dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-leaf-500/20 text-leaf-300 border border-leaf-500/30 text-xs font-bold uppercase tracking-wider mb-3">
          <CheckCircle2 className="w-4 h-4 text-leaf-400" />
          <span>WhatsApp Chat Opened</span>
        </div>

        <h3 className="font-serif text-xl sm:text-2xl font-bold text-cream-50 mb-1">
          Your order has been sent!
        </h3>
        <p className="text-xs text-cream-300 font-light leading-relaxed mb-4">
          The café will confirm your order and delivery details on WhatsApp.
        </p>

        {/* Animated Delivery Rider Graphic: ☕ Café → 🛵 Scooter → 🏠 Home */}
        <div className="relative w-full py-4 px-2 my-2 rounded-2xl bg-coffee-950/90 border border-coffee-800 overflow-hidden">
          
          {/* Animated Road Track */}
          <div className="absolute bottom-3 inset-x-4 h-1.5 bg-coffee-800 rounded-full overflow-hidden">
            <motion.div
              animate={{ x: [-20, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }}
              className="w-full h-full bg-[repeating-linear-gradient(90deg,#52B770_0px,#52B770_10px,transparent_10px,transparent_20px)] opacity-60"
            />
          </div>

          <div className="relative z-10 flex items-center justify-between px-2 pt-1 pb-4">
            
            {/* 1. Café Storefront Origin */}
            <div className="flex flex-col items-center">
              <div className="w-9 h-9 rounded-xl bg-leaf-600/30 border border-leaf-500/40 flex items-center justify-center text-leaf-300 shadow-md">
                <Store className="w-5 h-5" />
              </div>
              <span className="text-[9px] text-leaf-400 font-bold uppercase tracking-wider mt-1">Leaf & Lush</span>
            </div>

            {/* 2. Traveling Delivery Scooter with Order Package */}
            <motion.div
              animate={{
                x: [-15, 15, -15],
                y: [0, -3, 0],
              }}
              transition={{
                x: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                y: { duration: 0.4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="flex flex-col items-center select-none"
            >
              <div className="relative">
                {/* Coffee Cup / Parcel Package on Back */}
                <div className="absolute -top-2 -left-1 text-[11px]">📦☕</div>
                <span className="text-2xl drop-shadow-md">🛵</span>
              </div>
              <span className="text-[8px] text-caramel-300 font-medium tracking-wide">On the way</span>
            </motion.div>

            {/* 3. Destination Home */}
            <div className="flex flex-col items-center">
              <div className="w-9 h-9 rounded-xl bg-caramel-600/30 border border-caramel-500/40 flex items-center justify-center text-caramel-300 shadow-md">
                <Home className="w-5 h-5" />
              </div>
              <span className="text-[9px] text-cream-300 font-bold uppercase tracking-wider mt-1">
                {customerDetails?.orderType === 'delivery' ? 'Your Door' : 'Pickup'}
              </span>
            </div>

          </div>

          {/* Pure Visual Animation Disclaimer */}
          <div className="text-[9px] text-cream-400/80 italic text-center">
            *Visual confirmation preview. Live updates & timing are shared via WhatsApp chat.
          </div>
        </div>

        {/* Direct Action Button */}
        <div className="mt-4 flex flex-col gap-2">
          <button
            onClick={onClose}
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-caramel-500 via-caramel-400 to-leaf-500 text-coffee-950 font-bold text-xs sm:text-sm shadow-md active:scale-98 transition-all"
          >
            Back to Café
          </button>
        </div>

      </motion.div>
    </div>
  );
}
