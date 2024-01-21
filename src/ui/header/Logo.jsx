import { Link } from "react-router-dom";
import logoImage from "../../assets/logo.png";

function Logo() {
  return (
    <Link to={"/"}>
      <img src={logoImage} alt="logo" className="w-[120px]" />
    </Link>
  );
}

export default Logo;
