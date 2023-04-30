import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
import useGsapEffect from "@/hooks/useGsapEffect";

const DrawIcon = ({ icon }: any) => {
  const ref = useRef<any>(null);

  useGsapEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 3, ease: "power2.inOut" },
    });

    tl.fromTo(
      "svg path",
      { drawSVG: "0%", y: 20, opacity: 0 },
      { drawSVG: "100%", duration: 0.8, y: 0, opacity: 1 }
    );

    // tl.reversed(!tl.reversed());

    ScrollTrigger.create({
      trigger: ref.current,
      start: "top bottom",
      animation: tl,
      toggleActions: "play reverse play reverse",
    });
  }, ref);

  return <i ref={ref}>{icon}</i>;
};

export default DrawIcon;
