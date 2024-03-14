import React, { FunctionComponent, SVGProps } from "react";

type TSVGElementProps = SVGProps<SVGSVGElement> & {
  className?: string;
};

const CartIcon: FunctionComponent<TSVGElementProps> = (props, className) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      viewBox="0 0 256 256"
      className={className}
      {...props}
    >
      <path d="M96 216a16 16 0 11-16-16 16 16 0 0116 16zm88-16a16 16 0 1016 16 16 16 0 00-16-16zm46.44-132.75A8 8 0 00224 64H48.32l-8.11-28.4A16.08 16.08 0 0024.82 24H8a8 8 0 000 16h16.82L61 166.59A24.11 24.11 0 0084.07 184h96.11a23.89 23.89 0 0022.94-16.94l28.53-92.71a8 8 0 00-1.21-7.1z"></path>
    </svg>
  );
};

export default CartIcon;
