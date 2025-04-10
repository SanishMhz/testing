"use client";
import React from "react";
import TrainingCard from "../shared/TrainingCard";
import { useGetTrainingQuery } from "@/store/apiSlice";

const Training = () => {
  const {data:trainings}=useGetTrainingQuery();
  console.log("training data:",trainings)
  return (
    <div className="flex flex-col gap-6 sm:gap-8 px-4 sm:px-8 md:px-12 lg:px-16 py-10">
      <h1 className="text-[#361631] text-xl sm:text-2xl lg:text-3xl font-bold text-center">
        TRAINING PROGRAMS
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-5">
        {trainings?.data.map((train) => (
          <TrainingCard
            description={train.description}
            image={train.image}
            title={train.title}
            key={train.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Training;
