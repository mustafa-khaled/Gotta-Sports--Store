import { headerData } from "../../data/data";

function LinksBigScreen() {
  return (
    <ul className="header-links hidden items-center gap-[30px] sm:flex">
      {headerData.map((el) => (
        <li key={el.id}>Eom</li>
      ))}
    </ul>
  );
}

export default LinksBigScreen;
