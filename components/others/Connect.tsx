"use client";
import Link from "next/link";
import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import ContactUs from "./ContactUs";
import { useGetPrimaryContactQuery } from "@/store/apiSlice";

const Connect = () => {
  const { data: primary } = useGetPrimaryContactQuery();
  console.log("Primary", primary);
  return (
    <div
      className="flex flex-col gap-4 py-8  px-4 sm:px-8 md:px-12 lg:px-16"
      id="connect"
    >
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-[#361631] text-xl sm:text-2xl lg:text-3xl font-bold">
          LETS CONNECT
        </h1>
        <p className="text-center text-lg md:text-xl font-medium  text-gray-700">
          If you have any questions or concerns, please get in touch using the
          following information or the contact form below
        </p>
        {primary?.data.map((primary) => (
          <div className="space-y-2  text-gray-700" key={primary.id}>
            <p className="text-base">{primary.email}</p>
            <div className="flex gap-5 items-center justify-center">
              <Link href="https://www.facebook.com/p/Vedic-Healing-Center-100083107520028/" target="_blank">
                <FaFacebook size={22} />
              </Link>
              <Link href="#">
                <BsInstagram size={22} />
              </Link>
              <Link href="#">
                <FaWhatsapp size={22} />
              </Link>
              <Link href="#">
                <IoMail size={22} />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex md:flex-row flex-col-reverse items-start gap-4 lg:gap-10  py-6">
        <ContactUs />
        <div className="w-full md:max-w-[40%] flex flex-col gap-8 text-gray-700">
          <iframe
            className="w-full h-[300px] md:h-[400px] lg:h-[400px] rounded-md md:rounded-lg shadow-lg"
            title="Map showing our location"
            aria-label="Map of our location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2557.070259202348!2d85.30776397387447!3d27.715178276177994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb196b0cbc283f%3A0x5096a3a0ed84a780!2sVedic%20Healing%20(%20Sound%20Healing%2C%20Reiki%20Healing%2C%20Yoga%2C%20Meditation%2C%20Hypnotherapy%20%2C%20PLR%20%2C%20Kundalini%20%2CChakra%20Healing%20and%20Training%20)!5e1!3m2!1sen!2snp!4v1743147692540!5m2!1sen!2snp"
            allowFullScreen
          />
          {primary?.data.map((primary) => (
            <div className="space-y-2 font-medium" key={primary.id}>
              <h1 className="justify-center">
                In front of Kathmandu Guest House, Chaksibari marga, Thamel
                kathmandu, Nepal
              </h1>
              <h1>Business Hours : {primary.business_hours}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Connect;
