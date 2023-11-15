import React, { FunctionComponent } from "react";
import Logo from "./_components/Logo";
import PageNav from "./_components/PageNav";
import { BadgeWithBorder } from "../Test/Test";

export type HeaderProps = {
  //no props
};

const Header: FunctionComponent<HeaderProps> = ({}) => {
  return (
    <header className="bg-transparent px-4 pb-4 pt-10">
      <div className="m-auto flex max-w-[992px] items-center justify-between gap-2">
        <Logo />
        <PageNav />
        <BadgeWithBorder />
      </div>
    </header>
  );
};

export default Header;
