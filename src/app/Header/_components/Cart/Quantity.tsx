"use client";
import React, { FunctionComponent, useState, useEffect } from "react";
import UpIcon from "../../_icons/UpIcon";
import DownIcon from "../../_icons/DownIcon";
import { useNumberStore } from "@/app/_store/useNumberStore";

export type QuantityProps = {
  title: string;
  quantity: number;
};

const USER_CART_KEY = "cartkey";

const Quantity: FunctionComponent<QuantityProps> = ({ title, quantity }) => {
  const { number, setNumber, increment, decrement } = useNumberStore();

  // useEffect(() => {
  //   const localStorageCall = localStorage.getItem(USER_CART_KEY) || "{}";
  //   const localStorageData = JSON.parse(localStorageCall);
  //   localStorageData[title].quantity = quantity;
  //   localStorage.setItem(USER_CART_KEY, JSON.stringify(localStorageData));
  // }, [number]);

  const handleIncrease = () => {
    if (quantity === null) return;
    increment();
  };

  const handleDecrease = () => {
    if (quantity === null) return;
    if (quantity !== 1) {
      decrement();
    }
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
