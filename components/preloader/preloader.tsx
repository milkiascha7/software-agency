import React from "react";
import { motion } from "framer-motion";
import { opacity, expand } from "./anim";

interface PreloaderProps {
  children?: React.ReactNode;
  backgroundColor?: string;
}

export default function Preloader({
  children,
  backgroundColor,
}: PreloaderProps) {
  const anim = (variants: any, custom: number | null = null) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      custom,
      variants,
    };
  };

  const nbOfColumns = 5;
  return (
    <div className="w-full h-full relative" style={{ backgroundColor }}>
      <motion.div
        {...anim(opacity)}
        className="fixed w-full h-full bg-black z-10 pointer-events-none top-0 left-0"
      />
      <div className="fixed w-full h-full flex left-0 top-0 pointer-events-none z-50">
        {[...Array(nbOfColumns)].map((_, i) => {
          return (
            <motion.div
              key={i}
              {...anim(expand, nbOfColumns - i)}
              className="relative h-full w-full bg-black"
            />
          );
        })}
      </div>
      {children}
    </div>
  );
}
