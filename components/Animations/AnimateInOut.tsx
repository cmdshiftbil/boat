"use client";
import { memo, useRef, useContext, HTMLAttributes, CSSProperties } from "react";
import gsap from "gsap";
import TransitionContext from "../Transition/Transition.provider";
import { useIsomorphicLayoutEffect } from "react-use";

interface AnimateInOutProps extends HTMLAttributes<HTMLDivElement> {
  as?: "div";
  set?: gsap.TweenVars;
  from?: gsap.TweenVars;
  to: gsap.TweenVars;
  durationIn: number;
  durationOut: number;
  delay?: number;
  delayOut?: number;
  skipOutro?: boolean;
}

const AnimateInOut = ({
  children,
  as,
  from,
  to,
  durationIn,
  durationOut,
  delay,
  delayOut,
  set,
  skipOutro,
}: AnimateInOutProps) => {
  const Tag = as ? as : "div";
  const { timeline } = useContext(TransitionContext);

  const el = useRef(null);

  useIsomorphicLayoutEffect(() => {
    // intro animation
    if (set) {
      gsap.set(el.current, { ...set });
    }

    gsap.to(el.current, {
      ...to,
      delay: delay || 0,
      duration: durationIn,
      onComplete: function () {
        gsap.set(this.targets(), { clearProps: "all" });
      },
    });

    // outro animation
    if (!skipOutro) {
      timeline.add(
        gsap.to(el.current, {
          ...from,
          delay: delayOut || 0,
          duration: durationOut,
        }),
        0
      );
    }
  }, []);

  return <Tag ref={el}>{children}</Tag>;
};

export default memo(AnimateInOut);
