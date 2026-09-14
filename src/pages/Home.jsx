import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sprout, Sparkles, Calendar, MessageCircle, Apple } from 'lucide-react';
import Hero from '../components/Hero';
import BestSellers from '../components/BestSellers';
import SubscriptionPlans from '../components/SubscriptionPlans';
import ExperienceSection from '../components/ExperienceSection';
import { cafeConfig } from '../config/cafe';

export default function Home() {
  return (
    <main>
      {/* 1. Compact Hero with Leaf & Lush Branding & 3D Visual */}
      <Hero />

      {/* 2. Menu Favourites (6 Fresh Fruit Cups, Salad Bowls & Steam Bowls) */}
      <BestSellers />

      {/* 3. Dedicated Monthly Subscription Plans (Lush Harvest, Lush Royal, Leaf Garden) */}
      <SubscriptionPlans />

      {/* 4. Atmosphere Sanctuary */}
      <ExperienceSection />

      {/* 5. Fast WhatsApp Order Callout (Direct to 7720028998) */}
      <section className="py-8 sm:py-12 bg-gradient-to-r from-coffee-950 via-coffee-900 to-coffee-950 text-center border-t border-leaf-500/20">
        <div className="max-w-md mx-auto px-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-leaf-500/15 border border-leaf-500/30 text-leaf-300 text-xs font-semibold mb-2">
            <MessageCircle className="w-3.5 h-3.5 text-leaf-400" />
            <span>Direct WhatsApp: {cafeConfig.phone}</span>
          </div>

          <h3 className="font-serif text-xl sm:text-2xl font-bold text-cream-50 mb-2">
            Craving fresh fruit bowls or salads?
          </h3>
          <p className="text-xs text-cream-300 font-light mb-4">
            Freshly cut upon order, hygienic packing, zero preservatives.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/menu"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto py-3.5 px-6 rounded-2xl bg-gradient-to-r from-leaf-600 via-leaf-500 to-caramel-500 text-cream-50 font-bold text-sm shadow-glow-leaf active:scale-[0.98] transition-all"
            >
              <span>ORDER NOW 🍓</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={`https://wa.me/${cafeConfig.whatsappNumber}?text=Hi%20Leaf%20%26%20Lush!%20I%20want%20to%20place%20an%20order.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto py-3.5 px-6 rounded-2xl bg-coffee-900 border border-leaf-500/30 text-cream-100 font-semibold text-sm hover:bg-coffee-800 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-leaf-400" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
