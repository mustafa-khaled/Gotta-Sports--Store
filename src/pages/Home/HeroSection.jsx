import image from "../../assets/slider-img-1.png";
import textImage from "../../assets/text-slider-1.png";
import { heroSectionImages } from "../../data/data";

function HeroSection() {
  return (
    <div>
      <div className="bg-yellow relative flex h-[70vh] items-center justify-center">
        <img
          src={image}
          alt="main img"
          className="hero-section-image z-30 w-[85%] sm:w-[500px]"
        />
        <img
          src={textImage}
          alt="text"
          className="absolute left-[50%] top-[50%] z-20 translate-x-[-50%] translate-y-[-50%] sm:w-[70%]"
        />
      </div>

      <div className="flex flex-col sm:flex-row">
        {heroSectionImages.map((el) => {
          return (
            <div
              key={el.id}
              className="relative h-[30vh] w-full overflow-hidden sm:h-[40vh]"
            >
              <p className="text-bgWhite absolute bottom-[10px] left-[3px] z-50 uppercase ">
                {el.title}
              </p>

              <img
                src={el.image}
                alt="Gallery Img"
                className="hover:scale-130 h-[40vh] w-full object-cover transition-transform duration-300 
              hover:scale-[1.1] hover:transform"
                style={{
                  backgroundPosition: "50%",
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HeroSection;
