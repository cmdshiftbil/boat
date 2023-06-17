import { gsap } from "gsap";
import { MouseEvent, useRef } from "react";

interface TiltOnHoverProps extends React.HTMLAttributes<HTMLDivElement> {
  maxTiltX?: number;
  maxTiltY?: number;
}

const TiltOnHover = ({
  maxTiltX = 20,
  maxTiltY = 20,
  className,
  onClick,
  children,
}: TiltOnHoverProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: MouseEvent) => {
    if (!ref.current) return;

    const Tilt = ref.current;
    const xPos =
      ((event.pageX - ref.current.offsetLeft) / ref.current.clientWidth) *
        (maxTiltX * 2) -
      maxTiltX;
    const yPos =
      ((event.pageY - ref.current.offsetTop - 260) / ref.current.clientHeight) *
        (maxTiltY * 2) -
      maxTiltY;
    gsap.set(Tilt, { transformPerspective: 2000, transformOrigin: "center" });
    gsap.to(Tilt, {
      duration: 0.2,
      rotationY: xPos,
      rotationX: yPos,
      ease: "Power1.easeOut",
      overwrite: true,
    });
  };

  const handleMouseOut = (event: MouseEvent) => {
    if (!ref.current) return;
    const Tilt = ref.current;

    gsap.set(Tilt, { transformPerspective: 2000, transformOrigin: "center" });
    gsap.to(Tilt, {
      duration: 0.2,
      rotationY: 0,
      rotationX: 0,
      ease: "Power1.easeOut",
      overwrite: true,
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseOut}
      className={className}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default TiltOnHover;
