import { useState } from "react";
import Container from "../../ui/Container";

import SectionHead from "../../ui/SectionHead";
import imageOne from "../../assets/sho1-1.png";
import imageTwo from "../../assets/sho1-2.png";
import imageThree from "../../assets/sho1-3.png";
import imageFour from "../../assets/sho1-4.png";
import ShopItem from "../../features/shop/ShopItem";
import GridContainer from "../../ui/GridContainer";

const categories = ["All Shoes", "Men's", "Women's", "Kid's"];

const products = [
  {
    id: 1,
    title: "Arsenal Home Jersey",
    images: [imageThree, imageFour],
    price: 140,
  },
  {
    id: 2,
    title: "Arsenal Home Jersey",
    images: [imageTwo, imageOne],
    price: 130,
  },

  {
    id: 3,
    title: "Arsenal Home Jersey",
    images: [imageTwo, imageOne],
    price: 160,
  },

  {
    id: 4,
    title: "Arsenal Home Jersey",
    images: [imageThree, imageFour],
    price: 150,
  },
];

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
            border-[2px] p-[2px] text-center text-sm sm:p-[5px] sm:text-base`}
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
