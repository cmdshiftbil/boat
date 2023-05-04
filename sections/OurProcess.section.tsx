"use client";
import { forwardRef, useRef } from "react";
import BlueprintLabel from "@/components/BlueprintLabel";
import Text from "@/components/Text";

import HorizontalSlider from "@/components/HorizontalSlider/HorizontalSlider";
import Button from "@/components/Button";
import SectionHeader from "@/components/SectionHeader";
import { FadeIn } from "@/components/Animations";
import content from "@/content/content";

const OurProcessSection = forwardRef(({ children }: any, forwaredRef: any) => {
  const ref = useRef(null);

  return (
    <HorizontalSlider>
      <div className="flex flex-col justify-center items-center w-screen">
        <SectionHeader
          title="How we work"
          titleColor="text-shark-50"
          suffix={false}
        />
        <FadeIn>
          <Button to="/contact"> Discuss your project</Button>
        </FadeIn>
      </div>
      {content.process.map(({ id, title, description }, index) => {
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
              <BlueprintLabel label="step" />
              <Text className="font-bold text-shark-300 clamp-text-8xl">
                {index + 1}
              </Text>
            </div>
            <div>
              <div className="p-6 border-b border-zinc-700/50 lg:p-12">
                <BlueprintLabel label="title" />
                <h2 className="font-bold text-transparent clamp-text-6xl bg-clip-text bg-gradient-to-r from-shark-50 to-shark-200">
                  {title}
                </h2>
              </div>
              <div className="p-6 lg:p-12">
                <BlueprintLabel label="description" />
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
});

export default OurProcessSection;
