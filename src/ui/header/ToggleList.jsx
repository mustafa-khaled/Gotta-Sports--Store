import { MdDehaze, MdClose } from "react-icons/md";

function ToggleList({ showList, toggleList }) {
  return (
    <div className="sm:hidden" onClick={toggleList}>
      {showList ? (
        <MdClose className="cursor-pointer text-2xl sm:text-3xl" />
      ) : (
        <MdDehaze className="cursor-pointer text-2xl sm:text-3xl" />
      )}
    </div>
  );
}

export default ToggleList;
