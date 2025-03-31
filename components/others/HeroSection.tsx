const HeroSection = () => {
  return (
    <div
      style={{ backgroundImage: "url('/reiki.jpg')" }}
      className="w-full h-[350px] lg:h-[550px] bg-cover bg-center relative"
    >
      {/* Over Lay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* Image Text */}
      <div className="absolute inset-0 text-gray-50 flex flex-col justify-center items-center space-y-3">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center">
          Welcome To Vedic Healing Center
        </h1>
        <p className="text-base md:text-xl text-center">
          Healing Through Reiki: Balance Your Mind, Body, and Spirit.
        </p>
      </div>
    </div>
  );
};
export default HeroSection;
