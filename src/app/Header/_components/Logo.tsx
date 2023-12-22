import React, { FunctionComponent } from "react";

export type LogoProps = {
  //no props
};

const Logo: FunctionComponent<LogoProps> = ({}) => {
  return (
    <>
      <span className="hidden text-3xl font-extrabold xs:block">LOGO.</span>
      <span className="block text-3xl font-extrabold xs:hidden">L.</span>
    </>
  );
};

export default Logo;
