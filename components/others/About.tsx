import Image from "next/image"
import { Button } from "../ui/button"

const About = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-5 px-4 sm:px-8 md:px-12 lg:px-28 py-5 md:py-8">
      {/* First Section */}
      <div className="">
        <Image
        src="/bowl.jpg"
        alt="About"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-64 md:w-96 md:h-80 bg-cover rounded-xl"
        />
      </div>
      {/* Second Section */}
      <div className="flex-1 space-y-2 md:space-y-4 py-2">
        <h1 className="text-2xl md:text-3xl font-semibold text-[#5c2653] text-center md:text-justify">Welcome To Vedic Healing Center</h1>
        <p className="text-justify text-base lg:text-xl text-gray-600">"Welcome to Vedic Healing, your sanctuary for holistic Reiki and sound healing in the heart of Thamel, Kathmandu. Led by experienced healer Amit Shrestha, our practice is dedicated to restoring balance, reducing stress, and enhancing overall well-being through the ancient art of Reiki and sound therapy. Whether you are looking to relieve anxiety, achieve spiritual growth, or heal physical ailments, we provide personalized sessions to meet your needs. Visit us opposite Kathmandu Guest House or call +977 9851094238 to begin your journey toward inner harmony."</p>
        <div>
          <Button className="text-base lg:text-xl flex flex-col gap-0 text-justify bg-[#99408b] font-semibold hover:bg-[#5c2653] text-gray-50 mx-4 lg:mx-0 py-8 lg:py-10 cursor-pointer rounded-xl"><span>"Book Your Healing Session Today – Restore</span><span>Balance, Reduce Stress, and Feel Rejuvenated."</span></Button>
        </div>
      </div>

    </div>
  )
}
export default About