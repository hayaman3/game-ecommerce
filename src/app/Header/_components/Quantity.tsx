"use client";
import React, { FunctionComponent, useState, useEffect } from "react";
import UpIcon from "../_icons/UpIcon";
import DownIcon from "../_icons/DownIcon";

export type QuantityProps = {
  title: string;
  quantity: number;
};

const USER_CART_KEY = "cartkey";

const Quantity: FunctionComponent<QuantityProps> = ({
  title,
  quantity: initialQuantity,
}) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  useEffect(() => {
    const localStorageCall = localStorage.getItem(USER_CART_KEY) || "{}";
    const localStorageData = JSON.parse(localStorageCall);
    localStorageData[title].quantity = quantity;
    localStorage.setItem(USER_CART_KEY, JSON.stringify(localStorageData));
  }, [quantity]);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="g-2 flex flex-row items-center justify-center text-[#dbdbdb]">
      <span className="text-lg">{quantity}</span>
      <div className="flex flex-col ">
        <button className="" onClick={() => handleIncrease()}>
          <UpIcon />
        </button>
        <button className="" onClick={handleDecrease}>
          <DownIcon />
        </button>
      </div>
    </div>
  );
};

export default Quantity;
