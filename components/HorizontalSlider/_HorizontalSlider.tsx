import gsap from "gsap";
import { Children, useRef } from "react";
import { useWindowSize } from "react-use";
import { useMeasure } from "react-use";
import { useScroll } from "@/hooks/useScroll";
import { clamp, mapRange } from "@/utils/math.utils";
import Button from "../Button";

import Heading from "../Heading";
import SectionHeader from "../SectionHeader";

const HorizontalSlider = ({ children }: any) => {
  const elementRef = useRef<any>(null);

  const [wrapperRectRef, wrapperRect] = useMeasure<any>();
  const [elementRectRef, elementRect] = useMeasure<any>();
  const [headerRef, headerRect] = useMeasure<any>();
  const { height: windowHeight, width: windowWidth } = useWindowSize();

  const start = wrapperRect.top - windowHeight;
  const end = wrapperRect.top + wrapperRect.height - windowHeight;

  useScroll(({ scroll }: any) => {
    if (!elementRect || !elementRef.current) return;

    const start = wrapperRect.top - windowHeight;
    const end = wrapperRect.top + wrapperRect.height - windowHeight;

    let progress = mapRange(start, end, scroll, 0, 1);
    progress = clamp(0, progress, 1);

    const x = progress * (elementRect.width - windowWidth);

    const cards = [...elementRef.current.children];

    gsap.to(cards, {
      x: -x,
      stagger: 0.033,
      ease: "none",
      duration: 0,
    });
  });

  return (
    <section ref={wrapperRectRef} style={{ height: elementRect.width + "px" }}>
      <div
        className={`sticky`}
        style={{
          top: `calc((15vh - ${headerRect.height}px) / 2)`,
        }}
      >
        <SectionHeader
          title="How we work"
          className="p-12"
          titleColor="text-shark-50"
          suffix={<Button to="/contact">Discuss your project</Button>}
        />

        <div
          className="flex overflow-hidden"
          style={{
            maxHeight: `calc((85vh - ${headerRect.height}px))`,
          }}
        >
          <div
            className="flex flex-row [&>*]:flex-shrink-0 first:ml-[80vw] last:mr-[5px]"
            ref={(node) => {
              elementRef.current = node;
              elementRectRef(node);
            }}
          >
            {Children.map(children, (child, index) => {
              return (
                <div className="first:ml-[10vw] last:mr-[100vw]">{child}</div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalSlider;
