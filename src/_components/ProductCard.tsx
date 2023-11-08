import React, { FunctionComponent } from "react";
import ImageHandler from "./ImageHandler";
import { twMerge } from "tailwind-merge";

export type ProductCardProps = {
  className?: string;
};

const ProductCard: FunctionComponent<ProductCardProps> = ({ className }) => {
  return (
    <div
      className={twMerge(
        "relative flex h-96 w-64 overflow-hidden rounded-lg border-[1px] border-solid border-transparent shadow-lg backdrop-filter hover:border-deep-purple-400 hover:backdrop-blur-lg",
        className,
      )}
    >
      <ImageHandler />
      <div className="absolute inset-0 flex flex-col justify-end">
        <div className="flex h-1/4 w-full bg-gray-900 bg-opacity-50 bg-clip-padding p-4 text-white backdrop-blur-md backdrop-filter">
          <span className="text-sm">Cyberpunk 2077</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
