import HeroSection from "./HeroSection";
import GridContainer from "../../ui/GridContainer";
import { products } from "../../data/data";
import ShopItem from "./ShopItem";

function Shop() {
  return (
    <div className="flex flex-col gap-[50px]">
      <HeroSection />
      <GridContainer>
        {products.map((item) => {
          return <ShopItem item={item} key={item.id} />;
        })}
      </GridContainer>
    </div>
  );
}

export default Shop;
