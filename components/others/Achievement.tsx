"use client";

import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Achievement = () => {
  const { ref, inView } = useInView({
    threshold: 0.3, // Reduced threshold for better detection
    triggerOnce: true, // Ensures it only animates once
  });
  return (
    <div
      className="flex flex-col md:flex-row justify-evenly items-center bg-[#dfc4db] px-2 py-4 gap-2 md:gap-6"
      ref={ref}
    >
      {/* First item */}
      <div className="flex items-center gap-2 py-2">
        <div>
          <Image
            src="/icon1.png"
            alt="First Icon"
            width={0}
            height={0}
            sizes="100vw"
            className="w-20 h-20"
          />
        </div>
        <div>
          <div className="text-xl md:text-2xl font-bold">
            {inView ? (
              <CountUp start={1} end={21} duration={5} suffix="+" />
            ) : (
              "0"
            )}
          </div>
          <div className="text-sm md:text-lg tracking-wider font-semibold">
            Successful Years
          </div>
        </div>
      </div>
      {/* Second item */}
      <div className="flex items-center gap-2 py-2">
        <div>
          <Image
            src="/icon2.png"
            alt="Second Icon"
            width={0}
            height={0}
            sizes="100vw"
            className="w-20 h-20"
          />
        </div>
        <div>
          <div className="text-xl md:text-2xl font-bold">
            {inView ? (
              <CountUp start={0} end={500} duration={5} suffix="+" />
            ) : (
              "0"
            )}
          </div>
          <div className="text-sm md:text-lg tracking-wider font-bold">
            Happy Customer
          </div>
        </div>
      </div>

      {/* Third item */}
      <div className="flex items-center gap-2 py-2">
        <div>
          <Image
            src="/icon3.png"
            alt="Third Icon"
            width={0}
            height={0}
            sizes="100vw"
            className="w-20 h-20"
          />
        </div>
        <div>
          <div className="text-xl md:text-2xl font-bold">
            {inView ? (
              <CountUp start={0} end={1000} duration={5} suffix="+" />
            ) : (
              "0"
            )}
          </div>
          <div className="text-sm md:text-lg tracking-wider font-bold">
            Healing Done
          </div>
        </div>
      </div>
      {/* Fourth Item */}
      <div className="flex items-center gap-2 py-2">
        <div>
          <Image
            src="/icon4.png"
            alt="Fourth Icon"
            width={0}
            height={0}
            sizes="100vw"
            className="w-20 h-20"
          />
        </div>
        <div>
          <div className="text-xl md:text-2xl font-bold">
            {inView ? (
              <CountUp start={0} end={10} duration={5} suffix="+" />
            ) : (
              "0"
            )}
          </div>
          <div className="text-sm md:text-lg tracking-wider font-bold">
            Team Members
          </div>
        </div>
      </div>
    </div>
  );
};
export default Achievement;
