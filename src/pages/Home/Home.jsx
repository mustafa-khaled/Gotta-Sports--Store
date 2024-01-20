import Categories from "./Categories";
import HeroSection from "./HeroSection";
import Welcome from "./Welcome";

function Home() {
  return (
    <div className="flex flex-col gap-[50px]">
      <HeroSection />
      <Categories />
      <Welcome />
    </div>
  );
}

export default Home;
