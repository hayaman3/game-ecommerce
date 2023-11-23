import React, { FunctionComponent } from "react";
import Logo from "./_components/Logo";
import PageNav from "./_components/PageNav";
import { BadgeWithBorder } from "./_components/Test";

export type HeaderProps = {
  //no props
};

const Header: FunctionComponent<HeaderProps> = ({}) => {
  return (
    <header className="sticky top-0 w-full bg-transparent px-4 pt-8">
      <div className="m-auto flex max-w-[1080px] items-center justify-between gap-2">
        <Logo />
        <PageNav />
        <BadgeWithBorder />
      </div>
    </header>
  );
};

export default Header;
