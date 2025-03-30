import Image from "next/image"

const WhoSection = () => {
  return (
    <div className="py-5">
      <h1 className="text-2xl lg:text-3xl text-[#5c2653] font-semibold text-center">Who We Are?</h1>
      {/* Business Story */}
      <div className="flex flex-col md:flex-row justify-center px-2 md:px-10 lg:px-20 py-4 gap-5">
        {/* First Section */}
        <div className="flex-2 space-y-3">
          <p className="text-lg text-gray-700 text-justify ml-0 md:ml-4">The journey of Vedic healing was founded out of a profound personal journey of founder/Sound Healing Master, Mr. Amit Shrestha. This journey was deeply influenced by his strong interest in music and spiritual wellness. After experiencing the transformative effects of sound heling first hand, he is dedicated to helping people in discovering self-actualization and spiritual growth. Through interactions with various individuals facing different challenges, Mr. Shrestha practiced healing methods like Reiki, Meditation, and Hypnosis. Vedic Healing is focused on helping people overcome physical and psychological issues by offering personalized sessions aimed at improving their mental, physical, and spiritual wellbeing.</p>
          <h1 className="ml-0 md:ml-4"><span className="text-xl text-[#99408b] font-bold">Mission Statement:</span><span>आफनो लागी साधना अरु को लागी सेवा.</span></h1>
        </div>
        {/* Second Section */}
        <div className="w-full flex-1">
          <Image
          src="/who.jpg"
          alt="Image"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full lg:w-96 h-72 object-cover rounded-2xl"
           />
        </div>
      </div>
     {/* Background Story */}
     <div className="flex flex-col md:flex-row justify-center items-center gap-5 px-5 md:px-10 lg:px-24">
      {/* First Section */}
      <div className="w-full lg:w-1/2">
        <Image
        src="/meditation.jpg"
        alt="Meditation"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full md:w-96 h-96 object-cover"
        />
      </div>
      {/* Second Section */}
      <div className="space-y-2">
        <h1 className="text-xl lg:text-2xl text-[#5c2653] font-semibold">Business/Brand Story</h1>
        <p className="text-justify text-gray-700">The founder, Mr. Amit Shrestha, is a dedicated Sound Healing Master with over 9 years of experience and 21 years of practice in Reiki healing. His sessions and teaching approach blend ancient healing methods with scientific reasoning. With a deep passion for music, his sessions are harmoniously tailored to suit the needs of various individuals.</p>
      </div>
     </div>
    </div>
  )
}
export default WhoSection