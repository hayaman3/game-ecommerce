"use client";
import ProductCard from "@/_components/Card/ProductCard";
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

import React, { FunctionComponent } from "react";

export type TShopProps = {
  //no props
};

const Shop: FunctionComponent<TShopProps> = ({}) => {
  return (
    <Main className="xs:mt-24">
      <div className="grid">
        <ProductCard title={"Cyberpunk 2077"} />
      </div>
    </Main>
  );
};

export default Shop;
