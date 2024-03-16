"use client";
import React, { FunctionComponent, useState } from "react";
import Logo from "./_components/Logo";
import PageNav from "./_components/PageNav";
import Cart from "./_components/Cart/Cart";
import CartButton from "./_components/Cart/CartButton";
import { QuantityProvider } from "@/_provider/QuantityProvider";

interface CartItem {
  quantity: number;
}

const Header: FunctionComponent = ({}) => {
  const [openDrawer, setOpenDrawer] = useState(true);

  const toggleCartDrawer = () => {
    setOpenDrawer((prevState) => !openDrawer);
  };

  return (
    <>
      <QuantityProvider>
        <header className="fixed inset-x-0 bottom-0 z-30 h-fit w-full bg-dark-100 px-2 py-4 shadow xs:inset-x-0 xs:top-0 xs:px-10">
          <div className="m-auto flex max-w-[1280px] items-center justify-between gap-2 ">
            <Logo />
            <div className="flex flex-row items-center justify-between gap-4">
              <PageNav />
              <CartButton toggleCartDrawer={toggleCartDrawer} />
            </div>
          </div>
        </header>
        {openDrawer ? <Cart toggleCartDrawer={toggleCartDrawer} /> : null}
      </QuantityProvider>
    </>
  );
};

export default Header;
