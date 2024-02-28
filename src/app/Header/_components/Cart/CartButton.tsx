"use client";
import React, { FunctionComponent, useEffect, useState } from "react";
import CartIcon from "../../_icons/CartIcon";

const USER_CART_KEY = "cartkey";

export type CartButtonProps = {
  toggleCartDrawer: () => void;
};

interface CartItem {
  quantity: number; // Replace with the actual type
  // other properties...
}

const CartButton: FunctionComponent<CartButtonProps> = ({
  toggleCartDrawer,
}) => {
  // const [cartQuantity, setCartQuantity] = useState<number | null>(1);
  const [cartQuantity, setCartQuantity] = useState<number | null>(1);

  useEffect(() => {
    const localStorageData = JSON.parse(
      localStorage.getItem(USER_CART_KEY) || "{}",
    ) as Record<string, CartItem>;
    const totalQuantity = Object.values(localStorageData).reduce(
      (acc, item) => acc + item.quantity,
      0,
    );

    setCartQuantity(totalQuantity);
  }, [cartQuantity]);

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
