import imageSlider1 from "../assets/slide1.webp";
import imageSlider2 from "../assets/slide2.webp";

import person1 from "../assets/person1.webp";
import person2 from "../assets/person2.webp";
import person3 from "../assets/person3.webp";

import product1 from "../assets/sho1-1.png";
import product2 from "../assets/sho1-2.png";
import product3 from "../assets/sho1-3.png";
import product4 from "../assets/sho1-4.png";

import blogImg1 from "../assets/blog_1_1024x1024.webp";
import blogImg2 from "../assets/blog_2_1024x1024.webp";
import blogImg3 from "../assets/blog_3_1024x1024.webp";
import blogImg4 from "../assets/blog_4_1024x1024.webp";
import blogImg5 from "../assets/blog_5_1024x1024.webp";
import blogImg6 from "../assets/blog_6_1024x1024.webp";

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

export const reviewsData = [
  {
    id: 1,
    name: "Dianne Russell",
    image: person1,
  },
  {
    id: 2,
    name: "Annette Black",
    image: person2,
  },
  {
    id: 3,
    name: "Jerome Bell",
    image: person3,
  },

  {
    id: 4,
    name: "Dianne Russell",
    image: person1,
  },
  {
    id: 5,
    name: "Annette Black",
    image: person2,
  },
  {
    id: 6,
    name: "Jerome Bell",
    image: person3,
  },
];

export const blogArticlesData = [
  { id: 1, title: "Training During Ramadan", image: blogImg1 },
  { id: 2, title: "Collagen And White Tissue", image: blogImg2 },
  { id: 3, title: "What’s The Best Time To Gym?", image: blogImg3 },
  { id: 4, title: "Post Format Video Blogs", image: blogImg4 },
  { id: 5, title: "Post Format Gallery Blogs", image: blogImg5 },
  { id: 6, title: "Post Format Audio Blogs", image: blogImg6 },
];
