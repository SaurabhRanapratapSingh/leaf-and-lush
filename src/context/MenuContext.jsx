import React, { createContext, useContext, useState, useEffect } from 'react';
import { menuItems as defaultMenuItems, monthlySubscriptions as defaultSubscriptions, categories as defaultCategories } from '../data/menu';

const MenuContext = createContext();

export function MenuProvider({ children }) {
  // Load menu items from localStorage or fallback to defaults
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem('leaf_lush_custom_menu');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {}
    return defaultMenuItems;
  });

  // Load subscriptions from localStorage or fallback to defaults
  const [subscriptions, setSubscriptions] = useState(() => {
    try {
      const saved = localStorage.getItem('leaf_lush_subscriptions');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {}
    return defaultSubscriptions;
  });

  // Admin password state (null if not created yet)
  const [adminPass, setAdminPass] = useState(() => {
    try {
      return localStorage.getItem('leaf_lush_admin_pass') || null;
    } catch (e) {
      return null;
    }
  });

  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('leaf_lush_custom_menu', JSON.stringify(items));
    } catch (e) {}
  }, [items]);

  useEffect(() => {
    try {
      localStorage.setItem('leaf_lush_subscriptions', JSON.stringify(subscriptions));
    } catch (e) {}
  }, [subscriptions]);

  useEffect(() => {
    try {
      if (adminPass) {
        localStorage.setItem('leaf_lush_admin_pass', adminPass);
      }
    } catch (e) {}
  }, [adminPass]);

  // Setup / Create new password for the first time
  const setupPassword = (newPassword) => {
    const clean = newPassword.trim();
    setAdminPass(clean);
    setIsAdminLoggedIn(true);
    try {
      localStorage.setItem('leaf_lush_admin_pass', clean);
    } catch (e) {}
  };

  // Admin actions: Add item
  const addItem = (newItem) => {
    const itemWithId = {
      ...newItem,
      id: newItem.id || `item-${Date.now()}`,
      price: Number(newItem.price) || 89,
      rating: 5.0,
      reviewsCount: 1,
    };
    setItems((prev) => [itemWithId, ...prev]);
    return itemWithId;
  };

  // Admin actions: Edit existing item
  const editItem = (id, updatedFields) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              ...updatedFields,
              price: updatedFields.price !== undefined ? Number(updatedFields.price) : item.price,
            }
          : item
      )
    );
  };

  // Admin actions: Delete item
  const deleteItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Reset to original default catalogue
  const resetMenuToDefault = () => {
    setItems(defaultMenuItems);
    setSubscriptions(defaultSubscriptions);
    localStorage.removeItem('leaf_lush_custom_menu');
    localStorage.removeItem('leaf_lush_subscriptions');
  };

  // Update Subscription Plan Price
  const updateSubscriptionPrice = (id, newMonthlyPrice) => {
    setSubscriptions((prev) =>
      prev.map((sub) => (sub.id === id ? { ...sub, monthlyPrice: Number(newMonthlyPrice) } : sub))
    );
  };

  return (
    <MenuContext.Provider
      value={{
        items,
        subscriptions,
        categories: defaultCategories,
        isAdminLoggedIn,
        setIsAdminLoggedIn,
        adminPass,
        isPasswordSet: Boolean(adminPass),
        setupPassword,
        setAdminPass,
        addItem,
        editItem,
        deleteItem,
        resetMenuToDefault,
        updateSubscriptionPrice,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
}
