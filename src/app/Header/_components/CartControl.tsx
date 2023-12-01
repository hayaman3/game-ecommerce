"use client";
import React, { FunctionComponent, useState } from "react";
import CartButton from "./CartButton";
import CartDrawer from "./CartDrawer";

export type CartControlProps = {
  //no props
};

const CartControl: FunctionComponent<CartControlProps> = ({}) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <CartButton onClick={handleDrawerToggle} />
      <CartDrawer isOpen={isDrawerOpen} onClose={handleDrawerToggle}>
        {/* <span>adssa</span> */}
      </CartDrawer>
    </>
  );
};

export default CartControl;
