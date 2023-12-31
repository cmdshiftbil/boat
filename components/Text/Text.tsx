"use client";
import useGsapEffect from "@/hooks/useGsapEffect";
import { cn } from "@/lib/utils";
import { twColors } from "@/utils/color.utils";
import gsap from "gsap";
import { SplitText } from "gsap/dist/SplitText";
import { HTMLAttributes, createElement, useRef } from "react";

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  as?: "p";
  animate?: boolean;
  fontSize?: string;
}
const Text = ({
  children,
  as = "p",
  className,
  animate = false,
  // fontSize = "clamp-text-3xl",
  ...props
}: TextProps) => {
  const ref = useRef(null);

  useGsapEffect(
    (self: any) => {
      if (!animate) return;

      const textElement = self.selector(".text-element")[0];

      const text = new SplitText(textElement, { type: "words" });

      gsap.fromTo(
        text.words,
        {
          "will-change": "opacity",
          opacity: 0.1,
          color: twColors?.caramel?.[300],
        },
        {
          ease: "none",
          opacity: 1,
          stagger: 0.05,
          scrollTrigger: {
            trigger: ref.current,
            start: "top bottom-=40%",
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
          className: cn(
            className,
            "text-caramel-100 font-[200] subpixel-antialiased",
            "text-element"
          ),
          ...props,
        },
        children
      )}
    </div>
  );
};

export default Text;
