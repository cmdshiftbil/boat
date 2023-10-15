"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Children, useState } from "react";
import { FadeIn, FadeInStagger } from "./FadeIn";
import { cn } from "@/lib/utils";
import SchemaCard from "./SchemaCard/SchemaCard";

const HoverGrid = ({ children, className }: any) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <FadeInStagger>
      <div className="mx-auto">
        <div
          className={cn(
            "grid",
            className
              ? className
              : "grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-3"
          )}
        >
          {Children.map(children, (child, idx) => (
            <div
              key={idx}
              className="group relative  block h-full w-full p-2 "
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(0)}
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.span
                    className="absolute inset-0 block h-full w-full"
                    layoutId="hoverBackground" // required for the background to follow
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.15 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15, delay: 0.2 },
                    }}
                  >
                    <SchemaCard maxWidth={false} className="w-full h-full" />
                  </motion.span>
                )}
              </AnimatePresence>
              <FadeIn>
                <div className=" relative z-50 h-full w-full overflow-hidden border border-stone-300 border-transparent group-hover:border-slate-700">
                  <div className="relative z-50">{child}</div>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </FadeInStagger>
  );
};

export default HoverGrid;
