import React, { FunctionComponent } from "react";
import BackIcon from "../_icons/BackIcon";
import Image from "next/image";

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
            <div
              key={title}
              className="flex w-full items-center justify-between rounded-lg bg-dark-100 p-2"
            >
              {/* {image} */}
              <div className="relative h-[150px] w-[150px]">
                <Image
                  src="/test.jpg"
                  // height="100"
                  // width="100"
                  fill
                  // objectFit="true"
                  className="rounded-lg object-cover shadow-sm"
                  alt="test"
                />
                <span className="absolute -right-[6px] bottom-0">
                  X {quantity}
                </span>
              </div>
              <div>{title}</div>
              <div>{price}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cart;
