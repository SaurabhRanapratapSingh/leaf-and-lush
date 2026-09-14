import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu as MenuIcon, X, Sprout, ArrowRight } from 'lucide-react';
import { cafeConfig } from '../config/cafe';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, openCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu & Order', path: '/menu', isOrder: true },
    { name: 'Our Story', path: '/about' },
    { name: 'Visit Us', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-colors duration-200 ${
          isScrolled || location.pathname !== '/'
            ? 'py-2.5 sm:py-3 bg-coffee-950 border-b border-leaf-500/20 shadow-xl'
            : 'py-3 sm:py-4 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Café Brand Logo: Leaf'nLush */}
          <Link
            to="/"
            className="flex items-center gap-2 group focus:outline-none"
            aria-label={cafeConfig.name}
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-leaf-500 via-leaf-600 to-coffee-800 p-0.5 shadow-md">
              <div className="w-full h-full bg-coffee-950 rounded-[10px] flex items-center justify-center text-leaf-400">
                <Sprout className="w-4 h-4 text-leaf-400" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-base sm:text-lg font-bold tracking-tight text-cream-50 group-hover:text-leaf-300 transition-colors">
                {cafeConfig.name}
              </span>
              <span className="text-[8px] sm:text-[9px] tracking-[0.18em] uppercase text-leaf-400 font-semibold">
                Pure • Fresh • Healthy
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-coffee-900/90 border border-leaf-500/20 shadow-inner">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-1 rounded-full text-xs lg:text-sm font-medium transition-colors ${
                    link.isOrder
                      ? isActive
                        ? 'bg-gradient-to-r from-leaf-600 to-caramel-500 text-white font-bold shadow-sm'
                        : 'text-leaf-300 bg-leaf-500/15 font-semibold hover:bg-leaf-500/25'
                      : isActive
                      ? 'bg-coffee-800 text-leaf-300 font-semibold'
                      : 'text-cream-200 hover:text-leaf-300 hover:bg-coffee-800/50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Actions: Cart & Mobile Toggle */}
          <div className="flex items-center gap-2">
            
            {/* Quick Order Button on Desktop if not on /menu */}
            {location.pathname !== '/menu' && (
              <Link
                to="/menu"
                className="hidden lg:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-leaf-600 to-caramel-500 text-white shadow-sm active:scale-95 transition-transform"
              >
                <span>Order Now 🍓</span>
              </Link>
            )}

            {/* Cart Button with Count Badge */}
            <button
              onClick={() => openCart('cart')}
              className="relative flex items-center gap-1.5 px-3 sm:px-3.5 py-2 rounded-full bg-gradient-to-r from-leaf-600 to-leaf-500 text-white font-semibold shadow-md active:scale-95 transition-transform focus:outline-none min-h-[38px]"
              aria-label={`Open Cart with ${totalItems} items`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="text-xs sm:text-sm font-bold">Bag</span>

              {totalItems > 0 && (
                <span className="w-4 h-4 rounded-full bg-coffee-950 text-leaf-300 text-[10px] font-bold flex items-center justify-center shadow-inner">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-coffee-900 border border-leaf-500/20 text-cream-200 hover:text-cream-50 focus:outline-none min-h-[38px] min-w-[38px] flex items-center justify-center"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <MenuIcon className="w-4 h-4" />}
            </button>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[56px] z-30 md:hidden bg-coffee-950 border-b border-leaf-500/20 shadow-2xl p-4">
          <div className="flex flex-col gap-2">
            
            {/* Primary Prominent Mobile Action: ORDER NOW */}
            <Link
              to="/menu"
              className="py-3 px-4 rounded-2xl bg-gradient-to-r from-leaf-600 via-leaf-500 to-caramel-500 text-white font-bold text-sm shadow-md flex items-center justify-between active:scale-[0.98] transition-transform"
            >
              <div className="flex items-center gap-2">
                <span>ORDER NOW 🍓</span>
              </div>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <hr className="border-coffee-800 my-1" />

            <Link
              to="/"
              className="px-3.5 py-2.5 rounded-xl text-sm font-medium text-cream-100 hover:bg-coffee-900 hover:text-leaf-300 transition-colors flex items-center justify-between"
            >
              <span>Home</span>
              <span className="text-cream-400 text-xs">→</span>
            </Link>

            <Link
              to="/menu"
              className="px-3.5 py-2.5 rounded-xl text-sm font-medium text-cream-100 hover:bg-coffee-900 hover:text-leaf-300 transition-colors flex items-center justify-between"
            >
              <span>Menu & Subscriptions</span>
              <span className="text-cream-400 text-xs">→</span>
            </Link>

            <Link
              to="/about"
              className="px-3.5 py-2.5 rounded-xl text-sm font-medium text-cream-100 hover:bg-coffee-900 hover:text-leaf-300 transition-colors flex items-center justify-between"
            >
              <span>Our Story</span>
              <span className="text-cream-400 text-xs">→</span>
            </Link>

            <Link
              to="/contact"
              className="px-3.5 py-2.5 rounded-xl text-sm font-medium text-cream-100 hover:bg-coffee-900 hover:text-leaf-300 transition-colors flex items-center justify-between"
            >
              <span>Visit Us</span>
              <span className="text-cream-400 text-xs">→</span>
            </Link>

            <div className="pt-2 text-[11px] text-cream-400 px-3">
              <span>WhatsApp: +91 77200 28998 • Mon – Sun: 7:00 AM – 10:30 PM</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
