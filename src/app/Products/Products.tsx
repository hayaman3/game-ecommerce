import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { FunctionComponent } from "react";

export type ProductsProps = {
  //no props
};

interface Data {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Products: FunctionComponent<ProductsProps> = ({}) => {
  const { data } = useQuery({
    queryKey: ["rawg"],

    queryFn: async () => {
      const { data } = await axios.get("/api/page_two");
      console.log(data);
      return data as Data;
    },
  });
  
  return <>Products</>;
};

export default Products;
