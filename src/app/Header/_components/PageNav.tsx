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
      {tabs.map(({ path, title }) => {
        const isActive = path === pathname;
        return (
          <li key={title}>
            <Link href={path}>
              <span
                className={`text-sm text-[#e5e5e5] transition ease-in-out xs:block xs:text-base ${
                  isActive ? "font-bold" : "font-light"
                }`}
              >
                {title}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default PageNav;
