import { Link } from "react-router-dom";
import logoImage from "../../assets/logo.png";

function Logo() {
  return (
    <Link to={"/"}>
      <img src={logoImage} alt="logo" />
    </Link>
  );
}

export default Logo;
