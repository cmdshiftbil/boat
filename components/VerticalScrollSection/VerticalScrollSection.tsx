import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Children, useRef } from "react";
import useGsapEffect from "@/hooks/useGsapEffect";

const VerticalScrollSection = ({ children, ...props }: any) => {
  const ref = useRef(null);
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);

  useGsapEffect(() => {
    const leftColumn = document.getElementById("left-column");
    const rightColumn = document.getElementById("right-column");

    // Use ScrollTrigger to create a "sticky" effect for the left column

    ScrollTrigger.create({
      trigger: leftColumnRef.current,
      endTrigger: ref.current,
      start: "top top",
      end: "bottom bottom",
      pin: true,
      pinSpacing: false,
    });
  }, ref);

  return (
    <div
      className="grid overflow-hidden reative grid-cols-vertical-scrol"
      ref={ref}
    >
      <div ref={leftColumnRef} className="bg-shark-500 text-shark-50">
        <h1 className="p-12 font-bold pt-72 text-7xl">TEAMS</h1>
      </div>
      <div ref={rightColumnRef} className="bg-shark-800 text-shark-50">
        {Children.map(children, (child) => {
          return (
            <div className="px-12 pt-72 pb-12 h-[60vh] row-span-1 flex flex-row justify-center items-center">
              {child}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VerticalScrollSection;
