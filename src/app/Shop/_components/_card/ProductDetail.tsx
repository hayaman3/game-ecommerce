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
      <div className="flex flex-row gap-2">
        <Button className=" text-white " variant="ghost">
          <CartIcon className="h-4" />
        </Button>
        {/* <Button className="flex-1 bg-[#08c3df] py-1 font-medium text-black"> */}
        <Button className="flex-1 bg-[#08c3df] py-1 text-[#383838] shadow-[1.55px_4px_15.5px_0px_rgba(0,0,0,0.25)] hover:bg-white">
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default ProductDetail;
