import Image from "next/image";
import React from "react";

const TrainingCard = ({ image, title, description }: ChooseCardType) => {
  return (
    <div className="flex flex-col bg-white rounded-md p-4">
      <div className="w-full rounded-md h-80">
        <Image
          src={image}
          alt="chose image"
          sizes="100vw"
          width={0}
          height={0}
          className="w-full h-full object-cover rounded-sm"
        />
      </div>
      <div className="flex flex-col gap-2 px-4 py-8">
        <h1 className="text-xl font-bold text-center">{title}</h1>
        <p className="text-center font-medium">{description}</p>
      </div>
    </div>
  );
};

export default TrainingCard;
