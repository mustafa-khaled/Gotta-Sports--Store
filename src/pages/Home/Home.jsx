import HeroSection from "./HeroSection";
import Categories from "./Categories";
import Welcome from "./Welcome";
import CustomersReview from "./CustomersReview";

function Home() {
  return (
    <div className="flex flex-col gap-[50px]">
      <HeroSection />
      <Categories />
      <Welcome />
      <CustomersReview />
    </div>
  );
}

export default Home;
