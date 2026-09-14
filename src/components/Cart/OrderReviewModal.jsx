import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Bike, Store, User, Phone, MapPin, FileText, Sprout } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { cafeConfig } from '../../config/cafe';
import { generateWhatsAppUrl } from '../../utils/whatsapp';
import confetti from 'canvas-confetti';

export default function OrderReviewModal({ onBack, onComplete }) {
  const { cart, customerDetails, subtotal, setLastOrder, clearCart } = useCart();
  const currency = cafeConfig.currency || '₹';

  const handleWhatsAppCheckout = () => {
    const { url, rawMessage } = generateWhatsAppUrl(cart, customerDetails);

    const orderData = {
      id: 'LUSH-' + Math.floor(100000 + Math.random() * 900000),
      items: [...cart],
      customerDetails: { ...customerDetails },
      subtotal,
      date: new Date().toISOString(),
      rawMessage
    };
    setLastOrder(orderData);

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // ignore
    }

    window.open(url, '_blank');
    clearCart();
    onComplete();
  };

  return (
    <div className="space-y-3.5">
      
      {/* Header Banner */}
      <div className="text-center pb-0.5">
        <span className="text-2xl sm:text-3xl">🍃☕</span>
        <h3 className="font-serif text-lg sm:text-2xl font-bold text-cream-50 mt-1">
          Review Your Order
        </h3>
        <p className="text-[11px] text-cream-300">
          Confirm details before placing your order via WhatsApp.
        </p>
      </div>

      {/* Customer Info Card */}
      <div className="glass-card rounded-2xl p-3 border border-leaf-500/20 text-xs space-y-1.5">
        <div className="flex items-center justify-between pb-1 border-b border-coffee-800">
          <span className="font-bold uppercase tracking-wider text-leaf-400 text-[9px]">Guest Information</span>
          <span className="inline-flex items-center gap-1 font-semibold text-cream-200 text-xs">
            {customerDetails.orderType === 'delivery' ? (
              <>
                <Bike className="w-3 h-3 text-caramel-400" /> 🛵 Home Delivery
              </>
            ) : (
              <>
                <Store className="w-3 h-3 text-leaf-400" /> 🛍️ Store Pickup
              </>
            )}
          </span>
        </div>

        <div className="flex items-center gap-2 text-cream-200">
          <User className="w-3 h-3 text-leaf-400 shrink-0" />
          <span className="font-semibold text-cream-100">{customerDetails.name}</span>
        </div>

        <div className="flex items-center gap-2 text-cream-200">
          <Phone className="w-3 h-3 text-leaf-400 shrink-0" />
          <span>{customerDetails.phone}</span>
        </div>

        {customerDetails.orderType === 'delivery' && customerDetails.address && (
          <div className="flex items-start gap-2 text-cream-200 pt-0.5">
            <MapPin className="w-3 h-3 text-caramel-400 shrink-0 mt-0.5" />
            <span className="leading-relaxed">{customerDetails.address}</span>
          </div>
        )}

        {customerDetails.instructions && (
          <div className="flex items-start gap-2 text-cream-300 pt-0.5 italic">
            <FileText className="w-3 h-3 text-leaf-400 shrink-0 mt-0.5" />
            <span>"{customerDetails.instructions}"</span>
          </div>
        )}
      </div>

      {/* Items Breakdown Summary */}
      <div className="glass-card rounded-2xl p-3 border border-caramel-500/20 max-h-36 overflow-y-auto space-y-1">
        <span className="font-bold uppercase tracking-wider text-caramel-400 text-[9px] block mb-1">
          Items Ordered ({cart.length})
        </span>

        {cart.map((item) => (
          <div key={item.id} className="flex items-center justify-between text-xs py-1 border-b border-coffee-800/60 last:border-0">
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-cream-100">{item.name}</span>
              <span className="text-cream-400 text-[11px]">× {item.quantity}</span>
            </div>
            <span className="font-mono font-bold text-cream-50">
              {currency}{item.price * item.quantity}
            </span>
          </div>
        ))}
      </div>

      {/* Pricing Summary */}
      <div className="p-3 rounded-2xl bg-coffee-900 border border-leaf-500/30 space-y-1 text-xs">
        <div className="flex justify-between text-cream-200">
          <span>Subtotal:</span>
          <span className="font-bold font-mono text-cream-50">{currency}{subtotal}</span>
        </div>

        {customerDetails.orderType === 'delivery' ? (
          <div className="pt-1.5 border-t border-coffee-800">
            <p className="text-[10px] text-caramel-300 leading-relaxed">
              🚚 {cafeConfig.deliveryChargeMessage}
            </p>
            <div className="flex justify-between text-xs sm:text-sm font-bold text-cream-50 mt-1">
              <span>Estimated Total:</span>
              <span className="text-leaf-300">{currency}{subtotal} + delivery</span>
            </div>
          </div>
        ) : (
          <div className="pt-1 border-t border-coffee-800 flex justify-between text-xs sm:text-sm font-bold text-cream-50">
            <span>Total Payable:</span>
            <span className="text-leaf-300">{currency}{subtotal}</span>
          </div>
        )}
      </div>

      {/* WhatsApp Checkout Button */}
      <div className="space-y-2 pt-1">
        <motion.button
          whileTap={{ scale: 0.98 }}
          type="button"
          onClick={handleWhatsAppCheckout}
          className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-sm sm:text-base shadow-xl flex flex-col items-center justify-center gap-0.5 transition-all duration-200 min-h-[54px]"
        >
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2ZM12.04 20.18C10.58 20.18 9.15 19.78 7.9 19.04L7.59 18.86L4.47 19.68L5.3 16.63L5.1 16.31C4.29 15.01 3.87 13.48 3.87 11.91C3.87 7.41 7.54 3.74 12.04 3.74C14.22 3.74 16.27 4.59 17.81 6.13C19.35 7.67 20.2 9.72 20.2 11.91C20.2 16.42 16.54 20.18 12.04 20.18ZM16.52 14.39C16.28 14.27 15.08 13.68 14.86 13.6C14.64 13.52 14.48 13.48 14.31 13.72C14.15 13.96 13.68 14.52 13.54 14.68C13.4 14.84 13.26 14.86 13.02 14.74C12.78 14.62 12.01 14.37 11.1 13.56C10.39 12.93 9.91 12.15 9.77 11.91C9.63 11.67 9.75 11.54 9.87 11.42C9.98 11.31 10.12 11.13 10.24 10.99C10.36 10.85 10.4 10.75 10.48 10.59C10.56 10.43 10.52 10.29 10.46 10.17C10.4 10.05 9.92 8.87 9.72 8.39C9.52 7.92 9.32 7.98 9.17 7.97C9.03 7.96 8.87 7.96 8.71 7.96C8.55 7.96 8.29 8.02 8.07 8.26C7.85 8.5 7.23 9.08 7.23 10.26C7.23 11.44 8.09 12.58 8.21 12.74C8.33 12.9 9.91 15.33 12.33 16.37C12.91 16.62 13.35 16.77 13.71 16.88C14.29 17.06 14.82 17.04 15.24 16.98C15.71 16.91 16.68 16.39 16.88 15.83C17.08 15.27 17.08 14.79 17.02 14.69C16.96 14.59 16.76 14.51 16.52 14.39Z" />
            </svg>
            <span>Order on WhatsApp</span>
          </div>
          <span className="text-[10px] text-emerald-100/90 font-normal">
            Your order will open in WhatsApp for confirmation.
          </span>
        </motion.button>

        <button
          type="button"
          onClick={onBack}
          className="w-full py-2.5 px-3 rounded-xl bg-coffee-800 hover:bg-coffee-700 text-cream-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Details</span>
        </button>
      </div>

    </div>
  );
}
