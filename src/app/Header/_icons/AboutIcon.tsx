import React, { FunctionComponent, SVGProps } from "react";
import { twMerge } from "tailwind-merge";

type TSVGElementProps = SVGProps<SVGSVGElement> & {
  className?: string;
};

const AboutIcon: FunctionComponent<TSVGElementProps> = (props, className) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="20"
      width="20"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      className={twMerge("text-[#bcbcbc]", className)}
      {...props}
    >
      <path
        stroke="none"
        d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"
      ></path>
      <path stroke="none" d="M11 11h2v6h-2zm0-4h2v2h-2z"></path>
    </svg>
  );
};

export default AboutIcon;
