"use client";
import { FadeIn } from "@/components/Animations";
import ScrollIcon from "@/components/ScrollIcon";
import { HomeData } from "@/types/pages";

interface HeroSectionProps {
  data: HomeData["hero"];
}

const HeroSection = ({ data }: HeroSectionProps) => {
  return (
    <section className="mx-auto h-[calc(100vh-205px)] flex flex-col justify-between py-12">
      <div className="text-center mt-[30vh] ">
        <FadeIn>
          <h1 className="font-bold tracking-tight text-shark-300 text-6xl">
            {data.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-shark-400">
            {data.subtitle}
          </p>
        </FadeIn>
      </div>
      <div className="flex justify-center items-center w-full">
        <ScrollIcon />
      </div>
    </section>
  );
};

export default HeroSection;
