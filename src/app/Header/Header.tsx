import React, { FunctionComponent } from "react";
import Logo from "./_components/Logo";
import PageNav from "./_components/PageNav";
import CartControl from "./_components/CartControl";

export type HeaderProps = {
  //no props
};

const Header: FunctionComponent<HeaderProps> = ({}) => {
  return (
    <header className="sticky top-0 w-full bg-transparent px-4 pt-8">
      <div className="m-auto flex max-w-[1280px] items-center justify-between gap-2">
        <Logo />
        <PageNav />
        <CartControl />
      </div>
    </header>
  );
};

export default Header;
