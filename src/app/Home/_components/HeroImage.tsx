import React, { FunctionComponent } from "react";
import TiltCard from "./TiltCard";
import ProductCard from "@/_components/ProductCard";

export type HeroImageProps = {
  //no props
};

const HeroImage: FunctionComponent<HeroImageProps> = ({}) => {
  return (
    <div className=" px-4 py-12">
      <TiltCard>
        <ProductCard className="hover:border-0 hover:border-none hover:backdrop-blur-none" />
      </TiltCard>
    </div>
  );
};

export default HeroImage;
