"use client";
// import { motion } from 'framer-motion';
import { Dispatch, SetStateAction, useState } from "react";
import Chip from "./Chip";
import Link from "next/link";

const tabs = ["Home", "Shop", "About"];

const PageNav = () => {
  const [selected, setSelected] = useState(tabs[0]);

  return (
    <ul className="flex gap-2">
      {/* {tabs.map((tab) => (
        <Chip
          text={tab}
          selected={selected === tab}
          setSelected={setSelected}
          key={tab}
        />
      ))} */}

      {tabs.map((tab) => (
        <li className="nav-links link-underline cursor-pointer px-4 font-medium capitalize text-gray-500 duration-200 hover:scale-105 hover:text-white">
          <Link href={tab}>{tab}</Link>
        </li>
      ))}
    </ul>
  );
};

export default PageNav;
