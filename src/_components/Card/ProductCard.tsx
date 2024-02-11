import React, { FunctionComponent } from "react";
import CardImage from "./CardImage";
import { twMerge } from "tailwind-merge";

export type ProductCardProps = {
  title: string;
  src: string;
};

const ProductCard: FunctionComponent<ProductCardProps> = ({ title, src }) => {
  const priceGenerator = (title: string): string => {
    const vowels = "aeiouAEIOUyYtTnNsS";
    let totalPrice = 0;

    for (let i = 0; i < title.length; i++) {
      const currentChar = title[i];
      if (vowels.includes(currentChar)) {
        totalPrice += 3.5;
      }
    }

    if (totalPrice === 0) return "$25.50";

    return `$${totalPrice}`;
  };
  const price = priceGenerator(title);

  return (
    <div className="relative flex h-[22rem] w-[16rem] overflow-hidden rounded-lg border-[1px] border-solid border-transparent shadow-lg backdrop-filter">
      <CardImage src={src} title={title} />
      <div className="absolute inset-0 z-30 flex flex-col justify-end">
        <div className=" flex h-1/4 w-full bg-[#333333] bg-opacity-50 bg-clip-padding p-4 text-white backdrop-blur-md backdrop-filter">
          <span className="text-sm">{price}</span>
          <span className="text-sm">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
