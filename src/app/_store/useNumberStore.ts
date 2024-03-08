// import { create } from "zustand";

// interface QuantityStore {
//   quantity: number | null;
//   setQuantity: (newQuantity: number) => void;
//   increment: () => void;
//   decrement: () => void;
// }

// const USER_CART_KEY = "cartkey";
// interface CartItem {
//   image: string;
//   price: number;
//   quantity: number;
// }

// type localStorageData = {
//   quantity: number;
// };

// // const getLocalStorageQuantity = () => {
// //   const rawData = localStorage.getItem(USER_CART_KEY);
// //   if (!rawData) return null;

// //   const localStorageData: localStorageData[] = JSON.parse(rawData);

// //   const totalQuantity = Object.values(localStorageData).reduce(
// //     (acc, item) => acc + item.quantity,
// //     0,
// //   );

// //   return totalQuantity;
// // };

// const getLocalStorageData = (): localStorageData | null => {
//   const rawData = localStorage.getItem(USER_CART_KEY);
//   if (!rawData) return null;

//   return JSON.parse(rawData);
// };

// export const useQuantityStore = create<QuantityStore>((set) => ({
//   quantity: getLocalStorageQuantity(),

//   setQuantity: (newQuantity: number) => {
//     set({ quantity: newQuantity });
//   },

//   increment: () => {
//     set((state) => ({ quantity: (state.quantity || 0) + 1 }));
//   },

//   decrement: () => {
//     set((state) => ({ quantity: Math.max((state.quantity || 0) - 1, 0) }));
//   },
// }));

// const getLocalStorageQuantity = (): number | null => {
//   // const localStorageData = getLocalStorageData();
//   const localStorageData: Record<string, CartItem> | null = getLocalStorageData();

//   if (!localStorageData) return null;

//   const totalQuantity = Object.values(localStorageData).reduce(
//     (acc, item) => acc + item.quantity,
//     0,
//   );

//   return totalQuantity;
// };

// // const localStorageCall = localStorage.getItem(USER_CART_KEY) || "{}";
// // const localStorageData = JSON.parse(localStorageCall);
// // localStorageData[title].quantity = quantity;
// // localStorage.setItem(USER_CART_KEY, JSON.stringify(localStorageData));
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
