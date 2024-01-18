import { useState } from "react";

import Container from "../../ui/Container";
import SectionHead from "../../ui/SectionHead";
import ShopItem from "../../features/shop/ShopItem";
import GridContainer from "../../ui/GridContainer";
import { products } from "../../data/data";

const categories = ["All Shoes", "Men's", "Women's", "Kid's"];

function Bestsellers() {
  const [category, setCategory] = useState("All Shoes");

  return (
    <Container>
      <div>
        <SectionHead title={"Explore Our Bestsellers"} />

        {/* Filter */}
        <div className="mx-auto my-[30px] flex w-[95%] sm:w-[500px]">
          {categories.map((el) => (
            <span
              onClick={() => setCategory(el)}
              key={el}
              className={`w-full cursor-pointer border transition-all ${el === category ? "border-primary" : "border-lightGray"} 
            border-[2px] p-[2px] text-center text-sm ${el === category ? "text-primary" : "text-textColor"} sm:p-[5px] sm:text-base`}
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

export default Bestsellers;
