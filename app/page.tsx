import About from "@/components/others/About";
import Achievement from "@/components/others/Achievement";
import HeroSection from "@/components/others/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <About />
      <Achievement />
    </div>
  );
}
