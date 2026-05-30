"use client";

import AnimatedContent from "@/components/AnimatedContent";
import Image from "next/image";

export default function Connecting() {
  return (
    <section className="flex flex-col relative bg-accent text-background py-18 md:py-24 lg:py-18 xl:py-24 px-4 md:px-6 lg:px-12 xl:px-4">
      <div className="relative w-full max-w-7xl mx-auto flex flex-col gap-16 lg:gap-18 xl:gap-24">
        <h1 className=" text-center font-bold text-[28px] md:text-[32px] lg:text-[42px] xl:text-[56px]">
          Connecting Knowledge, Aspiring Events
        </h1>

        <div className="flex flex-col gap-12 md:gap-18 xl:gap-24">
          <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-6 md:gap-8 lg:gap-0">
            <div className="flex w-full md:basis-[40%]">
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
                <div className="relative w-full h-60 md:h-48 lg:h-64 xl:h-96 rounded-md md:rounded-sm lg:rounded-md xl:rounded-lg overflow-clip">
                  <Image
                    src={"/images/home/mission.jpg"}
                    alt="mission"
                    fill
                    sizes="100vw"
                  />
                </div>
              </AnimatedContent>
            </div>

            <div className="flex md:basis-[50%] xl:basis-[40%]">
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
                <div className="flex flex-col gap-4 lg:gap-6 xl:gap-8 text-center md:text-left">
                  <h1 className="font-semibold text-3xl md:text-2xl lg:text-3xl xl:text-4xl">
                    Our Mission and Vision
                  </h1>
                  <p className="text-lg  md:text-base lg:text-lg xl:text-xl">
                    At Voxvertex, we bridge academia and industry, offering
                    dynamic platform for guest lectures, fostering knowledge
                    sharing, and enhancing skill development for students and
                    professionals worldwide.
                  </p>
                </div>
              </AnimatedContent>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-0">
            <div className="flex w-full md:basis-[40%]">
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
                <div className="relative w-full h-60 md:h-48 lg:h-64 xl:h-96 rounded-md md:rounded-sm lg:rounded-md xl:rounded-lg overflow-clip">
                  <Image
                    src={"/images/home/transforming.jpg"}
                    alt="transforming"
                    fill
                    sizes="100vw"
                  />
                </div>
              </AnimatedContent>
            </div>

            <div className="flex md:basis-[50%] xl:basis-[40%]">
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
                <div className="flex flex-col gap-4 lg:gap-6 xl:gap-8 text-center md:text-left">
                  <h1 className="font-semibold text-3xl md:text-2xl lg:text-3xl xl:text-4xl">
                    Transforming Education Through Engagement
                  </h1>
                  <p className="text-lg md:text-base lg:text-lg xl:text-xl">
                    Join us in revolutionizing education by providing access to
                    quality guest lectures and connecting thought leaders with
                    learners, empowering the next generation of professionals
                    and innovators.
                  </p>
                </div>
              </AnimatedContent>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
