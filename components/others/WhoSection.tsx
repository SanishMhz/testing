"use client";
import { about } from "@/constants";
import { refineImagePath } from "@/lib/utils";
import { useGetWhoSectionQuery } from "@/store/apiSlice";
import Image from "next/image";
import { useState } from "react";

const WhoSection = () => {
  const { data: whoWeAre } = useGetWhoSectionQuery();
  const [open, setOpen] = useState(false);
  return (
    <div className="py-4 px-4 sm:px-8 md:px-12 lg:px-16" id="about">
      <h1 className="text-2xl lg:text-3xl text-[#361631] font-bold text-center">
        WHO WE ARE?
      </h1>
      {/* Business Story */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center py-6 gap-5">
        {/* First Section */}
        {whoWeAre?.data.map((who: WhoSectionData) => (
          <div className="space-y-3" key={who.id}>
            <p className="hidden lg:block text-lg text-gray-700 text-justify">
              {who?.story}
            </p>
            <p className="lg:hidden text-lg text-gray-700 text-justify max-w-2xl">
              {open ? about : about.slice(0, 320)}
              <button
                className="sm:ps-2 font-semibold underline cursor-pointer underline-offset-4"
                onClick={() => setOpen((prev) => !prev)}
              >
                {open ? "Read Less" : "Read More"}
              </button>
            </p>
            <h1>
              <span className="text-xl text-[#5c2653] font-bold">
                Mission Statement :
              </span>
              <span className="text-lg">{who?.missionStatement}</span>
            </h1>
          </div>
        ))}

        {/* Second Section */}
        {whoWeAre?.data.map((who: WhoSectionData) => (
          <div className="w-full" key={who.id}>
            <Image
              src={who ? refineImagePath(who.image) : ""}
              alt="Who We Are"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-72 sm:h-80 object-cover rounded-md"
            />
          </div>
        ))}
      </div>
      {/* Background Story */}
      <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-5 py-6">
        {/* First Section */}
        <div className="w-full">
          <Image
            src="/meditation.jpg"
            alt="Meditation"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-72 md:h-80 lg:h-96 object-cover rounded-md"
          />
        </div>
        {/* Second Section */}
        <div className="space-y-2 md:max-w-1/2">
          <h1 className="text-xl lg:text-2xl text-[#5c2653] font-bold">
            Business/Brand Story
          </h1>
          <p className="text-justify text-gray-700 text-lg">
            The founder, Mr. Amit Shrestha, is a dedicated Sound Healing Master
            with over 9 years of experience and 21 years of practice in Reiki
            healing. His sessions and teaching approach blend ancient healing
            methods with scientific reasoning. With a deep passion for music,
            his sessions are harmoniously tailored to suit the needs of various
            individuals.
          </p>
        </div>
      </div>
    </div>
  );
};
export default WhoSection;
