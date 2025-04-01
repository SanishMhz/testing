"use client";
import ServiceCard from "@/components/shared/ServiceCard";
import { Button } from "@/components/ui/button";
import { serviceList } from "@/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IoIosPricetag } from "react-icons/io";

const ServicePage = () => {
  const included = [
    {
      name: "Aura Screening & Cleansing – Removes negative energy and clears blockages.",
    },
    {
      name: "Chakra Screening, Cleansing & Balancing – Aligns and restores energy centers.",
    },
    {
      name: "Healing Session – Uses sound vibrations for relaxation and mental clarity.",
    },
  ];
  const router = useRouter();
  return (
    <div className="bg-[#f5ecf3]">
      {/* Home Button */}
      <div className="flex justify-end py-5 px-5">
        <Button
          className="flex items-center justify-center text-lg font-semibold bg-[#99408b] hover:bg-[#8a3a7d] py-2 px-6 cursor-pointer"
          onClick={() => router.push("/")}
        >
          GO BACK
        </Button>
      </div>

      {/* Hero Section */}
      <div
        style={{ backgroundImage: "url('/reiki.jpg')" }}
        className="w-full h-[300px] sm:h-[400px] lg:h-[450px] bg-cover bg-center relative"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="absolute inset-0 text-gray-50 flex flex-col justify-center items-center space-y-5 px-4 sm:px-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Sound Healing Session
          </h1>
          <p className="text-xl sm:text-2xl">
            "Experience Deep Relaxation and Rejuvenation Through the Healing
            Power Of Sound"
          </p>
          <Button className="bg-[#99408b] hover:bg-[#8a3a7d] px-6 py-2">
            Book An Appointment
          </Button>
        </div>
      </div>

      {/* Second Section */}
      <div className="py-6">
        <div className="flex flex-col md:flex-row justify-center gap-5 px-5 md:px-20">
          <div className="flex-1 w-full space-y-3">
            <Image
              src="/reiki.jpg"
              alt="Service"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-96 rounded-2xl object-cover"
            />
            <div className="text-justify text-lg text-gray-600">
              <p>
                Sound healing is a therapeutic practice that uses the
                vibrational power of Tibetan singing bowls, gongs, and other
                instruments to bring deep relaxation and balance to the body and
                mind. The frequencies emitted by these instruments help reduce
                stress, anxiety, and energetic blockages, leaving you feeling
                rejuvenated.
              </p>

              {/* What's Included Section */}
              <div className="space-y-2 mt-6">
                <h1 className="font-bold text-xl">What's Included?</h1>
                <ul className="space-y-3">
                  {included.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Image
                        src="/tick.png"
                        alt="Tick Image"
                        width={20}
                        height={20}
                      />
                      <span className="text-base">{item.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing */}
              <div className="mt-6">
                <h1 className="text-xl font-bold">Pricing</h1>
                <p className="flex items-center gap-2">
                  <IoIosPricetag size={20} /> NPR:6000-(60min) |
                  NPR:7500-(90min)
                </p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-white w-full md:w-[350px] shadow-2xl rounded-2xl py-4 mt-6 md:mt-0 px-4 h-96">
            <h1 className="text-center text-xl font-bold">Need Any Help?</h1>
            <ul className="px-6 py-2 space-y-4 text-lg">
              <li>Contact at: +977 9851094238</li>
              <li>Email: shresthaamit369@gmail.com</li>
              <li>Address: Chakshibari Marga, Thamel, Kathmandu, Nepal</li>
              <li>Business Hours: 9 AM - 8 PM</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Third Section: Other Services */}
      <div className="py-6">
        <h1 className="text-3xl text-center font-bold">OTHER SERVICES</h1>
        <div className="flex flex-col gap-6 sm:gap-8 px-4 sm:px-8 md:px-12 mx-0 md:mx-20 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-5">
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
      </div>
    </div>
  );
};

export default ServicePage;
