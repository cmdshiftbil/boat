import Counter from "@/components/Counter";
import { FadeInStagger } from "@/components/FadeIn";
import HoverGrid from "@/components/HoverGrid";
import Marquee from "@/components/Marquee/Marque";
import { PageIntro } from "@/components/PageIntro";
import SchemaCard from "@/components/SchemaCard/SchemaCard";
import Title from "@/components/Title";
import CarbonReportsSection from "@/sections/CarbonReports.section";
import React from "react";
import ReactPlayer from "react-player";
import VideoSection from "./_components/video.section";

const carbonStats = [
  {
    id: "632567d9-258e-4eed-8750-436dd2fb14c0",
    icon: "",
    value: 14.4,
    suffix: "Tons",
    label: "CO2 Emissions Reduced",
  },
  {
    id: "174c85a5-c123-4d91-baf6-3b9e77297093",
    icon: "",
    value: 8.6,
    suffix: "Tons",
    label: "Stainless Steel Recycled",
  },
  {
    id: "9764fccf-877c-43de-8fe7-321b30ce96f2",
    icon: "",
    value: 20,
    suffix: "Tons",
    label: "Plastic Waste Recycled",
  },
  {
    id: "5aa197a9-f4ee-47fa-bde5-eb03985988ed",
    icon: "",
    value: 5,
    suffix: "Tons",
    label: "Paper Waste Recycled",
  },
  {
    id: "5661cc17-3d5f-4734-a7e8-7b67b916e80a",
    icon: "",
    value: 50,
    suffix: "Tons",
    label: "Water Saved",
  },
  {
    id: "431b5200-da9b-4d42-acba-1fa849c8c4ef",
    icon: "",
    value: 100,
    suffix: "Trees",
    label: "Trees Planted",
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
    label: "Energy Generated",
    value: 500,
    suffix: "kWh",
  },
  {
    id: "3",
    label: "CO2 Emissions Avoided",
    value: 250,
    suffix: "tons",
  },
];

export default function SustainabilityPage() {
  return (
    <FadeInStagger className="container space-y-12">
      <PageIntro
        title="Sustainability"
        description="Sustainability refers to the ability to maintain ecological balance and meet the needs of the present without compromising the ability of future generations to meet their own needs."
      />

      <section>
        <Title as="h3" className="mb-6">
          The Process
        </Title>
        <VideoSection />
      </section>

      <section>
        <Title as="h3">Solar Energy Statistics</Title>
        <HoverGrid id="solarLayout">
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

      <section>
        <Title as="h3">Creating Carbon Reports</Title>
        <CarbonReportsSection />
      </section>

      <section>Marquee Logo</section>

      <section>
        <Title as="h3">Recycled</Title>
        <HoverGrid>
          {carbonStats.map((stat) => {
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
    </FadeInStagger>
  );
}
