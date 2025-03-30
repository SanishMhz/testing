import About from "@/components/others/About";
import Achievement from "@/components/others/Achievement";
import HeroSection from "@/components/others/HeroSection";
import WhoSection from "@/components/others/WhoSection";
import Image from "next/image";
import Connect from "@/components/others/Connect";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <About />
      <Achievement />
      <WhoSection />
      <Connect />
    </div>
  );
}
