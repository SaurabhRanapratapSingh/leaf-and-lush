import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, ArrowRight, ArrowLeft, MessageSquare, Trash2, Plus, Minus, Sprout, Sparkles } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { cafeConfig } from '../../config/cafe';
import { generateWhatsAppUrl } from '../../utils/whatsapp';
import OrderForm from './OrderForm';
import OrderReviewModal from './OrderReviewModal';
import OrderSuccessModal from './OrderSuccessModal';
import confetti from 'canvas-confetti';

export default function CartDrawer() {
  const {
    cart,
    customerDetails,
    setCustomerDetails,
    isCartOpen,
    closeCart,
    checkoutStep,
    setCheckoutStep,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    totalItems,
  } = useCart();

  const [formErrors, setFormErrors] = useState({});
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  if (!isCartOpen && !isSuccessOpen) return null;

  // Validate form details
  const validateForm = () => {
    const errors = {};
    if (!customerDetails.name.trim()) {
      errors.name = 'Please enter your name';
    }
    const cleanPhone = customerDetails.phone.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      errors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (customerDetails.orderType === 'delivery' && !customerDetails.address.trim()) {
      errors.address = 'Please enter your delivery address';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleProceedToDetails = () => {
    setCheckoutStep('details');
  };

  const handleProceedToReview = () => {
    if (validateForm()) {
      setCheckoutStep('review');
    }
  };

  const handleConfirmOrder = () => {
    // Generate official WhatsApp URL
    const { url } = generateWhatsAppUrl(cart, customerDetails);

    // Fire celebration confetti
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#2E6F40', '#B97845', '#FAF4ED'],
      });
    } catch (e) {
      // Ignored
    }

    // Open WhatsApp
    window.open(url, '_blank');

    // Close drawer and show confirmation animation modal
    closeCart();
    setIsSuccessOpen(true);
    clearCart();
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 bg-coffee-950/80 backdrop-blur-sm">
        
        {/* Backdrop */}
        <div
          onClick={closeCart}
          className="absolute inset-0"
          aria-hidden="true"
        />

        {/* Bottom-Sheet Mobile Modal */}
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="relative z-10 w-full sm:max-w-lg bg-coffee-950 border-t sm:border border-caramel-500/30 rounded-t-3xl sm:rounded-3xl shadow-2xl flex flex-col max-h-[88vh] sm:max-h-[85vh] overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-3.5 sm:p-4 border-b border-coffee-800 bg-coffee-900/60">
            <div className="flex items-center gap-2">
              {checkoutStep !== 'cart' && (
                <button
                  onClick={() => setCheckoutStep(checkoutStep === 'review' ? 'details' : 'cart')}
                  className="p-1 rounded-lg text-cream-300 hover:text-cream-50 hover:bg-coffee-800 mr-1"
                  aria-label="Previous step"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
              )}
              <div className="w-7 h-7 rounded-lg bg-leaf-500/20 flex items-center justify-center text-leaf-400">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif text-sm sm:text-base font-bold text-cream-50">
                  {checkoutStep === 'cart' && 'Your Order'}
                  {checkoutStep === 'details' && 'Customer Details'}
                  {checkoutStep === 'review' && 'Review & Confirm'}
                </h3>
                <span className="text-[10px] text-cream-400 font-medium">
                  {checkoutStep === 'cart' && `${totalItems} item(s) in bag`}
                  {checkoutStep === 'details' && 'Step 2 of 3'}
                  {checkoutStep === 'review' && 'Step 3 of 3'}
                </span>
              </div>
            </div>

            <button
              onClick={closeCart}
              className="p-1.5 rounded-full bg-coffee-800 text-cream-300 hover:text-cream-50 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-3.5 sm:p-4 overflow-y-auto flex-1 scrollbar-none">
            {checkoutStep === 'cart' && (
              <>
                {cart.length > 0 ? (
                  <div className="space-y-2.5">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between p-2.5 rounded-2xl bg-coffee-900/70 border border-coffee-800/80 gap-2.5"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 rounded-xl object-cover shrink-0 border border-coffee-800"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-serif text-xs sm:text-sm font-semibold text-cream-50 truncate">
                            {item.name}
                          </h4>
                          <span className="text-xs font-bold text-leaf-400">
                            {cafeConfig.currency}{item.price * item.quantity}
                          </span>
                        </div>

                        {/* Quantity Stepper */}
                        <div className="flex items-center bg-coffee-950 rounded-lg border border-coffee-800 p-0.5 shrink-0">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 text-cream-300 hover:text-cream-100"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-5 text-center text-xs font-bold text-cream-50">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 text-cream-300 hover:text-cream-100"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    ))}

                    <div className="pt-2 flex justify-end">
                      <button
                        onClick={clearCart}
                        className="text-[11px] text-cream-400 hover:text-rose-400 transition-colors flex items-center gap-1"
                      >
                        <Trash2 className="w-3 h-3" />
                        <span>Clear bag</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="py-12 text-center">
                    <div className="w-12 h-12 rounded-full bg-coffee-900 flex items-center justify-center mx-auto mb-2 text-cream-400">
                      <ShoppingBag className="w-6 h-6" />
                    </div>
                    <h4 className="font-serif text-sm font-bold text-cream-100">Your bag is empty</h4>
                    <p className="text-xs text-cream-400 mt-1 mb-4">Add your favourite coffee, fruit bowls & snacks.</p>
                    <button
                      onClick={closeCart}
                      className="px-4 py-2 rounded-xl bg-leaf-600 text-white font-bold text-xs"
                    >
                      Browse Menu
                    </button>
                  </div>
                )}
              </>
            )}

            {checkoutStep === 'details' && (
              <OrderForm
                customerDetails={customerDetails}
                setCustomerDetails={setCustomerDetails}
                errors={formErrors}
              />
            )}

            {checkoutStep === 'review' && (
              <OrderReviewModal
                cart={cart}
                customerDetails={customerDetails}
                subtotal={subtotal}
                onConfirm={handleConfirmOrder}
              />
            )}
          </div>

          {/* Sticky Bottom Actions */}
          {cart.length > 0 && checkoutStep !== 'review' && (
            <div className="p-3.5 sm:p-4 border-t border-coffee-800 bg-coffee-900/90 flex items-center justify-between gap-3">
              <div>
                <span className="text-[10px] text-cream-400 uppercase font-medium">Subtotal</span>
                <div className="font-serif text-base sm:text-lg font-bold text-cream-50">
                  {cafeConfig.currency}{subtotal}
                </div>
              </div>

              {checkoutStep === 'cart' && (
                <button
                  onClick={handleProceedToDetails}
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-gradient-to-r from-caramel-500 via-caramel-400 to-leaf-500 text-coffee-950 font-bold text-xs sm:text-sm shadow-md active:scale-98 transition-all"
                >
                  <span>Proceed to Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}

              {checkoutStep === 'details' && (
                <button
                  onClick={handleProceedToReview}
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-gradient-to-r from-caramel-500 via-caramel-400 to-leaf-500 text-coffee-950 font-bold text-xs sm:text-sm shadow-md active:scale-98 transition-all"
                >
                  <span>Review Bill & Confirm</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          )}
        </motion.div>
      </div>

      {/* Confirmation Delivery Animation Modal */}
      <OrderSuccessModal
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        customerDetails={customerDetails}
        subtotal={subtotal}
      />
    </>
  );
}
