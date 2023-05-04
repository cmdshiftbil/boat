import gsap from "gsap";
import { useRef } from "react";
import { useWindowSize } from "react-use";
import useGsapEffect from "@/hooks/useGsapEffect";
import { useScroll } from "@/hooks/useScroll";

import { useMemo } from "react";
import { horizontalLoop } from "@/utils/gsap.utils";
import { twMerge } from "tailwind-merge";
import useColor from "@/hooks/useColor";
import classNames from "classnames";

const ParallaxCarousel = ({
  baseVelocity = 10,
  shadeColor = "shark-50",
  className,
  images,
}: any) => {
  const parentRef = useRef(null);
  const wrapperRef = useRef<any>(null);

  const shade = useColor(shadeColor);

  const directionFactor = useRef(0);

  const carousel = useRef<GSAPTimeline>();

  const speedTween = gsap.to(carousel.current ? carousel.current : null, {
    timeScale: baseVelocity,
  });

  const slowDown = gsap.delayedCall(0, () => {});

  useGsapEffect(
    (self: any) => {
      const logos = self.selector(".logo-item");

      if (!logos.length) return;

      carousel.current = horizontalLoop(logos, {
        paused: true,
        repeat: -1,
        timeScale: baseVelocity,
      });

      if (!carousel.current) return;

      carousel.current.progress();
      carousel.current.play();

      return () => {
        if (carousel.current) {
          carousel.current.kill();
        }
      };
    },
    parentRef,
    [baseVelocity, carousel]
  );

  useScroll((scroll: any) => {
    if (!carousel) return;
    /**
     * direction: 0
     * limit: 7932.140625
     * progress: 0.9552201584928415
     * scroll: 7576.940625000007
     * velocity: 0
     */
    const { velocity, progress } = scroll;

    let accelerateBy = directionFactor.current * baseVelocity;

    if (velocity < 0) {
      directionFactor.current = -1;
    } else if (velocity > 0) {
      directionFactor.current = 1;
    }

    accelerateBy += directionFactor.current * accelerateBy * velocity;

    speedTween.pause();

    if (carousel.current) {
      carousel.current.timeScale(accelerateBy);
    }

    slowDown.resume();
  });

  return (
    <>
      <div
        className={twMerge(
          "relative overflow-hidden flex flex-nowrap",
          className
        )}
        ref={parentRef}
      >
        <div
          className={twMerge(
            classNames({
              [`bg-gradient-to-r from-${shade} via-transparent to-${shade} absolute  z-10`]:
                true,
            }),
            className
          )}
        />
        <div className="flex gap-x-12 sm:gap-x-24 " ref={wrapperRef}>
          {images.map((image: any) => (
            <img
              className="logo-item max-h-8 w-full object-contain opacity-80 will-change-transform pl-12 sm:pl-24"
              key={image.id}
              src={image.src}
              alt={`${image.alt}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ParallaxCarousel;
