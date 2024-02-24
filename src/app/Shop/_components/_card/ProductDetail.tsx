import { Button } from "@/_components/Button";
import React, { FunctionComponent } from "react";
import CartIcon from "../../_icons/CartIcon";
// import Button from "./Button";

export type ProductDetailProps = {
  price: string;
  title: string;
};

const ProductDetail: FunctionComponent<ProductDetailProps> = ({
  price,
  title,
}) => {
  return (
    <div className="absolute bottom-0 flex h-1/4 w-full bg-[#333333] bg-opacity-50 bg-clip-padding p-4 text-white backdrop-blur-md backdrop-filter">
      <div className="flex">
        <span className="text-sm">{title}</span>
        <span className="text-sm">{price}</span>
      </div>
      <div className="flex flex-row gap-2">
        <Button>
          <CartIcon />
        </Button>
        <Button>Buy Now</Button>
      </div>
    </div>
  );
};

export default ProductDetail;
