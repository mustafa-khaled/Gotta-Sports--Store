import image from "../../assets/shop.jpg";

function HeroSection() {
  return (
    <div
      className="flex h-[60vh] items-center justify-center bg-cover text-bgWhite"
      style={{ backgroundImage: `url(${image})`, backgroundPosition: "50%" }}
    >
      <h1 className="text-4xl font-bold uppercase sm:text-6xl">Shop</h1>
    </div>
  );
}

export default HeroSection;
