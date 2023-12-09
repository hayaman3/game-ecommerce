"use client";
import Main from "@/_components/Main";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import axios from "axios";
import React, { FunctionComponent } from "react";

export type shopProps = {
  //no props
};

const queryClient = new QueryClient();

const Shop: FunctionComponent<shopProps> = ({}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Main>
        <div className="grid">
          <TrialApp />
        </div>
      </Main>
    </QueryClientProvider>
  );
};

export default Shop;

export type TrialAppProps = {
  //no props
};

interface IData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const TrialApp: FunctionComponent<TrialAppProps> = ({}) => {
  const { data } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/1",
      );
      return data as IData;
    },
  });

  console.log(data);
  return (
    <>
      <div>TrialApp</div>
      <div>{data?.title}</div>
    </>
  );
};

// async function getProducts() {
//   const response = await fetch("https://dummyjson.com/products"); // fetch the products
//   const data = await response.json(); // convert the response to json
//   setProducts(data.products); // set the products in the state to the products we fetched
// }

// const RawgAPI = async () => {
//   const response = await fetch(
//     // `https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}&dates=2019-01-01,2019-12-31&ordering=-added`
//     // `https://api.rawg.io/api/platforms?key=${process.env.RAWG_API_KEY}`
//     `https://api.rawg.io/api/stores?key=${process.env.RAWG_API_KEY}`,
//   );
//   if (response.ok) {
//     return response.json();
//   }
//   throw new Error("");
// };

// const Products: FunctionComponent<ProductsProps> = ({}) => {
//   return <>Products</>;
// };

// export default Products;
