import React, { FunctionComponent } from "react";
import HeroImage from "./_components/HeroImage";
import TextBlock from "./_components/TextBlock";

export type homeProps = {
  //no props
};

const Home: FunctionComponent<homeProps> = ({}) => {
  return (
    <main className="mx-auto flex w-[992px] flex-row flex-wrap items-center justify-between">
      <TextBlock />
      <HeroImage />
    </main>
  );
};

export default Home;
