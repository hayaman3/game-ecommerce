import React, { FunctionComponent } from "react";
import CardImage from "./CardImage";
import { twMerge } from "tailwind-merge";

export type ProductCardProps = {
  title: string;
  className?: string;
};

const ProductCard: FunctionComponent<ProductCardProps> = ({
  title,
  className,
}) => {
  const priceGenerator = (title: string): string => {
    const vowels = "aeiouAEIOUyY";
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
    <div
      className={twMerge(
        "relative flex h-[22rem] w-[16rem] overflow-hidden rounded-lg border-[1px] border-solid border-transparent shadow-lg backdrop-filter",
        className,
      )}
    >
      <CardImage />
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
