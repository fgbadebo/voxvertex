"use client";
import AnimatedContent from "@/components/AnimatedContent";
import Image from "next/image";
import Link from "next/link";

export default function Bridging() {
  return (
    <section
      className="relative w-full max-w-7xl mx-auto mt-12 lg:mt-18 xl:mt-24 flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-6 lg:px-12 xl:px-4 py-16 gap-8 md:gap-0"
    >
      <div className="flex flex-col md:basis-[50%] gap-8 lg:gap-12 xl:gap-16 items-center md:items-start">
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
          <div className="flex flex-col gap-4 md:gap-8 lg:gap-12 xl:gap-16 text-secondary text-center md:text-left">
            <h1 className="font-bold text-[24px] lg:text-[30px] xl:text-[40px]">
              Bridging Academia and Industry Together
            </h1>
            <p className="leading-normal text-sm md:text-xs lg:text-sm xl:text-base tracking-widest">
              At Voxvertex, we connect educational institutions with industry
              experts, transforming education through engaging guest lectures
              and fostering skill development for students and professionals
              worldwide.
            </p>
          </div>
        </AnimatedContent>

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
        >
          <Link
            href={"/register"}
            className="px-6 py-2 md:py-1 lg:py-2 xl:py-3 bg-primary text-background rounded-full text-base md:text-sm lg:text-sm xl:text-base border border-primary hover:text-primary hover:bg-transparent transition-all duration-300"
          >
            Join
          </Link>
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
          <div className="relative flex h-72 md:h-56 lg:h-72 xl:h-96 w-full justify-center items-center">
            <div className="relative w-full h-full rounded-2xl md:rounded-lg lg:rounded-xl xl:rounded-2xl overflow-clip">
              <Image
                src={"/images/about/bridging.jpg"}
                alt="bridging"
                fill
                sizes="100vw"
                quality={100}
              />
            </div>

            <div className="absolute top-1/2 md:top-auto -translate-y-1/2 md:translate-y-0 md:-bottom-8 lg:-bottom-12 xl:-bottom-16 flex flex-row w-4/5 gap-2 md:gap-1 lg:gap-2 xl:gap-3 bg-[#FEECD5] text-secondary p-4 md:p-3 lg:p-4 xl:p-6">
              <h2 className="font-bold text-[32px] md:text-[16px] lg:text-[24px] xl:text-[32px] font-helvetica">
                &quot;
              </h2>
              <div className="flex flex-col gap-2 pt-2 md:pt-1 lg:pt-2">
                <h2 className="font-bold text-lg md:text-base lg:text-lg xl:text-xl font-helvetica">
                  Empowering education through expert insights
                </h2>
                <p className="text-sm md:text-xs lg:text-sm xl:text-base">Voxvertex</p>
              </div>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
