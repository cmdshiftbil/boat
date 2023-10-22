"use client";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";

const titleVariants = cva("text-caramel-500 font-medium", {
  variants: {
    as: {
      h1: "text-6xl sm:text-9xl",
      h2: "text-4xl sm:text-7xl",
      h3: "text-3xl sm:text-3xl",
      h4: "text-2xl sm:text-4xl",
      h5: "text-lg sm:text-xl",
      h6: "text-base sm:text-lg",
    },
  },
  defaultVariants: {
    as: "h1",
  },
});

export interface TitleProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof titleVariants> {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  animate?: boolean;
}
export default function Title({
  children,
  as,
  className,
  animate,
}: TitleProps) {
  const As = as ? as : "h1";

  const animation = {
    initial: { y: "100%" },
    enter: (i: number = 0) => ({
      y: "0",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.075 * i,
      },
    }),
  };

  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  if (animate) {
    return (
      <As className={cn(titleVariants({ as }), className)}>
        <div className="overflow-hidden" ref={ref}>
          <motion.span
            // custom={index}
            variants={animation}
            initial="initial"
            animate={inView ? "enter" : ""}
          >
            {children}
          </motion.span>
        </div>
      </As>
    );
  }

  return <As className={cn(titleVariants({ as }), className)}>{children}</As>;
}
