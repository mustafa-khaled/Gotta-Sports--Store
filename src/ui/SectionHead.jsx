function SectionHead({ title }) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold uppercase sm:text-4xl">{title}</h2>
      <p className="mx-auto mt-[5px] text-darkGray sm:w-[70%] sm:text-xl">
        Packed in a facility that handles
      </p>
    </div>
  );
}

export default SectionHead;
