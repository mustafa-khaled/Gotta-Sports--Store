import { useState } from "react";
import SectionHead from "../../ui/SectionHead";

const categories = ["All Shoes", "Men's", "Women's", "Kid's"];

function Bestsellers() {
  const [category, setCategory] = useState("All Shoes");

  return (
    <div>
      <SectionHead title={"Explore Our Bestsellers"} />

      <div className="mx-auto my-[30px] flex w-[95%] sm:w-[500px]">
        {categories.map((el) => (
          <span
            onClick={() => setCategory(el)}
            key={el}
            className={`w-full cursor-pointer border ${el === category ? "border-primary" : "border-lightGray"} 
            border-[2px] p-[2px] text-center text-sm sm:p-[5px] sm:text-base`}
          >
            {el}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Bestsellers;
