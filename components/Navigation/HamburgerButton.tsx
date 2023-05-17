import gsap from "gsap";
import { HTMLAttributes, useEffect, useRef } from "react";
import useGsapEffect from "@/hooks/useGsapEffect";

interface HamburgerButtonProps extends HTMLAttributes<HTMLButtonElement> {
  isOpen: boolean;
}
const HamburgerButton = ({ onClick, isOpen }: HamburgerButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  const tl = useRef<GSAPTimeline>(gsap.timeline());

  useGsapEffect(() => {
    tl.current.to(
      ".bar-1",
      {
        duration: 0.5,
        attr: { d: "M8,2 L2,8" },
        x: 1,
        ease: "Power2.easeInOut",
      },
      "start"
    );

    tl.current.to(
      ".bar-2",
      {
        duration: 0.5,
        autoAlpha: 0,
      },
      "start"
    );

    tl.current.to(
      ".bar-3",
      {
        duration: 0.5,
        attr: { d: "M8,8 L2,2" },
        x: 1,
        ease: "Power2.easeInOut",
      },
      "start"
    );

    tl.current.reverse();
  }, ref);

  useEffect(() => {
    tl.current.reversed(!isOpen);
  }, [isOpen]);

  const onClickHanle = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  return (
    <button
      ref={ref}
      className="menu-toggle"
      id="menuToggle"
      onClick={onClickHanle}
    >
      <svg
        viewBox="0 0 12 10"
        className="hamburger-icon"
        height="40px"
        width="40px"
      >
        <path d="M10,2 L2,2" className="bar-1 stroke-shark-50" />
        <path d="M4,5 L10,5" className="bar-2 stroke-shark-50" />
        <path d="M10,8 L6,8" className="bar-3 stroke-shark-50" />
      </svg>
    </button>
  );
};

<svg
  width="28"
  height="21"
  viewBox="0 0 28 21"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M0.5 1H27.5" stroke="black" />
  <path d="M9.5 10.5H27.5" stroke="black" />
  <path d="M18.5 20.5H27.5" stroke="black" />
</svg>;

export default HamburgerButton;
