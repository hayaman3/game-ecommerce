import React, { FunctionComponent } from "react";

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
    </div>
  );
};

export default TextBlock;
