"use client";
import classNames from "classnames";
import Heading from "@/components/Heading";
import Text from "@/components/Text";
import useMobileDevice from "@/hooks/useMobileDevice";
import { useMemo } from "react";
import ParticleImage from "@/components/ParticleImage/ParticleImage";

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
    }),
    []
  );
  return (
    <section>
      <header
        id="services-header"
        className="bg-shark-900 bg-grid-surface pt-32 pb-24 px-6 md:px-12 bg-cover border-b-2 border-shark-50/30 "
      >
        {/* <Heading className="text-shark-50" eyebrow="Service title">
          <>
            <span>Creating Carbon</span>
            <br className="md:hidden" />
            <span className="hidden md:inline-block">&nbsp;</span>
            <span>Reports</span>
          </>
        </Heading> */}
        {/* Desktop Heading */}
        <Heading className="text-shark-50 opacity-0 md:opacity-100 h-1 w-1 md:w-auto md:h-auto overflow-hidden">
          Creating Carbon Reports
        </Heading>
        {/* Mobile heading */}
        <div className="text-shark-50 clamp-text-8xl flex-1 md:hidden">
          Creating Carbon Reports
        </div>
      </header>

      <div className="">
        <div className="mx-auto  py-24 px-4 sm:px-6 sm:py-32  lg:px-8">
          <div className="mt-16 space-y-16">
            {content.map((feature, featureIdx) => (
              <div
                key={feature.name}
                className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
              >
                <div
                  className={classNames(
                    featureIdx % 2 === 0
                      ? "lg:col-start-1"
                      : "lg:col-start-8 xl:col-start-7",
                    "mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-6"
                  )}
                >
                  {/* Desktop heading */}
                  <Heading
                    className="text-shark-50 clamp-text-2xl flex-1 hidden md:block"
                    fontSize="clamp-text-xl"
                  >
                    {feature.name}
                  </Heading>
                  {/* Mobile heading */}
                  <div className="text-shark-50 clamp-text-xl flex-1 md:hidden">
                    {feature.name}
                  </div>
                  <Text
                    className="mt-2 text-zinc-400"
                    fontSize="clamp-text-2xl"
                  >
                    {feature.description}
                  </Text>
                </div>
                <div
                  className={classNames(
                    featureIdx % 2 === 0
                      ? "lg:col-start-6 xl:col-start-0"
                      : "lg:col-start-1",
                    "flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-6"
                  )}
                >
                  <div className="overflow-hidden rounded-lg bg-gray-100">
                    <ParticleImage
                      src={feature.imageSrc}
                      className="relative w-full lg:flex-1"
                      cameraDistance={isMobile ? 250 : 180}
                      initialSettings={initialSettings}
                      settings={settings}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarbonReportsSection;
