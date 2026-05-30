"use client";
import { useState } from "react";
import AnimatedContent from "@/components/AnimatedContent";
import { CometCard } from "@/components/ui/comet-card";
import { trendingCoursesList } from "@/constants";
import { Bookmark } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type CourseData = {
  name: string;
  pfp: string;
  title: string;
  image: string;
};

const CourseCard = ({ data }: { data: CourseData }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <CometCard className="rounded-2xl md:rounded-xl lg:rounded-xl xl:rounded-2xl h-full">
      <article className="flex flex-col transition-all duration-300 h-full">
        <div className="relative h-50 lg:h-37.5 xl:h-50 w-auto rounded-t-2xl md:rounded-t-xl lg:rounded-t-xl xl:rounded-t-2xl overflow-clip shrink-0">
          <Image
            src={data.image}
            alt="Service image"
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>

        <div className="flex flex-col grow bg-card p-4 lg:p-2 xl:p-3 pb-6 lg:pb-4 xl:pb-6 text-secondary transition-all duration-300 gap-8 lg:gap-6 xl:gap-8 rounded-b-2xl md:rounded-b-xl lg:rounded-b-xl xl:rounded-b-2xl justify-between">
          <a
            href={"/courses"}
            className="text-lg lg:text-sm xl:text-base font-semibold hover:text-primary transition-colors duration-300 line-clamp-2"
          >
            {data.title}
          </a>

          <div className="flex items-center justify-between mt-auto">
            <div className="flex gap-3 lg:gap-2 items-center">
              <div className="relative rounded-full h-12 lg:h-6 xl:h-8 w-12 lg:w-6 xl:w-8 overflow-clip">
                <Image src={data.pfp} alt={data.name} fill sizes="10vw" />
              </div>
              <p className="text-base lg:text-xs xl:text-sm">{data.name}</p>
            </div>

            <div className="flex">
              <button
                onClick={() => setIsBookmarked((prev) => !prev)}
                className="group focus:outline-none"
              >
                <Bookmark
                  className={cn(
                    "stroke-[1px] transition-all duration-300",
                    isBookmarked
                      ? "fill-primary text-primary"
                      : "fill-none text-secondary group-hover:text-primary"
                  )}
                />
              </button>
            </div>
          </div>
        </div>
      </article>
    </CometCard>
  );
};

export default function TrendingCourses() {
  return (
    <section className="relative flex flex-col items-center justify-center py-7 gap-12 lg:gap-8 xl:gap-12">
      <div className="w-full flex flex-col gap-6 md:gap-8 lg:gap-6 xl:gap-8">
        <div className="w-full flex flex-col">
          <h1 className="text-[35px] md:text-[42px] xl:text-[56px] tracking-wider text-primary font-bold">
            Trending Courses
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6 lg:gap-4 xl:gap-6 w-full">
          {trendingCoursesList.map((course) => (
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
              className="w-full h-full"
              key={course.name}
            >
              <CourseCard data={course} />
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
