import useGsapEffect from "@/hooks/useGsapEffect";
import { useRef } from "react";

export const ParallaxImageSlider = () => {
  const ref = useRef<HTMLDivElement>(null);

  useGsapEffect((self: any) => {}, ref);

  return (
    <div ref={ref}>
      <div id="carousel" ref={ref}>
        <div id="slides"></div>

        <svg
          id="next"
          viewBox="0 0 50 50"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="#fff"
          stroke-width="2"
        >
          <circle fill="rgba(170,170,170,0.24)" cx="25" cy="25" r="20" />
          <polyline id="arrow" points="21,15 33,25 21,35" />
        </svg>

        <svg
          id="prev"
          viewBox="0 0 50 50"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="#fff"
          stroke-width="2"
        >
          <circle fill="rgba(170,170,170,0.24)" cx="25" cy="25" r="20" />
          <polyline id="arrow" points="29,15 17,25 29,35" />
        </svg>
      </div>
    </div>
  );
};
