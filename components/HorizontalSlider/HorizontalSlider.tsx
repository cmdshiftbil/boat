import gsap from "gsap";
import { Children, useRef } from "react";
import useGsapEffect from "@/hooks/useGsapEffect";
import classNames from "classnames";
import ScrollIcon from "../ScrollIcon";

interface HorizontalSliderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  showScrollIcon?: boolean;
  className?: string;
}
const HorizontalSlider = ({
  children,
  className,
  showScrollIcon,
  ...props
}: HorizontalSliderProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const pinWrapperRef = useRef<HTMLDivElement>(null);
  const animationWrapperRef = useRef<HTMLDivElement>(null);

  useGsapEffect((self: any) => {
    // const wrap = wrapperRef.current;
    const animationWrap = self.selector(".animation-wrap")[0];
    const pinWrap = self.selector(".pin-wrap");
    const getToValue = () => -(animationWrap.scrollWidth - window.innerWidth);

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
  }, wrapperRef);

  return (
    <section
      ref={wrapperRef}
      className={classNames("overflow-hidden", className)}
      {...props}
    >
      <div ref={pinWrapperRef} className="pin-wrap relative flex z-10 h-screen">
        {showScrollIcon && (
          <div className="flex md:hidden justify-center items-center w-full absolute bottom-2">
            <ScrollIcon />
          </div>
        )}
        <div
          ref={animationWrapperRef}
          className="animation-wrap relative flex h-screen items-center"
        >
          {Children.map(children, (child, index) => {
            return (
              <div className="relative flex flex-auto h-[350px] md:h-auto">
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
