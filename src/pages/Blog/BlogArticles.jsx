import { blogArticlesData } from "../../data/data";
import Container from "../../ui/Container";

function BlogArticles() {
  return (
    <Container>
      {blogArticlesData.map((a) => {
        return (
          <div
            key={a.id}
            className="mb-[30px] flex flex-col gap-[10px] sm:flex-row"
          >
            <div className="w-full sm:w-[50%]">
              <img
                src={a.image}
                alt={a.title}
                className="h-[350px] w-full object-cover"
              />
            </div>

            <div className="w-full sm:w-[50%]">
              <span className="text-primary">News</span>
              <h3 className="mt-[10px] text-xl font-medium sm:text-2xl">
                {a.title}
              </h3>
              <p className="my-[10px] text-darkGray">
                Nunc aliquet, justo non commodo congue, velit sem pulvinar enim,
                ac bibendum mi mi eget libero. Maecenas ac...
              </p>
              <span className="text-darkGray">JUL 23,2022</span>
            </div>
          </div>
        );
      })}
    </Container>
  );
}

export default BlogArticles;
