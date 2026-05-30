import AllPodcasts from "./AllPodcasts";
import PodcastsSearch from "./PodcastsSearch";
import FeaturedPodcasts from "./FeaturedPodcasts";
import TrendingPodcasts from "./TrendingPodcasts";


export default function PodcastsMain() {
  return (
    <section className="relative w-full max-w-7xl mx-auto flex flex-col items-center lg:items-start px-4 md:px-6 lg:px-12 xl:px-4 pb-20">
      <PodcastsSearch/>
      <FeaturedPodcasts/>
      <TrendingPodcasts/>
      <AllPodcasts/>
    </section>
  );
}
