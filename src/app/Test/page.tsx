"use client";
import React, { FunctionComponent, useEffect, useState } from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import Image from "next/image";
import axios from "axios";
import ShopSkeleton from "@/_components/Skeleton/ShopSkeleton";
import Main from "@/_components/Layout/Main";

type Data = {
  id: number;
  name: string;
  background_image: string;
  rating: number;
};

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
  const [trial, setTrial] = useState<string>("");
  const { data } = useQuery({
    queryKey: ["rawg"],

    queryFn: async () => {
      const { data } = await axios.get("/api/page_two");
      console.log(data);
      return data as Data[];
    },
  });

  useEffect(() => {
    if (!data) return;
    setTrial(data[0].background_image);
  }, [data]);

  return (
    <Main className="mt-[100px] w-[300px] p-20">
      <div>{JSON.stringify(data)}</div>
      {data &&
        data.map(({ id, name, background_image, rating }) => (
          <Image
            key={id}
            src={background_image}
            width={500}
            height={500}
            alt={name}
            // className="transition"
          />
        ))}
      <ShopSkeleton />
    </Main>
  );
};

export default Test;
