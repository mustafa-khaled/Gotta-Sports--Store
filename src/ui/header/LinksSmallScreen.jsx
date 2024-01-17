import { NavLink } from "react-router-dom";
import { headerData } from "../../data/data";

function LinksSmallScreen({ showList, closeList }) {
  return (
    <>
      <div
        className={`fixed left-0 top-[70px] h-[calc(100vh-70px)] ${
          showList && "w-full"
        }  bg-[#00000080]`}
        onClick={closeList}
      ></div>
      <ul
        className={`header-links fixed ${
          showList ? "right-0" : "right-[-100%]"
        } bg-bgWhite border-lightGray top-[70px] z-50 flex h-[100vh]
             w-[90%] flex-col items-center justify-center gap-[30px] border-t transition-all sm:hidden
        `}
      >
        {headerData.map((el) => (
          <li key={el.id}>
            <NavLink
              to={el.to}
              onClick={closeList}
              className={"hover:text-primary text-sm font-bold uppercase"}
            >
              {el.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}

export default LinksSmallScreen;
