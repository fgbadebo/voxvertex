import Connecting from "@/components/features/home/Connecting";
import Featured from "@/components/features/home/Featured";
import Hero from "@/components/features/home/Hero";
import Roadmap from "@/components/features/home/Roadmap";
import TrendingBlogs from "@/components/features/home/TrendingBlogs";
import Why from "@/components/features/home/Why";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Featured />
      <Connecting />
      <Why/>
      <Roadmap />
      <TrendingBlogs />
    </main>
  );
}
