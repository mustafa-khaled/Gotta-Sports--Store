import Bestsellers from "./Bestsellers";
import HeroSection from "./HeroSection";
import OurFeatured from "./OurFeatured";

function Home() {
  return (
    <div className="flex flex-col gap-[50px]">
      <HeroSection />
      <Bestsellers />
      <OurFeatured />
    </div>
  );
}

export default Home;
