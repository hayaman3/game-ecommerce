import React, { FunctionComponent } from "react";

export type ProductsProps = {
  //no props
};

async function getProducts() {
  const response = await fetch("https://dummyjson.com/products"); // fetch the products
  const data = await response.json(); // convert the response to json
  setProducts(data.products); // set the products in the state to the products we fetched
}

const RawgAPI = async () => {
  const response = await fetch(
    // `https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}&dates=2019-01-01,2019-12-31&ordering=-added`
    // `https://api.rawg.io/api/platforms?key=${process.env.RAWG_API_KEY}`
    `https://api.rawg.io/api/stores?key=${process.env.RAWG_API_KEY}`,
  );
  if (response.ok) {
    return response.json();
  }
  throw new Error("");
};

const Products: FunctionComponent<ProductsProps> = ({}) => {
  return <>Products</>;
};

export default Products;
