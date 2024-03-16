import React, { createContext, useContext, useState, ReactNode } from "react";

const USER_CART_KEY = "user_cart";

interface CartItem {
  quantity: number;
}

interface CartContextProps {
  cartQuantity: number;
  updateCartQuantity: (
    updateCallback: (prevQuantity: number) => number,
  ) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

const getLocalStorageQuantity = () => {
  if (typeof window === "undefined") return 0;

  const localStorageData = JSON.parse(
    localStorage.getItem(USER_CART_KEY) || "{}",
  ) as Record<string, CartItem>;

  if (!localStorageData) return 0;

  const totalQuantity = Object.values(localStorageData).reduce(
    (acc, item) => acc + item.quantity,
    0,
  );

  return totalQuantity;
};

interface CartProviderProps {
  children: ReactNode;
}

const QuantityProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartQuantity, setCartQuantity] = useState<number>(
    getLocalStorageQuantity(),
  );

  const updateCartQuantity = (
    updateCallback: (prevQuantity: number) => number,
  ) => {
    setCartQuantity((prevQuantity) => updateCallback(prevQuantity));
  };

  return (
    <CartContext.Provider value={{ cartQuantity, updateCartQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

const useQuantity = (): CartContextProps => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
};

export { useQuantity, QuantityProvider };
