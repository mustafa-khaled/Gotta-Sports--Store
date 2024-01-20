import { useState } from "react";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import { SliderData } from "../../data/data";

import Container from "../../ui/Container";

function HeroSection() {
  const [imageIndex, setImageIndex] = useState(0);

  const showNextImage = () => {
    setImageIndex((index) => {
      if (index === SliderData.length - 1) return 0;
      return index + 1;
    });
  };

  const showPrevImage = () => {
    setImageIndex((index) => {
      if (index === 0) return SliderData.length - 1;
      return index - 1;
    });
  };

  return (
    <div
      className="relative flex h-[calc(100vh-70px)] items-center justify-center bg-cover text-bgWhite"
      style={{
        backgroundImage: `url(${SliderData[imageIndex]})`,
        backgroundPosition: "50%",
      }}
    >
      <Container>
        <div
          className={`flex flex-col ${imageIndex > 0 ? "sm:items-end" : "sm:items-start"} text-center font-medium sm:text-left`}
        >
          <div>
            <p className="uppercase">New Collection</p>
            <h1 className="my-[10px] text-4xl sm:text-7xl">
              Skateboard 209 <br />
              Nitro Circus
            </h1>
            <p className="font-normal">
              A team of 5 experienced judges will decide <br />
              the winners through a scoring system
            </p>
          </div>
        </div>
      </Container>

      <button
        className="absolute left-[10px] top-[50%] flex translate-y-[-50%] items-center justify-center rounded-full 
        border border-lightGray p-[5px] transition-all hover:bg-bgWhite hover:text-primary sm:left-[30px] sm:p-[10px]"
        onClick={showPrevImage}
      >
        <MdArrowBackIosNew className="text-lg sm:text-2xl" />
      </button>

      <button
        className="absolute right-[10px] top-[50%] flex translate-y-[-50%] items-center justify-center rounded-full 
        border border-lightGray p-[5px] transition-all hover:bg-bgWhite hover:text-primary sm:right-[30px] sm:p-[10px]"
        onClick={showNextImage}
      >
        <MdArrowForwardIos className="text-lg sm:text-2xl" />
      </button>
    </div>
  );
}

export default HeroSection;
