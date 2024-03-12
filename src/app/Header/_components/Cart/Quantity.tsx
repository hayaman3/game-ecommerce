"use client";
import React, { FunctionComponent, useState, useEffect } from "react";
import UpIcon from "../../_icons/UpIcon";
import DownIcon from "../../_icons/DownIcon";
import { useQuantity } from "@/_provider/QuantityProvider";

export type QuantityProps = {
  title: string;
  quantity: number;
};

const USER_CART_KEY = "cartkey";

const Quantity: FunctionComponent<QuantityProps> = ({ title, quantity }) => {
  const { cartQuantity, updateCartQuantity } = useQuantity();

  const updateLocalStorage = (newQuantity: number): void => {
    const localStorageData = JSON.parse(
      localStorage.getItem(USER_CART_KEY) || "{}",
    ) as Record<string, { quantity: number }>;

    if (localStorageData[title]) {
      localStorageData[title].quantity = newQuantity;
      localStorage.setItem(USER_CART_KEY, JSON.stringify(localStorageData));
    }

    updateCartQuantity(newQuantity);
  };

  const handleIncrease = () => {
    if (quantity === null) return;

    const updatedQuantity = quantity + 1;
    updateLocalStorage(updatedQuantity);
  };

  const handleDecrease = () => {
    if (quantity === null) return;

    const updatedQuantity = Math.max(quantity - 1, 1);
    updateLocalStorage(updatedQuantity);
  };

  return (
    <div className="g-2 flex flex-row items-center justify-center text-[#dbdbdb]">
      <span className="text-lg">{quantity}</span>
      <div className="flex flex-col ">
        <button className="" onClick={() => handleIncrease()}>
          <UpIcon />
        </button>
        <button className="" onClick={handleDecrease} disabled={quantity === 1}>
          <DownIcon
            className={`${
              quantity === 1 ? "cursor-not-allowed opacity-40" : ""
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default Quantity;
