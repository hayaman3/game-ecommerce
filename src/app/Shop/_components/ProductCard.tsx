import React, { FunctionComponent } from "react";
import CardImage from "./_card/ProductImage";
import ProductDetail from "./_card/ProductDetail";
import priceGenerator from "../_utils/priceGenerator";

export type ProductCardProps = {
  title: string;
  src: string;
};

const ProductCard: FunctionComponent<ProductCardProps> = ({ title, src }) => {
  const price = priceGenerator(title);

  return (
    <div className="relative h-[22rem] w-[16rem] overflow-hidden rounded-lg border-[1px] border-solid border-transparent shadow-lg backdrop-filter">
      <CardImage src={src} title={title} />
      <ProductDetail price={price} title={title} />
    </div>
  );
};

export default ProductCard;
