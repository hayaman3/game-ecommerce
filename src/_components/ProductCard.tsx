import React, { FunctionComponent } from "react";
import ImageHandler from "./ImageHandler";

export type ProductCardProps = {
  //no props
};

const ProductCard: FunctionComponent<ProductCardProps> = ({}) => {
  return (
    // <>
    // 	<ImageHandler />
    // 	<div className="bg-white z-10 h">test</div>
    // </>
    <div className="relative flex h-96 w-64 overflow-hidden rounded-xl shadow-lg">
      <ImageHandler />
      {/* <div className="bg-white z-10 h">test</div> */}
      <div className="flex h-1/3 w-full bg-gray-900 bg-opacity-0 bg-clip-padding backdrop-blur-sm backdrop-filter"></div>
    </div>
  );
};

export default ProductCard;
