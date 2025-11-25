"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface ShopContextType {
  cart: number[];
  favorites: number[];
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  toggleFavorite: (id: number) => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export function ShopProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<number[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  const addToCart = (id: number) => {
    if (!cart.includes(id)) setCart([...cart, id]);
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter((itemId) => itemId !== id));
  };

  const toggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((fav) => fav !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <ShopContext.Provider value={{ cart, favorites, addToCart, removeFromCart, toggleFavorite }}>
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  const context = useContext(ShopContext);
  if (!context) throw new Error("useShop must be used within a ShopProvider");
  return context;
}