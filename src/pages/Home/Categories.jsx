import { useState } from "react";
import { products } from "../../data/data";

import Container from "../../ui/Container";
import SectionHead from "../../ui/SectionHead";
import ShopItem from "../../features/shop/ShopItem";
import GridContainer from "../../ui/GridContainer";

const categoriesTags = ["Featured", "Latest", "Top Rating"];

function Categories() {
  const [category, setCategory] = useState("All Shoes");

  return (
    <Container>
      <div>
        <SectionHead title={"Explore Our Bestsellers"} />

        {/* Filter */}
        <div className="mx-auto my-[30px] flex w-[95%] gap-[3px] sm:w-[500px]">
          {categoriesTags.map((el) => (
            <span
              onClick={() => setCategory(el)}
              key={el}
              className={`w-full cursor-pointer rounded-full border transition-all ${el === category ? "border-primary" : "border-bgWhite"} 
           p-[3px] text-center text-xs ${el === category ? "text-primary" : "text-darkGray"} sm:p-[5px] sm:text-base`}
            >
              {el}
            </span>
          ))}
        </div>

        <GridContainer>
          {products.map((item) => {
            return <ShopItem item={item} key={item.id} />;
          })}
        </GridContainer>
      </div>
    </Container>
  );
}

export default Categories;
