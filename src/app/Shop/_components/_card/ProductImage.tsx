import React, { FunctionComponent } from "react";
import Image from "next/image";

export type TCardImage = {
  src: string;
  title: string;
};

const ProductImage: FunctionComponent<TCardImage> = ({ src, title }) => {
  return (
    <Image
      src={src}
      fill
      alt={title}
      className="rounded-lg object-cover transition-transform duration-500 hover:scale-110"
    />
  );
};

export default ProductImage;
