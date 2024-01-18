import Bestsellers from "./Bestsellers";
import Gallery from "./Gallery";
import HeroSection from "./HeroSection";
import OurFeatured from "./OurFeatured";

function Home() {
  return (
    <div className="flex flex-col gap-[50px]">
      <HeroSection />
      <Bestsellers />
      <Gallery />
      <OurFeatured />
    </div>
  );
}

export default Home;
