"use client";
import React, { FunctionComponent } from "react";

export type QuantityProps = {
  quantity: number;
};

const Quantity: FunctionComponent<QuantityProps> = ({ quantity }) => {
  onclick;
  return (
    <div>
      <button>-</button>
      <span>{quantity}</span>
      <button>+</button>
    </div>
  );
};

export default Quantity;
