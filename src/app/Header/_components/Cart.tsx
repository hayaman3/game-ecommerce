import React, { FunctionComponent } from "react";
import BackIcon from "../_icons/BackIcon";
import CartCard from "./CartCard";

const mockData = [
  {
    title: "Game1",
    image: "Image",
    price: 5,
    quantity: 1,
  },
  {
    title: "Game2",
    image: "Image",
    price: 10,
    quantity: 2,
  },
  {
    title: "Game3",
    image: "Image",
    price: 15,
    quantity: 3,
  },
];

export type CartProps = {
  toggleCartDrawer: () => void;
};

const Cart: FunctionComponent<CartProps> = ({ toggleCartDrawer }) => {
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
        <div className="flex flex-col gap-4">
          {mockData.map(({ title, image, price, quantity }) => (
            <CartCard title={title} quantity={quantity} price={price} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Cart;
