import Bestsellers from "./Bestsellers";
import Gallery from "./Gallery";
import HeroSection from "./HeroSection";

function Home() {
  return (
    <div className="flex flex-col gap-[50px]">
      <HeroSection />
      <Bestsellers />
      <Gallery />
    </div>
  );
}

export default Home;
