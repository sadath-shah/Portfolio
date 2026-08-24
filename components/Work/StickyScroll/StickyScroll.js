import React, { useState, useRef } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import DotPattern from "../DotPattern/DotPattern";
import { cn } from "utils/cn";

const backgroundColors = ["#000000"];

const linearGradients = [
  "linear-gradient(to bottom right, #ef008f, #6ec3f4)",
  "linear-gradient(to bottom right, #6ec3f4, #7038ff)",
  "linear-gradient(to bottom right, #7038ff, #c9c9c9)",
];

const StickyScroll = ({ contentItems, isMinimal = false }) => {
  const [activeCard, setActiveCard] = useState(0);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    container: containerRef,
    offset: ["start start", "end start"],
  });

  const safeContentItems = Array.isArray(contentItems) ? contentItems : [];
  const cardLength = safeContentItems.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = safeContentItems.map(
      (_, index) => index / cardLength - 0.1
    );

    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <div className="relative">
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)] rounded-2xl py-3 px-2 md:px-0 z-20"
        )}
      />

      <div className="absolute top-0 left-0 right-0 h-14 bg-gradient-to-b from-black to-transparent z-10 rounded-2xl" />
      <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-black to-transparent z-10 rounded-2xl" />

      <motion.div
        ref={containerRef}
        animate={{
          backgroundColor:
            backgroundColors[activeCard % backgroundColors.length],
        }}
        className="h-[28rem] flex justify-center space-x-10 p-4 rounded-2xl overflow-y-auto no-scrollbar"
        style={{
          backgroundColor: 'var(--bg-primary)',
          outline: `1px solid var(--border-color)`,
          outlineOffset: '0'
        }}
      >
        <div className="flex items-start px-4">
          <div className="max-w-2xl">
            {safeContentItems.map((item, index) => (
              <div key={item.title + index} className="my-8">
                <motion.h2
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-2xl font-bold text-white"
                >
                  {item.title}
                </motion.h2>
                {item.subtitle && (
                  <motion.p
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: activeCard === index ? 1 : 0.3,
                    }}
                    className="text-sm mt-1 text-gray-light-3"
                  >
                    {item.subtitle}
                  </motion.p>
                )}
                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-base max-w-sm mt-4 text-gray-light-3"
                >
                  {item.description}
                </motion.p>
                {item.tech && (
                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: activeCard === index ? 1 : 0.3,
                    }}
                    className="flex flex-wrap gap-2 mt-6"
                  >
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-md text-xs bg-gray-dark-3 text-gray-light-3 border border-gray-dark-2 hover:transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </motion.div>
                )}
                {item.github && (
                  <motion.a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: activeCard === index ? 1 : 0.3,
                    }}
                    className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-lg font-medium transition-colors bg-white text-black hover:bg-gray-100"
                  >
                    View on GitHub <span>→</span>
                  </motion.a>
                )}
              </div>
            ))}
            <div className="h-40" />
          </div>
        </div>
        {isMinimal ? (
          <div className="hidden lg:flex items-center justify-center w-40 sticky top-10">
            <svg
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-slate-400"
            >
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
              <line x1="2" y1="12" x2="22" y2="12"></line>
            </svg>
          </div>
        ) : (
          <motion.div
            animate={{
              backgroundImage:
                linearGradients[activeCard % linearGradients.length],
            }}
            className="hidden lg:block h-60 w-80 rounded-xl bg-white sticky top-10 overflow-hidden"
          >
            {safeContentItems[activeCard]?.content ?? null}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default StickyScroll;
