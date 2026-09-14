import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { MenuProvider } from './context/MenuContext';
import { CartProvider } from './context/CartContext';
import { ToastProvider } from './context/ToastContext';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MenuPage from './pages/MenuPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CartDrawer from './components/Cart/CartDrawer';
import FloatingCart from './components/FloatingCart';
import FloatingCoffeeMascot from './components/FloatingCoffeeMascot';
import AdminModal from './components/Admin/AdminModal';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/menu"
          element={
            <PageTransition>
              <MenuPage />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <AboutPage />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <ContactPage />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <ToastProvider>
        <MenuProvider>
          <CartProvider>
            <div className="min-h-screen bg-coffee-950 text-cream-100 flex flex-col justify-between selection:bg-leaf-600 selection:text-cream-50">
              <Navbar />
              <AnimatedRoutes />
              <CartDrawer />
              <FloatingCart />
              <FloatingCoffeeMascot />
              <AdminModal />
              <Footer />
            </div>
          </CartProvider>
        </MenuProvider>
      </ToastProvider>
    </Router>
  );
}
