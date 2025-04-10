"use client";
import ServiceCard from "@/components/shared/ServiceCard";
import { Button } from "@/components/ui/button";
import { useGetSericesByIdQuery, useGetServicesQuery } from "@/store/apiSlice";
import { RootState } from "@/store/store";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { IoIosPricetag } from "react-icons/io";
import { useSelector } from "react-redux";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Login } from "@/components/others/Login";
import ServiceForm from "@/components/shared/ServiceForm";
 export interface ServiceData{
  id:string,
  created_at:number,
  image:string,
  updated_at:number,
  title:string,
  description:string,
  includes:string,
  price:number
}

const ServicePage = () => {
  const params=useParams();
  const id=params?.id;

  const router = useRouter();
  const {data:service}=useGetSericesByIdQuery(Number(id))
  const {data:otherService}=useGetServicesQuery()
  const {user}=useSelector((state:RootState)=>state.userSlice)
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
        style={{ backgroundImage: `url(${service?.image})` }}
        className="w-full h-[300px] sm:h-[400px] lg:h-[450px] bg-cover bg-center relative"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="absolute inset-0 text-gray-50 flex flex-col justify-center items-center space-y-5 px-4 sm:px-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            {service?.title}
          </h1>
          <p className="text-xl sm:text-2xl">
            {service?.description}
          </p>
          <Dialog>
          <DialogTrigger className="text-lg font-semibold bg-[#99408b] hover:bg-[#8a3a7d] text-gray-50 p-2 cursor-pointer rounded-lg">
            Book An Appointment
          </DialogTrigger>
          <DialogContent className="w-full md:w-[50%] max-h-[98%] lg:max-h-[90%] overflow-auto bg-white border-none space-y-6">
            <DialogHeader>
              <DialogTitle className="text-center font-bold text-lg md:text-2xl text-[#99408b]">
                {!user ? "Please Login": "Book Your  Appointment"}
              </DialogTitle>
            </DialogHeader>
            {!user ? <Login/> :  <ServiceForm /> }
          </DialogContent>
         
        </Dialog>
        </div>
      </div>

      {/* Second Section */}
      <div className="py-6">
        <div className="flex flex-col md:flex-row justify-center gap-5 px-5 md:px-20">
          <div className="flex-1 w-full space-y-3">
            <Image
               src={service?.image || ""}
               alt={service?.title || ""} 
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-96 rounded-2xl object-cover"
            />
            <div className="text-justify text-lg text-gray-600">
              <p>
                {service?.description}
              </p>

              {/* What's Included Section */}
              <div className="space-y-2 mt-6">
                <h1 className="font-bold text-xl">What's Included?</h1>
                <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <div className="text-base" dangerouslySetInnerHTML={{ __html: service?.includes }} />
                    </li>
                </ul>
              </div>

              {/* Pricing */}
              <div className="mt-6">
                <h1 className="text-xl font-bold">Pricing</h1>
                <p className="flex items-center gap-2">
                  <IoIosPricetag size={20} />Rs.{service?.price}
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
            {otherService?.data.map((other) => (
              <ServiceCard
                id={other.id}
                image={other.image}
                title={other.title}
                key={other.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
