import React, { useRef } from "react";
import {
  useScroll,
  motion,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { ProjectRowTitleProps } from "./ProjectRow.interface";
import { cn } from "@/lib/utils";

export default function ProjectRowTitle({ data }: ProjectRowTitleProps) {
  const { title, speed = 0.5 } = data;
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", `${25 / speed}vw end`],
  });

  const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  const pStyle = cn(
    "inline-block text-caramel-100 uppercase font-bold text-6xl m-0 relative z-10"
  );

  return (
    <div ref={container} className="relative z-[2] cursor-pointer">
      <motion.div
        className="relative p-6 flex items-center"
        whileHover={{ x: 10 }}
      >
        <motion.p style={{ clipPath: clip }} className={pStyle}>
          {title}
        </motion.p>
        <p className={cn(pStyle, "block absolute z-[1] text-caramel-100/20")}>
          {title}
        </p>
      </motion.div>
    </div>
  );
}
