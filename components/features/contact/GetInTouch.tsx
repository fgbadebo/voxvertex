"use client";

import AnimatedContent from "@/components/AnimatedContent";
import dynamic from "next/dynamic"; // 1. Import dynamic

const LeafletMap = dynamic(() => import("@/components/LeafletMap"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-gray-900/10 animate-pulse rounded-lg flex items-center justify-center text-muted-foreground">
      Loading Map...
    </div>
  ),
});

export default function GetInTouch() {
  const position: [number, number] = [28.6692, 77.4538];
  return (
    <section className="relative w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 md:px-6 lg:px-12 xl:px-4 py-16 lg:py-24 gap-12 md:gap-16 lg:gap-0">
      <div className="flex flex-col w-full lg:basis-[38%] xl:basis-[32%]">
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
          <div className="flex flex-col gap-6 xl:gap-8 text-secondary">
            <div className="flex flex-col">
              <h1 className="text-[30px] md:text-[40px] lg:text-[30px] xl:text-[40px] text-secondary font-bold tracking-widest">
                Get in <span className="text-primary">touch</span>
              </h1>
              <p className="text-sm md:text-base lg:text-sm xl:text-base text-muted-foreground">
                Got an issue? Let us know your query.
              </p>
            </div>

            <form
              action=""
              className="flex flex-col gap-6 md:gap-8 lg:gap-6 xl:gap-8"
            >
              <div className="flex flex-col gap-2 md:gap-3 lg:gap-2 xl:gap-3">
                <label
                  htmlFor="name"
                  className="text-lg md:text-xl lg:text-lg xl:text-xl"
                >
                  Name*
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="text-sm md:text-base lg:text-sm xl:text-base px-3 md:px-4 lg:px-3 xl:px-4 py-2 md:py-3 lg:py-2 xl:py-3 bg-[#f4f4f4] focus:ring-1 focus:ring-primary outline-none placeholder:text-muted-foreground transition-all duration-300"
                />
              </div>

              <div className="flex flex-col gap-2 md:gap-3 lg:gap-2 xl:gap-3">
                <label
                  htmlFor="email"
                  className="text-lg md:text-xl lg:text-lg xl:text-xl"
                >
                  Email*
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  required
                  className="text-sm md:text-base lg:text-sm xl:text-base px-3 md:px-4 lg:px-3 xl:px-4 py-2 md:py-3 lg:py-2 xl:py-3 bg-[#f4f4f4] focus:ring-1 focus:ring-primary outline-none placeholder:text-muted-foreground transition-all duration-300"
                />
              </div>

              <div className="flex flex-col gap-2 md:gap-3 lg:gap-2 xl:gap-3">
                <label
                  htmlFor="message"
                  className="text-lg md:text-xl lg:text-lg xl:text-xl"
                >
                  Message*
                </label>
                <textarea
                  name="message"
                  placeholder="Type in your message"
                  rows={5}
                  required
                  className="text-sm md:text-base lg:text-sm xl:text-base px-3 md:px-4 lg:px-3 xl:px-4 py-2 md:py-3 lg:py-2 xl:py-3 bg-[#f4f4f4] focus:ring-1 focus:ring-primary outline-none placeholder:text-muted-foreground transition-all duration-300"
                />
              </div>

              <input
                type="submit"
                value={"Send Message"}
                className="self-center px-6 py-3 mt-4 md:mt-6 lg:mt-8 xl:mt-10 text-background text-sm md:text-base lg:text-sm xl:text-base bg-primary w-max rounded-full border border-primary hover:text-primary hover:scale-101 hover:bg-background transition-all duration-300"
              />
            </form>
          </div>
        </AnimatedContent>
      </div>

      <div className="w-full flex lg:basis-[50%] xl:basis-[56%]">
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
          <div className="relative h-60 md:h-90 lg:h-135 xl:h-180 rounded-md md:rounded-lg lg:rounded-md xl:rounded-lg overflow-clip">
            <LeafletMap />
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
