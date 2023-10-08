"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef, useEffect } from "react";
import useGsapEffect from "@/hooks/useGsapEffect";

const DrawIcon = ({ icon }: any) => {
  const ref = useRef<any>(null);
  const tl = gsap.timeline({
    paused: true, // Start in paused state so it doesn't run immediately
    defaults: { duration: 3, ease: "power2.inOut" },
  });

  useGsapEffect(() => {
    tl.fromTo(
      "svg path",
      { drawSVG: "0%", y: 20, opacity: 0 },
      { drawSVG: "100%", duration: 0.8, y: 0, opacity: 1 }
    );

    ScrollTrigger.create({
      trigger: ref.current,
      start: "top bottom",
      onEnter: () => tl.restart(), // Restart the timeline when entering the viewport
      onLeaveBack: () => tl.restart(), // Restart the timeline when leaving the viewport (if desired)
    });
  }, ref);

  // Set up hover event listener
  useEffect(() => {
    const element = ref.current;
    if (element) {
      const hoverHandler = () => tl.restart(); // Restart the timeline upon hover

      element.addEventListener("mouseenter", hoverHandler);

      return () => {
        element.removeEventListener("mouseenter", hoverHandler);
      };
    }
  }, [tl]);

  return <i ref={ref}>{icon}</i>;
};

export default DrawIcon;
