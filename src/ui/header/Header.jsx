import { useState } from "react";
import Container from "../Container";
import LinksBigScreen from "./LinksBigScreen";
import Logo from "./Logo";
import LinksSmallScreen from "./LinksSmallScreen";
import ToggleList from "./ToggleList";

function Header() {
  const [showList, setShowList] = useState(false);

  function closeList() {
    setShowList(false);
  }

  function toggleList() {
    setShowList((prev) => !prev);
  }

  return (
    <header className="flex h-[70px] items-center bg-red-400">
      <Container>
        <div className="flex justify-between">
          <Logo />

          <LinksBigScreen />
          <LinksSmallScreen showList={showList} closeList={closeList} />

          <ToggleList showList={showList} toggleList={toggleList} />
        </div>
      </Container>
    </header>
  );
}

export default Header;
