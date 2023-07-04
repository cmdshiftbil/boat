import useGsapEffect from "@/hooks/useGsapEffect";
import { useLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";
import { useRef } from "react";
import useColor from "@/hooks/useColor";
import { horizontalLoop } from "@/utils/gsap.utils";
import classNames from "classnames";
import { twMerge } from "tailwind-merge";

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

  useLenis(({ velocity, progress, scroll, direction }: any) => {
    if (!carousel) return;
    /**
     * direction: 0
     * limit: 7932.140625
     * progress: 0.9552201584928415
     * scroll: 7576.940625000007
     * velocity: 0
     */

    let accelerateBy = directionFactor.current * baseVelocity;

    directionFactor.current = direction;

    accelerateBy += directionFactor.current * accelerateBy * velocity * 0.5;

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
        <div className="flex gap-x-12 sm:gap-x-24 w-full" ref={wrapperRef}>
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
