import React from "react";
import SliderContainer, { SliderItem } from "./Slider";
import Image from "next/image";

const ClientLogos: React.FC = () => {
  return (
    <SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
      <SliderItem width={140}>
        <Image
          src="/assets/trustedBy/beats.png"
          width={140}
          height={140}
          alt="audobon"
          objectFit="cover"
        />
      </SliderItem>
      <SliderItem width={140}>
        <Image
          src="/assets/trustedBy/netflix.png"
          width={140}
          height={140}
          alt="audobon"
          objectFit="cover"
        />
      </SliderItem>
      <SliderItem width={140}>
        <Image
          src="/assets/trustedBy/nintendo.png"
          width={140}
          height={140}
          alt="audobon"
          objectFit="cover"
        />
      </SliderItem>
      <SliderItem width={140}>
        <Image
          src="/assets/trustedBy/ps.png"
          width={140}
          height={140}
          alt="audobon"
          objectFit="cover"
        />
      </SliderItem>
      <SliderItem width={140}>
        <Image
          src="/assets/trustedBy/samsung.png"
          width={140}
          height={140}
          alt="audobon"
          objectFit="cover"
        />
      </SliderItem>
      <SliderItem width={140}>
        <Image
          src="/assets/trustedBy/google.png"
          width={140}
          height={140}
          alt="audobon"
          objectFit="cover"
        />
      </SliderItem>
      <div className=" m-3 "></div>
      <SliderItem width={140}>
        <Image
          src="/assets/trustedBy/apple.png"
          width={140}
          height={140}
          alt="audobon"
          objectFit="cover"
        />
      </SliderItem>
      <SliderItem width={140}>
        <Image
          src="/assets/trustedBy/twitter.jpg"
          width={140}
          height={140}
          alt="audobon"
          objectFit="cover"
        />
      </SliderItem>
      <SliderItem width={140}>
        <Image
          src="/assets/trustedBy/unifi.png"
          width={140}
          height={140}
          alt="audobon"
          objectFit="cover"
        />
      </SliderItem>
      <SliderItem width={140}>
        <Image
          src="/assets/trustedBy/unitjs.png"
          width={140}
          height={140}
          alt="audobon"
          objectFit="cover"
        />
      </SliderItem>

      <SliderItem width={140}>
        <Image
          src="/assets/trustedBy/hulu.png"
          width={140}
          height={140}
          alt="audobon"
          objectFit="cover"
        />
      </SliderItem>
      <SliderItem width={140}>
        <Image
          src="/assets/trustedBy/peacock.png"
          width={140}
          height={140}
          alt="audobon"
          objectFit="cover"
        />
      </SliderItem>
    </SliderContainer>
  );
};

export default ClientLogos;
