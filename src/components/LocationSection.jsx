import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Navigation, MessageCircle, Sprout } from 'lucide-react';
import { cafeConfig } from '../config/cafe';

export default function LocationSection() {
  return (
    <section id="location" className="py-8 sm:py-16 bg-coffee-900/60 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-8">
          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-coffee-900 border border-leaf-500/30 text-leaf-400 text-[10px] sm:text-xs font-semibold mb-1">
            <MapPin className="w-3 h-3" />
            <span>Sanctuary</span>
          </div>
          <h2 className="font-serif text-xl sm:text-3xl md:text-4xl font-bold text-cream-50">
            Visit Leaf & Lush
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-6 items-stretch max-w-4xl mx-auto">
          
          {/* Address, Hours & Actions Card */}
          <div className="lg:col-span-12 glass-card rounded-2xl sm:rounded-3xl p-4 sm:p-7 border border-leaf-500/25 space-y-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              
              {/* Address */}
              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-leaf-500/20 border border-leaf-500/30 flex items-center justify-center text-leaf-400 shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-xs sm:text-sm font-bold text-cream-50">Address</h3>
                  <p className="text-cream-200 text-[11px] sm:text-xs mt-0.5 leading-relaxed">
                    {cafeConfig.address}
                  </p>
                  <p className="text-[10px] text-leaf-400 mt-0.5">
                    {cafeConfig.landmark}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-leaf-500/20 border border-leaf-500/30 flex items-center justify-center text-leaf-400 shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-xs sm:text-sm font-bold text-cream-50">Hours</h3>
                  <p className="text-cream-200 text-[11px] sm:text-xs mt-0.5">
                    {cafeConfig.openingHoursSummary}
                  </p>
                </div>
              </div>

              {/* Direct Call / Contact */}
              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-leaf-500/20 border border-leaf-500/30 flex items-center justify-center text-leaf-400 shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-xs sm:text-sm font-bold text-cream-50">Direct Contact</h3>
                  <p className="text-cream-200 text-[11px] sm:text-xs mt-0.5">
                    <a href={`tel:${cafeConfig.phone}`} className="text-leaf-300 font-semibold hover:underline">{cafeConfig.phone}</a>
                  </p>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="flex flex-row gap-2.5 pt-3 border-t border-coffee-800">
              <a
                href={cafeConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-leaf-600 hover:bg-leaf-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all duration-200 min-h-[40px]"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions (Maps)</span>
              </a>

              <a
                href={`https://wa.me/${cafeConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-coffee-800 hover:bg-coffee-700 border border-leaf-500/20 text-cream-100 text-xs sm:text-sm font-semibold transition-colors min-h-[40px]"
              >
                <MessageCircle className="w-3.5 h-3.5 text-leaf-400" />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
