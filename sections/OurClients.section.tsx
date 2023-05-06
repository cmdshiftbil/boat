"use client";
import Button from "@/components/Button";
import ParallaxCarousel from "@/components/ParallaxCarousel";

import Section from "@/components/Section";
import Text from "@/components/Text";

const OurClientsSection = ({ data }: any) => {
  const logos = data.clients.map((client: any) => {
    return {
      id: client._id,
      src: client.logo.url,
      alt: client.logo.alt,
    };
  });

  return (
    <Section
      // className="px-0 py-24"
      title={data.title}
      colorScheme="pampas"
      articleClassName="px-0 py-24"
    >
      <div className="p-12">
        <Text className="text-shark-900 max-w-5xl">{data.subtitle}</Text>
      </div>

      <ParallaxCarousel
        baseVelocity={0.5}
        shadeColor="pampas-100"
        className="pb-12"
        images={logos}
      />

      <ParallaxCarousel
        baseVelocity={-0.5}
        shadeColor="pampas-100"
        images={logos}
      />

      <div className="flex justify-center pt-24 px-12 invert">
        <Button to={data.ctaUrl}>{data.ctaText}</Button>
      </div>
    </Section>
  );
};

export default OurClientsSection;
