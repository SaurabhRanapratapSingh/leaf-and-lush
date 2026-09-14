import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Copy, Check, Coffee, Home } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { cafeConfig } from '../config/cafe';

export default function OrderSuccessModal({ onClose }) {
  const { lastOrder } = useCart();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (lastOrder?.rawMessage) {
      navigator.clipboard.writeText(lastOrder.rawMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="text-center space-y-5 py-2">
      
      {/* Animated Success Badge */}
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", damping: 12, stiffness: 200 }}
          className="w-full h-full rounded-full bg-emerald-500/20 border-2 border-emerald-500/50 flex items-center justify-center text-emerald-400 shadow-glow"
        >
          <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-400" />
        </motion.div>
        <span className="absolute inset-0 rounded-full border border-emerald-400/40 animate-ping" />
      </div>

      <div>
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-cream-50">
          Order sent to WhatsApp ☕
        </h3>
        <p className="text-xs sm:text-sm text-cream-200/90 mt-1.5 max-w-sm mx-auto leading-relaxed">
          Your order details have been prepared. Complete the conversation with the café barista to confirm your order and payment.
        </p>
      </div>

      {/* Order Reference Box */}
      {lastOrder && (
        <div className="glass-card rounded-2xl p-3.5 border border-caramel-500/20 text-left text-xs space-y-1.5 max-w-sm mx-auto">
          <div className="flex justify-between items-center text-cream-400 border-b border-coffee-800 pb-1.5">
            <span>Order Reference:</span>
            <span className="font-mono font-bold text-caramel-300">{lastOrder.id}</span>
          </div>

          <div className="flex justify-between text-cream-200">
            <span>Customer:</span>
            <span className="font-semibold text-cream-50">{lastOrder.customerDetails.name}</span>
          </div>

          <div className="flex justify-between text-cream-200">
            <span>Type:</span>
            <span className="text-caramel-300 font-medium">
              {lastOrder.customerDetails.orderType === 'delivery' ? '🛵 Home Delivery' : '🏪 Store Pickup'}
            </span>
          </div>

          <div className="flex justify-between text-cream-200 pt-1 border-t border-coffee-800 font-bold">
            <span>Subtotal:</span>
            <span className="text-cream-50">{cafeConfig.currency}{lastOrder.subtotal}</span>
          </div>
        </div>
      )}

      {/* Copy Raw Message fallback */}
      <button
        onClick={handleCopy}
        className="inline-flex items-center gap-1 text-xs text-caramel-400 hover:text-caramel-300 font-medium transition-colors"
      >
        {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
        <span>{copied ? "Copied Order Text to Clipboard!" : "Copy Order Text"}</span>
      </button>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
        <button
          onClick={onClose}
          className="flex-1 py-3 px-4 rounded-xl bg-caramel-500 hover:bg-caramel-400 text-coffee-950 font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
        >
          <Coffee className="w-4 h-4" />
          <span>View Menu / Order More</span>
        </button>

        <a
          href="#home"
          onClick={onClose}
          className="flex-1 py-3 px-4 rounded-xl bg-coffee-800 hover:bg-coffee-700 text-cream-100 font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2"
        >
          <Home className="w-4 h-4" />
          <span>Back to Home</span>
        </a>
      </div>

    </div>
  );
}
