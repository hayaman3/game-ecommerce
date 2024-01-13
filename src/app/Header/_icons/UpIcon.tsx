import React, { FunctionComponent, SVGProps } from "react";

type TSVGElementProps = SVGProps<SVGSVGElement> & {
  className?: string;
};

const UpIcon: FunctionComponent<TSVGElementProps> = (props, className) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="20"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      className={className}
      {...props}
    >
      <path
        stroke="none"
        d="M6.293 13.293l1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z"
      ></path>
    </svg>
  );
};

export default UpIcon;
