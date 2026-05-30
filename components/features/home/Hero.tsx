import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-dvh flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10 top-8 block md:hidden">
        <Image
          src="/images/home/hero-mobile.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="absolute inset-0 top-16 lg:top-18 -z-10 hidden md:block xl:hidden">
        <Image
          src="/images/home/hero-tablet-bg.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="absolute inset-0 xl:top-24 -z-10 hidden xl:block">
        <Image
          src="/images/home/hero-desktop-bg.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 pt-28 md:pt-32 pb-12 flex flex-col items-center text-center gap-6 md:gap-8 lg:gap-6 xl:gap-8">
        <h1 className="text-[32px] md:text-[42px] lg:text-[32px] xl:text-[42px] font-bold text-background">
          <span className="text-primary">Skip</span> the Hustle.{" "}
          <span className="text-primary">Search</span> the Guest Lecturer
        </h1>

        <form
          action=""
          className="flex bg-background p-1 pl-6 md:pl-8 lg:pl-6 xl:pl-8 rounded-full w-4/5 md:w-3/5 lg:w-1/2 justify-between"
        >
          <input
            type="search"
            name="search"
            placeholder="Find an expert"
            className="placeholder:text-muted-foreground w-full font-medium text-lg md:text-xl lg:text-lg xl:text-xl focus:outline-none focus:ring-0 [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none"
          />
          <button className="bg-primary hover:bg-primary/90 hover:scale-95 text-white px-4 md:px-6 lg:px-4 xl:px-6 py-2 md:py-3 lg:py-2 xl:py-3 rounded-full font-medium text-sm md:text-base lg:text-sm xl:text-base transition-all duration-300">
            Search
          </button>
        </form>
      </div>
    </section>
  );
}
