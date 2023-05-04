"use client";
import Button from "@/components/Button";

import ParallaxCarousel from "@/components/ParallaxCarousel";
import Carousel from "@/components/ParallaxCarousel";
import Section from "@/components/Section";
import Text from "@/components/Text";
import getPayloadClient from "@/payload/payloadClient";

const OurClientsSection = ({ clients }: any) => {
  console.log("clients", clients);

  const logos = clients.map((client: any) => {
    return {
      id: client._id,
      src: client.logo.url,
      alt: client.logo.alt,
    };
  });

  return (
    <Section
      // className="px-0 py-24"
      title="Industries we serve"
      colorScheme="pampas"
      articleClassName="px-0 py-24"
    >
      <div className="p-12">
        <Text className="text-shark-900 max-w-5xl">
          We serve predominantly prestigious cosmetics, jewelry, fashion &
          accessory brands.
        </Text>
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
        <Button to="/portfolio">Discover our work</Button>
      </div>
    </Section>
  );
};

export default OurClientsSection;
