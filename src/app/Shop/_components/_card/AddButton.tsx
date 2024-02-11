import React, { FunctionComponent } from "react";

export type AddButtonProps = {
  title: string;
  onClickEvent: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const AddButton: FunctionComponent<AddButtonProps> = ({
  title,
  onClickEvent,
}) => {
  return (
    <button onClick={onClickEvent} className="bg-[#37F1A6] text-black">
      {title}
    </button>
  );
};

export default AddButton;
