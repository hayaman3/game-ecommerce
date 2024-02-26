"use client";
// import ProductCard from "@/_components/Card/ProductCard";
import Main from "@/_components/Layout/Main";
// import {
//   QueryClient,
//   QueryClientProvider,
//   useQuery,
// } from "@tanstack/react-query";
// import axios from "axios";
// import React, { FunctionComponent } from "react";

// import { getProducts } from "../../_service/api";

// export type shopProps = {
//   //no props
// };

// const queryClient = new QueryClient();

// const Shop: FunctionComponent<shopProps> = ({}) => {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <Main>
//         <div className="grid">
//           <TrialApp />
//         </div>
//       </Main>
//     </QueryClientProvider>
//   );
// };

// export default Shop;

// export type TrialAppProps = {
//   //no props
// };

// const URL = "https://api.rawg.io/api/game";
// const PageUrl = `https://api.rawg.io/api/games?key=${process.env.RAWG_KEY}=1&page_size=3`;
// const GameUrl = `https://api.rawg.io/api/games?key=${process.env.RAWG_KEY}`;

// // interface IData {
// //   userId: number;
// //   id: number;
// //   title: string;
// //   body: string;
// // }

// const TrialApp: FunctionComponent<TrialAppProps> = ({}) => {
//   const { data } = useQuery({
//     queryKey: ["rawgAPI"],
//     queryFn: async () => {
//       const { data } = await axios.get(
//         // "https://jsonplaceholder.typicode.com/posts/1",
//         GameUrl,
//       );
//       return data;
//     },
//   });

//   // const { data, isLoading, isError } = useQuery({
//   //   queryKey: ["rawgAPI"],
//   //   queryFn: getProducts,
//   // });

//   // if (isLoading) {
//   //   return <p>Loading...</p>;
//   // }

//   // if (isError) {
//   //   return <p>Error loading products</p>;
//   // }

//   console.log(data);
//   console.log("asd");
//   console.log(PageUrl);
//   return (
//     <>
//       <div>Shop</div>
//       <div>{JSON.stringify(data)}</div>
//     </>
//   );
// };

// // async function getProducts() {
// //   const response = await fetch("https://dummyjson.com/products"); // fetch the products
// //   const data = await response.json(); // convert the response to json
// //   setProducts(data.products); // set the products in the state to the products we fetched
// // }

// // const RawgAPI = async () => {
// //   const response = await fetch(
// //     // `https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}&dates=2019-01-01,2019-12-31&ordering=-added`
// //     // `https://api.rawg.io/api/platforms?key=${process.env.RAWG_API_KEY}`
// //     `https://api.rawg.io/api/stores?key=${process.env.RAWG_API_KEY}`,
// //   );
// //   if (response.ok) {
// //     return response.json();
// //   }
// //   throw new Error("");
// // };

// // export default Products;

import React, { FunctionComponent, useEffect, useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import Search from "./_components/Search";
import ProductCard from "./_components/ProductCard";

const mockData = [
  { title: "Cyberpunk2077", src: "/test.jpg" },
  { title: "Cyber078", src: "/test.jpg" },
  { title: "asderpunk2077", src: "/test.jpg" },
  { title: "Gpybeunk2", src: "/test.jpg" },
  { title: "Cpsdak2077", src: "/test.jpg" },
];
export type TShopProps = {
  //no props
};

const Shop: FunctionComponent<TShopProps> = ({}) => {
  // const { isLoading, error, data } = useQuery('todos', fetchTodos);

  // const { data, isLoading, isError } = useQuery({
  //   queryKey: ["rawgAPI"],
  //   // queryFn: getProducts,
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
