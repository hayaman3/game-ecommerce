import React, { FunctionComponent } from "react";
import Image from "next/image";

export type TCardImage = {};

const CardImage: FunctionComponent<TCardImage> = ({}) => {
  return (
    <Image
      src="/test.jpg"
      fill
      // objectFit="cover"
      alt="hero image"
      className="-z-10 object-cover"
    />
  );
};

export default CardImage;
