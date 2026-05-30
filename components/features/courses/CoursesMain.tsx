import AllCourses from "./AllCourses";
import CoursesSearch from "./CoursesSearch";
import FeaturedCourses from "./FeaturedCourses";
import TrendingCourses from "./TrendingCourses";


export default function CoursesMain() {
  return (
    <section className="relative w-full max-w-7xl mx-auto flex flex-col items-center lg:items-start px-4 md:px-6 lg:px-12 xl:px-4 pb-20">
      <CoursesSearch/>
      <FeaturedCourses/>
      <TrendingCourses/>
      <AllCourses/>
    </section>
  );
}
