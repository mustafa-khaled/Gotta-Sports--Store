import image from "../../assets/wellcome.webp";

function Welcome() {
  return (
    <div className="flex min-h-[60vh] flex-col-reverse bg-gray sm:flex-row">
      <div
        className="h-[60vh] w-full bg-cover sm:w-[50%]"
        style={{ backgroundImage: `url(${image})`, backgroundPosition: "50%" }}
      ></div>
      <div className="flex h-[60vh] w-full items-center px-[15px] sm:w-[50%] sm:px-[30px]">
        <div>
          <p className="uppercase text-primary">About Us</p>
          <h2 className="my-[10px] text-3xl font-medium sm:text-5xl">
            Welcome To Your <br />
            Favourite New
          </h2>
          <p className="text-darkGray">
            Electric skateboarding is fun, easy to learn and fast growing in
            popularity in the UK and around the world.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
