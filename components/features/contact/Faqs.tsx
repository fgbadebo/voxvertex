"use client";

import { useState } from "react";
import AnimatedContent from "@/components/AnimatedContent";

import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "@/components/animate-ui/components/headless/accordion";
import { ChevronDown } from "lucide-react";
import { faqDetails } from "@/constants";

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="relative w-full max-w-7xl mx-auto flex flex-col items-center lg:items-start px-4 md:px-6 lg:px-12 xl:px-4 py-20 gap-4 md:gap-6 lg:gap-8 xl:gap-12"
    >
      <h1 className="flex w-full text-[20px] md:text-[30px] lg:text-[30px] xl:text-[40px] text-primary font-bold tracking-widest">
        Frequently Asked Questions
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
        <Accordion className="flex flex-col">
          {faqDetails.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <AccordionItem key={index} open={isOpen}>
                <div
                  className={`overflow-hidden transition-colors duration-300 ${
                    isOpen ? "bg-background" : "bg-transparent"
                  }`}
                >
                  <AccordionButton
                    showArrow={false}
                    onClick={() => handleToggle(index)}
                    className="group flex items-center justify-between w-full py-4 md:py-6 lg:py-4 xl:py-6 text-left font-medium text-base md:text-xl lg:text-xl xl:text-2xl text-secondary"
                  >
                    <span
                      className={`font-medium  group-hover:text-primary transition-colors duration-300 ${
                        isOpen ? "text-primary" : "text-secondary"
                      }`}
                    >
                      {item.question}
                    </span>

                    <div className="shrink-0 ">
                      <ChevronDown
                        className={`w-8 h-8 text-secondary transition-transform duration-300 ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                  </AccordionButton>

                  <AccordionPanel>
                    <div className="pb-4 md:pb-6 lg:pb-4 xl:pb-6 font-regular text-sm md:text-base lg:text-base xl:text-lg leading-loose text-secondary/70">
                      {item.answer}
                    </div>
                  </AccordionPanel>
                </div>
              </AccordionItem>
            );
          })}
        </Accordion>
      </AnimatedContent>
    </section>
  );
}
