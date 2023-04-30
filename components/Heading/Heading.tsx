"use client";
import gsap from "gsap";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";
import { HeadingProps } from "./Heading.interface";

import SplitText from "gsap/dist/SplitText";
import useGsapEffect from "@/hooks/useGsapEffect";
import BlueprintLabel from "../BlueprintLabel";
import classNames from "classnames";

const Heading = ({
  children,
  color,
  className,
  animationDir = "default",
  eyebrow,
  fontSize = "clamp-text-8xl",
}: HeadingProps) => {
  const titleRef = useRef(null);

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

  useGsapEffect(() => {
    let title = SplitText.create(titleRef?.current, {
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
          start: "top 75%",
          end: "bottom center",
          scrub: 1,
        },
        ...direction[animationDir].to,
        ease: "circ.out",
        duration: 0.8,
      },

      "+=0"
    );

    return () => title?.revert();
  }, titleRef);

  let invertColor: any = "shark-50";

  if (color) {
    invertColor = "shark-900";
  } else {
    color = "shark-50";
    invertColor = color;
  }

  // const invertColor = color !== "shark-50" ? "shark-900" : color;

  // Random width between 250 and 1900
  const randomWidth = () => {
    return Math.floor(Math.random() * (1900 - 250 + 1) + 250).toString();
  };

  return (
    <div className={twMerge("w-min", className)}>
      {/* <HeadingCaption text={randomWidth()} /> */}
      <h1
        ref={titleRef}
        aria-label={children}
        role="heading"
        className={classNames({
          [fontSize]: fontSize,
          [twMerge(" font-bold w-max z-10", color)]: true,
        })}
      >
        {eyebrow && <BlueprintLabel label={eyebrow} />}
        {children}
      </h1>
    </div>
  );
};

export default Heading;
