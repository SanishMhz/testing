import { serviceList } from "@/constants";
import React from "react";
import ServiceCard from "../shared/ServiceCard";

const Services = () => {
  return (
    <div className="flex flex-col gap-6 sm:gap-8 px-4 sm:px-8 md:px-12 lg:px-16 py-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-[#361631] text-xl sm:text-2xl lg:text-3xl font-bold text-center">
          OUR SERVICES
        </h1>
        <p className="text-lg font-medium text-gray-700 text-justify sm:text-center">
          At Vedic Healing, we offer a range of holistic healing therapies
          designed to restore balance, promote relaxation, and enhance overall
          well-being. Whether you seek physical healing, emotional clarity, or
          spiritual awakening, our sessions are tailored to meet your individual
          needs.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
        {serviceList.map((item, index) => (
          <ServiceCard
            id={item.id}
            image={item.image}
            title={item.title}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
