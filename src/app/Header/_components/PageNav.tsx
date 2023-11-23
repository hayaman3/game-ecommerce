"use client";
import { FunctionComponent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Ttabs = {
  path: string;
  title: string;
};

const tabs: Ttabs[] = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/Shop",
    title: "Shop",
  },
  {
    path: "/About",
    title: "About",
  },
];

const PageNav: FunctionComponent = () => {
  let pathname = usePathname() || "/";
  return (
    <ul className="flex gap-4">
      {tabs.map(({ path, title }, key) => {
        const isActive = path === pathname;
        return (
          <li key={key}>
            <Link
              href={path}
              className={`text-lg text-white transition ease-in-out ${
                isActive ? "underline underline-offset-4" : ""
              }`}
            >
              <span>{title}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default PageNav;
