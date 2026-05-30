import Bridging from "@/components/features/about/Bridging";
import Story from "@/components/features/about/Story";
import Testimonials from "@/components/features/about/Testimonials";

export default function AboutUs() {
  return (
    <main className="overflow-hidden">
      <Bridging />
      <Story />
      <Testimonials />
    </main>
  );
}
