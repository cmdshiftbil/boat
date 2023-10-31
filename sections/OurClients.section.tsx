"use client";
import { HomeData } from "@/types/pages";
// import Button from "@/components/Button";
import ParallaxCarousel from "@/components/ParallaxCarousel";
import SVG from "react-inlinesvg";

import Section from "@/components/Section";
import Text from "@/components/Text";
import { InteractiveMarquee } from "@/components/Marquee";
import Title from "@/components/Title copy/Title";
import { PageIntro } from "@/components/PageIntro";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import SvgInline from "@/components/SvgInline";
import { cn } from "@/lib/utils";

interface OurClientsSectionProps {
  data: HomeData["ourClients"];
}

const OurClientsSection = ({ data }: OurClientsSectionProps) => {
  const logos = data.clients.map((client: any) => {
    return {
      id: client._id ?? client.id,
      src: client.logo.url,
      alt: client.logo.alt,
    };
  });

  return (
    <section className="py-48">
      <div className="px-4 md:px-6">
        <PageIntro as="h2" title={data.title} description={data.subtitle} />
      </div>

      <div className="py-24">
        <InteractiveMarquee>
          {logos.map((logo) => {
            console.log(logo.src);

            return (
              <div
                key={logo.id}
                draggable={false}
                className="flex items-center justify-center h-[100px] w-[450px] p-6"
              >
                <SVG
                  src={logo.src}
                  width="100%"
                  height="auto"
                  title="React"
                  className="fill-caramel-500"
                  preProcessor={(code) => code.replace(/fill=".*?"/g, "")}
                />
              </div>
            );
          })}
        </InteractiveMarquee>
      </div>

      <div className="flex justify-center pt-24 px-12">
        <Link
          href={data.ctaUrl}
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          {data.ctaText}
        </Link>
      </div>
    </section>
  );
};

export default OurClientsSection;
