import React, { FunctionComponent } from "react";
import HeroImage from "./_components/HeroImage";
import TextBlock from "./_components/TextBlock";

export type homeProps = {
  //no props
};

const Home: FunctionComponent<homeProps> = ({}) => {
  return (
    <main className="mx-auto flex max-w-[992px] items-center justify-center">
      <TextBlock />
      <HeroImage />
    </main>
  );
};

export default Home;
