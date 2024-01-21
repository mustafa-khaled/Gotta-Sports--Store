import { products } from "../../data/data";
import GridContainer from "../../ui/GridContainer";
import ShopItem from "./ShopItem";
import PageHeroSection from "../../ui/PageHeroSection";

import image from "../../assets/shop-bg.webp";

function Shop() {
  return (
    <div className="flex flex-col gap-[50px]">
      <PageHeroSection image={image} title={"Shop"} />
      <GridContainer>
        {products.map((item) => {
          return <ShopItem item={item} key={item.id} />;
        })}
      </GridContainer>
    </div>
  );
}

export default Shop;
