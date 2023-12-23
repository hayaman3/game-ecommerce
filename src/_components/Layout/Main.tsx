import React, { FunctionComponent, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export type mainProps = {
  children: ReactNode;
  className?: string;
};

const Main: FunctionComponent<mainProps> = ({ children, className }) => {
  return (
    <main
      className={twMerge(
        "mx-auto mt-10 flex w-[clamp(320px,100%,1200px)] flex-wrap items-center justify-between gap-y-10 pb-24 xs:px-4",
        className,
      )}
    >
      {children}
    </main>
  );
};

export default Main;
