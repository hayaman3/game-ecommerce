"use client";
import React, { FunctionComponent, useEffect, useState } from "react";
import CartIcon from "../../_icons/CartIcon";
import { useQuantity } from "@/_provider/QuantityProvider";

export type CartButtonProps = {
  // cartQuantity: number;
  toggleCartDrawer: () => void;
};

type CartItem = {
  image: string;
  price: number;
  quantity: number;
};

const USER_CART_KEY = "cartkey";

const CartButton: FunctionComponent<CartButtonProps> = ({
  toggleCartDrawer,
}) => {
  const { cartQuantity, updateCartQuantity } = useQuantity();

  useEffect(() => {
    // const storedItems = GetItems();
    // if (storedItems) {
    //   setItems(storedItems);
    // }
    // const localStorageData = JSON.parse(
    //   localStorage.getItem(USER_CART_KEY) || "{}",
    // ) as Record<string, CartItem>;
    // const totalQuantity = Object.values(localStorageData).reduce(
    //   (acc, item) => acc + item.quantity,
    //   0,
    // );
  }, []);

  useEffect(() => {
    const localStorageData = JSON.parse(
      localStorage.getItem(USER_CART_KEY) || "{}",
    ) as Record<string, CartItem>;
    const totalQuantity = Object.values(localStorageData).reduce(
      (acc, item) => acc + item.quantity,
      0,
    );

    updateCartQuantity((prevQuantity) => totalQuantity);
  }, []);

  return (
    <button className="relative" onClick={toggleCartDrawer}>
      <CartIcon />
      {cartQuantity > 0 && (
        <span className="absolute -right-[6px] bottom-0 flex h-6 w-6 items-center justify-center rounded-full border-2 border-dark-300 bg-white">
          <span className="flex h-full w-full items-center justify-center text-xs font-bold text-dark-300">
            {cartQuantity}
          </span>
        </span>
      )}
    </button>
  );
};

export default CartButton;
