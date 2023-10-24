import Counter from "@/components/Counter";
import { FadeInStagger } from "@/components/FadeIn";
import HoverGrid from "@/components/HoverGrid";
import { PageIntro } from "@/components/PageIntro";
import SchemaCard from "@/components/SchemaCard/SchemaCard";
import Title from "@/components/Title";
import CarbonReportsSection from "@/sections/CarbonReports.section";
import React from "react";
import ReactPlayer from "react-player";
import VideoSection from "./_components/video.section";
import { InteractiveMarquee } from "@/components/Marquee";
import Image from "next/image";
import LinearGradient from "@/components/LinearGradient";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NomoreBottlesLogo from "./_components/NomoreBottlesLogo";
import EhfaazLogo from "./_components/EhfaazLogo";
import AzraqLogo from "./_components/AzraqLogo";

const carbonStats2022 = [
  {
    id: "174c85a5-c123-4d91-baf6-3b9e77297093",
    icon: "",
    value: 8,
    suffix: "Tons",
    label: "Mild Steel",
  },
  {
    id: "9764fccf-877c-43de-8fe7-321b30ce96f2",
    icon: "",
    value: 42,
    suffix: "Tons",
    label: "Stainless Steel",
  },
  {
    id: "5aa197a9-f4ee-47fa-bde5-eb03985988ed",
    icon: "",
    value: -4,
    suffix: "Tons",
    label: "Aluminum",
  },
  {
    id: "5661cc17-3d5f-4734-a7e8-7b67b916e80a",
    icon: "",
    value: 8,
    suffix: "Tons",
    label: "Acrylic",
  },
  {
    id: "12345678-1234-5678-1234-567812345678",
    icon: "",
    value: 0,
    suffix: "Tons",
    label: "MDF",
  },
  {
    id: "9204d04a-3338-4300-be8b-c865c81528ec",
    icon: "",
    value: 100,
    suffix: "Trees",
    label: "Tree Seedlings Planted",
  },
];

const carbonStats2023 = [
  {
    id: "40f87d15-672d-4255-8915-8dad96d48672",
    icon: "",
    value: 7,
    suffix: "Tons",
    label: "Mild Steel",
  },
  {
    id: "2d92256a-a966-49cd-9acb-0d2c34a5ba1c",
    icon: "",
    value: 36,
    suffix: "Tons",
    label: "Stainless Steel",
  },
  {
    id: "24a5635a-4cfe-4ac3-88f2-d1b3077527de",
    icon: "",
    value: -2,
    suffix: "Tons",
    label: "Aluminum",
  },
  {
    id: "91491580-4705-4d1b-950a-a6cf0d255fc7",
    icon: "",
    value: 7,
    suffix: "Tons",
    label: "Acrylic",
  },
  {
    id: "394bd6d3-3977-4609-9a2f-8c55431e708f",
    icon: "",
    value: 21.6,
    suffix: "Tons",
    label: "MDF",
  },
  {
    id: "78b5d5c0-4745-40d6-952d-5fdb93a37645",
    icon: "",
    value: 100,
    suffix: "Trees",
    label: "Tree Seedlings Planted",
  },
];
const solarStats = [
  {
    id: "1",
    label: "Solar Panels Installed",
    value: 100,
    suffix: "panels",
  },
  {
    id: "2",
    label: "Solar System Size",
    value: 600,
    suffix: "kWp",
  },
  {
    id: "3",
    label: "Annual Generation",
    value: 996000,
    suffix: "KWp",
  },
  {
    id: "4",
    label: "Project Lifetime",
    value: 25,
    suffix: "Years",
  },
];

export default function SustainabilityPage() {
  return (
    <FadeInStagger className="space-y-32 relative">
      <div className="container">
        <PageIntro
          title="Sustainability"
          subTitle="Crafting a Sustainable Future"
          description="At Alpha Nero, we challenge the perception that manufacturing and sustainability are
          incompatible. We have been actively working behind the scenes to seamlessly integrate
          sustainability into our processes via our revolutionary carbon footprint calculating software,
          innovative partnerships with Champions of Sustainability in the Industry, while obtaining
          certifications from industry standards such as LEED and EcoVadis."
        />
      </div>

      <section className="container">
        <Title as="h3" className="mb-6">
          Embracing cutting-edge technology, we have incorporated solar panels
          into our facility, harnessing the power of the sun to fuel our
          operations.
        </Title>
        <VideoSection />
      </section>

      <section className="container">
        <Title as="h3">Solar Panel Statistics</Title>
        <HoverGrid
          id="solarLayout"
          className="grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-2"
        >
          {solarStats.map((stat) => {
            return (
              <div
                className="flex flex-row p-6 justify-between items-center gap-2"
                key={stat.id}
              >
                <div className="flex flex-col">
                  <Counter
                    value={stat.value}
                    suffix={` ${stat.suffix}`}
                    className="text-4xl text-caramel-500 font-bold"
                  />
                  <span className="text-xl tracking-wide text-caramel-100">
                    {stat.label}
                  </span>
                </div>
                {/* <Image
                  src={stat.image}
                  width={48}
                  height={48}
                  alt={stat.label}
                /> */}
              </div>
            );
          })}
        </HoverGrid>
      </section>

      <section className="container">
        <Title as="h3">
          What if we could offer you a way to quantify &amp; locate where your
          carbon emissions are coming from?
        </Title>
        <CarbonReportsSection />
      </section>

      <section className="relative space-y-6">
        <div className="container">
          <Title as="h3" className="mb-6">
            Our Allies in Green Manufacturing
          </Title>
          <p className="text-3xl text-caramel-100 font-normal">
            We have collaborates with industry trailblazers in sustainability to
            promote sustainable solutions, amplify our mission to make a
            difference in sustainable manufacturing and establish standardized
            emissions KPIs for accountability.
          </p>
        </div>
        <div className="relative">
          {/* <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-r from-graphite-950 via-transparent to-graphite-950 z-10 pointer-events-none" /> */}
          {/* <div className="absolute w-full h-full top-0 left-0 z-10 pointer-events-none [linear-gradient(90deg, rgba(47, 47, 47, 1) 0%, rgba(47, 47, 47, 0) 50%, rgba(47, 47, 47, 1) 100%)]" /> */}

          <InteractiveMarquee>
            <div className="px-6 flex items-center justify-center">
              <NomoreBottlesLogo className="w-[100px]" />
            </div>
            <div className="px-6 flex items-center justify-center">
              <EhfaazLogo className="w-[100px]" />
            </div>
            <div className="px-6 flex items-center justify-center">
              <AzraqLogo className="w-[100px]" />
            </div>
            <div className="px-6 flex items-center justify-center">
              <NomoreBottlesLogo className="w-[100px]" />
            </div>
            <div className="px-6 flex items-center justify-center">
              <EhfaazLogo className="w-[100px]" />
            </div>
            <div className="px-6 flex items-center justify-center">
              <AzraqLogo className="w-[100px]" />
            </div>
            <div className="px-6 flex items-center justify-center">
              <NomoreBottlesLogo className="w-[100px]" />
            </div>
            <div className="px-6 flex items-center justify-center">
              <EhfaazLogo className="w-[100px]" />
            </div>
            <div className="px-6 flex items-center justify-center">
              <AzraqLogo className="w-[100px]" />
            </div>
          </InteractiveMarquee>
        </div>
      </section>

      <section className="container">
        <Tabs defaultValue="recycled-2022">
          <div className="flex justify-between items-center sticky top-0">
            <Title as="h3">Recycled</Title>
            <TabsList>
              <TabsTrigger value="recycled-2022">2022</TabsTrigger>
              <TabsTrigger value="recycled-2023">2023</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="recycled-2022" className="w-full">
            <HoverGrid id="recycled-2022-layout">
              {carbonStats2022.map((stat) => {
                return (
                  <div
                    className="flex flex-row p-6 justify-between items-center gap-2"
                    key={stat.id}
                  >
                    <div className="flex flex-col">
                      <Counter
                        value={stat.value}
                        suffix={` ${stat.suffix}`}
                        className="text-4xl text-caramel-500 font-bold"
                      />
                      <span className="text-xl tracking-wide text-caramel-100">
                        {stat.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </HoverGrid>
          </TabsContent>
          <TabsContent value="recycled-2023">
            <HoverGrid id="recycled-2023-layout">
              {carbonStats2023.map((stat) => {
                return (
                  <div
                    className="flex flex-row p-6 justify-between items-center gap-2"
                    key={stat.id}
                  >
                    <div className="flex flex-col">
                      <Counter
                        value={stat.value}
                        suffix={` ${stat.suffix}`}
                        className="text-4xl text-caramel-500 font-bold"
                      />
                      <span className="text-xl tracking-wide text-caramel-100">
                        {stat.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </HoverGrid>
          </TabsContent>
        </Tabs>
      </section>
    </FadeInStagger>
  );
}
