"use client";
import Main from "@/_components/Layout/Main";
import React, { FunctionComponent, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import Search from "./_components/Search";
import ProductCard from "./_components/ProductCard";
import axios from "axios";

const mockData = [
  { title: "Cyberpunk2077", src: "/test.jpg" },
  { title: "Cyber078", src: "/test.jpg" },
  { title: "asderpunk2077", src: "/test.jpg" },
  { title: "Gpybeunk2", src: "/test.jpg" },
  { title: "Cpsdak2077", src: "/test.jpg" },
];

interface Data {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Shop: FunctionComponent = ({}) => {
  // const { isLoading, error, data } = useQuery('data', fetchTodos);

  // const { data } = useQuery({
  //   // queryKey: ["rawgAPI"],
  //   queryKey: ["asd"],

  //   queryFn: async () => {
  //     const { data } = await axios.get(
  //       "https://jsonplaceholder.typicode.com/posts/1",
  //       // GameUrl,
  //     );
  //     return data as Data;
  //   },
  // });

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

  // if (isError) {
  //   return <p>Error loading products</p>;
  // }

  const searchParams = useSearchParams();

  const checkSearchParams = () => {
    const initialSearchQuery = searchParams.get("search");

    if (initialSearchQuery) {
      const filteredSearchResults = mockData.filter((item) =>
        item.title.toLowerCase().includes(initialSearchQuery.toLowerCase()),
      );
      return filteredSearchResults;
    }
    return mockData;
  };

  const [filteredData, setFilteredData] = useState(checkSearchParams);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = event.target.value;
    const filteredResults = mockData.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setFilteredData(filteredResults);
  };

  return (
    <Main className="xs:mt-24">
      <Search handleChange={handleChange} />
      {/* <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))]  gap-8"> */}
      <div className="mx-auto flex w-full  flex-wrap gap-8">
        {filteredData.map(({ title, src }) => (
          <ProductCard key={title} title={title} src={src} />
        ))}
      </div>
    </Main>
  );
};

export default Shop;
