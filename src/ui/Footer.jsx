import { Link } from "react-router-dom";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import Container from "./Container";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-[50px] bg-secondary py-[40px] text-gray">
      <Container>
        <div className="flex items-center justify-between">
          <div>
            <p>&copy; {currentYear} Skato. All Rights Reserved.</p>
          </div>
          <div className="flex gap-[10px]">
            <Link
              to={"https://github.com/mustafa-khaled"}
              target="_blank"
              className="text-2xl transition-all hover:scale-[1.3] hover:text-bgWhite"
            >
              <AiFillGithub />
            </Link>
            <Link
              to={"https://www.linkedin.com/in/the-mustafa-khaled/"}
              target="_blank"
              className="text-2xl transition-all hover:scale-[1.3] hover:text-bgWhite"
            >
              <AiFillLinkedin />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
