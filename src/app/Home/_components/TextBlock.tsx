import React, { FunctionComponent } from "react";

export type TextBlockProps = {
  //no props
};

const TextBlock: FunctionComponent<TextBlockProps> = ({}) => {
  return (
    <div className="text-white">
      <p>Fake Shopping Cart</p>
      <p>
        Project made with RAWG API, not a commercial project. You can&rsquo;t
        buy any games here and all of the prices are generated to imitate a real
        game shop.
      </p>
    </div>
  );
};

export default TextBlock;
