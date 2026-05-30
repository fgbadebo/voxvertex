"use client";

import { steps } from "@/constants";
import { motion } from "framer-motion";

export default function Roadmap() {
  return (
    <section className="flex flex-col relative bg-accent text-background py-18 md:py-24 lg:py-18 xl:py-24 px-4 md:px-6 lg:px-12 xl:px-4">
      <div className="relative w-full max-w-7xl mx-auto flex flex-col gap-16 lg:gap-18 xl:gap-24">
        <h1 className=" text-center font-bold text-[28px] md:text-[32px] lg:text-[42px] xl:text-[56px]">
          Roadmap to Connect with Experts
        </h1>

        <div className="hidden md:block relative h-70 lg:h-90 xl:h-120 w-full">
          <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 z-0">
            <svg
              className="w-full h-35 lg:h-45 xl:h-60"
              viewBox="0 0 1200 150"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0,75 C300,125 600,25 1200,75"
                stroke="#6B7280"
                strokeWidth="50"
                strokeLinecap="round"
              />

              <path
                d="M0,75 C300,125 600,25 1200,75"
                stroke="#1A1A2E"
                strokeWidth="38"
                strokeLinecap="round"
              />

              <path
                d="M0,75 C300,125 600,25 1200,75"
                stroke="#6B7280"
                strokeWidth="35"
                strokeLinecap="round"
              />
              <path
                d="M0,75 C300,125 600,25 1200,75"
                stroke="rgba(26,26,46,1)"
                strokeWidth="2"
                strokeDasharray="40 50"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="relative z-10 grid grid-cols-4 h-full w-full">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`flex justify-center ${
                  step.position === "top" ? "items-start" : "items-end"
                }`}
              >
                <motion.div
                  initial={{
                    opacity: 0,
                    y: step.position === "top" ? -20 : 20,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative flex flex-col items-center"
                >
                  <div
                    className={`
            relative w-28 lg:w-36 xl:w-48 h-28 lg:h-36 xl:h-48 bg-background text-background flex flex-col items-center justify-center p-1 lg:p-3 xl:p-4 text-center shadow-[0_0_20px_rgba(255,255,255,0.3)]
            rounded-full rotate-45
            ${step.position === "top" ? "rounded-br-none" : "rounded-tl-none"}
          `}
                  >
                    <div className="-rotate-45 flex flex-col items-center justify-center gap-1 w-full h-full bg-accent rounded-full p-1 lg:p-2 xl:p-3">
                      <span className="text-lg lg:text-xl xl:text-2xl font-bold ">
                        {step.title}
                      </span>
                      <p className="text-xs lg:text-sm xl:text-base leading-tight">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:hidden flex flex-col gap-12 relative max-w-md mx-auto">
          <div className="absolute left-6 top-8 bottom-8 w-1 bg-background z-10"></div>

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-6"
            >
              <div className="w-12 h-12 shrink-0 rounded-full bg-white text-black font-bold flex items-center justify-center text-xl shadow-[0_0_15px_rgba(255,255,255,0.4)] relative z-10">
                {step.id}
              </div>

              <div className="bg-background/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 flex-1">
                <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                <p className="text-background/70 text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
