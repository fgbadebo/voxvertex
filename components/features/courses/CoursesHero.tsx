import Image from "next/image";

export default function CoursesHero() {
  return (
    <section className="relative w-full min-h-dvh flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 top-8 md:top-16 lg:top-18 xl:top-24 -z-10">
        <Image
          src="/images/courses/courses-hero.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative max-w-7xl mx-auto flex flex-col items-center justify-center lg:items-start text-background px-4 md:px-6 lg:px-12 xl:px-4 pt-8 md:pt-12 lg:pt-16 xl:pt-24 gap-12 xl:gap-16">
        <div className="flex flex-col gap-4">
          <h1 className="w-full text-center font-semibold text-[48px] md:text-[64px] lg:text-[48px] xl:text-[64px]">
            Courses
          </h1>

          <p className="w-full text-center text-base md:text-lg lg:text-base xl:text-lg">
            Discover expert-led courses to enhance your event planning skills
            and <br />
            speaker selection strategy, tailored for organizers and speakers
            alike.
          </p>
        </div>

        <a
          href="#courses-search"
          className="self-center bg-primary rounded-full shadow-inner shadow-background/20 hover:scale-95 hover:brightness-105 px-4 md:px-6 lg:px-4 xl:px-6 py-2 md:py-3 lg:py-2 xl:py-3 transition-all duration-300"
        >
          <p className="font-medium text-base lg:text-sm xl:text-base">
            Search Courses
          </p>
        </a>
      </div>
    </section>
  );
}
