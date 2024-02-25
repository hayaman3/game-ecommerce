import { Button } from "@/app/Shop/_components/_card/Button";
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
    <div className="absolute bottom-0 flex h-[30%] w-full flex-col justify-between bg-[#333333] bg-opacity-50 bg-clip-padding p-4 text-white backdrop-blur-md backdrop-filter">
      <div className="flex flex-row justify-between">
        <span className="text-sm">{title}</span>
        <span className="text-sm">{price}</span>
      </div>
      <div className="flex flex-row gap-4">
        <Button className="outline-[#808080]" variant="ghost">
          <CartIcon className="h-4" />
        </Button>
        <Button className="flex-1">Buy Now</Button>
      </div>
    </div>
  );
};

export default ProductDetail;
