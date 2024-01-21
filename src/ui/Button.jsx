function Button({ children }) {
  return (
    <button
      className="w-full rounded-lg bg-primary px-[10px] py-[5px] uppercase
     text-bgWhite transition-all hover:bg-primaryDark"
    >
      {children}
    </button>
  );
}

export default Button;
