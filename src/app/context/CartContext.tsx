"use client";
import { createContext, ReactNode, useContext, useState } from "react";

type BookDetailsProps = {
  id: string;
  title: string;
  description: string;
  author: string;
  cover: string;
  genre: string;
  pages: number;
  isRented: boolean;
  stock: number;
  rentPrice: number;
  sellPrice: number;
  sold: number;
  ISBN: string;
  type: string;
};

type BookCartProps = {
  cartData: BookDetailsProps[];
  addToCart: (book: BookDetailsProps) => void;
  deleteFromCart: (id: string) => void;
};
const CartContext = createContext<BookCartProps | null>(null);

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartContextProvider");
  }
  return context;
};

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cartData, setCartData] = useState<BookDetailsProps[]>([]);

  const addToCart = (book: BookDetailsProps) => {
    setCartData((prev) => [...prev, book]);
  };
  const deleteFromCart = (id: string) => {
    setCartData((prevCart) => {
      const filteredCart = prevCart.filter((item) => item.id !== id);
      return filteredCart;
    });
  };
  return (
    <CartContext.Provider value={{ cartData, addToCart, deleteFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
