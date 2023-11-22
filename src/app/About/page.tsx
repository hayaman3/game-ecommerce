import Main from "@/_components/Main";
import React, { FunctionComponent } from "react";

export type aboutProps = {
  //no props
};

const About: FunctionComponent<aboutProps> = ({}) => {
  return (
    <Main>
      <span className="text-white">About</span>
    </Main>
  );
};

export default About;
