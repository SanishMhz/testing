"use client";
import React from "react";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaQuoteLeft } from "react-icons/fa";
import { testimonials } from "@/constants";

const Testimonials = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2500, stopOnInteraction: true })
  );
  
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-16 py-10 flex flex-col gap-6 sm:gap-8" id="stories">
      <h1 className="text-[#361631] text-xl sm:text-2xl lg:text-3xl font-bold text-center">
        SUCCESS STORIES
      </h1>
      <div>
        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          className="bg-[#dfc4db] rounded-md md:rounded-lg h-full min-h-[350px]"
        >
          <CarouselContent className="p-4">
            {testimonials.map((item, index) => (
              <CarouselItem className="flex justify-center" key={index}>
                <div className="flex flex-col py-14 gap-2 relative">
                  <FaQuoteLeft className="absolute top-5 lg:top-10 left-0 lg:-left-15 text-3xl md:text-4xl lg:text-5xl text-[#361631]" />
                  <p className="text-justify max-w-3xl text-base text-gray-700 font-medium">
                    {item.message}
                  </p>
                  <h1 className="font-semibold text-end text-[#361631]">
                    - By {item.author}
                  </h1>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-[#99408b] text-[#99408b] hover:text-white hover:bg-[#8a3a7d]" />
          <CarouselNext className="border-[#99408b] text-[#99408b] hover:text-white hover:bg-[#8a3a7d]" />
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
