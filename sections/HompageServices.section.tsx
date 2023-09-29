"use client";
import { Container } from "@/components/Container";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import Title from "@/components/Title";

export default function HompageServices({ services }: any) {
  if (!services) {
    return <div>loading...</div>;
  }

  return (
    <FadeInStagger>
      <Container>
        <FadeIn>
          <Title className="text-6xl font-bold text-shark-300">
            What we do best
          </Title>
        </FadeIn>
        <div className="flex flex-col md:flex-row py-12 gap-6 w-full">
          {services[0].serviceContent.map((service: any, index: number) => {
            return (
              <FadeIn className="flex-1" key={index}>
                <ServiceCard
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
