export default function PodcastsSearch() {
  return (
    <section id="podcasts-search" className="relative z-10 w-full flex flex-col items-center text-center pb-7 gap-3 md:gap-4 lg:gap-3 xl:gap-4 pt-24">
      <h1 className="text-[30px] md:text-[40px] lg:text-[30px] xl:text-[40px] font-bold text-primary tracking-widest">
        Search Podcasts
      </h1>

      <form
        action=""
        className="flex border border-primary bg-background p-1 pl-6 md:pl-8 lg:pl-6 xl:pl-8 rounded-full w-9/10 md:w-3/5 lg:w-1/2 justify-between"
      >
        <input
          type="search"
          name="search"
          placeholder="Type here to search"
          className="placeholder:text-muted-foreground w-full font-medium text-lg md:text-xl lg:text-lg xl:text-xl focus:outline-none focus:ring-0 [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none"
        />
        <button className="bg-primary hover:bg-primary/90 hover:scale-95 text-white px-4 md:px-6 lg:px-4 xl:px-6 py-2 md:py-3 lg:py-2 xl:py-3 rounded-full font-medium text-sm md:text-base lg:text-sm xl:text-base transition-all duration-300">
          Search
        </button>
      </form>
    </section>
  );
}
