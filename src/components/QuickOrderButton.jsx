import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function QuickOrderButton() {
  const [showButton, setShowButton] = useState(false);
  const { totalItems, isCartOpen } = useCart();

  useEffect(() => {
    let ticking = false;
    let menuInView = false;

    // Use IntersectionObserver to track menu section presence without querying layout on scroll
    const menuSection = document.getElementById('menu');
    let observer;
    if (menuSection && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          menuInView = entry.isIntersecting;
          updateVisibility();
        },
        { rootMargin: '150px 0px 100px 0px' }
      );
      observer.observe(menuSection);
    }

    const updateVisibility = () => {
      const scrollY = window.scrollY;
      const shouldShow = scrollY > 500 && !menuInView;
      setShowButton(prev => (prev !== shouldShow ? shouldShow : prev));
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateVisibility);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (observer) observer.disconnect();
    };
  }, []);

  // If cart has items or cart is open, let FloatingCart have priority
  if (totalItems > 0 || isCartOpen || !showButton) return null;

  return (
    <AnimatePresence>
      <motion.a
        href="#menu"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        whileTap={{ scale: 0.94 }}
        className="fixed bottom-5 right-4 z-40 flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-caramel-500 to-caramel-600 text-coffee-950 font-bold text-xs sm:text-sm shadow-glow hover:shadow-glow-lg transition-all duration-200 border border-caramel-300/40"
        aria-label="Jump to Café Menu"
      >
        <Coffee className="w-4 h-4" />
        <span>Menu ☕</span>
      </motion.a>
    </AnimatePresence>
  );
}
