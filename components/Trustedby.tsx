"use client";

import React, { useRef } from "react";
import ClientLogos from "./Client-logos";
import styles from "../styles/trusted.module.css";
import { delay, easeInOut, motion, useInView } from "framer-motion";

export const opacity = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: { duration: 1.8, easeInOut },
  },
  closed: {
    opacity: 0,
    transition: { duration: 1.8, easeInOut },
  },
};

const Trustedby: React.FC = () => {
  const trustRef = useRef(null);
  const isInView = useInView(trustRef);
  return (
    <section
      ref={trustRef}
      className={`bg-white min-h-screen flex flex-col justify-center gap-16 md:gap-32 z-50 ${styles.bg}`}
    >
      <div className="flex-1"></div>
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-xl mb-10 font-bold text-center flex flex-col">
          <span className="whitespace-nowrap">We work with</span>{" "}
          <span className="whitespace-nowrap">
            Some of the apps you use daily
          </span>
        </h3>
        <ClientLogos />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="container mx-auto lg:max-w-[70%] lg:px-10">
          <motion.h3
            variants={opacity}
            animate={isInView ? "open" : "closed"}
            className="text-3xl lg:text-4xl opacity-0 tracking-tight text-center px-10 !leading-[3.5rem]"
          >
            We believe in good communication and a fully transparent development
            process
          </motion.h3>
        </div>
      </div>

      <div className="flex-1 bg-black"></div>
    </section>
  );
};

export default Trustedby;
