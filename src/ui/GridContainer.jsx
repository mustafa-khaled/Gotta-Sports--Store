function GridContainer({ children }) {
  return (
    <div
      className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-[10px]
        sm:grid-cols-[repeat(auto-fill,minmax(250px,1fr))]"
    >
      {children}
    </div>
  );
}

export default GridContainer;
