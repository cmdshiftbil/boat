import gsap from "gsap";
import GSDevTools from "gsap/dist/GSDevTools";
import { useRef } from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { twMerge } from "tailwind-merge";
import useColor from "@/hooks/useColor";
import useGsapEffect from "@/hooks/useGsapEffect";

const MotionLine = ({
  className,
  color = "bg-shark-50",
  direction = "horizontal",
}: any) => {
  const stroke = useColor(color);
  const lineRef = useRef(null);

  useGsapEffect(
    () => {
      gsap.to(lineRef.current, {
        duration: 1,
        width: "100%",
        stagger: 0.1,
        scrollTrigger: {
          trigger: lineRef?.current,
          start: "start 75%",
          end: "bottom center",
          scrub: 1,
        },
      });
    },
    lineRef,
    []
  );

  return (
    <div
      ref={lineRef}
      className={twMerge(className, "w-0 h-[1px] bg-shark-800")}
    />
  );
};

export default MotionLine;
