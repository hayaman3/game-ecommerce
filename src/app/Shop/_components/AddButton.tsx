import React, { FunctionComponent } from "react";

export type AddButtonProps = {
  //no props
};

const AddButton: FunctionComponent<AddButtonProps> = ({}) => {
  return (
    <button className="bg-[#37F1A6] text-black">
      {/* <Icon/> */}
      Icon
    </button>
  );
};

export default AddButton;
