import React, { FunctionComponent, ReactNode, Ref } from "react";
import Link, { LinkProps } from "next/link";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/_lib/util";

const buttonVariants = cva(
  "inline-flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:hover:bg-slate-800 dark:hover:text-slate-100 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900 data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800",
  {
    variants: {
      variant: {
        default: "bg-white text-[#383838]",
        dark: "bg-[#383838] text-white shadow-[1.55px_4px_15.5px_0px_rgba(0,0,0,0.25)]",
        outline:
          "bg-transparent border border-slate-200 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100",
        subtle:
          "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100",
        ghost:
          "bg-transparent dark:bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
        link: "bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-300 hover:bg-transparent dark:hover:bg-transparent",
      },
      size: {
        default: "rounded-lg text-base px-8 py-2 font-bold",
        sm: "h-9 px-2 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export type TButtonLinkProps = {
  children: ReactNode;
  className?: string;
  ref?: Ref<HTMLButtonElement>;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

const Button: FunctionComponent<TButtonLinkProps> = ({
  className,
  children,
  variant,
  size,
  ref,
  ...props
}) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
      ref={ref}
    >
      {children}
    </button>
  );
};

export type TLinkButtonProps = {
  children: ReactNode;
  className?: string;
  target?: boolean;
} & LinkProps &
  VariantProps<typeof buttonVariants>;

const LinkButton: FunctionComponent<TLinkButtonProps> = ({
  className,
  children,
  href,
  variant,
  size,
  target,
  ...props
}) => {
  return (
    <Link
      href={href}
      className={cn(buttonVariants({ variant, size, className }))}
      target={target ? "_blank" : ""}
      {...props}
    >
      {children}
    </Link>
  );
};

export { Button, LinkButton };

// const Button = forwardRef(
//   (
//     { variant, size, className, children, ...props }: ButtonProps,
//     ref: Ref<HTMLButtonElement>
//   ) => {
//     return (
//       <button
//         className={cn(buttonVariants({ variant, size, className }))}
//         ref={ref}
//         {...props}
//       >
//         {children}
//       </button>
//     );
//   }
// );

// type TButtonProps =
//   | ({
//       href?: never;
//     } & React.ButtonHTMLAttributes<HTMLButtonElement>)
//   | ({
//       href: string;
//     } & ComponentProps<typeof Link>);

// export interface ButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
//     VariantProps<typeof buttonVariants> {
//   href?: string;
// }

// export interface ButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
//     VariantProps<typeof buttonVariants> {
//   href?: string;
// }

// export interface ButtonProps
//   extends React.ButtonHTMLAttributes<HTMLAnchorElement>,
//     VariantProps<typeof buttonVariants> {
// }

// const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
//   ({ className, children, href, variant, size, ...props }, ref) => {
//     return (
//       <button
//         className={cn(buttonVariants({ variant, size, className }))}
//         ref={ref}
//         {...props}
//       >
//         {children}
//       </button>
//     );
//   },
// );
