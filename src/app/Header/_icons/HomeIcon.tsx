import React, { FunctionComponent, SVGProps } from "react";
import { twMerge } from "tailwind-merge";

type TSVGElementProps = SVGProps<SVGSVGElement> & {
  className?: string;
};

const HomeIcon: FunctionComponent<TSVGElementProps> = (props, className) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      className={twMerge("text-[#bcbcbc]", className)}
      {...props}
    >
      <path
        stroke="none"
        d="M5 22h14a2 2 0 002-2v-9a1 1 0 00-.29-.71l-8-8a1 1 0 00-1.41 0l-8 8A1 1 0 003 11v9a2 2 0 002 2zm5-2v-5h4v5zm-5-8.59l7-7 7 7V20h-3v-5a2 2 0 00-2-2h-4a2 2 0 00-2 2v5H5z"
      ></path>
    </svg>
  );
};

export default HomeIcon;
