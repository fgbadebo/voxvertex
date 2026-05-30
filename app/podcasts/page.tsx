import PodcastsHero from "@/components/features/podcasts/PodcastsHero";
import PodcastsMain from "@/components/features/podcasts/PodcastsMain";

export default function Podcasts() {
  return (
    <main className="overflow-hidden">
        <PodcastsHero/>
        <PodcastsMain/>
    </main>
  )
}