import gsap from "gsap";
import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "react-use";
import useGsapEffect from "@/hooks/useGsapEffect";

interface FadeInProps {
  children: React.ReactNode;
  animate?: GSAPTweenVars;
}

const FadeIn = ({ children, animate }: FadeInProps) => {
  const el = useRef<any>();

  useGsapEffect(
    () => {
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
    },
    el,
    [children]
  );

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {});
    return () => ctx.revert();
  }, []);

  return <span ref={el}>{children}</span>;
};

export default FadeIn;
