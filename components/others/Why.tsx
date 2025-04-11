"use client"
import React from "react";
import WhyChooseCard from "../shared/WhyChooseCard";
import { useGetChooseUsQuery } from "@/store/apiSlice";



const Why = () => {
  const {data:choose}=useGetChooseUsQuery();
 
  return (
    <div className="flex flex-col gap-6 sm:gap-8 px-4 sm:px-8 md:px-12 lg:px-16 py-10">
      <h1 className="text-[#361631] text-xl sm:text-2xl lg:text-3xl font-bold text-center">
        WHY CHOOSE VEDIC HEALING?
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-5">
        {choose?.data.map((choose) => (
          <WhyChooseCard
            description={choose.description}
            image={choose.image}
            title={choose.title}
            key={choose.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Why;

