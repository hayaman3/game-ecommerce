import Main from "@/_components/Main";
import React, { FunctionComponent } from "react";

export type shopProps = {
  //no props
};

const Shop: FunctionComponent<shopProps> = ({}) => {
  return (
    <Main>
      <span className="text-white">Shop</span>
    </Main>
  );
};

export default Shop;
