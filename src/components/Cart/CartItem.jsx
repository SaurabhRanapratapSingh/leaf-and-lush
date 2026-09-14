import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { cafeConfig } from '../../config/cafe';

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();
  const currency = cafeConfig.currency || '₹';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.2 }}
      className="flex items-center gap-3 p-3 rounded-2xl bg-coffee-900/70 border border-caramel-500/15 hover:border-caramel-500/30 transition-colors"
    >
      {/* Product Thumbnail */}
      <div className="w-14 h-14 rounded-xl overflow-hidden bg-coffee-950 shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Item Info */}
      <div className="flex-1 min-w-0">
        <h4 className="font-serif font-bold text-cream-50 text-xs sm:text-sm truncate">
          {item.name}
        </h4>
        
        {/* Breakdown Calculation: e.g. ₹150 × 2 = ₹300 */}
        <div className="text-[11px] text-cream-300/90 mt-0.5 font-mono">
          <span>{currency}{item.price}</span>
          <span className="text-cream-400 mx-1">×</span>
          <span>{item.quantity}</span>
          <span className="text-caramel-400 font-bold ml-1">
            = {currency}{item.price * item.quantity}
          </span>
        </div>
      </div>

      {/* Quantity Stepper & Remove */}
      <div className="flex items-center gap-1.5 shrink-0">
        <div className="flex items-center gap-1 bg-coffee-950/80 border border-caramel-500/30 rounded-xl p-0.5 shadow-inner">
          <button
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="w-6 h-6 rounded-lg bg-coffee-800 hover:bg-coffee-700 text-cream-200 flex items-center justify-center transition-colors text-xs"
            aria-label={`Decrease quantity of ${item.name}`}
          >
            <Minus className="w-3 h-3" />
          </button>

          <span className="w-4 text-center text-xs font-bold text-caramel-300">
            {item.quantity}
          </span>

          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="w-6 h-6 rounded-lg bg-caramel-500 hover:bg-caramel-400 text-coffee-950 flex items-center justify-center transition-colors text-xs font-bold"
            aria-label={`Increase quantity of ${item.name}`}
          >
            <Plus className="w-3 h-3" />
          </button>
        </div>

        <button
          onClick={() => removeFromCart(item.id)}
          className="p-1.5 text-cream-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
          title="Remove item"
          aria-label={`Remove ${item.name} from cart`}
        >
          <Trash2 className="w-3.5 h-3.5" />
        </button>
      </div>
    </motion.div>
  );
}
