import About from "@/components/others/About";
import Achievement from "@/components/others/Achievement";
import HeroSection from "@/components/others/HeroSection";
import WhoSection from "@/components/others/WhoSection";
import Connect from "@/components/others/Connect";
import Testimonials from "@/components/others/Testimonials";
import Why from "@/components/others/Why";

export default function Home() {
  return (
    <div className="bg-[#f5ecf3]">
      <HeroSection />
      <About />
      <Achievement />
      <WhoSection />
      <Why />
      <Testimonials />
      <Connect />
    </div>
  );
}
