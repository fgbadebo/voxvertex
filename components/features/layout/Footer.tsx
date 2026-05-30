"use client";
import AnimatedContent from "@/components/AnimatedContent";
import { footerList, footerSocialLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="flex flex-col relative bg-accent text-background pt-8 md:pt-12 lg:pt-12 xl:pt-16 pb-8 md:pb-10 lg:pb-6 xl:pb-8 px-4 md:px-6 lg:px-12 xl:px-4 overflow-hidden">
      <div className="relative w-full max-w-7xl mx-auto flex flex-col gap-8 md:gap-12 lg:gap-8 xl:gap-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 py-4 md:py-0 md:gap-36 lg:gap-24 xl:gap-36 gap-y-12 md:gap-y-16">
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
            className="w-full md:col-span-2"
          >
            <div className="flex flex-col md:col-span-2 gap-8 md:gap-8 justify-between">
              <div className="flex flex-col gap-4 xl:gap-6">
                <h1 className="font-semibold text-2xl lg:text-xl xl:text-2xl">
                  Voxvertex Solutions
                </h1>
                <p className="text-base lg:text-sm xl:text-base">
                  Bridging academia and industry for knowledge sharing
                </p>
              </div>

              <div className="flex gap-4">
                {footerSocialLinks.map((item) => (
                  <Link
                    key={item.alt}
                    href={`${item.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg lg:text-xl xl:text-2xl hover:opacity-50 transition-all duration-300 "
                  >
                    <div className="relative h-5 md:h-6 lg:h-5 xl:h-6 w-5 md:w-6 lg:w-5 xl:w-6">
                      <Image
                        src={item.image}
                        sizes="10vw"
                        fill
                        className="object-cover"
                        alt={item.alt}
                      />
                    </div>
                  </Link>
                ))}
              </div>
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
            className="w-full md:col-span-1"
          >
            <div className="flex flex-col lg:text-center gap-4 lg:gap-3 xl:gap-4">
              <h2 className="font-semibold text-xl lg:text-lg xl:text-xl">
                Quick Links
              </h2>

              <div className="flex flex-col gap-3 lg:gap-2 xl:gap-3">
                {footerList.map((item) => (
                  <Link
                    key={item.text}
                    href={`${item.link}`}
                    className="text-base lg:text-sm xl:text-base hover:opacity-50 transition-all duration-300"
                  >
                    {item.text}
                  </Link>
                ))}
              </div>
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
            className="w-full md:col-span-2"
          >
            <div className="flex flex-col gap-4 md:gap-6 lg:gap-0 lg:h-full justify-between">
              <h3 className="font-semibold text-xl lg:text-lg xl:text-xl lg:text-center">
                SUBSCRIBE TO OUR NEWSLETTER
              </h3>

              <form
                action=""
                className="flex flex-col gap-4 lg:gap-3 xl:gap-4 lg:items-center"
              >
                <input
                  type="email"
                  name="email"
                  id="email-input"
                  placeholder="Your email updates"
                  className="placeholder:text-muted-foreground w-full px-6 lg:px-4 xl:px-6 py-3 lg:py-2 xl:py-3 bg-background text-base lg:text-sm xl:text-base text-secondary"
                />

                <button
                  type="submit"
                  className="w-max text-base lg:text-sm xl:text-base bg-primary text-background rounded-full border border-primary px-6 lg:px-4 xl:px-6 py-3 lg:py-2 xl:py-3 hover:text-background hover:bg-transparent hover:border-background transition-all duration-300"
                >
                  Subscribe for latest updates
                </button>
              </form>
            </div>
          </AnimatedContent>
        </div>

        <p className="text-base lg:text-sm xl:text-base">
          ©{new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </section>
  );
}
