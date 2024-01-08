import React, { FunctionComponent, useEffect, useState } from "react";
import BackIcon from "../_icons/BackIcon";
import CartCard from "./CartCard";

const mockData = {
  Game1: { image: "Image", quantity: 1, price: 5 },
  Game2: { image: "Image", quantity: 2, price: 25 },
  Game3: { image: "Image", quantity: 3, price: 15 },
};

const USER_CART_KEY = "cartkey";

export type CartProps = {
  toggleCartDrawer: () => void;
};

const Cart: FunctionComponent<CartProps> = ({ toggleCartDrawer }) => {
  const [items, setItems] = useState([] || null);

  useEffect(() => {
    // const storedItems = localStorage.getItem("items");
    // if (storedItems) {
    //   setItems(JSON.parse(storedItems));
    //   console.log(JSON.parse(storedItems));
    // }
    localStorage.setItem(USER_CART_KEY, JSON.stringify(mockData));
  }, []);

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black opacity-50"
        onClick={toggleCartDrawer}
      ></div>
      <div className="absolute right-0 top-0 z-50 min-h-full w-[clamp(350px,30vw,500px)] bg-dark-300 p-4 xs:p-6">
        <button className="" onClick={toggleCartDrawer}>
          <BackIcon />
        </button>
        {items ? (
          <div className="flex flex-col gap-4">
            {Object.entries(mockData).map(
              ([title, { image, price, quantity }]) => (
                <CartCard
                  title={title}
                  quantity={quantity}
                  price={price}
                  key={title}
                />
              ),
            )}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Cart;
