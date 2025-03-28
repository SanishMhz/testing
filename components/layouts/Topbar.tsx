import Image from "next/image"
import { Button } from "../ui/button"

const Topbar = () => {
  return (
    <div className="hidden md:flex justify-evenly items-center gap-5 md:gap-10 lg:gap-50 py-5 bg-[#f5ecf3]">
      <div className="flex items-center gap-2">
        <div>
        <Image
        src="/Vedic.png"
        alt="Vedic Logo"
        width={70}
        height={70}
        />
        </div>
       <h1 className="flex flex-col"><span className="text-2xl text-[#99408b] font-bold">Vedic Healing Center</span><span className="text-[#99408b]">Healing Through Reiki</span></h1>
      </div>
      <div className="">
        <Button className="text-lg font-semibold bg-[#99408b] hover:bg-[#5c2653] text-gray-50 py-6 cursor-pointer">Book An Appointment</Button>
      </div>
    </div>
  )
}
export default Topbar