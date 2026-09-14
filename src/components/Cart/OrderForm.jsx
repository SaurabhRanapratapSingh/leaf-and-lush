import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Phone, MapPin, FileText, ArrowRight, ArrowLeft, Bike, ShoppingBag, AlertCircle } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { cafeConfig } from '../../config/cafe';

export default function OrderForm({ onBack, onNext }) {
  const { customerDetails, setCustomerDetails } = useCart();
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!customerDetails.name || customerDetails.name.trim().length < 2) {
      newErrors.name = 'Please enter your name.';
    }

    const cleanPhone = (customerDetails.phone || '').replace(/[^0-9]/g, '');
    if (!customerDetails.phone || cleanPhone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number.';
    }

    if (customerDetails.orderType === 'delivery') {
      if (!customerDetails.address || customerDetails.address.trim().length < 5) {
        newErrors.address = 'Please enter your complete delivery address.';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onNext();
    }
  };

  const handleQuickInstruction = (text) => {
    const current = customerDetails.instructions || '';
    if (current.includes(text)) return;
    const updated = current ? `${current}, ${text}` : text;
    setCustomerDetails({ ...customerDetails, instructions: updated });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      
      {/* 2 Compact Cards: Pickup vs Delivery */}
      <div>
        <label className="block text-[11px] font-bold uppercase tracking-wider text-cream-300 mb-2">
          Select Order Mode
        </label>
        <div className="grid grid-cols-2 gap-2.5">
          
          {/* Pickup Card */}
          <button
            type="button"
            onClick={() => setCustomerDetails({ ...customerDetails, orderType: 'pickup' })}
            className={`p-3 rounded-2xl border text-left flex flex-col justify-between transition-all min-h-[64px] ${
              customerDetails.orderType === 'pickup'
                ? 'bg-gradient-to-br from-caramel-500/20 to-leaf-500/20 border-leaf-400 shadow-glow-leaf'
                : 'bg-coffee-900/80 border-coffee-800 hover:border-caramel-500/30'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs sm:text-sm font-bold text-cream-50 flex items-center gap-1.5">
                <span>🛍️</span> Pickup
              </span>
              <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                customerDetails.orderType === 'pickup' ? 'border-leaf-400 bg-leaf-400' : 'border-coffee-700'
              }`}>
                {customerDetails.orderType === 'pickup' && <div className="w-1.5 h-1.5 rounded-full bg-coffee-950" />}
              </div>
            </div>
            <span className="text-[10px] text-cream-300 mt-1">Collect at café</span>
          </button>

          {/* Delivery Card */}
          <button
            type="button"
            onClick={() => setCustomerDetails({ ...customerDetails, orderType: 'delivery' })}
            className={`p-3 rounded-2xl border text-left flex flex-col justify-between transition-all min-h-[64px] ${
              customerDetails.orderType === 'delivery'
                ? 'bg-gradient-to-br from-caramel-500/20 to-leaf-500/20 border-caramel-400 shadow-glow'
                : 'bg-coffee-900/80 border-coffee-800 hover:border-caramel-500/30'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs sm:text-sm font-bold text-cream-50 flex items-center gap-1.5">
                <span>🛵</span> Delivery
              </span>
              <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                customerDetails.orderType === 'delivery' ? 'border-caramel-400 bg-caramel-400' : 'border-coffee-700'
              }`}>
                {customerDetails.orderType === 'delivery' && <div className="w-1.5 h-1.5 rounded-full bg-coffee-950" />}
              </div>
            </div>
            <span className="text-[10px] text-cream-300 mt-1">To your doorstep</span>
          </button>

        </div>
      </div>

      {/* Customer Name */}
      <div>
        <label className="block text-xs font-semibold text-cream-200 mb-1 flex items-center gap-1.5">
          <User className="w-3.5 h-3.5 text-caramel-400" />
          <span>Your Name <span className="text-red-400">*</span></span>
        </label>
        <input
          type="text"
          value={customerDetails.name}
          onChange={(e) => {
            setCustomerDetails({ ...customerDetails, name: e.target.value });
            if (errors.name) setErrors({ ...errors, name: null });
          }}
          placeholder="e.g. Saurabh Sharma"
          className={`w-full px-3.5 py-2.5 rounded-xl bg-coffee-900/90 border text-cream-100 placeholder-cream-400/50 text-sm focus:outline-none transition-colors ${
            errors.name ? 'border-red-500/80 bg-red-950/20' : 'border-caramel-500/25 focus:border-leaf-400'
          }`}
        />
        {errors.name && (
          <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" /> {errors.name}
          </p>
        )}
      </div>

      {/* Customer Phone */}
      <div>
        <label className="block text-xs font-semibold text-cream-200 mb-1 flex items-center gap-1.5">
          <Phone className="w-3.5 h-3.5 text-caramel-400" />
          <span>Phone / WhatsApp Number <span className="text-red-400">*</span></span>
        </label>
        <input
          type="tel"
          value={customerDetails.phone}
          onChange={(e) => {
            setCustomerDetails({ ...customerDetails, phone: e.target.value });
            if (errors.phone) setErrors({ ...errors, phone: null });
          }}
          placeholder="e.g. 9876543210"
          className={`w-full px-3.5 py-2.5 rounded-xl bg-coffee-900/90 border text-cream-100 placeholder-cream-400/50 text-sm focus:outline-none transition-colors ${
            errors.phone ? 'border-red-500/80 bg-red-950/20' : 'border-caramel-500/25 focus:border-leaf-400'
          }`}
        />
        {errors.phone && (
          <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" /> {errors.phone}
          </p>
        )}
      </div>

      {/* Delivery Address (Only when Delivery selected) */}
      {customerDetails.orderType === 'delivery' && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
        >
          <label className="block text-xs font-semibold text-cream-200 mb-1 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-caramel-400" />
            <span>Delivery Address <span className="text-red-400">*</span></span>
          </label>
          <textarea
            rows="2"
            value={customerDetails.address}
            onChange={(e) => {
              setCustomerDetails({ ...customerDetails, address: e.target.value });
              if (errors.address) setErrors({ ...errors, address: null });
            }}
            placeholder="Flat/House No., Building, Street, Landmark, Area"
            className={`w-full px-3.5 py-2 rounded-xl bg-coffee-900/90 border text-cream-100 placeholder-cream-400/50 text-sm focus:outline-none transition-colors resize-none ${
              errors.address ? 'border-red-500/80 bg-red-950/20' : 'border-caramel-500/25 focus:border-leaf-400'
            }`}
          />
          {errors.address && (
            <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.address}
            </p>
          )}
          <p className="text-[10px] text-cream-400 mt-0.5">
            {cafeConfig.deliveryChargeMessage}
          </p>
        </motion.div>
      )}

      {/* Special Instructions */}
      <div>
        <label className="block text-xs font-semibold text-cream-200 mb-1 flex items-center gap-1.5">
          <FileText className="w-3.5 h-3.5 text-caramel-400" />
          <span>Special Instructions <span className="text-cream-400 font-normal">(Optional)</span></span>
        </label>
        <textarea
          rows="2"
          value={customerDetails.instructions}
          onChange={(e) => setCustomerDetails({ ...customerDetails, instructions: e.target.value })}
          placeholder="e.g. Less spicy chaat, no ice, extra lime..."
          className="w-full px-3.5 py-2 rounded-xl bg-coffee-900/90 border border-caramel-500/25 focus:border-leaf-400 text-cream-100 placeholder-cream-400/50 text-sm focus:outline-none transition-colors resize-none"
        />
        
        {/* Quick Suggestion Chips */}
        <div className="flex flex-wrap gap-1.5 mt-1.5">
          {['Less spicy chaat', 'No ice in coffee', 'Extra lime wedge', 'Less sugar', 'Call when arriving'].map(chip => (
            <button
              key={chip}
              type="button"
              onClick={() => handleQuickInstruction(chip)}
              className="text-[10px] px-2 py-0.5 rounded-lg bg-coffee-800 hover:bg-coffee-700 text-cream-300 border border-caramel-500/20 transition-colors"
            >
              + {chip}
            </button>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-2.5 pt-2 border-t border-coffee-800">
        <button
          type="button"
          onClick={onBack}
          className="flex-1 py-3 px-3 rounded-xl bg-coffee-800 hover:bg-coffee-700 text-cream-200 text-xs sm:text-sm font-semibold flex items-center justify-center gap-1 transition-colors min-h-[44px]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        <button
          type="submit"
          className="flex-[2] py-3 px-4 rounded-xl bg-gradient-to-r from-caramel-500 to-leaf-500 text-coffee-950 font-bold text-xs sm:text-sm shadow-md hover:shadow-glow-leaf flex items-center justify-center gap-1.5 transition-all min-h-[44px]"
        >
          <span>Continue to Confirm</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </form>
  );
}
