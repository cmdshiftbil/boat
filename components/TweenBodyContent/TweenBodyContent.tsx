import { useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/dist/SplitText";
import useGsapEffect from "@/hooks/useGsapEffect";

// Ref: https://tympanus.net/Development/OnScrollTypographyAnimations/index2.html

interface TweenBodyContentProps extends React.HTMLAttributes<HTMLDivElement> {
  effect?: "fade-in-words" | "pop-every-word";
  start?: string | number;
  end?: string | number;
}
const TweenBodyContent = ({
  effect = "fade-in-words",
  children,
  start,
  end,
}: TweenBodyContentProps) => {
  const ref = useRef(null);

  useGsapEffect(
    () => {
      switch (effect) {
        case "fade-in-words":
          {
            const splitTitle = new SplitText(ref.current, { type: "words" });
            gsap.fromTo(
              ref.current,
              {
                transformOrigin: "0% 50%",
              },
              {
                ease: "none",
                scrollTrigger: {
                  trigger: ref.current,
                  start: "top bottom",
                  end: "top top",
                  scrub: true,
                },
              }
            );

            gsap.fromTo(
              splitTitle.words,
              {
                "will-change": "opacity",
                opacity: 0.1,
              },
              {
                ease: "none",
                opacity: 1,
                stagger: 0.05,
                scrollTrigger: {
                  trigger: ref.current,
                  start: start ?? "top bottom-=20%",
                  end: end ?? "center top+=20%",
                  scrub: true,
                },
              }
            );
          }
          break;
        case "pop-every-word":
          {
            const splitTitle = new SplitText(ref.current, {
              type: "words, chars",
            });

            splitTitle.words.forEach((word: any) => {
              gsap.set(word.parentNode, { perspective: 1000 });
            });

            splitTitle.chars.forEach((char: any) => {
              gsap.set(char.parentNode, { perspective: 500 });
            });

            gsap.fromTo(
              splitTitle.chars,
              {
                willChange: "transform, opacity",
                opacity: 0.1,
                z: -800,
              },
              {
                ease: "black.out(1.2)",
                opacity: 1,
                z: 0,
                stagger: 0.04,
                scrollTrigger: {
                  trigger: ref.current,
                  start: start ?? "center bottom",
                  end: end ?? "bottom bottom",
                  scrub: true,
                },
              }
            );
          }
          break;
        default:
          break;
      }
    },
    ref,
    [effect]
  );

  return <div ref={ref}>{children}</div>;
};

export default TweenBodyContent;
