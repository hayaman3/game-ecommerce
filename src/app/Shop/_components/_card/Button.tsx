import * as React from "react";
import Link from "next/link";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "../../../../_lib/util";

const buttonVariants = cva(
  // "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:hover:bg-slate-800 dark:hover:text-slate-100 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900 data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800",
  "text-black rounded-md ",
  {
    variants: {
      // variant: {
      //   default:
      //     "bg-slate-900 text-white hover:bg-slate-700 dark:bg-slate-50 dark:text-slate-900",
      //   destructive:
      //     "bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600",
      //   outline:
      //     "bg-transparent border border-slate-200 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100",
      //   subtle:
      //     "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100",
      //   ghost:
      //     "bg-transparent dark:bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
      //   link: "bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-300 hover:bg-transparent dark:hover:bg-transparent",
      // },
      variant: {
        default: "",
        ghost: "",
        // "bg-transparent hover:outline-1 hover:outline text-white rounded-md  outline-[#808080]",
      },
      // variant: {
      //   default:
      //     "bg-[#08c3df] text-[#383838] shadow-[1.55px_4px_15.5px_0px_rgba(0,0,0,0.25)] hover:bg-white",
      //   dark: "bg-dark-50 text-white shadow-[1.55px_4px_15.5px_0px_rgba(0,0,0,0.25)]  hover:outline",
      //   ghost:
      //     "bg-transparent border-[1px]  text-white shadow-[1.55px_4px_15.5px_0px_rgba(0,0,0,0.25)] hover:bg-dark-700",
      // },
      size: {
        // default: "h-10 py-2 px-4",
        // sm: "h-9 px-2 rounded-md",
        // lg: "h-11 px-8 rounded-md",
        default: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, size, ...props }) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </button>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
