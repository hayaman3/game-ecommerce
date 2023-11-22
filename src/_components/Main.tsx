import React, { FunctionComponent, ReactNode } from "react";

export type mainProps = {
  children: ReactNode;
  className?: string;
};

const Main: FunctionComponent<mainProps> = ({ children, className }) => {
  return (
    <main
      className={`mx-auto mt-20 flex w-[992px] flex-row flex-wrap items-center justify-between ${className}`}
    >
      {children}
    </main>
  );
};

export default Main;
