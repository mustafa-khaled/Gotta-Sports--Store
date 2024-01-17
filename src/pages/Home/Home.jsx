import Bestsellers from "./Bestsellers";
import HeroSection from "./HeroSection";

function Home() {
  return (
    <div className="flex flex-col gap-[40px]">
      <HeroSection />
      <Bestsellers />
    </div>
  );
}

export default Home;
