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
  quantity?: number;
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

// import { Product } from "../types"

// export interface Product {
//   id: number
//   title: string
//   description: string
//   price: number
//   discountPercentage: number
//   rating: number
//   stock: number
//   brand: string
//   category: string
//   thumbnail: string
//   images: string[]
//   quantity?: number
//  }

// Define the interface of the Cart state
interface State {
  cart: Product[];
  totalItems: number;
  totalPrice: number;
}

// Define the interface of the actions that can be performed in the Cart
interface Actions {
  addToCart: (Item: Product) => void;
  removeFromCart: (Item: Product) => void;
}

// Initialize a default state
const INITIAL_STATE: State = {
  cart: [],
  totalItems: 0,
  totalPrice: 0,
};

// Create the store with Zustand, combining the status interface and actions
export const useCartStore = create<State & Actions>((set, get) => ({
  cart: INITIAL_STATE.cart,
  totalItems: INITIAL_STATE.totalItems,
  totalPrice: INITIAL_STATE.totalPrice,
  addToCart: (product: Product) => {
    const cart = get().cart;
    const cartItem = cart.find((item) => item.id === product.id);

    // If the item already exists in the Cart, increase its quantity
    if (cartItem) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: (item.quantity as number) + 1 }
          : item,
      );
      set((state) => ({
        cart: updatedCart,
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + product.price,
      }));
    } else {
      const updatedCart = [...cart, { ...product, quantity: 1 }];

      set((state) => ({
        cart: updatedCart,
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + product.price,
      }));
    }
  },
  removeFromCart: (product: Product) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== product.id),
      totalItems: state.totalItems - 1,
      totalPrice: state.totalPrice - product.price,
    }));
  },
}));
