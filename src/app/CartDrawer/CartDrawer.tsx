"use client";
import React, { FunctionComponent, useState } from "react";

import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";

// function DrawerPlacement() {
//   const [openRight, setOpenRight] = React.useState(false);

//   const openDrawerRight = () => setOpenRight(true);
//   const closeDrawerRight = () => setOpenRight(false);

//   return (
//     <React.Fragment>
//       <div className="flex flex-wrap gap-4">
//         <Button onClick={openDrawerRight}>Open Drawer Right</Button>
//       </div>
//       <Drawer
//         placement="right"
//         open={openRight}
//         onClose={closeDrawerRight}
//         className="p-4"
//       >
//         <div className="mb-6 flex items-center justify-between">
//           <Typography variant="h5" color="blue-gray">
//             Material Tailwind
//           </Typography>
//           <IconButton
//             variant="text"
//             color="blue-gray"
//             onClick={closeDrawerRight}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={2}
//               stroke="currentColor"
//               className="h-5 w-5"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </IconButton>
//         </div>
//       </Drawer>
//     </React.Fragment>
//   );
// }

// export type CartProps = {
//   //no props
// };

// const Cart: FunctionComponent<CartProps> = ({}) => {
//   return (
//     <div className="bg-white">
//       <span>Cart</span>
//       <DrawerPlacement />
//     </div>
//   );
// };

// export default Cart;

export type CartDrawerProps = {
  //no props
};

const CartDrawer: FunctionComponent<CartDrawerProps> = ({}) => {
  const [openRight, setOpenRight] = useState(false);

  const openDrawer = () => setOpenRight(true);
  const closeDrawer = () => setOpenRight(false);
  return (
    <>
      <div className="flex flex-wrap gap-4">
        <Button onClick={openDrawer}>Open Drawer Right</Button>
      </div>
      <Drawer
        placement="right"
        open={openRight}
        onClose={closeDrawer}
        className="p-4"
      >
        <div className="mb-6 flex items-center justify-between">
          <span>Drawer</span>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
      </Drawer>
    </>
  );
};

export default CartDrawer;
