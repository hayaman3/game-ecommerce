"use client";
import React, { FunctionComponent, useState, useEffect } from "react";
import Logo from "./_components/Logo";
import PageNav from "./_components/PageNav";
import Cart from "./_components/Cart/Cart";
import CartButton from "./_components/Cart/CartButton";

const USER_CART_KEY = "cartkey";

interface CartItem {
  quantity: number;
}

const Header: FunctionComponent = ({}) => {
  const [openDrawer, setOpenDrawer] = useState(true);
  const [cartQuantity, setCartQuantity] = useState<number | null>(1);

  useEffect(() => {
    const localStorageData = JSON.parse(
      localStorage.getItem(USER_CART_KEY) || "{}",
    ) as Record<string, CartItem>;
    const totalQuantity = Object.values(localStorageData).reduce(
      (acc, item) => acc + item.quantity,
      0,
    );

    setCartQuantity(totalQuantity);
  }, [cartQuantity]);

  const toggleCartDrawer = () => {
    setOpenDrawer((prevState) => !openDrawer);
  };

  return (
    <>
      <header className="fixed inset-x-0 bottom-0 z-30 h-fit w-full bg-dark-100 px-2 py-4 shadow xs:inset-x-0 xs:top-0 xs:px-10">
        <div className="m-auto flex max-w-[1280px] items-center justify-between gap-2 ">
          <Logo />
          <div className="flex flex-row items-center justify-between gap-4">
            <PageNav />
            <CartButton
              cartQuantity={cartQuantity}
              toggleCartDrawer={toggleCartDrawer}
            />
          </div>
        </div>
      </header>
      {openDrawer ? <Cart toggleCartDrawer={toggleCartDrawer} /> : null}
    </>
  );
};

export default Header;
