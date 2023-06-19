"use client";
import classNames from "classnames";
import Heading from "@/components/Heading";
import Text from "@/components/Text";

const content = [
  {
    name: "Environmental Impact Monitoring in Retail for a Greener Future",
    description:
      "We’re committed to building a greener future and providing sustainable retail services and merchandising solutions. Our innovators are working daily to create new cutting-edge tools we can use to better track our impact on the environment – because knowing the data is the first step to improvement.",
    imageSrc: "/temp/recycle-iton-particles.png",
    imageAlt:
      "White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.",
  },
  {
    name: "Carbon Footprint Reports and Sustainable Material Options",
    description:
      "Our carbon footprint reports precisely measure each project’s emissions, as per the greenhouse gas protocol (GHG protocol), suggesting more environmentally friendly material alternatives, so your high-end retail brand can take the all-too-important step towards net-zero.",
    imageSrc: "/temp/carbon-footprint-particles.png",
    imageAlt: "Detail of zipper pull with tan leather and silver rivet.",
  },
];

const CarbonReportsSection = () => {
  return (
    <section>
      <header
        id="services-header"
        className="bg-shark-900 bg-grid-surface pt-32 pb-24 px-6 md:px-12 bg-cover border-b-2 border-shark-50/30 "
      >
        <Heading className="text-shark-50" eyebrow="Service title">
          Creating Carbon Reports
        </Heading>
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
                      : "lg:col-start-8 xl:col-start-9",
                    "mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4"
                  )}
                >
                  <Heading
                    className="text-shark-50 clamp-text-2xl flex-1"
                    fontSize="clamp-text-xl"
                  >
                    {feature.name}
                  </Heading>
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
                      ? "lg:col-start-6 xl:col-start-5"
                      : "lg:col-start-1",
                    "flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8"
                  )}
                >
                  <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg bg-gray-100">
                    <img
                      src={feature.imageSrc}
                      alt={feature.imageAlt}
                      className="object-contain object-center mix-blend-lighten"
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
