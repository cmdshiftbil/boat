import { useMotionValue } from "framer-motion";
import React, { useState, useEffect } from "react";

import { generateRandomString } from "./generateRandomString";
import { CardPattern } from "./CardPattern";

interface GridCardProps {
  title: string | React.ReactNode;
}

export const GridCard = ({ title }: GridCardProps) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    let str = generateRandomString(1500);
    setRandomString(str);
  }, []);

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    const str = generateRandomString(1500);
    setRandomString(str);
  }

  return (
    <a className="p-0.5 bg-transparent aspect-square  flex items-center justify-center w-full h-full relative">
      <div
        onMouseMove={onMouseMove}
        className="group  w-full relative overflow-hidden bg-transparent flex items-center justify-center h-full"
      >
        <CardPattern
          mouseX={mouseX}
          mouseY={mouseY}
          randomString={randomString}
        />
        <div className="relative z-10 flex items-center justify-center">
          <div className="relative h-44 w-44  rounded-full flex items-center justify-center text-white font-bold text-4xl">
            <div className="absolute w-full h-full bg-graphite-950/[0.8] blur-sm rounded-full" />
            <p className="z-20">
              {typeof title === "string" ? (
                <span className="text-caramel-200">{title}</span>
              ) : (
                title
              )}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};
