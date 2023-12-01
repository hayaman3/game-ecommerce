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
              className={`text-lg font-light  transition ease-in-out  ${
                isActive ? "font-[700] " : ""
              }`}
            >
              <span className=" ">{title}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default PageNav;
