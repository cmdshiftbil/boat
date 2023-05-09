import { CSSProperties, ComponentProps, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import classNames from "classnames";

// Ref: https://tympanus.net/Development/DoubleImageHoverEffects/

interface DoubleImageProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  needsScalingEffect?: boolean;
  objectFit?: CSSProperties["objectFit"];
  fill?: boolean;
}
const DoubleImage = ({
  src,
  needsScalingEffect,
  className,
  objectFit = "contain",
  fill = true,
  ...props
}: DoubleImageProps) => {
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);

  const [timeline, setTimeline] = useState<gsap.core.Timeline | null>(null);
  const handleMouseEnter = (e: React.MouseEvent) => {
    if (timeline) {
      timeline.kill();
    }

    const tl = gsap
      .timeline({
        defaults: {
          duration: 0.5,
          ease: "power2",
        },
      })
      .set(image1Ref.current, { willChange: "filter" })
      .set(image2Ref.current, { willChange: "clip-path" })
      .fromTo(
        image2Ref.current,
        {
          clipPath: "circle(70.7% at 50% 50%)",
        },
        {
          clipPath: "circle(0% at 50% 50%)",
        },
        0
      )
      .fromTo(
        image1Ref.current,
        {
          scale: needsScalingEffect ? 1.5 : 1,
          filter: "brightness(400%) saturate(200%) hue-rotate(190deg)",
        },
        {
          scale: needsScalingEffect ? 1.3 : 1,
          filter: "brightness(100%) saturate(100%) hue-rotate(0deg)",
        },
        0
      );
    setTimeline(tl);
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    if (timeline) {
      timeline.kill();
    }

    const tl = gsap
      .timeline({
        defaults: {
          duration: 0.5,
          ease: "power2.inOut",
        },
      })
      .set(image1Ref.current, { willChange: "filter" })
      .set(image2Ref.current, { willChange: "clip-path" })
      .to(
        image2Ref.current,
        {
          clipPath: "circle(70.7% at 50% 50%)",
        },
        0
      )
      .to(
        image1Ref.current,
        {
          scale: needsScalingEffect ? 1.5 : 1,
          filter: "brightness(400%) saturate(200%) hue-rotate(190deg)",
        },
        0
      );
    setTimeline(tl);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={classNames("relative overflow-hidden", className)}
      {...props}
    >
      <Image
        ref={image1Ref}
        src={src}
        alt="our-presence"
        fill={fill}
        style={{
          width: "100%",
          height: "100%",
          objectFit,
        }}
      />
      <Image
        ref={image2Ref}
        src={src}
        alt="our-presence"
        fill={fill}
        style={{
          width: "100%",
          height: "100%",
          objectFit,
        }}
      />
    </div>
  );
};

export default DoubleImage;
