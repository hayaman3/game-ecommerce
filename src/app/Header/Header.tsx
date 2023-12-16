"use client";
import React, { FunctionComponent, useState } from "react";
import Logo from "./_components/Logo";
import PageNav from "./_components/PageNav";
import CartControl from "./_components/CartControl";
import CartButton from "./_components/CartButton";

export type HeaderProps = {
  //no props
};

const Header: FunctionComponent<HeaderProps> = ({}) => {
  const [openDrawer, setOpenDrawer] = useState(true);

  const toggleCartDrawer = () => {
    setOpenDrawer((prevState) => !openDrawer);
  };

  return (
    <header className="sticky top-0 z-30 w-full bg-transparent px-4 pt-8">
      <div className="m-auto flex max-w-[1280px] items-center justify-between gap-2">
        <Logo />
        <PageNav />
        {/* <CartControl /> */}
        <CartButton onClick={toggleCartDrawer} />
        {openDrawer ? (
          <>
            <div
              className="fixed inset-0 z-40 bg-black opacity-50"
              onClick={toggleCartDrawer}
            ></div>
            <div className="absolute right-0 top-0 z-50 min-h-screen w-1/4 bg-black">
              <button className="" onClick={toggleCartDrawer}>
                Close
              </button>
              DRAWER
            </div>
          </>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
