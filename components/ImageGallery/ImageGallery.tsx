"use client";
import { gsap } from "gsap";
import Observer from "gsap/dist/Observer";
import SplitText from "gsap/dist/SplitText";
import {
  HTMLAttributes,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  MouseEvent,
} from "react";
import classNames from "classnames";
import Image from "next/image";
import "./index.css";
import useGsapEffect from "@/hooks/useGsapEffect";
import { useWindowSize } from "react-use";

interface ImageGalleryProps extends HTMLAttributes<HTMLDivElement> {
  images: any[];
}
export const ImageGallery = ({ images, className }: ImageGalleryProps) => {
  const sortedImages = useMemo(() => images.sort(), [images]);
  const totalImages = images.length;
  const [isHoverOn, setIsHoverOn] = useState(false);
  const [isInitialSlideSet, setIsInitialSlideSet] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const currentImage = sortedImages[currentImageIndex];
  const slidesRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const [cursorText, setCursorText] = useState<SplitText>();
  const cursorTl = useRef<GSAPTimeline>(gsap.timeline());
  const { width: windowWidth } = useWindowSize();
  const isMobile = windowWidth <= 1024;

  const toggleCursor = useCallback(
    (showCursor?: boolean) => {
      console.log({ showCursor });
      if (cursorText) {
        return cursorTl.current.to(cursorText.chars, {
          duration: 0.1,
          ease: "expo",
          opacity: showCursor ? 1 : 0,
          stagger: {
            amount: 0.5,
            grid: "auto",
            from: "random",
          },
        });
      }
    },
    [cursorText]
  );

  // Disable browser scroll
  const handleWheel = (e: MouseEvent) => e.stopPropagation();
  const handleMouseMove = (e: MouseEvent) => {
    if (!cursorRef.current) {
      return;
    }
    cursorRef.current.style.left = e.pageX + 20 + "px";
    cursorRef.current.style.top =
      e.pageY - document.documentElement.scrollTop + 20 + "px";
  };

  const setCurrentSlide = useCallback(
    (position: number) => {
      if (!slidesRef.current || isInitialSlideSet) {
        return;
      }
      setIsInitialSlideSet(true);
      if (currentImageIndex !== -1) {
        (
          slidesRef.current.childNodes[currentImageIndex] as HTMLDivElement
        ).classList.remove("slide--current");
      }
      (slidesRef.current.childNodes[position] as HTMLDivElement).classList.add(
        "slide--current"
      );
      setCurrentImageIndex(position);
    },
    [currentImageIndex, isInitialSlideSet]
  );

  const navigate = useCallback(
    (newPosition: number) => {
      if (!slidesRef.current) {
        return;
      }

      setIsAnimating(true);

      // navigation direction
      const direction =
        currentImageIndex < newPosition
          ? currentImageIndex === 0 && newPosition === totalImages - 1
            ? "prev"
            : "next"
          : currentImageIndex === totalImages - 1 && newPosition === 0
          ? "next"
          : "prev";

      const currentSlide = slidesRef.current.childNodes[
        currentImageIndex
      ] as HTMLDivElement;
      const currentSlideInner = (currentSlide as HTMLDivElement).querySelector(
        ".slide__inner"
      );
      const currentSlideImgInner = (
        currentSlide as HTMLDivElement
      ).querySelector(".slide__img-inner");
      setCurrentImageIndex(newPosition);

      const upcomingSlide = slidesRef.current.childNodes[
        newPosition
      ] as HTMLDivElement;
      const upcomingSlideInner = (
        upcomingSlide as HTMLDivElement
      ).querySelector(".slide__inner");
      const upcomingSlideImgInner = (
        upcomingSlide as HTMLDivElement
      ).querySelector(".slide__img-inner");

      gsap
        .timeline({
          defaults: {
            duration: 1.6,
            ease: "power3.inOut",
          },
          onComplete: () => {
            currentSlide.classList.remove("slide--current");
            setIsAnimating(false);
          },
        })
        .addLabel("start", 0)
        .set(
          [currentSlideImgInner, upcomingSlideImgInner],
          {
            transformOrigin: direction === "next" ? "50% 0%" : "50% 100%",
          },
          "start"
        )
        // Place coming slide either above (translate -100%) or below (translate 100%) and the slide__inner to the opposite translate.
        .set(
          upcomingSlide,
          {
            yPercent: direction === "next" ? 100 : -100,
          },
          "start"
        )
        .set(
          upcomingSlideInner,
          {
            yPercent: direction === "next" ? -100 : 100,
          },
          "start"
        )
        // Add current class
        .add(() => {
          upcomingSlide.classList.add("slide--current");
        }, "start")
        // hide the back button and show back the cursor text if the current slide was open
        .add(() => {
          if (isHoverOn) {
            toggleCursor();
          }
        }, "start")
        // Current slide moves either up or down (translate 100% or -100%)
        .to(
          currentSlide,
          {
            yPercent: direction === "next" ? -100 : 100,
          },
          "start"
        )
        .to(
          currentSlideImgInner,
          {
            scaleY: 2,
          },
          "start"
        )
        // Upcoming slide translates to 0
        .to(
          [upcomingSlide, upcomingSlideInner],
          {
            yPercent: 0,
          },
          "start"
        )
        .to(
          upcomingSlideImgInner,
          {
            ease: "power2.inOut",
            startAt: { scaleY: 2 },
            scaleY: 1,
          },
          "start"
        );
    },
    [currentImageIndex, isHoverOn, toggleCursor, totalImages]
  );

  const handleActiveImageIndex = useCallback(
    (position: number) => {
      !isAnimating && navigate(position);
    },
    [isAnimating, navigate]
  );

  const next = useCallback(() => {
    const newPosition =
      currentImageIndex < totalImages - 1 ? currentImageIndex + 1 : 0;
    navigate(newPosition);
  }, [currentImageIndex, navigate, totalImages]);

  const prev = useCallback(() => {
    const newPosition =
      currentImageIndex > 0 ? currentImageIndex - 1 : totalImages - 1;
    navigate(newPosition);
  }, [currentImageIndex, navigate, totalImages]);

  useGsapEffect(() => {
    const ct = new SplitText(cursorRef?.current, {
      type: "chars",
    });
    setCursorText(ct);
  }, cursorRef);

  useGsapEffect(
    () => {
      Observer.create({
        target: slidesRef.current,
        type: "wheel,touch,pointer",
        onDown: () => !isAnimating && prev(),
        onUp: () => !isAnimating && next(),
        // invert the mouse wheel delta
        wheelSpeed: -1,
        tolerance: 10,
        preventDefault: true,
      });
    },
    slidesRef,
    [prev, next, isAnimating]
  );

  useEffect(() => {
    setCurrentSlide(0);
  }, [setCurrentSlide]);

  useEffect(() => {
    toggleCursor(isHoverOn);
    if (!isHoverOn) {
      cursorTl.current.kill();
    }
  }, [isHoverOn, toggleCursor]);

  return (
    <div
      className={classNames(
        "flex flex-col lg:flex-row items-start justify-center gap-[30px] mb-10",
        className
      )}
    >
      {/* add class "touch-none": disable mobile scrolling when sliding the images */}
      {/* Noticed that user cannot swipe to lower areas with this ON, so turning it off */}
      <div
        className={classNames(
          "w-full flex-1 aspect-[2/3] lg:aspect-[2/1] slides hover:shadow-5xl transition-all"
        )}
        ref={slidesRef}
        onMouseEnter={() => setIsHoverOn(true)}
        onMouseLeave={() => setIsHoverOn(false)}
        onMouseMove={handleMouseMove}
        onWheel={handleWheel}
      >
        {sortedImages.map(({ id, image, view, label }: any, idx) => (
          <div key={idx} className={classNames("slide relative w-full h-full")}>
            <div className="slide__inner w-full h-full relative">
              <div className="slide__img w-full h-full relative">
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className={classNames(
                    "object-cover aspect-w-4 w-full h-full slide__img-inner"
                  )}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className="flex flex-col border rounded-md p-4 w-full lg:w-auto h-full"
        style={{
          height: isMobile ? "auto" : slidesRef?.current?.clientHeight,
        }}
      >
        <nav className="flex flex-1 flex-col" aria-label="Sidebar">
          <ul role="list" className="-mx-2 space-y-1 flex flex-col">
            {sortedImages.map(({ id, view, label }: any, idx) => {
              return (
                <li key={id} className="flex-1 w-full flex flex-col">
                  <button
                    onClick={() => handleActiveImageIndex(idx)}
                    className={classNames(
                      "group gap-x-3 rounded-sm p-2 pl-3 text-sm leading-6 font-semibold text-shark-300 text-center uppercase flex-1 w-full py-6",
                      {
                        "bg-shark-900 text-white": currentImage.id === id,
                        "text-zinc-700 hover:bg-zinc-50":
                          currentImage.id !== id,
                      }
                    )}
                  >
                    {label ? label : view}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className="cursor">
        <span
          className={classNames(
            "cursor__text fixed bg-black text-white text-sm px-5 py-2.5 rounded-3xl shadow-2xl min-w-max",
            {
              hidden: !isHoverOn,
            }
          )}
          ref={cursorRef}
        >
          ↕ Scroll or Drag
        </span>
      </div>
    </div>
  );
};
