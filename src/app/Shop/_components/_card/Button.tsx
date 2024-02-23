// import * as React from "react";
// import { VariantProps, cva } from "class-variance-authority";
// import { twMerge } from "tailwind-merge";
// import { ClassValue, clsx } from "clsx";

// function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs));
// }

// const buttonVariants = cva(
//   "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:hover:bg-slate-800 dark:hover:text-slate-100 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900 data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800",
//   {
//     variants: {
//       variant: {
//         default:
//           "bg-slate-900 text-white hover:bg-slate-700 dark:bg-slate-50 dark:text-slate-900",
//         destructive:
//           "bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600",
//         outline:
//           "bg-transparent border border-slate-200 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100",
//         subtle:
//           "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100",
//         ghost:
//           "bg-transparent dark:bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
//         link: "bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-300 hover:bg-transparent dark:hover:bg-transparent",
//       },
//       size: {
//         default: "h-10 py-2 px-4",
//         sm: "h-9 px-2 rounded-md",
//         lg: "h-11 px-8 rounded-md",
//       },
//     },
//     defaultVariants: {
//       variant: "default",
//       size: "default",
//     },
//   },
// );

// // export type AddButtonProps = {
// //   title: string;
// //   onClickEvent: (event: React.MouseEvent<HTMLButtonElement>) => void;
// // };

// export interface ButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
//     VariantProps<typeof buttonVariants> {
// }

// const Button: React.FC<HTMLButtonElement, ButtonProps> = ({
//   className,
//   children,
//   variant,
//   size,
//   ...props
// },) => {
//   return (
//     // <button onClick={onClickEvent} className="bg-[#37F1A6] text-black">
//     //   {title}
//     // </button>

//     <button
//       className={cn(buttonVariants({ variant, size, className }))}
//       {...props}
//     >
//       {children}
//     </button>
//   );
// };

// export default Button;
