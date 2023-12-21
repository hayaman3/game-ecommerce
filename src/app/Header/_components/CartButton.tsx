"use client";
import React, { FunctionComponent, useState } from "react";
import CartIcon from "../_icons/CartIcon";

export type CartButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const CartButton: FunctionComponent<CartButtonProps> = ({ onClick }) => {
  const [cartQuantity, setCartQuantity] = useState<number | null>(1);

  return (
    <button className="relative" onClick={onClick}>
      <CartIcon />
      {cartQuantity ? (
        <span className="absolute -right-[6px] bottom-0 flex h-4 w-4 content-center items-center justify-center rounded-full border-2 border-dark-300 bg-white p-[8px]">
          <span className="text-center text-xs font-bold text-dark-300">
            {cartQuantity}
          </span>
        </span>
      ) : (
        ""
      )}
    </button>
  );
};

export default CartButton;
