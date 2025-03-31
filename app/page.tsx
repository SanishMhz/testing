import About from "@/components/others/About";
import Achievement from "@/components/others/Achievement";
import HeroSection from "@/components/others/HeroSection";
import WhoSection from "@/components/others/WhoSection";
import Connect from "@/components/others/Connect";
import Testimonials from "@/components/others/Testimonials";
import Why from "@/components/others/Why";
import Training from "@/components/others/Training";
import Services from "@/components/others/Services";

export default function Home() {
  return (
    <div className="bg-[#f5ecf3]">
      <HeroSection />
      <About />
      <Achievement />
      <WhoSection />
      <Services />
      <Training />
      <Why />
      <Testimonials />
      <Connect />
    </div>
  );
}
