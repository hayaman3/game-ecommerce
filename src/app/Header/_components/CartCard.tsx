import React, { FunctionComponent } from "react";
import Image from "next/image";
import Quantity from "./Quantity";

export type CartCardProps = {
  title: string;
  quantity: number;
  price: number;
};

const CartCard: FunctionComponent<CartCardProps> = ({
  title,
  quantity,
  price,
}) => {
  return (
    <div className="flex w-full items-center justify-between rounded-lg bg-dark-100 p-4 drop-shadow-md">
      <div className="relative flex h-[150px] w-[150px] overflow-hidden rounded-lg border-[1px] border-solid border-transparent drop-shadow-md">
        <Image
          src="/test.jpg"
          fill
          className="overflow-hidden rounded-lg object-cover shadow-sm"
          alt={title}
        />
        <div className="absolute bottom-0 w-full bg-[#333333] bg-opacity-50 bg-clip-padding p-1 text-center backdrop-blur-md backdrop-filter">
          <span className="overflow-hidden text-ellipsis text-xs">{title}</span>
        </div>
      </div>
      <Quantity title={title} quantity={quantity} />
      <div>{price}</div>
    </div>
  );
};

export default CartCard;
