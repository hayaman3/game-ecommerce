// "use client";
// import React, { FunctionComponent, useState } from "react";

// import {
//   Drawer,
//   Button,
//   Typography,
//   IconButton,
// } from "@material-tailwind/react";

// // function DrawerPlacement() {
// //   const [openRight, setOpenRight] = React.useState(false);

// //   const openDrawerRight = () => setOpenRight(true);
// //   const closeDrawerRight = () => setOpenRight(false);

// //   return (
// //     <React.Fragment>
// //       <div className="flex flex-wrap gap-4">
// //         <Button onClick={openDrawerRight}>Open Drawer Right</Button>
// //       </div>
// //       <Drawer
// //         placement="right"
// //         open={openRight}
// //         onClose={closeDrawerRight}
// //         className="p-4"
// //       >
// //         <div className="mb-6 flex items-center justify-between">
// //           <Typography variant="h5" color="blue-gray">
// //             Material Tailwind
// //           </Typography>
// //           <IconButton
// //             variant="text"
// //             color="blue-gray"
// //             onClick={closeDrawerRight}
// //           >
// //             <svg
// //               xmlns="http://www.w3.org/2000/svg"
// //               fill="none"
// //               viewBox="0 0 24 24"
// //               strokeWidth={2}
// //               stroke="currentColor"
// //               className="h-5 w-5"
// //             >
// //               <path
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 d="M6 18L18 6M6 6l12 12"
// //               />
// //             </svg>
// //           </IconButton>
// //         </div>
// //       </Drawer>
// //     </React.Fragment>
// //   );
// // }

// // export type CartProps = {
// //   //no props
// // };

// // const Cart: FunctionComponent<CartProps> = ({}) => {
// //   return (
// //     <div className="bg-white">
// //       <span>Cart</span>
// //       <DrawerPlacement />
// //     </div>
// //   );
// // };

// // export default Cart;

// export type CartDrawerProps = {
//   //no props
// };

// const CartDrawer: FunctionComponent<CartDrawerProps> = ({}) => {
//   const [openRight, setOpenRight] = useState(false);

//   const openDrawer = () => setOpenRight(true);
//   const closeDrawer = () => setOpenRight(false);
//   return (
//     <>
//       <div className="flex flex-wrap gap-4">
//         <Button onClick={openDrawer}>Open Drawer Right</Button>
//       </div>
//       <Drawer
//         placement="right"
//         open={openRight}
//         onClose={closeDrawer}
//         className="p-4"
//       >
//         <div className="mb-6 flex items-center justify-between">
//           <span>Drawer</span>
//           <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
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
//     </>
//   );
// };

// export default CartDrawer;

"use client";
import { useSearchParams } from "next/navigation";
import { useRef, useEffect } from "react";
import React, { FunctionComponent } from "react";

export type CartDrawerProps = {
  title: string;
  children: React.ReactNode;
};

const CartDrawer: FunctionComponent<CartDrawerProps> = ({
  title,
  children,
}) => {
  const searchParams = useSearchParams();
  const dialogRef = useRef<null | HTMLDialogElement>(null);
  const showDialog = searchParams.get("showDialog");

  useEffect(() => {
    if (showDialog === "y") {
      dialogRef.current?.show();
    } else {
      dialogRef.current?.close();
    }
  }, [showDialog]);

  const closeDialog = () => {
    dialogRef.current?.close();
  };



  const dialog: JSX.Element | null =
    showDialog === "y" ? (
      <dialog
        ref={dialogRef}
        className="top-50 left-50 -translate-x-50 -translate-y-50 fixed z-10  rounded-xl backdrop:bg-gray-800/50"
      >
        <div className="max-w-fullbg-gray-200 flex w-[500px] flex-col">
          <div className="mb-4 flex flex-row justify-between bg-yellow-400 px-5 pt-2">
            <h1 className="text-2xl">{title}</h1>
            <button
              onClick={closeDialog}
              className="mb-2 h-8 w-8 cursor-pointer rounded border-none bg-red-600 px-2 py-1 font-bold text-white"
            >
              x
            </button>
          </div>
          <div className="px-5 pb-6">
            {children}
            <div className="mt-2 flex flex-row justify-end">
              <button
                onClick={closeDialog}
                className="rounded border-none bg-green-500 px-2 py-1"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </dialog>
    ) : null;

  return dialog;
};

export default CartDrawer;
