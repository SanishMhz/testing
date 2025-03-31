import { whyUsList } from "@/constants";
import React from "react";
import WhyChooseCard from "../shared/WhyChooseCard";

const Why = () => {
  return (
    <div className="flex flex-col gap-6 sm:gap-8 px-4 sm:px-8 md:px-12 lg:px-16 py-10">
      <h1 className="text-[#361631] text-xl sm:text-2xl lg:text-3xl font-bold text-center">
        WHY CHOOSE VEDIC HEALING?
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-5">
        {whyUsList.map((item, index) => (
          <WhyChooseCard
            description={item.description}
            image={item.image}
            title={item.title}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Why;
