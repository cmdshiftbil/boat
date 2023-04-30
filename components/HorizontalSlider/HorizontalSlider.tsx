import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Children, useRef } from "react";
import { useWindowSize } from "react-use";
import { useMeasure } from "react-use";
import useGsapEffect from "@/hooks/useGsapEffect";
import { useScroll } from "@/hooks/useScroll";
import { clamp, mapRange } from "@/utils/math.utils";
import Button from "../Button";

import Heading from "../Heading";
import SectionHeader from "../SectionHeader";

const HorizontalSlider = ({ children }: any) => {
  const wrapperRef = useRef<any>(null);
  const pinWrapperRef = useRef<any>(null);
  const animationWrapperRef = useRef<any>(null);

  useGsapEffect((self) => {
    console.log("SELF", self);

    const wrap = wrapperRef.current;
    // const animationWrap = animationWrapperRef.current;
    const animationWrap = self.selector(".animation-wrap")[0];
    // const pinWrap = pinWrapperRef.current;
    const pinWrap = self.selector(".pin-wrap");
    const getToValue = () => -(animationWrap.scrollWidth - window.innerWidth);

    console.log("animationWrap", animationWrap);

    gsap.to(animationWrap, {
      x: getToValue(),
      ease: "none",
      scrollTrigger: {
        // trigger: wrap,
        endTrigger: animationWrap,
        scroller: document.body, // neccessary setting for smooth-scrollbar on body
        // pinType: "transform", // neccessary setting for smooth-scrollbar on body
        pin: pinWrap,
        start: "top top",
        end: () => "+=" + animationWrap.scrollWidth,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        scrub: true,
        fastScrollEnd: true,
        //markers: true,
      },
    });

    console.log(animationWrap.scrollWidth);
  }, wrapperRef);

  return (
    <section ref={wrapperRef} className="overflow-hidden">
      <div ref={pinWrapperRef} className="pin-wrap relative flex z-10 h-screen">
        <div
          ref={animationWrapperRef}
          className="animation-wrap relative flex h-screen  items-center"
        >
          {Children.map(children, (child, index) => {
            return (
              <div
                //  className="relative flex h-[calc(100vh-300px)] flex-[0_0_500px]"
                className="relative flex h-[calc(100vh-300px)] flex-auto"
              >
                {child}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HorizontalSlider;
