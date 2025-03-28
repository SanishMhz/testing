const HeroSection = () => {
  return (
    <div
      style={{ backgroundImage: "url('/reiki.jpg')" }}
      className="w-full h-[400px] lg:h-[550px] bg-cover bg-center relative"
    >
        {/* Over Lay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Image Text */}
        <div className="absolute inset-0 text-gray-50 flex flex-col justify-center items-center space-y-3">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">Welcome To Vedic Healing Center</h1>
          <p className="text-sm md:text-xl">"Healing Through Reiki: Balance Your Mind, Body, and Spirit."</p>
        </div>
    </div>
  )
}
export default HeroSection;