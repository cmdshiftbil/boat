"use client";
import { gsap } from "gsap";
import { useRef } from "react";
import { useIsomorphicLayoutEffect, useWindowSize } from "react-use";
import useGsapEffect from "@/hooks/useGsapEffect";
import { mapRange } from "@/utils/math.utils";

interface ParallaxProps {
  className?: string;
  children: React.ReactNode;
  speed?: number;
  id?: string;
  position?: string;
}

const Parallax = ({
  className,
  children,
  speed = 1,
  id = "parallax",
  position,
}: ParallaxProps) => {
  const trigger = useRef<any>();
  const target = useRef<any>();

  const { width: windowWidth } = useWindowSize();

  useGsapEffect(
    () => {
      const y = windowWidth * speed * 0.1;

      const setY = gsap.quickSetter(target.current, "y", "px");
      const set3D = gsap.quickSetter(target.current, "force3D");

      const timeline = gsap.timeline({
        scrollTrigger: {
          id: id,
          trigger: trigger.current,
          scrub: true,
          start: "top bottom",
          end: "bottom top",
          onUpdate: (e) => {
            if (position === "top") {
              setY(e.progress * y);
            } else {
              setY(-mapRange(0, 1, e.progress, -y, y));
            }

            set3D(e.progress > 0 && e.progress < 1);
          },
        },
      });

      return () => {
        timeline.kill();
      };
    },
    trigger,
    [id, speed, position, windowWidth]
  );

  return (
    <div ref={trigger}>
      <div ref={target} className={className}>
        {children}
      </div>
    </div>
  );
};

export default Parallax;
