"use client";
import classNames from "classnames";
import Heading from "@/components/Heading";
import Text from "@/components/Text";
import useMobileDevice from "@/hooks/useMobileDevice";
import { useMemo } from "react";
import ParticleImage from "@/components/ParticleImage/ParticleImage";
import MainHeadlineSection from "./MainHeadline.section";
import Title from "@/components/Title";
import { cn } from "@/lib/utils";

const content = [
  {
    name: "Environmental Impact Monitoring in Retail for a Greener Future",
    description:
      "We’re committed to building a greener future and providing sustainable retail services and merchandising solutions. Our innovators are working daily to create new cutting-edge tools we can use to better track our impact on the environment – because knowing the data is the first step to improvement.",
    imageSrc: "/images/services/recycle.png",
    imageAlt:
      "White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.",
  },
  {
    name: "Carbon Footprint Reports and Sustainable Material Options",
    description:
      "Our carbon footprint reports precisely measure each project’s emissions, as per the greenhouse gas protocol (GHG protocol), suggesting more environmentally friendly material alternatives, so your high-end retail brand can take the all-too-important step towards net-zero.",
    imageSrc: "/images/services/co2.png",
    imageAlt: "Detail of zipper pull with tan leather and silver rivet.",
  },
];

const CarbonReportsSection = () => {
  const isMobile = useMobileDevice();
  const initialSettings = useMemo(
    () => ({
      randomize: 55.0,
      depth: 40.0,
      size: 1.0,
    }),
    []
  );
  const settings = useMemo(
    () => ({
      randomize: 7.0,
      depth: 6.0,
      size: 0.6,
      color: "#68FFA2",
    }),
    []
  );
  return (
    <article>
      {content.map((feature, featureIdx) => (
        <div
          key={feature.name}
          className={cn("grid grid-cols-1 sm:grid-cols-2 items-center py-6")}
        >
          <header className={classNames()}>
            <Title as="h3" className="text-5xl text-[#68FFA2]">
              {feature.name}
            </Title>
            <p className="mt-2 pt-9 text-caramel-100 text-2xl">
              {feature.description}
            </p>
          </header>
          <div
            className={cn(
              "order-first",
              featureIdx % 2 === 0 ? "sm:order-last" : "sm:order-first"
            )}
          >
            <ParticleImage
              src={feature.imageSrc}
              className="relative w-full lg:flex-1"
              cameraDistance={isMobile ? 250 : 180}
              initialSettings={initialSettings}
              settings={settings}
            />
          </div>
        </div>
      ))}
    </article>
  );
};

export default CarbonReportsSection;
