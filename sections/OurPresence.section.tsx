"use client";
import CountriesList from "@/components/CountriesList";
import Globe from "@/components/Globe";
import LinearGradient from "@/components/LinearGradient";
import SchemaCard from "@/components/SchemaCard/SchemaCard";
import Section from "@/components/Section";
import Title from "@/components/Title";
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
    <section className="h-full py-24 md:py-48 flex justify-center flex-col p-4 sm:p-6 md:p-12">
      <div className="py-6 sm:py-8 space-y-4">
        <Title as="h2">Our Presence</Title>
        <p className="text-caramel-300 text-xl">
          We have a strong presence in the following countries, and we are
          continuously expanding our reach.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-full">
        <div className="w-full">
          <SchemaCard maxWidth={false} className="h-full">
            <Globe />
          </SchemaCard>
        </div>
        <div className="w-full">
          <CountriesList countries={content.operationalCountries} />
        </div>
      </div>
    </section>
  );
};

export default OurPresenceSection;
