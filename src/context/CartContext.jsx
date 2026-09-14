import React, { createContext, useContext, useState, useEffect } from 'react';
import { useMenu } from './MenuContext';
import { menuItems as defaultMenuItems } from '../data/menu';

const CartContext = createContext();

export function CartProvider({ children }) {
  const { items: allMenuItems } = useMenu();

  // Initialize cart from localStorage with validation against current active menu catalogue
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem('leaf_lush_cart');
      if (!savedCart) return [];
      const parsed = JSON.parse(savedCart);
      if (!Array.isArray(parsed)) return [];

      return parsed
        .map((savedItem) => {
          const official = (allMenuItems || defaultMenuItems).find((m) => m.id === savedItem.id);
          if (!official) return null;
          const sanitizedQty = Math.max(1, Math.min(50, Math.floor(Number(savedItem.quantity) || 1)));
          return {
            id: official.id,
            name: official.name,
            price: Number(official.price),
            category: official.category,
            image: official.image,
            quantity: sanitizedQty,
          };
        })
        .filter(Boolean);
    } catch (e) {
      return [];
    }
  });

  const [customerDetails, setCustomerDetails] = useState(() => {
    try {
      const savedDetails = localStorage.getItem('leaf_lush_customer');
      return savedDetails
        ? JSON.parse(savedDetails)
        : {
            name: '',
            phone: '',
            orderType: 'delivery',
            address: '',
            instructions: '',
          };
    } catch (e) {
      return {
        name: '',
        phone: '',
        orderType: 'delivery',
        address: '',
        instructions: '',
      };
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState('cart'); // 'cart' | 'details' | 'review'
  const [lastOrder, setLastOrder] = useState(null);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('leaf_lush_cart', JSON.stringify(cart));
    } catch (e) {}
  }, [cart]);

  // Sync customer details
  useEffect(() => {
    try {
      localStorage.setItem('leaf_lush_customer', JSON.stringify(customerDetails));
    } catch (e) {}
  }, [customerDetails]);

  // Add to Cart
  const addToCart = (product, qty = 1) => {
    const official = (allMenuItems || defaultMenuItems).find((m) => m.id === product.id) || product;
    if (!official) return;

    const validatedQty = Math.max(1, Math.min(50, Math.floor(Number(qty) || 1)));

    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === official.id);
      if (existing) {
        const newQty = Math.min(50, existing.quantity + validatedQty);
        return prevCart.map((item) =>
          item.id === official.id ? { ...item, quantity: newQty, price: Number(official.price) } : item
        );
      }
      return [
        ...prevCart,
        {
          id: official.id,
          name: official.name,
          price: Number(official.price),
          category: official.category,
          image: official.image,
          quantity: validatedQty,
        },
      ];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, newQty) => {
    const sanitized = Math.floor(Number(newQty) || 0);
    if (sanitized <= 0) {
      removeFromCart(productId);
      return;
    }
    const official = (allMenuItems || defaultMenuItems).find((m) => m.id === productId);
    const priceToUse = official ? Number(official.price) : undefined;

    setCart((prev) =>
      prev.map((item) => {
        if (item.id === productId) {
          return {
            ...item,
            quantity: Math.min(50, sanitized),
            price: priceToUse !== undefined ? priceToUse : item.price,
          };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getItemQuantity = (productId) => {
    const item = cart.find((i) => i.id === productId);
    return item ? item.quantity : 0;
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const openCart = (step = 'cart') => {
    setCheckoutStep(step);
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        customerDetails,
        setCustomerDetails,
        isCartOpen,
        checkoutStep,
        setCheckoutStep,
        lastOrder,
        setLastOrder,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getItemQuantity,
        subtotal,
        totalItems,
        openCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
