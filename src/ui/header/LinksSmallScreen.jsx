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
          showList ? "left-0" : "left-[-100%]"
        } top-[70px] z-50 flex h-[100vh] w-[90%] flex-col
             items-center justify-center gap-[30px] border-t border-lightGray bg-bgWhite transition-all sm:hidden
        `}
      >
        {headerData.map((el) => (
          <li key={el.id}>
            <NavLink
              to={el.to}
              onClick={closeList}
              className={"text-sm font-bold uppercase hover:text-primary"}
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
