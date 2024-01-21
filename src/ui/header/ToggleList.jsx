import { MdDensityMedium, MdClose } from "react-icons/md";

function ToggleList({ showList, toggleList }) {
  return (
    <div className="flex items-center sm:hidden" onClick={toggleList}>
      {showList ? (
        <MdClose className="cursor-pointer text-xl" />
      ) : (
        <MdDensityMedium className="cursor-pointer text-xl" />
      )}
    </div>
  );
}

export default ToggleList;
