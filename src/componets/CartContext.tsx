"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import axios from "axios";

interface CartContextProps {
  cartItems: any[];
  addToCart: (item: any) => void;
  removeFromCart: (item: any) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get("http://localhost:4000/cart");
        setCartItems(response.data.data);
      } catch (err) {
        setError("Failed to load cart data");
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);
  
  const addToCart = async (item: any) => {
    try {
      const response = await axios.post("http://localhost:4000/cart", item);

      setCartItems((prevItems) => [...prevItems, response.data.data]);
    } catch (err) {
      console.error("Failed to add item to cart", err);
    }
  };

  const removeFromCart = (item: any) => {
    setCartItems((prevItems) =>
      prevItems.filter((cartItem) => cartItem.id !== item.id)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  if (loading) {
    return <div>Loading cart...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
``