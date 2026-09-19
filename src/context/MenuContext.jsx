import React, { createContext, useContext } from 'react';
import { menuItems, monthlySubscriptions, categories } from '../data/menu';

const MenuContext = createContext();

export function MenuProvider({ children }) {
  return (
    <MenuContext.Provider
      value={{
        items: menuItems,
        subscriptions: monthlySubscriptions,
        categories,
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
