"use client";
import React, { FunctionComponent, useState, useEffect } from "react";

export type QuantityProps = {
  title: string;
  quantity: number;
};

const Quantity: FunctionComponent<QuantityProps> = ({
  title,
  quantity: initialQuantity,
}) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const USER_CART_KEY = "cartkey";
  const localStorageData = JSON.parse(
    localStorage.getItem(USER_CART_KEY) || "{}",
  );

  const handleQuantityChange = (title: string, newQuantity: number) => {
    // Update the quantity in the local storage data
    localStorageData[title].quantity = newQuantity;

    // Save the updated data back to local storage
    localStorage.setItem(USER_CART_KEY, JSON.stringify(localStorageData));
  };

  useEffect(() => {
    // console.log(quantity);
    // console.log("asd");
  }, [quantity]);

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div>
      <button onClick={handleDecrease}>-</button>
      <span>{quantity}</span>
      <button onClick={handleIncrease}>+</button>
    </div>
  );
};

export default Quantity;
