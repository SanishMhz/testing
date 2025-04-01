"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import { RiMenuFill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Login } from "../others/Login";
import { Register } from "../others/Register";
import AppointmentForm from "../others/AppointmentForm";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <div className="bg-[#dfc4db] py-3 text-gray-600 relative px-4 sm:px-8 md:px-12 lg:px-16">
      {/* Larger Screen */}
      <div className="hidden md:flex justify-end gap-4 items-center font-bold text-xl">
        <Link
          href={"#"}
          className="hover:bg-[#733068] hover:text-gray-50 px-4 py-1 rounded"
        >
          Home
        </Link>
        <Link
          href={"#"}
          className="hover:bg-[#733068] hover:text-gray-50 px-4 py-1 rounded"
        >
          Who We Are?
        </Link>
        <Link
          href={"#"}
          className="hover:bg-[#733068] hover:text-gray-50 px-4 py-1 rounded"
        >
          Service
        </Link>
        <Link
          href={"#"}
          className="hover:bg-[#733068] hover:text-gray-50 px-4 py-1 rounded"
        >
          Success Stories
        </Link>
        <Link
          href={"#"}
          className="hover:bg-[#733068] hover:text-gray-50 px-4 py-1 rounded"
        >
          Let's Connect
        </Link>
        <Link
          href={"#"}
          className="hover:bg-[#733068] hover:text-gray-50 px-4 py-1 rounded"
        >
          <div>
            <Dialog>
              <DialogTrigger className="cursor-pointer">
                Login/Register
              </DialogTrigger>
              <DialogContent className="">
                <DialogHeader>
                  <DialogTitle>
                    <Tabs defaultValue="" className="w-full">
                      <TabsList className="text-[#5c2653] cursor-pointer  ml-32 md:ml-52">
                        <TabsTrigger value="login" className="cursor-pointer">
                          Login
                        </TabsTrigger>
                        <TabsTrigger
                          value="register"
                          className="cursor-pointer"
                        >
                          Register
                        </TabsTrigger>
                      </TabsList>
                      <TabsContent value="login">
                        <Login />
                      </TabsContent>
                      <TabsContent value="register">
                        <Register />
                      </TabsContent>
                    </Tabs>
                  </DialogTitle>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </Link>
      </div>
      {/* mobile screen  */}
      <div className="block md:hidden py-3">
        {/* Logo */}
        <div className="flex items-center gap-2 px-2">
          <Image src="/Vedic.png" alt="Vedic Logo" width={50} height={50} />
          <h1 className="flex flex-col">
            <span className="text-xl text-[#99408b] font-bold">
              Vedic Healing Center
            </span>
            <span className="text-[#99408b] text-sm">
              Healing Through Reiki
            </span>
          </h1>
        </div>
        {/* Side Navbar */}
        <div className="absolute right-2 top-7">
          <button onClick={() => setOpenMenu((prev) => !prev)} className="p-1">
            <RiMenuFill size={24} className="text-[#99408b]  cursor-pointer" />
          </button>
        </div>

        <div
          className={`absolute top-0 right-0 z-50 min-w-50 ${
            openMenu ? "flex" : "hidden"
          } flex-col items-end p-4 h-screen bg-[#f5ecf3] gap-4 text-gray-900`}
        >
          <button onClick={() => setOpenMenu((prev) => !prev)}>
            <IoClose size={24} className="text-[#99408b] cursor-pointer" />
          </button>
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
            <Link href="#" onClick={() => setOpenMenu(false)}>
              <div>
                <div>
                  <Dialog>
                    <DialogTrigger className="cursor-pointer">
                      Login/Register
                    </DialogTrigger>
                    <DialogContent className="">
                      <DialogHeader>
                        <DialogTitle>
                          <Tabs defaultValue="" className="w-full">
                            <TabsList className="text-[#5c2653] cursor-pointer  ml-32 md:ml-52">
                              <TabsTrigger
                                value="login"
                                className="cursor-pointer"
                              >
                                Login
                              </TabsTrigger>
                              <TabsTrigger
                                value="register"
                                className="cursor-pointer"
                              >
                                Register
                              </TabsTrigger>
                            </TabsList>
                            <TabsContent value="login">
                              <Login />
                            </TabsContent>
                            <TabsContent value="register">
                              <Register />
                            </TabsContent>
                          </Tabs>
                        </DialogTitle>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </Link>
            {/* Button */}
            <div className="">
              <Dialog>
                <DialogTrigger className="text-xl font-semibold bg-[#99408b] hover:bg-[#8a3a7d] text-gray-50 p-2 cursor-pointer rounded-lg">
                  Book An Appointment
                </DialogTrigger>
                <DialogContent className="w-full md:w-[50%] max-h-[98%] lg:max-h-[90%] overflow-auto bg-white border-none space-y-6">
                  <DialogHeader>
                    <DialogTitle className="text-center font-bold text-xl md:text-2xl text-[#99408b]">
                      Book Your Appointment
                    </DialogTitle>
                  </DialogHeader>
                  <AppointmentForm />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
