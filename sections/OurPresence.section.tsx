"use client";
import CountriesList from "@/components/CountriesList";
import Globe from "@/components/Globe";
import LinearGradient from "@/components/LinearGradient";
import Section from "@/components/Section";
import content from "@/content/content";

import { cn } from "@/utils/tailwind.utils";
import { useMemo, useState } from "react";

const OurPresenceSection = () => {
  const [currentLocation, setCurrentLocation] = useState();

  const markers = useMemo(() => {
    return content.operationalCountries.map(({ lat, long }) => {
      return {
        location: [lat, long],
        size: 0.04,
      };
    });
  }, []);

  const navigateToCountry = (country: any) => {
    setCurrentLocation(country);
  };

  return (
    <section
      // className="p-0 h-[calc(100vh-172px)] justify-end overflow-hidden relative"
      className=" flex h-screen flex-col justify-end relative overflow-hidden pb-32"
    >
      <div className="retlative">
        <LinearGradient
          direction="bottom"
          from="#0a0203"
          to="transparent"
          className={cn("h-1/3", "md:h-screen z-10")}
        />
        {/* <Globe
          className="absolute h-[100vw] top-0 md:-top-96 aspect-[1] z-0"
          markers={markers}
          currentLocation={currentLocation}
        /> */}
      </div>
      <div className="z-50">
        <CountriesList
          countries={content.operationalCountries}
          onSelectCountry={navigateToCountry}
        />
      </div>
      <LinearGradient className={cn("h-1/3", "md:h-screen")} />
    </section>
  );
};

export default OurPresenceSection;
