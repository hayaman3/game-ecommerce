import React, { FunctionComponent } from "react";

export type LogoProps = {
  //no props
};

const Logo: FunctionComponent<LogoProps> = ({}) => {
  return (
    <>
      <span className="text-3xl font-extrabold">LOGO.</span>
    </>
  );
};

export default Logo;
