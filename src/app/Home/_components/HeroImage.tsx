"use client";
import React, { FunctionComponent } from "react";
import TiltCard from "./TiltCard";
import ProductCard from "@/_components/ProductCard";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import ImageHandler from "@/_components/ImageHandler";
import { twMerge } from "tailwind-merge";

export type HeroImageProps = {
  //no props
};

const HeroImage: FunctionComponent<HeroImageProps> = ({}) => {
  // <TiltCard>
  //   <ProductCard className="hover:border-0 hover:border-none hover:backdrop-blur-none" />
  // </TiltCard>

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"],
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"],
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative mx-auto h-96 w-72 rounded-xl border border-[#ffffff1a] bg-gradient-to-br from-dark-25 to-dark-50 transition-colors hover:border hover:border-[#ffffff80]"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 overflow-hidden rounded-xl shadow-lg transition"
      >
        <div
          className={twMerge(
            "hover:border-deep-purple-400 relative flex h-96 w-72 overflow-hidden rounded-lg border-[1px] border-solid border-transparent shadow-lg backdrop-filter hover:backdrop-blur-lg",
            "hover:border-0 hover:border-none hover:backdrop-blur-none",
          )}
        >
          <ImageHandler />
          <div className="z-100 absolute inset-0 flex flex-col justify-end">
            <div className=" flex h-1/4 w-full bg-[#333333] bg-opacity-50 bg-clip-padding p-4 text-white backdrop-blur-md backdrop-filter">
              <span className="text-sm">Cyberpunk 2077</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroImage;
