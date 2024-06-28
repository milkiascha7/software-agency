import React from "react";
import Carousel from "./Carousel";
import CarouselItem from "./Carousel-item";
import Review from "./review";

const Testimonials: React.FC = () => {
  return (
    <Carousel className="bg-black flex text-white py-10 lg:py-20">
      <CarouselItem index={0}>
        <Review by="Axel (Showtime)">
          MH Designs and Showtime is passionate about creating products that
          people want and loves to work with high-quality software.
        </Review>
      </CarouselItem>
      <CarouselItem index={1}>
        <Review by="Axel (Showtime)">
          MH Designs and Showtime is passionate about creating products that
          people want and loves to work with high-quality software.
        </Review>
      </CarouselItem>
      <CarouselItem index={2}>
        <Review by="Axel (Showtime)">
          MH Designs and Showtime is passionate about creating products that
          people want and loves to work with high-quality software.
        </Review>
      </CarouselItem>
      <CarouselItem index={3}>
        <Review by="Axel (Showtime)">
          MH Designs and Showtime is passionate about creating products that
          people want and loves to work with high-quality software.
        </Review>
      </CarouselItem>
      <CarouselItem index={4}>
        <Review by="Axel (Showtime)">
          MH Designs and Showtime is passionate about creating products that
          people want and loves to work with high-quality software.
        </Review>
      </CarouselItem>
    </Carousel>
  );
};

export default Testimonials;
