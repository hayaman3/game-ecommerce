import React, { FunctionComponent, SVGProps } from "react";

type TSVGElementProps = SVGProps<SVGSVGElement> & {
  className?: string;
};

const DownIcon: FunctionComponent<TSVGElementProps> = (props, className) => {
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
        d="M16.293 9.293L12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"
      ></path>
    </svg>
  );
};

export default DownIcon;
