import { create } from "zustand";

const useStore = create((set) => ({
  collection: getLocalStorage("collection") || [],
  setCollection: (collection) =>
    set((state) => {
      setLocalStorage("collection", collection);
      return { collection };
    }),
}));

const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key));
const setLocalStorage = (key, value) =>
  window.localStorage.setItem(key, JSON.stringify(value));

// type Store = {
//   count: number;
//   increment: () => void;
//   decrement: () => void;
// };

// const useStore = create<Store>((set) => ({
//   count: 0,
//   increment: () => set((state) => ({ count: state.count + 1 })),
//   decrement: () => set((state) => ({ count: state.count - 1 })),
// }));

// export default useStore;
