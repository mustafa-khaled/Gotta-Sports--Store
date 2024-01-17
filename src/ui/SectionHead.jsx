import Container from "./Container";

function SectionHead({ title }) {
  return (
    <Container>
      <div className="text-center">
        <h2 className="text-3xl font-bold uppercase sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-[5px] text-gray sm:w-[70%] sm:text-xl">
          Commodo sociosqu venenatis cras dolor sagittis integer luctus sem
          primis eget maecenas sed urna malesuada.
        </p>
      </div>
    </Container>
  );
}

export default SectionHead;
