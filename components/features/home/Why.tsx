"use client";
import AnimatedContent from "@/components/AnimatedContent";
import Image from "next/image";

export default function Featured() {
  return (
    <section
      className="relative w-full max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-6 lg:px-12 xl:px-4 py-16"
    >
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
          <div className="flex flex-col gap-4 lg:gap-6 xl:gap-8 text-primary text-center md:text-left">
            <h1 className="font-bold text-[24px] lg:text-[30px] xl:text-[40px]">Why to Choose Voxvertex?</h1>
            <p className="text-lg md:text-base lg:text-lg xl:text-xl">
              We are not just connecting speakers and organizers - With a focus
              on innovation, quality, and sustainability, Voxvertex is your
              trusted partner in delivering top-tier educational and
              professional events. Join us in transforming the future of
              learning and professional growth.
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
          <div className="relative w-auto h-100 md:h-90 lg:h-105 xl:h-140">
            <Image
              src={"/images/home/why.png"}
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
