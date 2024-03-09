import { create } from "zustand";

interface QuantityStore {
  number: number | null;
  setNumber: (newQuantity: number | null) => void;
  increment: () => void;
  decrement: () => void;
}

// const USER_CART_KEY = "cartkey";

interface CartItem {
  image: string;
  price: number;
  quantity: number | null;
}

type localStorageData = {
  quantity: number;
};

export const useNumberStore = create<QuantityStore>((set) => ({
  number: null,

  setNumber: (newNumber: number | null) => {
    set({ number: newNumber });
  },

  increment: () => {
    set((state) => ({ number: (state.number || 0) + 1 }));
  },

  decrement: () => {
    set((state) => ({ number: Math.max((state.number || 0) - 1, 0) }));
  },
}));
