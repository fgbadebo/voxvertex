"use client";

import Image from "next/image";
import AnimatedContent from "@/components/AnimatedContent";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { testimonialsList } from "@/constants";

export default function Testimonials() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10 block md:hidden">
        <Image
          src="/images/about/testimonial-bg-mobile.jpg"
          alt="Testimonials Background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="absolute inset-0 -z-10 hidden md:block">
        <Image
          src="/images/about/testimonial-bg.jpg"
          alt="Testimonials Background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative max-w-7xl mx-auto flex flex-col items-center lg:items-start text-background px-4 md:px-6 lg:px-12 xl:px-4 py-24 gap-8 lg:gap-12 xl:gap-16">
        <h1 className="w-full text-center font-bold text-[28px] md:text-[32px] lg:text-[42px] xl:text-[56px]">
          Testimonials
        </h1>

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
          <div className="w-full grid grid-cols-1 min-w-0">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={93}
              slidesPerView={1}
              loop={true}
              speed={1000}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                768: { slidesPerView: 1.5 },
                1024: { slidesPerView: 2 },
                1280: { slidesPerView: 2 },
              }}
              className="w-full"
            >
              {testimonialsList.map((testimony, idx) => (
                <SwiperSlide key={idx} className="h-auto!">
                  <div className="relative h-full bg-transparent transition-all flex flex-col text-center items-center justify-center gap-6 md:gap-8">
                    <div className="flex gap-1">
                      {Array.from({ length: testimony.stars }).map(
                        (_, index) => (
                          <div
                            key={index}
                            className="relative h-4 md:h-6 lg:h-4 xl:h-6 w-4 md:w-6 lg:w-4 xl:w-6"
                          >
                            <Image
                              src={"/images/about/star.png"}
                              alt="stars"
                              fill
                              sizes="30px"
                              className="object-cover"
                            />
                          </div>
                        )
                      )}
                    </div>
                    
                    <p className="text-base">{testimony.quote}</p>

                    <div className="flex flex-col gap-3 items-center justify-center">
                        <div className="relative h-14 w-14 rounded-full overflow-clip">
                            <Image src={testimony.image} alt={testimony.name} fill sizes="20vw"/>
                        </div>
                        <p className="font-medium text-base text-center">{testimony.name}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
