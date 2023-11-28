import React, { FunctionComponent } from "react";
import TiltCard from "./TiltCard";
import ProductCard from "@/_components/ProductCard";

export type HeroImageProps = {
  //no props
};

const HeroImage: FunctionComponent<HeroImageProps> = ({}) => {
  return (
    <TiltCard>
      <ProductCard className="hover:border-0 hover:border-none hover:backdrop-blur-none" />
    </TiltCard>
  );
};

export default HeroImage;
