import React, { FunctionComponent } from "react";
import Image from "next/image";

export type TCardImage = {
  src: string;
  title: string;
};

const CardImage: FunctionComponent<TCardImage> = ({
  src = "/test.jpg",
  title = "Image",
}) => {
  return (
    <Image
      src={src}
      // fill
      width={500}
      height={256}
      // objectFit="cover"
      layout="responsive"
      alt={title}
      className=" object-cover hover:scale-150 hover:cursor-pointer hover:border-[59px] hover:border-red-100"
    />
  );
};

export default CardImage;
