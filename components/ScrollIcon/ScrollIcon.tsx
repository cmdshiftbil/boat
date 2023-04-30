import gsap from "gsap";
import { useMemo } from "react";
import { useRef } from "react";
import useGsapEffect from "@/hooks/useGsapEffect";
import Nearby from "@/lib/near";
import { lineEq } from "@/utils/math.utils";

const ScrollIcon = () => {
  const mouse = useRef(null);
  const wheel = useRef(null);

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
      className="w-[1.5rem] h-[2.25rem] rounded-[1rem] border-2 border-shark-50"
    >
      <div
        ref={wheel}
        //  className="scroll__wheel"
        className="w-[2px] h-[0.5rem] bg-shark-50 rouned-[0.1rem] mt-1 mx-auto mb-0"
      ></div>
    </div>
  );
};

export default ScrollIcon;
