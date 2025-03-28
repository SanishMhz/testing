import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { MdCopyright } from "react-icons/md";
import GetInTouchForm from "../others/GetInTouchForm";

const Footer = () => {
  const quickLinks = [
    {
      label: "Home",
      href: "#",
    },
    {
      label: "Who we are?",
      href: "#",
    },
    {
      label: "Services",
      href: "#",
    },
    {
      label: "Success Stories",
      href: "#",
    },
    {
      label: "Lets Connect",
      href: "#",
    },
    {
      label: "Trainings",
      href: "#",
    },
  ];
  const services = [
    "Sound Healing Session",
    "Advanced Kundalini Healing",
    "Vibration Massage Balancing Therapy",
    "Reiki Healing",
    "Hypnotherapy",
    "Past life regression sound bath / Gong Bath",
    "Balancing Therapy",
    "Yoga (Hatha Yoga) Training",
    "Sound Bath / Gong Bath",
  ];
  return (
    <div className="flex flex-col text-white">
      {/* upper section */}
      <div className="py-10 bg-[#361631] flex flex-col md:flex-row items-start justify-between  px-4 sm:px-8 md:px-12 lg:px-16 gap-8">
        <div className="flex flex-col items-start gap-5">
          <div className="flex items-center gap-1">
            <Image
              src="/logo.png"
              alt="logo"
              width={80}
              height={80}
              objectFit="contain"
            />
            <p className="flex flex-col gap-1">
              <span className="text-xl font-semibold">
                Vedic Healing Center
              </span>
              <span className="text-sm">Healing Through Reiki</span>
            </p>
          </div>
          <p className="text-justify w-full sm:max-w-sm text-sm">
            Welcome to Vedic Healing, your sanctuary for holistic Reiki and
            sound healing in the heart of Thamel, Kathmandu. Led by experienced
            healer Amit Shrestha, our practice is dedicated to restoring
            balance, reducing stress, and enhancing overall well-being through
            the ancient art of Reiki and sound therapy. Whether you are looking
            to relieve anxiety, achieve spiritual growth, or heal physical
            ailments, we provide personalized sessions to meet your needs. Visit
            us opposite Kathmandu Guest House or call +977 9851094238 to begin
            your journey toward inner harmony.
          </p>
          <div className="flex gap-4 items-center">
            <Link href="#">
              <FaFacebook size={20} />
            </Link>
            <Link href="#">
              <BsInstagram size={20} />
            </Link>
            <Link href="#">
              <FaWhatsapp size={20} />
            </Link>
            <Link href="#">
              <IoMail size={20} />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold">Quick Links</h1>
          <div className="flex flex-col gap-1 text-sm">
            {quickLinks.map((item, index) => (
              <Link href={item.href} key={index}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold">Our Services</h1>
          <div className="flex flex-col gap-1 text-sm">
            {services.map((item, index) => (
              <h1 key={index}>{item}</h1>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-full sm:w-fit  gap-2">
          <h1 className="text-xl font-bold">Get In Touch</h1>
          <GetInTouchForm />
        </div>
      </div>

      {/* bottom sectin */}
      <p className="py-2 flex items-center justify-center bg-[#21031C] text-sm">
        <MdCopyright size={18} />
        <span>Vedic Healing Center | Designed by Mindrisers</span>
      </p>
    </div>
  );
};

export default Footer;
