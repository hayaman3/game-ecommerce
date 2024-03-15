"use client";
import React, { FunctionComponent, useState } from "react";
import UpIcon from "../../_icons/UpIcon";
import DownIcon from "../../_icons/DownIcon";
import { useQuantity } from "@/_provider/QuantityProvider";
import { updateLocalStorage } from "../../_utils/utils";

export type QuantityProps = {
  title: string;
  quantity: number;
};

const Quantity: FunctionComponent<QuantityProps> = ({ title, quantity }) => {
  const { updateCartQuantity } = useQuantity();
  const [displayQuantity, setDisplayQuantity] = useState<number>(quantity);

  const updateQuantity = (updatedQuantity: number) => {
    setDisplayQuantity(updatedQuantity);
    updateLocalStorage(updatedQuantity, title);
  };

  const handleIncrease = () => {
    if (displayQuantity === null) return;
    const updatedQuantity = displayQuantity + 1;
    updateQuantity(updatedQuantity);
    updateCartQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    if (displayQuantity === null) return;
    const updatedQuantity = Math.max(displayQuantity - 1, 1);
    updateQuantity(updatedQuantity);
    updateCartQuantity((prevQuantity) => prevQuantity - 1);
  };

  return (
    <div className="g-2 flex flex-row items-center justify-center text-[#dbdbdb]">
      <span className="text-lg">{displayQuantity}</span>
      <div className="flex flex-col ">
        <button className="" onClick={() => handleIncrease()}>
          <UpIcon />
        </button>
        <button
          className=""
          onClick={handleDecrease}
          disabled={displayQuantity === 1}
        >
          <DownIcon
            className={`${
              displayQuantity === 1 ? "cursor-not-allowed opacity-40" : ""
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default Quantity;
