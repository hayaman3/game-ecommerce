import React, { FunctionComponent } from "react";
import HeroImage from "./_components/HeroImage";
import TextBlock from "./_components/TextBlock";
import Main from "@/_components/Layout/Main";

export type homeProps = {
  //no props
};

const Home: FunctionComponent<homeProps> = ({}) => {
  return (
    <Main className="xs:mt-24">
      <TextBlock />
      <HeroImage />
    </Main>
  );
};

export default Home;
