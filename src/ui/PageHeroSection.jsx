function PageHeroSection({ image, title }) {
  return (
    <div
      className="flex h-[70vh] items-center justify-center bg-cover text-bgWhite"
      style={{ backgroundImage: `url(${image})`, backgroundPosition: "50%" }}
    >
      <h1 className="text-4xl font-bold uppercase sm:text-6xl">{title}</h1>
    </div>
  );
}

export default PageHeroSection;
