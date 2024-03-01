import React, {
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import BackIcon from "../../_icons/BackIcon";
import CartCard from "./CartCard";

const USER_CART_KEY = "cartkey";

export type CartProps = {
  toggleCartDrawer: () => void;
  setCartQuantity: Dispatch<SetStateAction<number | null | undefined>>;
};

type CartItem = {
  image: string;
  price: number;
  quantity: number;
};

const Cart: FunctionComponent<CartProps> = ({
  toggleCartDrawer,
  setCartQuantity,
}) => {
  const [items, setItems] = useState({} || null);

  useEffect(() => {
    const storedItems = GetItems();
    if (storedItems) {
      setItems(storedItems);
    }
    const localStorageData = JSON.parse(
      localStorage.getItem(USER_CART_KEY) || "{}",
    ) as Record<string, CartItem>;
    const totalQuantity = Object.values(localStorageData).reduce(
      (acc, item) => acc + item.quantity,
      0,
    );

    setCartQuantity(totalQuantity);
  }, []);

  const GetItems = () => {
    const items = localStorage.getItem(USER_CART_KEY);
    if (items) {
      return JSON.parse(items);
    }
    return null;
  };

  return (
    <>
      <div
        className="fixed inset-0 z-40 h-full bg-black opacity-50"
        onClick={toggleCartDrawer}
      ></div>
      <div className="fixed right-0 top-0 z-50 h-full w-[clamp(350px,30vw,400px)] bg-dark-300 p-4 xs:p-6">
        <button className="mb-8" onClick={toggleCartDrawer}>
          <BackIcon />
        </button>
        {items ? (
          <div className="flex flex-col gap-4">
            {Object.entries(items).map(([title, item]) => {
              const { image, price, quantity } = item as CartItem;
              return (
                <CartCard
                  image={image}
                  title={title}
                  quantity={quantity}
                  price={price}
                  key={title}
                />
              );
            })}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Cart;
