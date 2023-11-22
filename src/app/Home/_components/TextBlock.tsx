import React, { FunctionComponent } from "react";
import { Button } from "./Button";

export type TextBlockProps = {
  //no props
};

const TextBlock: FunctionComponent<TextBlockProps> = ({}) => {
  return (
    <div className="flex max-w-[550px] flex-col gap-8">
      <p className="text-5xl font-bold">FAKE SHOPPING CART.</p>
      <p className="text-base">
        Project made with RAWG API, not a commercial project. You can&rsquo;t
        buy any games here and all of the prices are generated to imitate a real
        game shop.
      </p>
      <div className="flex flex-row gap-4">
        <Button href={"Shop"}>Shop Now</Button>
        <Button href={"https://rawg.io/apidocs"} target={true} variant="dark">
          Rawg API
        </Button>
      </div>
    </div>
  );
};

export default TextBlock;
