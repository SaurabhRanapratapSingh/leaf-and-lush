import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, Instagram, MessageCircle, Heart, Phone, MapPin, Mail } from 'lucide-react';
import { cafeConfig } from '../config/cafe';

export default function Footer() {
  return (
    <footer className="bg-coffee-950 border-t border-coffee-850 pt-8 pb-16 sm:pb-8 text-cream-300 relative overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-leaf-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 pb-6 border-b border-coffee-850">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-2.5">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-leaf-500 to-caramel-500 p-0.5 shadow-md">
                <div className="w-full h-full bg-coffee-950 rounded-[10px] flex items-center justify-center text-leaf-400">
                  <Sprout className="w-4 h-4" />
                </div>
              </div>
              <span className="font-serif text-lg font-bold text-cream-50 group-hover:text-caramel-300 transition-colors">
                {cafeConfig.name}
              </span>
            </Link>

            <p className="text-xs text-cream-400/90 max-w-sm leading-relaxed font-light">
              {cafeConfig.description}
            </p>

            <div className="flex items-center gap-2.5 pt-1">
              <a
                href={cafeConfig.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-xl bg-coffee-900 border border-coffee-800 flex items-center justify-center text-cream-300 hover:text-leaf-400 hover:border-leaf-500/40 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${cafeConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-xl bg-coffee-900 border border-coffee-800 flex items-center justify-center text-cream-300 hover:text-leaf-400 hover:border-leaf-500/40 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="font-serif text-xs font-bold uppercase tracking-wider text-cream-100">
              Quick Links
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <Link to="/" className="hover:text-leaf-300 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/menu" className="text-leaf-300 font-bold hover:underline">Order & Menu ☕</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-leaf-300 transition-colors">Our Story</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-leaf-300 transition-colors">Visit Us</Link>
              </li>
            </ul>
          </div>

          {/* Hours & Contact */}
          <div className="md:col-span-4 space-y-2 text-xs">
            <h4 className="font-serif text-xs font-bold uppercase tracking-wider text-cream-100">
              Sanctuary Hours
            </h4>
            <p className="text-cream-300 leading-relaxed">
              {cafeConfig.openingHoursSummary}
            </p>
            <p className="text-cream-400 pt-1">
              📍 {cafeConfig.address}
            </p>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] text-cream-400 gap-2">
          <p>© {new Date().getFullYear()} {cafeConfig.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Crafted with <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> for coffee & fruit lovers
          </p>
        </div>

      </div>

    </footer>
  );
}
