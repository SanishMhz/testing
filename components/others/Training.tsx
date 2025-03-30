import React from "react";
import { trainingList } from "@/constants";
import TrainingCard from "../shared/TrainingCard";

const Training = () => {
  return (
    <div className="flex flex-col gap-6 sm:gap-8 px-4 sm:px-8 md:px-12 lg:px-16 py-10">
      <h1 className="text-[#361631] text-xl sm:text-2xl lg:text-3xl font-bold text-center">
        TRAINING PROGRAMS
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-5">
        {trainingList.map((item, index) => (
          <TrainingCard
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

export default Training;
