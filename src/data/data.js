import heroSectionImage1 from "../assets/fe1.png";
import heroSectionImage2 from "../assets/fe2.jpg";
import heroSectionImage3 from "../assets/fe3.png";

import product1 from "../assets/sho1-1.png";
import product2 from "../assets/sho1-2.png";
import product3 from "../assets/sho1-3.png";
import product4 from "../assets/sho1-4.png";

export const headerData = [
  { id: 1, title: "Home", to: "/" },
  { id: 2, title: "Shop", to: "/shop" },
  { id: 3, title: "Blog", to: "/blog" },
];

export const heroSectionImages = [
  {
    id: 1,
    image: heroSectionImage1,
    title: "All products up to 70% off limited time discount",
  },

  {
    id: 2,
    image: heroSectionImage2,
    title: "Gotta store with a tool that makes design simple for everyone",
  },

  {
    id: 3,
    image: heroSectionImage3,
    title: "All products up to 70% off limited time discount",
  },
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
