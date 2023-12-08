import { create } from "zustand";

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   // other product properties
// }

// interface ProductStore {
//   products: Product[];
//   addProduct: (product: Product) => void;
//   removeProduct: (productId: number) => void;
// }

// const useProductStore = create<ProductStore>((set) => ({
//   products:getLocalStorage("product_key") || [],
//   addProduct: (product) =>
//     set((state) => ({ products: [...state.products, product] })),
//   removeProduct: (productId) =>
//     set((state) => ({
//       products: state.products.filter((p) => p.id !== productId),
//     })),
// }));

// export default useProductStore;

// const useStore = create((set) => ({
//   collection: getLocalStorage("collection") || [],
//   setCollection: (collection) =>
//     set((state) => {
//       setLocalStorage("collection", collection);
//       return { collection };
//     })
// }));

// const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key));
// const setLocalStorage = (key, value) =>
//   window.localStorage.setItem(key, JSON.stringify(value));

// Define types for your product and state
// interface Product {
//   id: number;
//   count:number;
//   name: string;
//   price: number;
// }

// interface AppState {
//   products: Product[];
//   setProducts: (products: Product[]) => void;
// }

// // Utility functions for LocalStorage
// const getLocalStorage = <T>(key: string): T | null => {
//   const storedValue = window.localStorage.getItem(key);
//   return storedValue ? JSON.parse(storedValue) : null;
// };

// const setLocalStorage = (key: string, value: any): void => {
//   window.localStorage.setItem(key, JSON.stringify(value));
// };

// // Create Zustand store
// const useStore = create<AppState>((set) => ({
//   products: getLocalStorage<Product[]>('products') || [],
//   setProducts: (products) => {
//     setLocalStorage('products', products);
//     set({ products });
//   },
// }));

interface Product {
  id: number;
  name: string;
  price: number;
}

interface AppState {
  products: Product[];
  setProducts: (products: Product[]) => void;
}

const getLocalStorage = <T>(key: string): T | null => {
  const storedValue = window.localStorage.getItem(key);
  return storedValue ? JSON.parse(storedValue) : null;
};

const setLocalStorage = (key: string, value: any): void => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const useTry = create<AppState>((set) => ({
  products: getLocalStorage<Product[]>("products") || [],
  setProducts: (products) => {
    setLocalStorage("products", products);
    set({ products });
  },
}));
