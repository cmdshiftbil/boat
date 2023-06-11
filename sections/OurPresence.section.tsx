"use client";
import CountryItem from "@/components/CountryItem";
import ParticleImage from "@/components/ParticleImage/ParticleImage";
import Section from "@/components/Section";
import Text from "@/components/Text";
import TweenBodyContent from "@/components/TweenBodyContent";
import content from "@/content/content";
import useGsapEffect from "@/hooks/useGsapEffect";
import { HomeData } from "@/types/pages";
import { gsap } from "gsap";
import { useMemo, useRef, useState } from "react";

interface OurPresenceSectionProps {
  data: HomeData["presence"];
}

// TODO: Remove when we have actual images from Payload
const randomNumberBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const OurPresenceSection = ({ data }: OurPresenceSectionProps) => {
  const countriesRef = useRef<HTMLUListElement>(null);
  const images = [
    "/images/presence.png",
    "/images/presence2.png",
    "/images/presence3.png",
    "/images/presence4.png",
  ];
  const [mapSrc, setMapSrc] = useState(images[0]);
  const tweenTargetRef = useRef(null);
  const initialSettings = useMemo(
    () => ({
      randomize: 1.0,
      depth: 80.0,
      size: 1.0,
    }),
    []
  );
  const settings = useMemo(
    () => ({
      randomize: 3.0,
      depth: 4.0,
      size: 3,
    }),
    []
  );
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
      className="min-h-[calc(100vh-405px)] flex flex-col mb-[200px]"
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
          <ParticleImage
            src={mapSrc}
            className="relative w-full lg:flex-1 px-4"
            cameraDistance={720}
            initialSettings={initialSettings}
            settings={settings}
          />
        </div>

        <div className="flex-1">
          <ul className="columns-3 md:columns-2" ref={countriesRef}>
            {content.middleEastCountries.map((country, idx) => (
              <CountryItem
                key={idx}
                onClick={() => {
                  // TODO: Set actual images when we have in Payload
                  const rn = randomNumberBetween(0, 3);
                  const image = images[rn];
                  setMapSrc(image);
                }}
                title={country}
              />
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default OurPresenceSection;
