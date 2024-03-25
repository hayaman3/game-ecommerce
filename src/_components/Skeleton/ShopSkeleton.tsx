import CartIcon from "@/app/Shop/_icons/CartIcon";
import React, { FunctionComponent } from "react";

export type ShopSkeletonProps = {
  //no props
};

const ShopSkeleton: FunctionComponent<ShopSkeletonProps> = ({}) => {
  return (
    <div className="mx-auto flex w-full  flex-wrap gap-8">
      <div className=" h-[22rem] w-[16rem] overflow-hidden rounded-lg border-[1px] border-solid border-transparent shadow-lg backdrop-filter">
        {/* <CardImage src={src} title={title} /> */}
        <div className="absolute bottom-0 flex h-[30%] w-full flex-col justify-between bg-[#333333] bg-opacity-50 bg-clip-padding p-4 text-white backdrop-blur-md backdrop-filter">
          <div className="flex flex-row justify-between">
            <span className="text-sm"></span>
            <span className="text-sm"></span>
          </div>
          <div className="flex flex-row gap-2">
            <div className=" text-white ">
              <CartIcon className="h-4" />
            </div>
            {/* <div className="flex-1 bg-[#08c3df] py-1 font-medium text-black"> */}
            <div className="flex-1 bg-[#08c3df] py-1 text-[#383838] shadow-[1.55px_4px_15.5px_0px_rgba(0,0,0,0.25)] hover:bg-white">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopSkeleton;
