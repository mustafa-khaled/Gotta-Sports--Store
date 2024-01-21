import { Link } from "react-router-dom";
import { MdErrorOutline } from "react-icons/md";

function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-70px)] items-center justify-center text-center">
      <div className="text-center">
        <MdErrorOutline className="mx-auto text-5xl text-darkGray" />
        <h1 className="my-[20px] text-2xl sm:text-4xl">Page not found</h1>
        <Link to={"/"} replace className="text-darkGray hover:underline">
          &larr; Go to home page!
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
