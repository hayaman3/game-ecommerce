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
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleCartDrawer = () => {
    setOpenDrawer((prevState) => !openDrawer);
  };

  return (
    <>
      <header className="xs:top-0 xs:inset-x-0 xs:px-10 fixed inset-x-0 bottom-0 z-30 h-fit w-full bg-dark-100 px-2 py-4 shadow">
        <div className="m-auto flex max-w-[1280px] items-center justify-between gap-2 ">
          <Logo />
          <div className="flex flex-row items-center justify-between gap-4">
            <PageNav />
            <CartButton onClick={toggleCartDrawer} />
          </div>
        </div>
      </header>
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
    </>
  );
};

export default Header;
