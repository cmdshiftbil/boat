"use client";
import CountryItem from "@/components/CountryItem";
import DoubleImage from "@/components/DoubleImage";
import Section from "@/components/Section";
import Text from "@/components/Text";
import TweenBodyContent from "@/components/TweenBodyContent";
import content from "@/content/content";
import useGsapEffect from "@/hooks/useGsapEffect";
import { HomeData } from "@/types/pages";
import { gsap } from "gsap";
import { useRef } from "react";
import { useWindowSize } from "react-use";

interface OurPresenceSectionProps {
  data: HomeData["presence"];
}

const OurPresenceSection = ({ data }: OurPresenceSectionProps) => {
  const countriesRef = useRef<HTMLUListElement>(null);
  const { width: windowWidth } = useWindowSize();
  const isMobile = windowWidth <= 1024;
  const tweenTargetRef = useRef(null);

  useGsapEffect(() => {
    gsap.fromTo(
      tweenTargetRef.current,
      {
        xPercent: -50,
        opacity: 0,
      },
      {
        duration: 1,
        xPercent: 0,
        opacity: 1,
        scale: 1,
        ease: "Expo.easeOut",
        stagger: 0.1,
        scrollTrigger: {
          trigger: tweenTargetRef?.current,
          start: "start 75%",
          end: "bottom center",
          scrub: 1,
        },
      }
    );
  }, tweenTargetRef);

  return (
    <Section
      className="min-h-[calc(100vh-405px)] flex flex-col mb-[200px] md:mb-0"
      title="Our Presence"
      headingClassName="!w-full text-center"
    >
      <TweenBodyContent
        effect="fade-in-words"
        start="top bottom-=20%"
        end="center top+=20%"
      >
        <Text className="text mb-12 text-center">{data.title}</Text>
      </TweenBodyContent>

      <div className="flex flex-col lg:flex-row justify-around">
        <div className="flex flex-1 w-full relative" ref={tweenTargetRef}>
          <DoubleImage
            className="relative w-full lg:flex-1 px-4"
            style={{
              height: isMobile ? "400px" : countriesRef.current?.clientHeight,
            }}
            src="/images/presence.png"
          />
        </div>

        <div className="flex-1">
          <ul className="columns-3 md:columns-2" ref={countriesRef}>
            {content.middleEastCountries.map((country, idx) => (
              <CountryItem key={idx} title={country} />
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default OurPresenceSection;
