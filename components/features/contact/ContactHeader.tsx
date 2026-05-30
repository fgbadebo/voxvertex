"use client";

import Image from "next/image";
import Link from "next/link";

export default function ContactHeader() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center overflow-hidden mt-20 md:mt-20 lg:mt-18 xl:mt-24">
      <div className="absolute inset-0 -z-10 block md:hidden">
        <Image
          src="/images/contact/hero-mobile.jpg"
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
          src="/images/contact/hero-desktop.jpg"
          alt="Testimonials Background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative max-w-7xl mx-auto flex flex-col items-center justify-center lg:items-start text-background px-4 md:px-6 lg:px-12 xl:px-4 py-16 md:py-12 lg:py-16 xl:py-24 gap-4 lg:gap-6 xl:gap-8">
        <h1 className="w-full text-center font-semibold text-[48px] md:text-[64px] lg:text-[48px] xl:text-[64px]">
          Contact Us
        </h1>

        <p className="w-full text-center text-base md:text-sm lg:text-base xl:text-lg">
          Before reaching out, you might find <br /> the answer to your question
          in our <br />{" "}
          <Link
            href={"#faq"}
            className="text-primary hover:brightness-130 transition-all duration-300"
          >
            FAQ Section
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
