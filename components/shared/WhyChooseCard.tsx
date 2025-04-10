import Image from "next/image";
import React from "react";

const WhyChooseCard = ({ image, title, description }: ChooseCardType) => {
  return (
    <div className="flex flex-col bg-white rounded-md">
      <div className="w-full rounded-md h-60">
        <Image
          src={image}
          alt="chose image"
          sizes="100vw"
          width={0}
          height={0}
          className="w-full h-full object-cover rounded-t-md"
        />
      </div>
      <div className="flex flex-col gap-2 p-4">
        <h1 className="text-xl font-bold text-center">{title}</h1>
        <p className="text-justify font-medium px-3">{description}</p>
      </div>
    </div>
  );
};

export default WhyChooseCard;
