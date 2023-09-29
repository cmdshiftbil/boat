"use client";
import gsap from "gsap";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";
import { HeadingProps } from "./Heading.interface";

import SplitText from "gsap/dist/SplitText";
import useGsapEffect from "@/hooks/useGsapEffect";
import BlueprintLabel from "../BlueprintLabel";
import { cn } from "@/utils/tailwind.utils";

const Heading = ({
  children,
  color,
  className,
  headingClassName,
  animationDir = "default",
  eyebrow,
  fontSize = "clamp-text-6xl",
  scrollTriggerOptions,
}: HeadingProps) => {
  const titleRef = useRef(null);
  const { start, end } = scrollTriggerOptions ?? {};

  const direction: any = {
    default: {
      from: {
        y: -30,
        stagger: { each: 0.04, from: "start" },
        opacity: 0,
      },
      to: {
        y: 0,
        stagger: { each: 0.04, from: "start" },
        opacity: 1,
      },
    },
    top: {
      from: {
        y: 30,
        stagger: { each: 0.04, from: "start" },
        opacity: 0,
      },
      to: {
        y: 0,
        stagger: { each: 0.04, from: "start" },
        opacity: 1,
      },
    },
    left: {
      from: {
        x: -120,
        stagger: { each: 0.04, from: "end" },
      },
      to: {
        stagger: { each: 0.04, from: "end" },
        x: -5,
      },
    },
  };

  useGsapEffect(
    () => {
      let title = new SplitText(titleRef?.current, {
        type: "chars",
      });

      gsap.timeline().fromTo(
        title.chars,
        {
          ...direction[animationDir].from,
        },
        {
          scrollTrigger: {
            trigger: titleRef?.current,
            toggleActions: "restart pause resume reverse",
            start: start ?? "top 75%",
            end: end ?? "bottom center",
            scrub: 1,
          },
          ...direction[animationDir].to,
          ease: "circ.out",
          duration: 0.8,
        },

        "+=0"
      );

      return () => title?.revert();
    },
    titleRef,
    [start, end]
  );

  let invertColor: any = "stone-50";

  if (color) {
    invertColor = "stone-900";
  } else {
    color = "stone-50";
    invertColor = color;
  }

  // const invertColor = color !== "stone-50" ? "stone-900" : color;

  return (
    <div className={twMerge("w-min", className)}>
      {/* <HeadingCaption text={randomWidth()} /> */}
      <h1
        ref={titleRef}
        aria-label={children}
        role="heading"
        className={cn(
          {
            [fontSize]: fontSize,
            [twMerge("font-bold w-max z-10", color)]: true,
          },
          headingClassName
        )}
      >
        {eyebrow && <BlueprintLabel label={eyebrow} as="div" />}
        {children}
      </h1>
    </div>
  );
};

export default Heading;
