import React, { FunctionComponent } from "react";
import Image from "next/image";

export type TCardImage = {
  imageSrc?: string;
  title?: string;
};

const CardImage: FunctionComponent<TCardImage> = ({
  imageSrc = "/test.jpg",
  title = "Image",
}) => {
  return (
    <Image
      src={imageSrc}
      fill
      // objectFit="cover"
      alt={title}
      className="-z-10 object-cover"
    />
  );
};

export default CardImage;
