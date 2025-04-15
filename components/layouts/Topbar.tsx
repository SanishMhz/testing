"use client";
import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AppointmentForm from "../others/AppointmentForm";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

import { Login } from "../others/Login";

const Topbar = () => {
  const { user } = useSelector((state: RootState) => state.userSlice);
  return (
    <div className="hidden md:flex justify-between items-center py-5 px-4 sm:px-8 md:px-12 lg:px-16 bg-[#f5ecf3]">
      <div className="flex items-center gap-2">
        <div>
          <Image src="/Vedic.png" alt="Vedic Logo" width={70} height={70} />
        </div>
        <h1 className="flex flex-col">
          <span className="text-2xl text-[#99408b] font-bold">
            Vedic Healing Center
          </span>
          <span className="text-[#99408b]">Healing Through Reiki</span>
        </h1>
      </div>
      <div className="">
        {/* Booking Form */}
        <Dialog>
          <DialogTrigger className="text-lg font-semibold bg-[#99408b] hover:bg-[#8a3a7d] text-gray-50 p-2 cursor-pointer rounded-lg">
            Book An Appointment
          </DialogTrigger>
          <DialogContent className="w-full md:w-[50%] max-h-[98%] lg:max-h-[90%] overflow-auto bg-white border-none space-y-6">
            <DialogHeader>
              <DialogTitle className="text-center font-bold text-lg md:text-2xl text-[#99408b] underline underline-offset-8">
                {!user
                  ? "Login To Book Your Appointment"
                  : "Book Your  Appointment"}
              </DialogTitle>
            </DialogHeader>
            {!user ? <Login /> : <AppointmentForm />}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
export default Topbar;
