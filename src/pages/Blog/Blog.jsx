import PageHeroSection from "../../ui/PageHeroSection";
import image from "../../assets/blog-bg.webp";

function Blog() {
  return (
    <div className="flex flex-col gap-[50px]">
      <PageHeroSection image={image} title={"Blog"} />
    </div>
  );
}

export default Blog;
