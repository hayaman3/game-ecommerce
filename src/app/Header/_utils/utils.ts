const USER_CART_KEY = "cartkey";

const updateLocalStorage = (newQuantity: number, title: string): void => {
  const localStorageData = JSON.parse(
    localStorage.getItem(USER_CART_KEY) || "{}",
  ) as Record<string, { quantity: number }>;

  if (localStorageData[title]) {
    localStorageData[title].quantity = newQuantity;
    localStorage.setItem(USER_CART_KEY, JSON.stringify(localStorageData));
  }
};
export { USER_CART_KEY, updateLocalStorage };
