import React, { FunctionComponent, useEffect, useState } from "react";
import BackIcon from "../../_icons/BackIcon";
import CartCard from "./CartCard";

const USER_CART_KEY = "cartkey";

export type CartProps = {
  toggleCartDrawer: () => void;
};

type CartItem = {
  image: string;
  price: number;
  quantity: number;
};

const getItems = () => {
  const items = localStorage.getItem(USER_CART_KEY);
  if (items) {
    return JSON.parse(items);
  }
  return null;
};

const Cart: FunctionComponent<CartProps> = ({ toggleCartDrawer }) => {
  const [items, setItems] = useState({} || null);

  useEffect(() => {
    const storedItems = getItems();
    if (storedItems) {
      setItems(storedItems);
    }
  }, []);

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
