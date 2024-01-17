import { NavLink } from "react-router-dom";
import { headerData } from "../../data/data";

function LinksBigScreen() {
  return (
    <ul className="header-links hidden items-center gap-[30px] sm:flex">
      {headerData.map((el) => (
        <li key={el.id}>
          <NavLink
            to={el.to}
            className={"hover:text-primary text-sm font-bold uppercase"}
          >
            {el.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default LinksBigScreen;
