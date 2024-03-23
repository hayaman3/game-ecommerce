"use client";
import React, { FunctionComponent } from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import axios from "axios";

interface Data {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const queryClient = new QueryClient();

const Test: FunctionComponent = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Page />
      </QueryClientProvider>
    </>
  );
};

const Page: FunctionComponent = () => {
  const { data } = useQuery({
    queryKey: ["rawg"],

    queryFn: async () => {
      const { data } = await axios.get("/api/page_two");
      console.log(data);
      return data as Data;
    },
  });

  return (
    <main className="mt-[100px] w-[300px] p-20">
      <div>{JSON.stringify(data)}</div>
    </main>
  );
};

export default Test;
