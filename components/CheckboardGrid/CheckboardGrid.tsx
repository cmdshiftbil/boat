import React from "react";
import { motion } from "framer-motion";
import LinearGradient from "../LinearGradient";
import { cn } from "@/lib/utils";

const CheckerboardGrid = () => {
  const rows = new Array(150).fill(1);
  const cols = new Array(100).fill(1);

  const colors = [
    "#f7f4ef",
    "#ebe5d6",
    "#d9cbaf",
    "#c2ab82",
    "#b0905f",
    "#aa8455",
    "#8a6544",
    "#6f4e39",
    "#5f4234",
    "#523a31",
    "#2f1f19",
  ];

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className="absolute left-1/4 p-4 -top-1/4 flex  -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 "
    >
      {/* <LinearGradient
        className={cn("h-[20vh] absolute top-0 w-full z-10", "md:h-screen")}
      /> */}
      {rows.map((_, i) => (
        <motion.div
          key={`row` + i}
          className="w-16 h-8 border-l border-slate-700 relative"
        >
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: getRandomColor(),
                transition: { duration: 0 },
              }}
              whileTap={{
                backgroundColor: getRandomColor(),
                scale: 0.4,
                transition: { duration: 1 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              key={`col` + j}
              className="w-16 h-8  border-r border-t border-slate-700 relative"
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="stroke-graphite-900"
                  className="absolute h-6 w-10 -top-[14px] -left-[22px] text-slate-700 stroke-[1px] pointer-events-none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export default CheckerboardGrid;
