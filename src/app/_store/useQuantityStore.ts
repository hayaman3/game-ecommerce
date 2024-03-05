import { create } from "zustand";

interface QuantityStore {
  quantity: number | null;
  setQuantity: (newQuantity: number) => void;
}

const USER_CART_KEY = "cartkey";
interface CartItem {
  quantity: number;
}

type localStorageData = {
  quantity: number;
};

const getLocalStorageQuantity = () => {
  const rawData = localStorage.getItem(USER_CART_KEY);
  if (!rawData) return null;

  const localStorageData: localStorageData[] = JSON.parse(rawData);

  const totalQuantity = Object.values(localStorageData).reduce(
    (acc, item) => acc + item.quantity,
    0,
  );

  return totalQuantity;
};

export const useQuantityStore = create<QuantityStore>((set) => ({
  quantity: getLocalStorageQuantity(),

  setQuantity: (newQuantity: number) => {
    set({ quantity: newQuantity });
  },
}));

// const localStorageCall = localStorage.getItem(USER_CART_KEY) || "{}";
// const localStorageData = JSON.parse(localStorageCall);
// localStorageData[title].quantity = quantity;
// localStorage.setItem(USER_CART_KEY, JSON.stringify(localStorageData));

export { getLocalStorageQuantity };
