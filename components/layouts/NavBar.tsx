"use client";

import Link from "next/link"
import { useState } from "react";
import { Button } from "../ui/button";
import { RiMenuFill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import Image from "next/image";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <div className="bg-[#dfc4db] py-4 text-gray-600 relative ">
      {/* Larger Screen */}
      <div className="hidden md:flex justify-center items-center gap-8 font-bold text-xl">
        <Link href={"#"} className="hover:bg-[#733068] hover:text-gray-50 p-3 rounded-xl">Home</Link>
        <Link href={"#"} className="hover:bg-[#733068] hover:text-gray-50 p-3 rounded-xl">Who We Are?</Link>
        <Link href={"#"} className="hover:bg-[#733068] hover:text-gray-50 p-3 rounded-xl">Service</Link>
        <Link href={"#"} className="hover:bg-[#733068] hover:text-gray-50 p-3 rounded-xl">Success Stories</Link>
        <Link href={"#"} className="hover:bg-[#733068] hover:text-gray-50 p-3 rounded-xl">Let's Connect</Link>
        <Link href={"#"} className="hover:bg-[#733068] hover:text-gray-50 p-3 rounded-xl">Login/Register</Link>
      </div>
      {/* Mobile Screen */}
      <div className="block md:hidden py-3">
        {/* Logo */}
        <div className="flex items-center gap-2 px-2">
            <Image
            src="/Vedic.png"
            alt="Vedic Logo"
            width={50}
            height={50}
             />
          <h1 className="flex flex-col"><span className="text-xl text-[#99408b] font-bold">Vedic Healing Center</span><span className="text-[#99408b] text-sm">Healing Through Reiki</span></h1>
        </div>
        {/* Side Navbar */}
        <div className="absolute right-2 top-7">
        <Button onClick={() => setOpenMenu((prev) => !prev)}>
          <RiMenuFill size={60} className="text-black" />
        </Button>
        </div>
      
        <div
          className={`absolute top-0 right-0 z-50 min-w-50 ${
            openMenu ? "flex" : "hidden"
          } flex-col items-end p-4 h-screen bg-[#f5ecf3] gap-4 text-gray-900`}
        >
          <Button
            className="text-xl"
            onClick={() => setOpenMenu((prev) => !prev)}
          >
            <IoClose size={30} />
          </Button>
          <div className="flex flex-col gap-2 text-base items-start space-y-5 px-2">
            <div className="flex justify-between items-center gap-2 ">
              <Image
                src="/Vedic.png"
                alt="Logo Mobile"
                width={40}
                height={40}
              />
              <h1 className="font-medium">Vedic Healing Center</h1>
            </div>

            <Link href="#" onClick={() => setOpenMenu(false)}>
              Home
            </Link>
            <Link href="#" onClick={() => setOpenMenu(false)}>
              Who We Are?
            </Link>
            <Link href="#contact" onClick={() => setOpenMenu(false)}>
              Service
            </Link>
            <Link href="#contact" onClick={() => setOpenMenu(false)}>
              Service
            </Link>
            <Link href="#contact" onClick={() => setOpenMenu(false)}>
              Success Stories
            </Link>
            <Link href="#contact" onClick={() => setOpenMenu(false)}>
              Let's Connect
            </Link>
            <Link href="#contact" onClick={() => setOpenMenu(false)}>
             Login/Register
            </Link>
            {/* Button */}
            <div className="">
        <Button className="text-base font-semibold bg-[#99408b] hover:bg-[#5c2653] text-gray-50 py-4 cursor-pointer">Book An Appointment</Button>
      </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default NavBar