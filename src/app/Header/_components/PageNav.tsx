"use client";
import { FunctionComponent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HomeIcon from "../_icons/HomeIcon";
import ShopIcon from "../_icons/ShopIcon";
import AboutIcon from "../_icons/AboutIcon";

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
    <ul className="xs:gap-4 flex gap-2">
      {tabs.map(({ path, title }, key) => {
        const isActive = path === pathname;
        return (
          <li key={key}>
            <Link href={path}>
              {/* <HomeIcon /> */}
              {/* <ShopIcon /> */}
              <AboutIcon />
              <span
                className={`xs:text-base text-sm font-light text-[#e5e5e5] transition ease-in-out ${
                  isActive ? "font-[700] " : ""
                }`}
              >
                {/* {title} */}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default PageNav;
