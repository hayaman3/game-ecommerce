// CartProvider.tsx
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

const USER_CART_KEY = "user_cart";

interface CartItem {
  quantity: number;
}

interface CartContextProps {
  cartQuantity: number;
  updateCartQuantity: (newQuantity: number) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

const QuantityProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartQuantity, setCartQuantity] = useState<number>(0);

  // useEffect(() => {
  //   const localStorageData = JSON.parse(
  //     localStorage.getItem(USER_CART_KEY) || "{}",
  //   ) as Record<string, CartItem>;
  //   const totalQuantity = Object.values(localStorageData).reduce(
  //     (acc, item) => acc + item.quantity,
  //     0,
  //   );

  //   setCartQuantity(totalQuantity);
  // }, []);

  const updateCartQuantity = (newQuantity: number) => {
    setCartQuantity(newQuantity);
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
