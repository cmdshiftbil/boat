"use client";
import gsap from "gsap";
import { forwardRef, useRef, useState } from "react";
import Text from "@/components/Text";
import HorizontalSlider from "@/components/HorizontalSlider/HorizontalSlider";
import Button from "@/components/Button";
import SectionHeader from "@/components/SectionHeader";
import { HomeData } from "@/types/pages";
import useGsapEffect from "@/hooks/useGsapEffect";

interface OurProcessSectionProps {
  data: HomeData["ourProcess"];
}

const OurProcessSection = forwardRef(
  ({ data }: OurProcessSectionProps, forwaredRef: any) => {
    const buttonRef = useRef(null);

    useGsapEffect(() => {
      gsap.fromTo(
        buttonRef.current,
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
            trigger: buttonRef?.current,
            start: "start 75%",
            end: "bottom center",
            scrub: 1,
          },
        }
      );
    }, buttonRef);

    return (
      <HorizontalSlider showScrollIcon>
        <div className="flex flex-col justify-center items-center w-screen">
          <SectionHeader
            title={data.title}
            titleColor="text-shark-50"
            suffix={false}
          />
          <div className="flex justify-center" ref={buttonRef}>
            <Button to={data.contactCtaUrl}>{data.contactCtaText}</Button>
          </div>
        </div>
        {data.process.map(({ id, title, description }, index) => {
          return (
            <div
              key={id}
              className="
            flex
            mr-12
            w-[90vw]
            lg:w-[63rem]
            h-full
            transition
            duration-150
            ease-out
            hover:ease-in
            hover:bg-shark-800
            hover:scale-[0.99]
            text-black rounded-2xl border border-solid border-zinc-700/50
            "
            >
              <div className="flex flex-col items-center justify-start p-6 border-r border-zinc-700/50 lg:p-12">
                <Text className="font-bold text-shark-300 clamp-text-8xl">
                  {index + 1}
                </Text>
              </div>
              <div>
                <div className="p-6 border-b border-zinc-700/50 lg:p-12">
                  <h2 className="font-bold text-transparent clamp-text-6xl bg-clip-text bg-gradient-to-r from-shark-50 to-shark-200">
                    {title}
                  </h2>
                </div>
                <div className="p-6 lg:p-12">
                  <Text className="clamp-text-lg text-shark-300 line-clamp-4">
                    {description}
                  </Text>
                </div>
              </div>
            </div>
          );
        })}
      </HorizontalSlider>
    );
  }
);

export default OurProcessSection;
