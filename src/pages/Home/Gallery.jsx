import image1 from "../../assets/home-g-1.jpeg";
import image2 from "../../assets/home-g-2.jpeg";
import image3 from "../../assets/home-g-3.jpeg";

function Gallery() {
  return (
    <div className="flex min-h-[80vh] flex-col sm:flex-row">
      <div
        className="h-[80vh] w-full bg-cover sm:w-[50%]"
        style={{ backgroundImage: `url(${image1})`, backgroundPosition: "50%" }}
      ></div>

      <div className="h-[80vh] w-full sm:w-[50%]">
        <div
          className="h-[50%] w-full bg-cover"
          style={{
            backgroundImage: `url(${image2})`,
            backgroundPosition: "50%",
          }}
        ></div>
        <div
          className="h-[50%] w-full bg-cover"
          style={{
            backgroundImage: `url(${image3})`,
            backgroundPosition: "50%",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Gallery;
