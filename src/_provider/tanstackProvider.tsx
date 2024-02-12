"use client";
import React, { FunctionComponent, ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export type tanstackProviderProps = {
  children: ReactNode;
};

const useTanstackProvider: FunctionComponent<tanstackProviderProps> = ({
  children,
}) => {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default useTanstackProvider;
