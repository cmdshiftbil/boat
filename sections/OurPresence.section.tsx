"use client";
import CountryItem from "@/components/CountryItem";
import ParticleImage from "@/components/ParticleImage/ParticleImage";
import Section from "@/components/Section";
import Text from "@/components/Text";
import TweenBodyContent from "@/components/TweenBodyContent";
import content from "@/content/content";
// import { gsap } from "gsap";
// import useGsapEffect from "@/hooks/useGsapEffect";
import useMobileDevice from "@/hooks/useMobileDevice";
import { HomeData } from "@/types/pages";
import { useEffect, useMemo, useRef, useState } from "react";

interface OurPresenceSectionProps {
  data: HomeData["presence"];
}

const OurPresenceSection = ({ data }: OurPresenceSectionProps) => {
  const countriesRef = useRef<HTMLUListElement>(null);
  const [mapSrc, setMapSrc] = useState<string>();
  const [activeCountry, setActiveCountry] = useState<string>();
  // const tweenTargetRef = useRef(null);

  const isMobile = useMobileDevice();
  const initialSettings = useMemo(
    () => ({
      randomize: 55.0,
      depth: 80.0,
      size: 1.0,
    }),
    []
  );
  const settings = useMemo(
    () => ({
      randomize: 7.0,
      depth: 4.0,
      size: 0.4,
    }),
    []
  );
  const getCountryImagePath = (country: string) =>
    `/images/presence-countries/${country
      .toLowerCase()
      .replace(/ /g, "_")}.png`;

  // Disabled transition for country's particle effect
  // useGsapEffect(() => {
  //   gsap.fromTo(
  //     tweenTargetRef.current,
  //     {
  //       xPercent: -50,
  //       opacity: 0,
  //     },
  //     {
  //       duration: 1,
  //       xPercent: 0,
  //       opacity: 1,
  //       scale: 1,
  //       ease: "Expo.easeOut",
  //       stagger: 0.1,
  //       scrollTrigger: {
  //         trigger: tweenTargetRef?.current,
  //         start: "start 75%",
  //         end: "bottom center",
  //         scrub: 1,
  //       },
  //     }
  //   );
  // }, tweenTargetRef);

  useEffect(() => {
    if (!activeCountry) {
      const country = content.middleEastCountries.find((c) =>
        c.includes("Emirates")
      );
      if (country) {
        setActiveCountry(country);
      }
    } else {
      setMapSrc(getCountryImagePath(activeCountry));
    }
  }, [activeCountry, setActiveCountry]);

  return (
    <Section
      className="min-h-[calc(100vh-405px)] flex flex-col mb-[200px]"
      title="Our Operational Reach"
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
        {/* Disabled transition for country's particle effect */}
        {/* <div className="flex flex-1 w-full relative" ref={tweenTargetRef}> */}
        <div className="flex flex-1 w-full relative">
          {mapSrc && (
            <ParticleImage
              src={mapSrc}
              className="relative w-full lg:flex-1 px-4"
              cameraDistance={isMobile ? 250 : 180}
              initialSettings={initialSettings}
              settings={settings}
            />
          )}
        </div>

        <div className="flex-1">
          <ul className="columns-3 md:columns-2" ref={countriesRef}>
            {content.middleEastCountries.map((country, idx) => (
              <CountryItem
                key={idx}
                onClick={() => {
                  setActiveCountry(country);
                }}
                title={country}
                activeTitle={activeCountry}
              />
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default OurPresenceSection;
