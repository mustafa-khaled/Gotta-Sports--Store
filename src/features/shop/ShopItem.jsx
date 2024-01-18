import { useState } from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { formatCurrency } from "../../utils/helpers";
import { Link } from "react-router-dom";

function ShopItem({ item }) {
  const { id, title, price, images } = item;
  const [activeImage, setActiveImage] = useState(images?.[0]);

  const handleMouseEnter = () => {
    setActiveImage(images?.[1]);
  };

  const handleMouseLeave = () => {
    setActiveImage(images?.[0]);
  };

  return (
    <Link to={`/productTd:${id}`}>
      <div
        className="shop-item relative border border-white p-[10px] transition-all hover:border-lightGray hover:shadow-md"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={activeImage}
          alt={title}
          className="mx-auto w-[300px] transform transition-transform duration-300 ease-in-out hover:scale-105"
        />
        <div className="border-t border-lightGray pt-[10px] font-medium">
          <h3>{title}</h3>
          <p>{formatCurrency(price)}</p>
        </div>

        <div className="wishlist-icon absolute right-[10px] top-[10px] opacity-0">
          <MdOutlineFavoriteBorder className="cursor-pointer text-2xl text-gray" />
        </div>
      </div>
    </Link>
  );
}

export default ShopItem;
