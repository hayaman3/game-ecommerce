import React, { FunctionComponent, ReactNode } from "react";

export type CartDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
};

const CartDrawer: FunctionComponent<CartDrawerProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  const drawerClasses = `fixed inset-y-0 right-0 overflow-hidden transition-transform duration-300 transform ${
    isOpen ? "translate-x-0" : "translate-x-full"
  }`;

  return (
    <div className={drawerClasses}>
      <div className="flex h-screen items-center justify-end bg-gray-800 bg-opacity-50">
        <div className="w-64 bg-white p-4">{children}</div>
        <button className="absolute right-0 top-0 p-4" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default CartDrawer;
