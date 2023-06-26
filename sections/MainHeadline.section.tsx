"use client";

import useGsapEffect from "@/hooks/useGsapEffect";
import { gsap } from "gsap";
import { SplitText } from "gsap/dist/SplitText";
import { useRef } from "react";

const MainHeadlineSection = () => {
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

  // TODO: Replace hard-coded text with CMS content
  return (
    <section
      className="p-6 sm:p-12 md:p-24 h-screen flex justify-center items-center text-center"
      ref={ref}
    >
      <h1 className="main-headline clamp-text-8xl text-shark-50">
        {/* We are forward-thinking retail concept development specialists. */}
        We specialize in{" "}
        <strong className="main-headline">crafting innovative </strong>retail
        concepts that{" "}
        <strong className="main-headline">stay ahead of the curve</strong>.
      </h1>
    </section>
  );
};

export default MainHeadlineSection;
