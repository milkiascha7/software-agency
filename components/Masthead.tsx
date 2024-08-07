import React, { useState, useContext, useCallback, useRef } from "react";
import Image from "next/image";
import { ScrollContext } from "../utils/scroll-observer";

import { Rochester } from "next/font/google";

const rochester = Rochester({
  subsets: ["latin"],
  weight: ["400"],
});

const Masthead: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleImageLoaded = useCallback(() => {
    setImageLoaded(true);
  }, []);

  return (
    <div
      ref={refContainer}
      style={{
        transform: `translateY(-${progress * 20}vh)`,
      }}
      className="min-h-screen flex flex-col items-center justify-center sticky top-0 -z-10 bg-white"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover "
      >
        <source src="/assets/video 2.mp4" type="video/mp4; codecs=hvc1" />
        <source src="/assets/video 2.webm" type="video/webm; codecs=vp9" />
      </video>

      <div
        className={`flex-grow-0 pt-10 transition-opacity duration-1000 z-200 animate-bounce ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src="/assets/MH.svg"
          width={128 / 3}
          height={114 / 3}
          alt="logo"
        />
      </div>

      <div className="p-12 font-bold text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex-1 flex flex-col items-center justify-center z-50">
        <h1
          className={`mb-6 text-4xl xl:text-6xl transition-opacity duration-700 delay-150 ${
            rochester.className
          } ${imageLoaded ? "opacity-100" : "opacity-0"}`}
        >
          MH DESIGNS
        </h1>
        <h2
          className={`mb-2 text-2xl md:text-3xl xl:text-4xl tracking-right transition-opacity duration-1000 delay-200  ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <span>App Development,</span> done right.
        </h2>
      </div>
      <div
        className={`flex-grow-0 pb-20 md:pb-10 transition-all duration-1000 animate-bounce  ${
          imageLoaded ? "" : "opacity-50 -translate-y-10"
        }`}
      >
        <Image
          src="/assets/down 2.png"
          width={165 / 3}
          height={105 / 3}
          alt="down-logo"
          onLoad={handleImageLoaded}
          className="text-white"
        />
      </div>
    </div>
  );
};

export default Masthead;
