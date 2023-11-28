import React, { FunctionComponent, ReactNode } from "react";

export type mainProps = {
  children: ReactNode;
  className?: string;
};

const Main: FunctionComponent<mainProps> = ({ children, className }) => {
  return (
    <main
      className={`mx-auto mt-20 flex w-[clamp(350px,100%,1000px)] flex-wrap items-center justify-between gap-y-10 px-4 ${className}`}
    >
      {children}
    </main>
  );
};

export default Main;
