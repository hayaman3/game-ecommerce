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
      fill
      // objectFit="cover"
      alt={title}
      className="-z-10 object-cover"
    />
  );
};

export default CardImage;
