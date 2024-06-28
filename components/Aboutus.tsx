"use client";

import React, { useRef } from "react";
import Members from "./Members";
import { easeIn, easeInOut, motion, useInView } from "framer-motion";

export const slideUp = {
  initial: {
    y: "100%",
  },
  open: (i: number) => ({
    y: "0%",
    transition: { duration: 0.5, delay: 0.04 * i },
  }),
  closed: {
    y: "100%",
    transition: { duration: 0.7 },
  },
};

export const opacity = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: { duration: 1.2, easeInOut },
  },
  closed: {
    opacity: 0,
    transition: { duration: 1.2, easeInOut },
  },
};

const Aboutus: React.FC = () => {
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef);

  return (
    <section
      className={`flex flex-col bg-white py-20 text-3xl md:text-4xl z-50`}
      ref={aboutRef}
    >
      <div className="container mx-auto px-11 flex flex-col">
        <motion.p
          variants={opacity}
          animate={isInView ? "open" : "closed"}
          className="leading-tight max-w-5xl mx-auto opacity-0 font-bold text-4xl lg:text-4xl tracking-tight text-center"
        >
          will help you ship better apps faster
        </motion.p>
        <motion.p
          variants={opacity}
          animate={isInView ? "open" : "closed"}
          className="leading-tight max-w-5xl mx-auto text-4xl lg:text-4xl tracking-tight text-center"
        >
          Our team of expert engineers has created the best user experiences in
          some of the most popular apps worldwide.
        </motion.p>
      </div>
      <div className="container mx-auto px-11 text-center mt-28">
        <h2> Our team</h2>
        <div className="mt-2">the &ldquo;spec-ops&rdquo;</div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 lg:gap-20">
          <Members
            id="marc"
            name="Marc"
            socialId="@milkiascha7"
            link="https://github.com/milkiascha7"
          />
          <Members
            id="allen"
            name="Allen"
            socialId="@Allenusail"
            link="https://github.com/milkiascha7"
          />
          <Members
            id="helen"
            name="Helen"
            socialId="@HelenHs65"
            link="https://github.com/milkiascha7"
          />
          <Members
            id="bob"
            name="Bob"
            socialId="@BobTHich"
            link="https://github.com/milkiascha7"
          />

          <Members
            id="zeta"
            name="Zeta"
            socialId="@zeta465"
            link="https://github.com/milkiascha7"
          />

          <Members
            id="ashely"
            name="Ashely"
            socialId="@asheleyDash"
            link="https://github.com/milkiascha7"
          />
          <Members
            id="allen"
            name="Allen"
            socialId="@Allenusail"
            link="https://github.com/milkiascha7"
          />
          <Members
            id="helen"
            name="Sam"
            socialId="@Sams965"
            link="https://github.com/milkiascha7"
          />
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
