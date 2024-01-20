import imageSlider1 from "../assets/slide1.webp";
import imageSlider2 from "../assets/slide2.webp";

import product1 from "../assets/sho1-1.png";
import product2 from "../assets/sho1-2.png";
import product3 from "../assets/sho1-3.png";
import product4 from "../assets/sho1-4.png";

export const SliderData = [imageSlider1, imageSlider2];

export const headerData = [
  { id: 1, title: "Home", to: "/" },
  { id: 2, title: "Shop", to: "/shop" },
  { id: 3, title: "Blog", to: "/blog" },
];

export const products = [
  {
    id: 1,
    title: "Arsenal Home Jersey",
    images: [product1, product2],
    price: 140,
  },
  {
    id: 2,
    title: "Arsenal Home Jersey",
    images: [product3, product4],
    price: 130,
  },

  {
    id: 3,
    title: "Arsenal Home Jersey",
    images: [product1, product2],
    price: 160,
  },

  {
    id: 4,
    title: "Arsenal Home Jersey",
    images: [product3, product4],
    price: 150,
  },
];
