"use client";
import gsap from "gsap";
import { forwardRef, useRef, useState } from "react";
import Text from "@/components/Text";
import HorizontalSlider from "@/components/HorizontalSlider/HorizontalSlider";
// import Button from "@/components/Button";
import SectionHeader from "@/components/SectionHeader";
import { HomeData } from "@/types/pages";
import useGsapEffect from "@/hooks/useGsapEffect";
import classNames from "classnames";
import clsx from "clsx";
import { MagicCard, MagicContainer } from "@/components/MagicCard/MagicCard";
import { cn } from "@/utils/tailwind.utils";
import ShimmerButton from "@/components/ShimmerButton";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import SchemaCard from "@/components/SchemaCard/SchemaCard";
import HorizontalScroll from "@/components/HorizontalScroll";

interface OurProcessSectionProps {
  data: HomeData["ourProcess"];
}

const OurProcessSection = forwardRef(
  ({ data }: OurProcessSectionProps, forwaredRef: any) => {
    return (
      <FadeInStagger>
        <HorizontalScroll>
          <div
            className={cn(
              "flex flex-col justify-center items-center w-screen gap-4"
            )}
          >
            <FadeIn>
              <Badge
                variant="outline"
                className="border-caramel-500 text-caramel-400 bg-caramel-100/20"
              >
                Our Process
              </Badge>
            </FadeIn>
            <div className="flex gap-6 flex-col">
              <FadeIn>
                <h3 className="text-5xl font-medium text-caramel-100 md:text-8xl">
                  {data.title}
                </h3>
              </FadeIn>
              <FadeIn>
                <div className="flex justify-center">
                  <Link
                    className={cn(
                      buttonVariants({ variant: "outline", size: "lg" })
                    )}
                    href={data.contactCtaUrl}
                  >
                    {data.contactCtaText}
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
          {data.process.map((card: any, index: number) => {
            const isFirst = index === 0;
            const isLast = index === data.process.length - 1;

            return (
              <FadeIn
                key={index}
                className={cn(
                  "flex-1 p-4 w-screen",
                  // Desktop
                  "sm:w-[500px] md:p-0"
                )}
              >
                <SchemaCard
                  maxWidth={false}
                  grid
                  isFirst={isFirst}
                  isLast={isLast}
                >
                  <div className="flex flex-col gap-6 flex-1 items-start justify-center">
                    <div className="flex gap-2 flex-col">
                      <div className="font-medium text-caramel-100 text-8xl flex">
                        {index + 1}{" "}
                        <span className="text-caramel-500 font-bold">/</span>
                      </div>
                      <h2 className=" font-normal text-transparent text-5xl bg-clip-text bg-gradient-to-r from-caramel-100 to-caramel-200">
                        <span>{card.title}</span>
                      </h2>
                    </div>
                    <p className="text-caramel-100/50">{card.description}</p>
                  </div>
                </SchemaCard>
              </FadeIn>
            );
          })}
        </HorizontalScroll>
      </FadeInStagger>
    );
    return (
      <FadeInStagger>
        <HorizontalSlider>
          <div
            className={cn(
              "flex flex-col justify-center items-center w-screen gap-4"
            )}
          >
            <FadeIn>
              <Badge
                variant="outline"
                className="border-caramel-500 text-caramel-400 bg-caramel-100/20"
              >
                Our Process
              </Badge>
            </FadeIn>
            <div className="flex gap-6 flex-col">
              <FadeIn>
                <h3 className="text-5xl font-medium text-caramel-100 md:text-8xl">
                  {data.title}
                </h3>
              </FadeIn>
              <FadeIn>
                <div className="flex justify-center">
                  <Link
                    className={cn(
                      buttonVariants({ variant: "outline", size: "lg" })
                    )}
                    href={data.contactCtaUrl}
                  >
                    {data.contactCtaText}
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>

          <div className="flex flex-row -space-x-[0.2]">
            {data.process.map((card: any, index: number) => {
              const isFirst = index === 0;
              const isLast = index === data.process.length - 1;

              return (
                <FadeIn
                  key={index}
                  className={cn(
                    "flex-1 p-4 w-screen",
                    // Desktop
                    "sm:w-[500px] md:p-0"
                  )}
                >
                  <SchemaCard
                    maxWidth={false}
                    grid
                    isFirst={isFirst}
                    isLast={isLast}
                  >
                    <div className="flex flex-col gap-6 flex-1 items-start justify-center">
                      <div className="flex gap-2 flex-col">
                        <div className="font-medium text-caramel-100 text-8xl flex">
                          {index + 1}{" "}
                          <span className="text-caramel-500 font-bold">/</span>
                        </div>
                        <h2 className=" font-normal text-transparent text-5xl bg-clip-text bg-gradient-to-r from-caramel-100 to-caramel-200">
                          <span>{card.title}</span>
                        </h2>
                      </div>
                      <p className="text-caramel-100/50">{card.description}</p>
                    </div>
                  </SchemaCard>
                </FadeIn>
              );
            })}
          </div>
        </HorizontalSlider>
      </FadeInStagger>
    );
  }
);

export default OurProcessSection;
