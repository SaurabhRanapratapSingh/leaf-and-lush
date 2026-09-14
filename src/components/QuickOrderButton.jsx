import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function QuickOrderButton() {
  const [showButton, setShowButton] = useState(false);
  const { totalItems, isCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down past 450px and before reaching the menu or footer
      const scrollY = window.scrollY;
      const menuSection = document.getElementById('menu');
      if (!menuSection) return;

      const menuTop = menuSection.offsetTop;
      const menuHeight = menuSection.offsetHeight;

      // Check if user is currently inside the menu section
      const isInMenu = scrollY >= (menuTop - 200) && scrollY <= (menuTop + menuHeight - 100);

      if (scrollY > 500 && !isInMenu) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
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
