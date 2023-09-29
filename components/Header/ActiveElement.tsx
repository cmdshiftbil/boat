import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const draw = {
  initial: { pathLength: 0, opacity: 0 },
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = 0.7;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 0.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

function ActiveElement(
  props: React.SVGProps<SVGSVGElement> & {
    isActive: boolean;
  }
) {
  return (
    <div className="h-full relative">
      <motion.svg
        // width={71}
        // height={72}
        fill="none"
        initial="initial"
        animate="visible"
        exit="hidden"
        viewBox="0 0 71 72"
        layoutId="active-element"
        className={cn("aspect-square h-full", props.className)}
      >
        <motion.path
          variants={draw}
          d="M67 67.5L4 4.5"
          stroke="#aa8455"
          strokeWidth={11}
        />
      </motion.svg>
    </div>
  );
}

export default ActiveElement;
