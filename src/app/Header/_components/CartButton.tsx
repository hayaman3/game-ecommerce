"use client";
import React, { FunctionComponent, useState } from "react";

export type CartButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const CartButton: FunctionComponent<CartButtonProps> = ({ onClick }) => {
  const [cartQuantity, setCartQuantity] = useState<number | null>(1);

  return (
    <button className="relative" onClick={onClick}>
      {cartQuantity ? (
        <span className="absolute -right-[6px] bottom-0 flex h-5 w-5 content-center items-center justify-center rounded-full border-2 border-dark-300 bg-white">
          <span className="text-center text-xs font-bold text-dark-300">
            {cartQuantity}
          </span>
        </span>
      ) : (
        ""
      )}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2rem"
        height="2rem"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0"
        viewBox="0 0 256 256"
        className=""
      >
        <path d="M96 216a16 16 0 11-16-16 16 16 0 0116 16zm88-16a16 16 0 1016 16 16 16 0 00-16-16zm46.44-132.75A8 8 0 00224 64H48.32l-8.11-28.4A16.08 16.08 0 0024.82 24H8a8 8 0 000 16h16.82L61 166.59A24.11 24.11 0 0084.07 184h96.11a23.89 23.89 0 0022.94-16.94l28.53-92.71a8 8 0 00-1.21-7.1z"></path>
      </svg>
    </button>
  );
};

export default CartButton;
