"use client";
import gsap from "gsap";
import { useIsomorphicLayoutEffect } from "react-use";
import useGsapEffect from "@/hooks/useGsapEffect";
import { useRef } from "react";

interface FadeInProps {
  children: React.ReactNode;
  animate?: GSAPTweenVars;
}

const FadeIn = ({ children, animate }: FadeInProps) => {
  const el = useRef<HTMLSpanElement>(null);

  useGsapEffect(
    () => {
      if (el.current) {
        gsap.from(el.current.children, {
          opacity: 0,
          duration: 0.7,
          y: 80,
          ease: "circ.out",
          ...animate,
          stagger: 0.2,
          scrollTrigger: {
            trigger: el.current,
          },
        });
      }
    },
    el,
    [children]
  );

  return <span ref={el}>{children}</span>;
};

export default FadeIn;
