"use client";
import { Container } from "@/components/Container";
import DrawIcon from "@/components/DrawIcon";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import Title from "@/components/Title";
import StairsUpIcon from "@/components/UserInterfaceElements/StairsUpIcon";
import servicePageContent from "@/content/servicePage.content";

const { iconMaps } = servicePageContent;

export default function HompageServices({ services }: any) {
  if (!services) {
    return <div>loading...</div>;
  }

  return (
    <FadeInStagger>
      <Container className="py-24 md:py-48">
        <FadeIn>
          <Title className="text-5xl font-bold text-caramel-300" as="h2">
            Crafting the future of Luxury Retail
          </Title>
        </FadeIn>
        {/* <div className="flex flex-col md:flex-row py-12 gap-6 w-full"> */}
        <div className="grid grid-cols-1 auto-rows-max sm:grid-cols-2 lg:grid-cols-4 gap-6 py-12">
          {services.map((service: any, index: number) => {
            const Icon = iconMaps[index];
            return (
              <FadeIn className="flex-1" key={index}>
                <ServiceCard
                  icon={<DrawIcon icon={<Icon />} />}
                  className="flex-1"
                  title={service.title}
                  position={index}
                />
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </FadeInStagger>
  );
}
