import PageHeroSection from "../../ui/PageHeroSection";
import BlogArticles from "./BlogArticles";
import image from "../../assets/blog-bg.webp";

function Blog() {
  return (
    <div className="flex flex-col gap-[50px]">
      <PageHeroSection image={image} title={"Blog"} />
      <BlogArticles />
    </div>
  );
}

export default Blog;
