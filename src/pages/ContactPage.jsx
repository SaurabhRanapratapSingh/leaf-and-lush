import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Navigation, MessageCircle, Instagram, Sprout, ArrowRight } from 'lucide-react';
import { cafeConfig } from '../config/cafe';
import CafeStorefront3D from '../components/3d/CafeStorefront3D';
import LocationSection from '../components/LocationSection';
import WhyChooseUs from '../components/WhyChooseUs';

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-16 sm:pt-24 bg-coffee-950 text-cream-100 relative overflow-hidden">
      
      {/* Unique 3D Café Environment: "Come by. Stay awhile." */}
      <section className="py-4 sm:py-8 px-3 sm:px-6">
        <CafeStorefront3D />
      </section>

      {/* Location Details & Actions */}
      <LocationSection />

      {/* Why Choose Us Pillars */}
      <WhyChooseUs />

      {/* Direct Order Bar */}
      <section className="py-8 sm:py-12 bg-gradient-to-b from-coffee-900 to-coffee-950 text-center border-t border-coffee-800/80">
        <div className="max-w-md mx-auto px-4">
          <h3 className="font-serif text-lg sm:text-2xl font-bold text-cream-50 mb-2">
            Ready to order?
          </h3>
          <p className="text-xs text-cream-300 mb-4">
            Place your order in seconds directly to our WhatsApp barista.
          </p>
          <Link
            to="/menu"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto py-3 px-8 rounded-full bg-gradient-to-r from-caramel-500 via-caramel-400 to-leaf-500 text-coffee-950 font-bold text-sm shadow-md active:scale-95"
          >
            <span>VIEW MENU & ORDER ☕</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </main>
  );
}
