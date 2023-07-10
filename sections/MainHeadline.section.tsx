"use client";

import { ReactNode, useRef } from "react";
import useGsapEffect from "@/hooks/useGsapEffect";
import { gsap } from "gsap";
import { SplitText } from "gsap/dist/SplitText";
import classNames from "classnames";

interface MainHeadlineSectionProps {
  children: ReactNode;
  className?: string;
  textClassName?: string;
}
const MainHeadlineSection = ({
  textClassName,
  className,
  children,
}: MainHeadlineSectionProps) => {
  const ref = useRef(null);

  useGsapEffect((self: any) => {
    const title = self.selector(".main-headline")[0];
    const splitTitle = new SplitText(title, {
      type: "words, chars",
    });

    splitTitle.words.forEach((word: any) => {
      gsap.set(word.parentNode, { perspective: 1000 });
    });

    splitTitle.chars.forEach((char: any) => {
      gsap.set(char.parentNode, { perspective: 500 });
    });

    gsap.fromTo(
      splitTitle.chars,
      {
        willChange: "transform, opacity",
        opacity: 0.1,
        z: -800,
      },
      {
        ease: "black.out(1.2)",
        opacity: 1,
        z: 0,
        stagger: 0.04,
        scrollTrigger: {
          trigger: ref.current,
          start: "center bottom",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );
  }, ref);

  return (
    <section
      className={classNames(
        "p-6 sm:p-12 md:p-24 h-screen flex justify-center items-center text-center",
        className
      )}
      ref={ref}
    >
      <h1
        className={classNames(
          "main-headline clamp-text-8xl text-shark-50",
          textClassName
        )}
      >
        {children}
      </h1>
    </section>
  );
};

export default MainHeadlineSection;
