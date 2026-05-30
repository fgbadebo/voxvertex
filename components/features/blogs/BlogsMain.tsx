import AllBlogs from "./AllBlogs";
import BlogsSearch from "./BlogsSearch";
import FeaturedBlogs from "./FeaturedBlogs";
import TrendingBlogs from "./TrendingBlogs";

export default function BlogsMain() {
  return (
    <section className="relative w-full max-w-7xl mx-auto flex flex-col items-center lg:items-start px-4 md:px-6 lg:px-12 xl:px-4 py-20">
      <BlogsSearch />
      <FeaturedBlogs />
      <TrendingBlogs />
      <AllBlogs />
    </section>
  );
}
