import CoursesHero from "@/components/features/courses/CoursesHero";
import CoursesMain from "@/components/features/courses/CoursesMain";

export default function courses() {
  return (
    <main className="overflow-hidden">
      <CoursesHero/>
      <CoursesMain/>
    </main>
  )
}