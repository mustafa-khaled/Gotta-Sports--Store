import { useState } from "react";
import { MdPersonOutline } from "react-icons/md";

import Container from "../Container";
import LinksBigScreen from "./LinksBigScreen";
import Logo from "./Logo";
import LinksSmallScreen from "./LinksSmallScreen";
import ToggleList from "./ToggleList";
import CartIcon from "./CartIcon";
import WishListIcon from "./WishListIcon";
import { Link } from "react-router-dom";

function Header() {
  const [showList, setShowList] = useState(false);

  function closeList() {
    setShowList(false);
  }

  function toggleList() {
    setShowList((prev) => !prev);
  }

  return (
    <header className="fixed top-0 z-50 flex h-[70px] w-full items-center bg-bgWhite shadow-md">
      <Container>
        <div className="flex justify-between">
          {/* Toggle List btn */}
          <ToggleList showList={showList} toggleList={toggleList} />

          <Logo />

          <LinksBigScreen />
          <LinksSmallScreen showList={showList} closeList={closeList} />

          <div className="flex items-center gap-[10px]">
            <Link to={"/login"}>
              <MdPersonOutline className="cursor-pointer text-xl" />
            </Link>
            <WishListIcon />
            <CartIcon />
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
