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
    <section className="py-48 bg-caramel-700 px-4 md:px-6">
      <PageIntro as="h2" title={data.title} description={data.subtitle} />

      <InteractiveMarquee>
        {logos.map((logo) => {
          console.log(logo.src);

          const mask = `url(${logo.src})`;

          return (
            <div
              key={logo.id}
              draggable={false}
              className="flex items-center justify-center h-[100px] w-[450px] p-6"
            >
              {/* <SvgInline url={logo.src} className="fill-caramel-950" /> */}
              <SVG src={logo.src} width={128} height="auto" title="React" />
              {/* <div
                // height={200}
                // width={350}
                // src={logo.src}
                // alt={logo.alt}
                className="h-full w-full bg-caramel-900 object-contain"
                draggable={false}
                style={{
                  WebkitMaskImage: mask,
                  WebkitMaskSize: "cover",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  height: 200,
                  width: 300,
                }}
              /> */}
            </div>
          );
        })}
      </InteractiveMarquee>

      {/* <ParallaxCarousel
        baseVelocity={0.5}
        shadeColor="pampas-100"
        className="pb-12"
        images={logos}
      />

      <ParallaxCarousel
        baseVelocity={-0.5}
        shadeColor="pampas-100"
        images={logos}
      /> */}

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
