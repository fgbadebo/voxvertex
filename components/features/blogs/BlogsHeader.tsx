import Image from "next/image";

export default function BlogsHeader() {
  return (
    <section className="relative w-full min-h-dvh flex items-center justify-center bg-accent text-background">
      <div className="relative w-full max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center justify-center md:justify-between px-4 md:px-6 lg:px-12 xl:px-4 gap-8 md:gap-12 lg:gap-0 pt-8 md:pt-16 lg:pt-18 xl:pt-24">
        <div className="relative flex w-full md:w-4/5 lg:basis-[40%] h-70 md:h-120 lg:h-93 xl:h-124">
          <Image
            src={"/images/blogs/header.png"}
            alt="Blogs image"
            fill
            sizes="100vw"
            quality={100}
          />
        </div>

        <div className="flex flex-col lg:basis-[50%] gap-4 md:gap-6 lg:gap-8 xl:gap-10 text-center lg:text-left">
          <h1 className="font-bold text-[24px] md:text-[40px] lg:text-[30px] xl:text-[40px]">Voxvertex Blog: Insights & Innovations in Education</h1>
          <p  className="text-sm md:text-base lg:text-sm xl:text-base tracking-widest">
            Our blog is designed to inspire, educate, and empower you on your
            journey, whether you&apos;re looking to enhance your academic knowledge
            or build stronger industry connections.
          </p>
        </div>
      </div>
    </section>
  );
}
