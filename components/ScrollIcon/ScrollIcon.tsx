import gsap from "gsap";
import { HTMLAttributes, useMemo } from "react";
import { useRef } from "react";
import useGsapEffect from "@/hooks/useGsapEffect";
import Nearby from "@/lib/near";
import { lineEq } from "@/utils/math.utils";
import classNames from "classnames";

interface ScrollIconProps extends HTMLAttributes<HTMLDivElement> {
  color?: string;
  thickness?: 1 | 2;
}

const ScrollIcon = ({ className, color, thickness = 1 }: ScrollIconProps) => {
  const mouseColorClass = color ? `border-${color}` : "";
  const WheelColorClass = color ? `bg-${color}` : "";

  const mouse = useRef<any>(null);
  const wheel = useRef<any>(null);

  const scrollInterval = { from: 1, to: 15 };
  const distanceThreshold = { min: 0, max: 100 };
  let stateScroll = "paused";

  useGsapEffect(
    () => {
      const tweenScroll = gsap.to(wheel.current, {
        duration: 3,
        repeat: -1,
        yoyo: false,
        y: 25,
        scaleY: 0,
        paused: false,
      });

      const nearby = new Nearby(mouse.current.parentNode, {
        onProgress: (distance: any) => {
          const time = lineEq(
            scrollInterval.from,
            scrollInterval.to,
            distanceThreshold.max,
            distanceThreshold.min,
            distance
          );
          tweenScroll.timeScale(
            Math.min(Math.max(time, scrollInterval.from), scrollInterval.to)
          );

          if (
            distance < distanceThreshold.max &&
            distance >= distanceThreshold.min &&
            stateScroll !== "running"
          ) {
            tweenScroll.play();
            stateScroll = "running";
          } else if (
            (distance > distanceThreshold.max ||
              distance < distanceThreshold.min) &&
            stateScroll !== "paused"
          ) {
            tweenScroll.pause();
            stateScroll = "paused";
            tweenScroll.time(0);
          }
        },
      });

      return () => {
        nearby.destroy();
      };
    },
    mouse,
    []
  );

  return (
    <div
      ref={mouse}
      className={classNames(
        "w-[1.5rem] h-[2.25rem] rounded-[1rem]",
        className,
        {
          "border-shark-50": !mouseColorClass,
          "border-2": thickness == 1,
          "border-[2.67px]": thickness == 2,
        },
        mouseColorClass
      )}
    >
      <div
        ref={wheel}
        className={classNames(
          "h-[0.5rem] mt-1 mx-auto mb-0",
          {
            "bg-shark-50": !WheelColorClass,
            "w-[2px] rounded-[0.1rem]": thickness == 1,
            "w-[4px] rounded-[0.3rem]": thickness == 2,
          },
          WheelColorClass
        )}
      ></div>
    </div>
  );
};

export default ScrollIcon;
