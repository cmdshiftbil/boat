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
import ScrollIcon from "@/components/ScrollIcon";
import NavTopIcon from "public/images/images-nav-top.svg";
import NavOtherIcon from "public/images/images-nav-other.svg";

interface ImageGalleryProps extends HTMLAttributes<HTMLDivElement> {
  images: any[];
  logo?: any;
  allowMobileSwipe?: boolean;
}
export const ImageGallery = ({
  images,
  logo,
  allowMobileSwipe,
  className,
}: ImageGalleryProps) => {
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
      if (!slidesRef.current || newPosition === currentImageIndex) {
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
        onDown: () => !isAnimating && (allowMobileSwipe || !isMobile) && prev(),
        onUp: () => !isAnimating && (allowMobileSwipe || !isMobile) && next(),
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
        className="w-full flex-1 aspect-[2/3] lg:aspect-[31/25] max-h-[880px] slides hover:shadow-5xl transition-all relative"
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
                    "object-cover aspect-w-4 w-full h-full slide__img-inner",
                    {
                      "!cursor-wait": isAnimating,
                    }
                  )}
                />
              </div>
            </div>
          </div>
        ))}

        <div className="absolute flex md:hidden flex-col gap-2 right-0 py-[7px] -mr-[2px] bg-white border-2 border-black rounded-l-[4px]">
          {sortedImages.map(({ id, view }: any, idx) => {
            const viewLowerCase = view.toLowerCase();
            const isOtherView = ![
              "top side",
              "right side",
              "left side",
              "back view",
            ].includes(viewLowerCase);

            return (
              <button
                key={id}
                onClick={() => handleActiveImageIndex(idx)}
                title={view}
                className={classNames(
                  "w-[40px] h-[40px] flex justify-center items-center rounded-[4px] ml-[6px] mr-[4px]",
                  {
                    "bg-galleryThumb text-white": currentImage.id === id,
                    "text-black hover:bg-zinc-200": currentImage.id !== id,
                    "!cursor-wait": isAnimating,
                    ["rotate-90 text-black"]: viewLowerCase === "right side",
                    ["rotate-[270deg]"]: viewLowerCase === "left side",
                    ["rotate-180"]: viewLowerCase === "back view",
                  }
                )}
              >
                {isOtherView ? (
                  <NavOtherIcon
                    width="18"
                    height="18"
                    className={classNames("nav-icon", {
                      active: currentImage.id === id,
                    })}
                  />
                ) : (
                  <NavTopIcon
                    width="18"
                    height="18"
                    className={classNames("nav-icon", {
                      active: currentImage.id === id,
                    })}
                  />
                )}
              </button>
            );
          })}
          {allowMobileSwipe && (
            <div className="w-full flex justify-center items-center pt-[16px] border-t-2">
              <ScrollIcon className="scale-75" color="black" thickness={2} />
            </div>
          )}
        </div>
      </div>

      {/* List of images */}
      <div
        className="hidden md:flex flex-col justify-center border rounded-[7px] p-6 w-[300px] xl:w-[350px] 2xl:w-[400px] h-full relative"
        style={{
          minHeight: isMobile ? "auto" : slidesRef?.current?.clientHeight,
        }}
      >
        {/* Logo */}
        {logo && (
          <div className="logo absolute top-0 left-0 w-full h-[80px] xl:h-[100px] my-8 xl:my-12">
            <Image
              src={logo.url}
              alt={logo.alt}
              fill
              className={classNames("object-contain aspect-w-4 w-full")}
            />
          </div>
        )}
        <nav
          className={classNames("flex flex-col", {
            "mt-[144px] :mt-[196px] 2xl:mt-0": !!logo,
          })}
          aria-label="Sidebar"
        >
          <ul role="list" className="-mx-2 space-y-1 flex flex-col">
            {sortedImages.map(({ id, view, label }: any, idx) => {
              return (
                <li key={id} className="flex-1 w-full flex flex-col !m-0">
                  <button
                    onClick={() => handleActiveImageIndex(idx)}
                    className={classNames(
                      "group gap-x-3 rounded-[5px] p-2 pl-3 text-lg leading-6 text-shark-300 text-center uppercase flex-1 w-full py-6",
                      {
                        "bg-shark-900 text-white": currentImage.id === id,
                        "text-zinc-700 hover:bg-zinc-200":
                          currentImage.id !== id,
                        "!cursor-wait": isAnimating,
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
      <div className="cursor hidden md:block">
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
