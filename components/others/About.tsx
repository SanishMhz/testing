"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { useGetHomeSectionQuery } from "@/store/apiSlice";

const About = () => {
  const { data: home } = useGetHomeSectionQuery();
  return (
    <div id="home">
      {home?.data.map((home: HomeData) => (
        <div
          className="flex flex-col-reverse md:flex-row justify-center items-center gap-5 px-4 sm:px-8 md:px-12 lg:px-28 py-5 md:py-8"
          key={home.id}
        >
          {/* First Section */}
          <div className="">
            <Image
              src={home ? home?.image : ""}
              alt="Home Image"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-64 md:w-96 md:h-80 bg-cover rounded-xl"
            />
          </div>
          {/* Second Section */}
          <div className="flex-1 space-y-2 md:space-y-4 py-2">
            <h1 className="px-4 text-2xl md:text-3xl font-semibold text-[#5c2653] text-center md:text-justify">
              {home.tagline}
            </h1>
            <p className="text-justify text-base lg:text-xl text-gray-600 px-4">
              {home.message}
            </p>
            <div className="px-4">
              <Button className="text-base lg:text-xl flex flex-col gap-0 text-justify bg-[#99408b] font-semibold hover:bg-[#5c2653] text-gray-50 lg:mx-0 py-8 lg:py-10 cursor-pointer rounded-md md:w-fit">
                <span>&quot;Book Your Healing Session Today – Restore</span>
                <span>Balance, Reduce Stress, and Feel Rejuvenated&quot;</span>
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default About;
