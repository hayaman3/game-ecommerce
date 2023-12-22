import React, { FunctionComponent } from "react";

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
      <div className="absolute right-0 top-0 z-50 h-full w-[clamp(350px,30vw,500px)] bg-dark-300 p-4 xs:p-6">
        <button className="" onClick={toggleCartDrawer}>
          Close
        </button>
        DRAWER
      </div>
    </>
  );
};

export default Cart;
