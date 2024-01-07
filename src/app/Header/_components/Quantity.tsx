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

  useEffect(() => {
    localStorage.setItem("quantity", quantity.toString());
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
