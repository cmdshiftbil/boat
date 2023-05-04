import classNames from "classnames";
import gsap from "gsap";
import { createElement, useMemo, useRef } from "react";
import { twMerge } from "tailwind-merge";
import useGsapEffect from "@/hooks/useGsapEffect";
import { useScroll } from "@/hooks/useScroll";
import { isDom } from "@/utils/dom.utils";
import { SplitText } from "gsap/dist/SplitText";

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
    (self: any) => {
      if (!animate) return;

      const textElement = self.selector(".text-element")[0];
      console.log(textElement);

      const text = new SplitText(textElement, { type: "words" });

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

  return (
    <div ref={ref}>
      {createElement(
        as,
        {
          className: classNames({
            "text-element": true,
            [fontSize]: fontSize,
            [twMerge(
              `text-shark-50 font-[200] subpixel-antialiased`,
              className
            )]: true,
          }),
          ...props,
        },
        children
      )}
    </div>
  );
};

export default Text;
