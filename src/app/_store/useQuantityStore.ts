import { create } from "zustand";

interface QuantityStore {
  quantity: number | null;
  setQuantity: (newQuantity: number) => void;
}

const USER_CART_KEY = "cartkey";
interface CartItem {
  quantity: number;
}

const getLocalStorageQuantity = () => {
  if (!localStorage.getItem(USER_CART_KEY)) return null;

  const localStorageData = JSON.parse(
    localStorage.getItem(USER_CART_KEY) || "{}",
  ) as Record<string, CartItem>;

  const totalQuantity = Object.values(localStorageData).reduce(
    (acc, item) => acc + item.quantity,
    0,
  );
  return totalQuantity;
};

export const useQuantityStore = create<QuantityStore>((set) => ({
  quantity: getLocalStorageQuantity(),

  setQuantity: (newQuantity: number) => {
    // TODO
  },
}));
