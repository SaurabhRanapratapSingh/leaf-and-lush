import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Check, MessageCircle, ArrowRight, ShieldCheck, Sparkles, Heart } from 'lucide-react';
import { useMenu } from '../context/MenuContext';
import { cafeConfig } from '../config/cafe';

export default function SubscriptionPlans() {
  const { subscriptions } = useMenu();

  const handleWhatsAppSubscribe = (plan) => {
    const customMsg = `Hi Leaf & Lush! I would like to enroll in the monthly subscription plan for *${plan.name} (${plan.type})* at *${cafeConfig.currency}${plan.monthlyPrice?.toLocaleString('en-IN') || plan.monthlyPrice}/month* (${plan.weight}). Please share delivery timings and payment confirmation.`;
    const encodedMsg = encodeURIComponent(customMsg);
    window.open(`https://wa.me/${cafeConfig.whatsappNumber}?text=${encodedMsg}`, '_blank');
  };

  return (
    <section id="subscriptions" className="py-8 sm:py-16 bg-gradient-to-b from-coffee-950 via-coffee-900/90 to-coffee-950 relative overflow-hidden border-t border-leaf-500/20">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-64 sm:w-[500px] h-64 sm:h-[500px] bg-leaf-500/10 rounded-full blur-xl sm:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-60 sm:w-[450px] h-60 sm:h-[450px] bg-caramel-500/10 rounded-full blur-xl sm:blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-leaf-500/15 border border-leaf-500/30 text-leaf-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2 md:backdrop-blur-md">
            <Calendar className="w-3.5 h-3.5 text-leaf-400" />
            <span>Monthly Doorstep Subscriptions</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-cream-50 leading-tight mb-2">
            Our Monthly{' '}
            <span className="bg-gradient-to-r from-leaf-400 via-caramel-300 to-citrus-400 bg-clip-text text-transparent italic">
              Subscription Plans
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-cream-200/90 font-light leading-relaxed max-w-xl mx-auto">
            Hassle-free daily nutrition. Get freshly prepared 400gm fruit & vegetable bowls delivered to your doorstep every day.
          </p>
        </div>

        {/* 3 Subscription Plan Cards with Exact Prices & Weights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {subscriptions.map((plan, index) => (
            <div
              key={plan.id}
              className="rounded-3xl bg-coffee-900/95 md:bg-coffee-900/85 border border-leaf-500/25 p-4 sm:p-6 shadow-2xl flex flex-col justify-between relative group hover:border-leaf-400/50 transition-all duration-300 hover:shadow-glow-leaf md:backdrop-blur-sm"
            >
              <div>
                {/* Top Badge & Weight */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-leaf-500/20 text-leaf-300 border border-leaf-500/30">
                    {plan.badge}
                  </span>
                  <span className="text-[11px] font-bold text-caramel-300 bg-coffee-950/80 px-2 py-0.5 rounded-md border border-coffee-800">
                    {plan.weight}
                  </span>
                </div>

                {/* Plan Food Image */}
                <div className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden mb-3.5 border border-coffee-800 bg-coffee-950">
                  <img
                    src={plan.image}
                    alt={plan.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coffee-950/90 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Monthly Price Highlight Tag */}
                  <div className="absolute bottom-2.5 left-2.5 px-3 py-1 rounded-xl bg-coffee-950/95 md:backdrop-blur-md border border-leaf-500/40 text-cream-50 flex items-baseline gap-1 shadow-lg">
                    <span className="text-xs text-leaf-300 font-bold">₹</span>
                    <span className="font-serif text-lg font-extrabold text-cream-50">
                      {plan.monthlyPrice?.toLocaleString('en-IN') || plan.monthlyPrice}
                    </span>
                    <span className="text-[10px] text-cream-400 font-medium">/ month</span>
                  </div>
                </div>

                {/* Plan Title & Subtitle */}
                <h3 className="font-serif text-lg sm:text-xl font-bold text-cream-50 mb-0.5">
                  {plan.name}
                </h3>
                <p className="text-xs text-leaf-300 font-semibold mb-2">
                  ({plan.type})
                </p>
                <p className="text-xs text-cream-300/85 font-light leading-relaxed mb-4">
                  {plan.description}
                </p>

                {/* Feature Checklist */}
                <ul className="space-y-2 mb-5">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-xs text-cream-200/90 font-light">
                      <div className="w-4 h-4 rounded-full bg-leaf-500/20 flex items-center justify-center text-leaf-400 shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button: 1-Tap WhatsApp Booking */}
              <button
                onClick={() => handleWhatsAppSubscribe(plan)}
                className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-leaf-600 via-leaf-500 to-caramel-500 text-cream-50 font-bold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 active:scale-98 hover:shadow-glow-leaf transition-all"
              >
                <MessageCircle className="w-4 h-4 text-cream-50" />
                <span>Book Plan on WhatsApp (₹{plan.monthlyPrice?.toLocaleString('en-IN')})</span>
              </button>
            </div>
          ))}
        </div>

        {/* Advisory Trust Bar */}
        <div className="mt-8 p-4 rounded-2xl bg-coffee-900/60 border border-coffee-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2.5 text-xs text-cream-200">
            <div className="w-8 h-8 rounded-full bg-leaf-500/20 flex items-center justify-center text-leaf-400 shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <span>
              <strong>100% Flexible Subscription:</strong> 400gm daily portion. Easily pause on travel days or switch bowls anytime on WhatsApp.
            </span>
          </div>

          <a
            href={`https://wa.me/${cafeConfig.whatsappNumber}?text=Hi%20Leaf%20%26%20Lush!%20I%20want%20to%20know%20more%20about%20your%20monthly%20plans.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-leaf-300 hover:text-leaf-200 underline underline-offset-4 whitespace-nowrap"
          >
            <span>Questions? Chat on WhatsApp ({cafeConfig.phone})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

    </section>
  );
}
