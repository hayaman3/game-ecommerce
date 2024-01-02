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
              className="flex w-full items-center justify-between rounded-lg bg-dark-100 p-4 drop-shadow-md"
            >
              <div className="relative flex h-[150px] w-[150px] overflow-hidden rounded-lg border-[1px] border-solid border-transparent drop-shadow-md">
                <Image
                  src="/test.jpg"
                  fill
                  className="overflow-hidden rounded-lg object-cover shadow-sm "
                  alt={title}
                />
                <div className="absolute bottom-0 w-full bg-[#333333] bg-opacity-50 bg-clip-padding p-1 text-center backdrop-blur-md backdrop-filter">
                  <span className="overflow-hidden text-ellipsis text-xs">
                    {title}
                  </span>
                </div>
              </div>

              <button>-</button>
              <span>{quantity}</span>
              <button>+</button>
              <div>{price}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cart;
