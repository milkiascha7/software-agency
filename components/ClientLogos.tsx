import React from "react";
import SliderContainer, { SliderItem } from "./Slider";
import Image from "next/image";

const ClientLogos: React.FC = () => {
  return (
    <SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
      <SliderItem width={140}>
        <Image
          src="/assets/trustedby/beats.png"
          width={140}
          height={140}
          alt="audobon"
          objectFit="cover"
        />
      </SliderItem>
      <SliderItem width={140}>
        <Image
          src="/assets/trustedby/netflix.png"
          width={140}
          height={140}
          alt="audobon"
          objectFit="cover"
        />
      </SliderItem>
      <SliderItem width={140}>
        <Image
          src="/assets/trustedby/nintendo.png"
          width={140}
          height={140}
          alt="audobon"
          objectFit="cover"
        />
      </SliderItem>
      <SliderItem width={140}>
        <Image
          src="/assets/trustedby/ps.png"
          width={140}
          height={140}
          alt="audobon"
          objectFit="cover"
        />
      </SliderItem>
      <SliderItem width={140}>
        <Image
          src="/assets/trustedby/samsung.png"
          width={140}
          height={140}
          alt="audobon"
          objectFit="cover"
        />
      </SliderItem>
      <SliderItem width={140}>
        <Image
          src="/assets/trustedby/google.png"
          width={140}
          height={140}
          alt="audobon"
          objectFit="cover"
        />
      </SliderItem>
      <div className=" m-3 "></div>
      <SliderItem width={140}>
        <Image
          src="/assets/trustedby/apple.png"
          width={140}
          height={140}
          alt="audobon"
          objectFit="cover"
        />
      </SliderItem>
      <SliderItem width={140}>
        <Image
          src="/assets/trustedby/twitter.jpg"
          width={140}
          height={140}
          alt="audobon"
          objectFit="cover"
        />
      </SliderItem>
      <SliderItem width={140}>
        <Image
          src="/assets/trustedby/unifi.png"
          width={140}
          height={140}
          alt="audobon"
          objectFit="cover"
        />
      </SliderItem>
      <SliderItem width={140}>
        <Image
          src="/assets/trustedby/unitjs.png"
          width={140}
          height={140}
          alt="audobon"
          objectFit="cover"
        />
      </SliderItem>

      <SliderItem width={140}>
        <Image
          src="/assets/trustedby/hulu.png"
          width={140}
          height={140}
          alt="audobon"
          objectFit="cover"
        />
      </SliderItem>
      <SliderItem width={140}>
        <Image
          src="/assets/trustedby/peacock.png"
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
