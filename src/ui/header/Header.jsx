import Container from "../Container";
import LinksBigScreen from "./LinksBigScreen";
import Logo from "./Logo";

function Header() {
  return (
    <header className="flex h-[70px] items-center bg-red-400">
      <Container>
        <div className="flex justify-between">
          <Logo />
          <LinksBigScreen />
        </div>
      </Container>
    </header>
  );
}

export default Header;
