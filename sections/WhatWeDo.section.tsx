"use client";
import Button from "@/components/Button";
import Section from "@/components/Section";
import Text from "@/components/Text";
import useGsapEffect from "@/hooks/useGsapEffect";
import { HomeData } from "@/types/pages";
import { getLocalIcon } from "@/utils/ui.utils";
import { gsap } from "gsap";
import { useRef } from "react";

interface WhatWeDoSectionProps {
  data: HomeData["whatWeDo"];
}

const WhatWeDoSection = ({ data }: WhatWeDoSectionProps) => {
  const ref = useRef<any>();

  useGsapEffect((self: any) => {
    const items = self.selector(".service-item");

    gsap.fromTo(
      items,
      {
        opacity: 0,
        y: 100,
      },
      {
        duration: 1,
        opacity: 1,
        y: 0,
        stagger: 0.3,
        ease: "Expo.easeOut",
        scrollTrigger: {
          trigger: ref.current,
          start: "start 75%",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, ref);

  console.log(data);

  return (
    <Section
      ref={ref}
      title={data.title}
      colorScheme="caramel-dark"
      titlePlacement="left"
      articleClassName="p-6 sm:p-12"
    >
      <ul className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8 items-stretch h-full">
        {data.services.map((service: any) => {
          return (
            <li
              key={service.id}
              className="service-item overflow-hidden rounded-lg items-stretch"
            >
              <div className="flex gap-x-4 bg-pampas-700 p-6 sm:p-12 h-full flex-col">
                <div className="flex-grow">
                  <h3 className="clamp-text-2xl font-bold tracking-tight text-shark-900 mb-6">
                    {service.title}
                  </h3>

                  <Text className="text-shark-900" fontSize="clamp-text-base">
                    {service.description}
                  </Text>
                </div>
                <Button className="bg-transparent sticky invert" to="/services">
                  Read more ...
                </Button>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default WhatWeDoSection;
