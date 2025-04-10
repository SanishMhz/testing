"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
const ServiceCard = ({ id, title, image }: ServiceCardType) => {
  const router=useRouter()
  return (
    <div className="relative cursor-pointer" onClick={()=>router.push(`/service/${id}`)}>
      <div className="absolute w-full h-full bg-black opacity-50 hover:opacity-60 rounded sm:rounded-md z-10" />
     <div className="w-full h-36 sm:h-44">
        <Image
          src={image}
          alt="service image"
          sizes="100vw"
          width={0}
          height={0}
          className="w-full h-full object-cover rounded sm:rounded-md"
        />
      </div>
      <h1 className="top-10 sm:top-1/3 left-2 right-2 md:left-6 md:right-6 text-center font-bold text-white text-lg sm:text-xl lg:text-2xl absolute z-20">
        {title}
      </h1>
    </div>
  );
};

export default ServiceCard;
