"use client";
import React, { FunctionComponent, useState } from "react";
import CartIcon from "../../_icons/CartIcon";

export type CartButtonProps = {
  cartQuantity: number | null;
  toggleCartDrawer: () => void;
};

const CartButton: FunctionComponent<CartButtonProps> = ({
  cartQuantity,
  toggleCartDrawer,
}) => {
  return (
    <button className="relative" onClick={toggleCartDrawer}>
      <CartIcon />
      {cartQuantity ? (
        <span className="absolute -right-[6px] bottom-0 flex h-4 w-4 content-center items-center justify-center rounded-full border-2 border-dark-300 bg-white p-2">
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
