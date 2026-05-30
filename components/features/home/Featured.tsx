"use client";
import AnimatedContent from "@/components/AnimatedContent";
import { CometCard } from "@/components/ui/comet-card";
import { featuredExpertsList, trendingExpertsList } from "@/constants";
import Image from "next/image";

export default function Featured() {
  return (
    <section className="relative w-full max-w-7xl mx-auto flex flex-col items-center lg:items-start px-4 md:px-6 lg:px-12 xl:px-4 py-20 gap-16 lg:gap-12 xl:gap-16">
      <div className="w-full flex flex-col gap-6 md:gap-8 lg:gap-6 xl:gap-8">
        <div className="w-full flex flex-col">
          <h1 className="text-[35px] md:text-[42px] xl:text-[56px] tracking-wider text-primary font-bold">
            Featured Experts
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6 lg:gap-5 xl:gap-6 w-full">
          {featuredExpertsList.map((expert) => (
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
              key={expert.name}
            >
              <CometCard className="rounded-none">
                <article className="flex flex-col transition-all duration-300">
                  <div className="relative h-60 lg:h-45 xl:h-60 w-auto overflow-clip">
                    <Image
                      src={expert.image}
                      alt="Service image"
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex flex-col bg-card py-6 lg:py-4 xl:py-6 px-3 lg:px-2 xl:px-3 text-primary transition-all duration-300 gap-1">
                    <a
                      href={"/"}
                      className="text-xl lg:text-lg xl:text-xl font-semibold"
                    >
                      {expert.name}
                    </a>
                    <p className="text-base lg:text-sm xl:text-base truncate">
                      {expert.role}
                    </p>
                  </div>
                </article>
              </CometCard>
            </AnimatedContent>
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col gap-6 md:gap-8 lg:gap-6 xl:gap-8">
        <div className="w-full flex flex-col">
          <h1 className="text-[35px] md:text-[42px] xl:text-[56px] tracking-wider text-primary font-bold">
            Trending Experts
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6 lg:gap-5 xl:gap-6 w-full">
          {trendingExpertsList.map((expert) => (
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
              key={expert.name}
            >
              <CometCard className="">
                <article className="flex flex-col transition-all duration-300">
                  <div className="relative h-60 lg:h-45 xl:h-60 w-auto overflow-clip">
                    <Image
                      src={expert.image}
                      alt="Service image"
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex flex-col bg-card py-6 lg:py-4 xl:py-6 px-3 lg:px-2 xl:px-3 text-primary transition-all duration-300 gap-1">
                    <a
                      href={"/"}
                      className="text-xl lg:text-lg xl:text-xl font-semibold"
                    >
                      {expert.name}
                    </a>
                    <p className="text-base lg:text-sm xl:text-base truncate">
                      {expert.role}
                    </p>
                  </div>
                </article>
              </CometCard>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
