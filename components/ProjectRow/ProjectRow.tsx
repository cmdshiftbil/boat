"use client";
import Link from "next/link";
import gsap from "gsap";
import SplitText from "gsap/dist/SplitText";
import { useRef, useState } from "react";
import { useIsomorphicLayoutEffect } from "react-use";
import useGsapEffect from "@/hooks/useGsapEffect";
import { isDom } from "@/utils/dom.utils";

const ProjectRow = ({ title, slug }: any) => {
  const rowRef = useRef(null);

  const titleRef = useRef<any>(null);
  const imagesRef = useRef<any>(null);
  const { current: timeline } = useRef(gsap.timeline({ paused: false }));

  useIsomorphicLayoutEffect(() => {}, []);

  useGsapEffect(() => {
    // const title = titleRef.current;

    if (!isDom) return;

    const splitTitle = SplitText.create(titleRef.current, { type: "chars" });

    gsap.killTweensOf([imagesRef.current, titleRef.current]);

    timeline
      // .addLabel("mouseenter", 0)
      .set(splitTitle.chars, {
        "will-change": "opacity, transform",
        transformOrigin: "0% 50%",
        opacity: 0,
        rotationY: 90,
        z: -300,
      })
      .to(splitTitle.chars, {
        ease: "expo",
        opacity: 1,
        rotationY: 0,
        z: 0,
        stagger: { each: 0.04, from: "start" },
        scrollTrigger: {
          trigger: rowRef.current,
          start: "bottom bottom+=10%",
          end: "bottom top+=50%",
          scrub: 1,
        },
      });
  }, rowRef);

  const handleMouseEnter = () => {
    timeline.to(imagesRef.current.childNodes, {
      duration: 0.4,
      ease: "power3",
      startAt: {
        scale: 0.8,
        xPercent: 80,
      },
      scale: 1,
      xPercent: 0,
      opacity: 1,
      stagger: -0.035,
    });
  };

  const handleMouseLeave = () => {
    timeline.to(imagesRef.current.childNodes, {
      duration: 0.4,
      ease: "power4",
      opacity: 0,
      scale: 0.8,
      xPercent: 0,
      stagger: -0.035,
    });
  };

  return (
    // Row
    <li>
      <Link href={`/projects/${slug}`}>
        <div
          // class="row"
          ref={rowRef}
          className="relative grid text-shark-50 grid-rows-[5vw] grid-cols-[auto_1fr] gap-[5vw] p-6  transition-colors ease-in-out duration-500 hover:bg-shark-800 items-center"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            // className="cell cell--text"
            className="relative"
          >
            <h2
              // className="cell__title oh"
              ref={titleRef}
              className="relative grid grid-rows-[100%_100%] overflow-hidden"
            >
              <span className="inline-block will-change-transform clamp-text-5xl font-bold">
                {title}
              </span>
            </h2>
          </div>

          <div
            ref={imagesRef}
            // className="cell cell--images
            className="relative grid content-center auto-cols-auto flow grid-flow-col gap-6 justify-end ml-auto"
          >
            <div
              //  className="cell__img"
              className="relative w-[5vw] display: grid grid-cols-[100%] grid-row-[auto_auto] will-change-transform opacity-0"
            >
              <div
                className="bg-cover bg-[50%-50%] aspect-square rounded-lg"
                style={{
                  backgroundImage: "url(https://via.placeholder.com/350x250)",
                }}
              />
            </div>
            <div
              //  className="cell__img"
              className="relative w-[5vw] display: grid grid-cols-[100%] grid-row-[auto_auto] will-change-transform opacity-0"
            >
              <div
                className="bg-cover bg-[50%-50%] aspect-square rounded-lg"
                style={{
                  backgroundImage: "url(https://via.placeholder.com/350x250)",
                }}
              />
            </div>
            <div
              //  className="cell__img"
              className="relative w-[5vw] display: grid grid-cols-[100%] grid-row-[auto_auto] will-change-transform opacity-0"
            >
              <div
                className="bg-cover bg-[50%-50%] aspect-square rounded-lg"
                style={{
                  backgroundImage: "url(https://via.placeholder.com/350x250)",
                }}
              />
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ProjectRow;
