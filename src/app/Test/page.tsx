// import React, { FunctionComponent } from 'react';

// export type pageProps = {
// 	//no props
// };

// const RawgAPI = async () => {
// 	const response = await fetch(
// 		// `https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}&dates=2019-01-01,2019-12-31&ordering=-added`
// 		// `https://api.rawg.io/api/platforms?key=${process.env.RAWG_API_KEY}`
// 		`https://api.rawg.io/api/stores?key=${process.env.RAWG_API_KEY}`
// 	);
// 	if (response.ok) {
// 		return response.json();
// 	}
// 	throw new Error('');
// };

// // console.log(process.env.RAWG_API_KEY);
// // console.log('TEST');
// RawgAPI().then(console.log).catch(console.log);

// const page: FunctionComponent<pageProps> = ({}) => {
// 	return (
// 		<div>
// 			<h1>TEST</h1>
// 			<span>{}</span>
// 		</div>
// 	);
// };

// export default page;
// // https://api.rawg.io/api/stores?key${process.env.RAWG_API_KEY}
// import React, { FunctionComponent } from "react";
// import ProductCard from "@/_components/ProductCard";
// import CartButton from "../Header/_components/CartButton";
// export type pageProps = {
//   //no props
// };

// const page: FunctionComponent<pageProps> = ({}) => {
//   return (
//     <main className="grid place-items-center">
//       <ProductCard />
//       <CartButton />
//     </main>
//   );
// };

// export default page;
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
  // const { isLoading, error, data } = useQuery('data', fetchTodos);

  const { data } = useQuery({
    // queryKey: ["rawgAPI"],
    queryKey: ["asd"],

    queryFn: async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/1",
      );
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
