import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const draw = {
  initial: { pathLength: 0, opacity: 0 },
  hidden: (i: number) => {
    const delay = 0.2;
    return {
      pathLength: 0,
      opacity: 0,
      transition: {
        pathLength: { delay, type: "spring", duration: 0.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
  visible: (i: number) => {
    const delay = 0;
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
  props: React.SVGProps<SVGSVGElement> & { pathColor: string }
) {
  return (
    <motion.div className="h-full relative" layoutId="active-element">
      <motion.svg
        width="100%"
        height="100%"
        // height={72}
        fill="none"
        initial="initial"
        animate={"visible"}
        whileInView={"visible"}
        exit="hidden"
        viewBox="0 0 71 72"
        // layoutId="active-element"
        className={cn("h-full w-full", props.className)}
      >
        <motion.path
          variants={draw}
          // d="M67 67.5L4 4.5"
          d="M0 36H3734.5"
          stroke={props.pathColor ?? "#aa8455"}
          strokeWidth={11}
        />
      </motion.svg>
    </motion.div>
  );
}

export default ActiveElement;

{
  /* <svg
  width="3735"
  height="72"
  viewBox="0 0 3735 72"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M0 36H3734.5" stroke="#3BB18E" stroke-width="71" />
</svg>; */
}
