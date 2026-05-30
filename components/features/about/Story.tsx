"use client";
import AnimatedContent from "@/components/AnimatedContent";
import Image from "next/image";

export default function Story() {
  return (
    <section className="relative w-full max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-6 lg:px-12 xl:px-4 py-16 lg:py-24 gap-8 md:gap-0">
      <div className="flex flex-col md:basis-[50%]">
        <AnimatedContent
          distance={50}
          direction="vertical"
          reverse={false}
          duration={0.6}
          ease="ease.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
          delay={0.1}
          className="w-full"
        >
          <div className="flex flex-col gap-4 lg:gap-6 xl:gap-8 text-secondary text-center md:text-left">
            <h1 className="font-bold text-[24px] lg:text-[30px] xl:text-[40px]">
              Our Story
            </h1>
            <p className="leading-normal text-sm md:text-xs lg:text-sm xl:text-base tracking-widest">
              Voxvertex began as a shared vision among a group of passionate
              educators, technologists, and event professionals who saw the need
              for a change in how knowledge is shared. While each of us came
              from different backgrounds — education, technology, event
              management — we were united by a common goal: to simplify and
              enhance the way guest lecturers and event organizers connect.
            </p>
          </div>
        </AnimatedContent>
      </div>

      <div className="w-full flex md:basis-[40%]">
        <AnimatedContent
          distance={50}
          direction="vertical"
          reverse={false}
          duration={0.6}
          ease="ease.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
          delay={0.1}
          className="w-full"
        >
          <div className="relative h-56 lg:h-72 xl:h-96 rounded-xl md:rounded-lg lg:rounded-xl xl:rounded-2xl overflow-clip">
            <Image
              src={"/images/about/story.jpg"}
              alt="why"
              fill
              sizes="100vw"
              quality={100}
            />
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
