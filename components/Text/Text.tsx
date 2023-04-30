import classNames from "classnames";
import gsap from "gsap";
import SplitText from "gsap/dist/SplitText";
import { createElement, useMemo, useRef } from "react";
import { twMerge } from "tailwind-merge";
import useGsapEffect from "@/hooks/useGsapEffect";
import { useScroll } from "@/hooks/useScroll";
import { isDom } from "@/utils/dom.utils";

const Text = ({
  children,
  as = "p",
  className,
  animate = false,
  fontSize = "clamp-text-3xl",
  ...props
}: any) => {
  const ref = useRef(null);

  useGsapEffect(
    () => {
      if (!animate) return;

      const text = SplitText.create(ref?.current, { type: "words" });

      gsap.fromTo(
        text.words,
        {
          "will-change": "opacity",
          opacity: 0.1,
        },
        {
          ease: "none",
          opacity: 1,
          stagger: 0.05,
          scrollTrigger: {
            trigger: ref.current,
            start: "top bottom-=20%",
            end: "center top+=20%",
            scrub: true,
          },
        }
      );
    },
    ref,
    [children]
  );

  return createElement(
    as,
    {
      className: classNames({
        [fontSize]: fontSize,
        [twMerge(`text-shark-50 font-[200] subpixel-antialiased`, className)]:
          true,
      }),
      ref,
      ...props,
    },
    children
  );
};

export default Text;
