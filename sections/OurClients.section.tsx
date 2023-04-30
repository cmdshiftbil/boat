import Button from "@/components/Button";

import ParallaxCarousel from "@/components/ParallaxCarousel";
import Carousel from "@/components/ParallaxCarousel";
import Section from "@/components/Section";
import Text from "@/components/Text";

const logos = [
  {
    id: "armani-1",
    src: "temp/armani-logo.svg",
  },
  {
    id: "Bobbi-Brown-2",
    src: "temp/bobbi-brown-logo.svg",
  },
  {
    id: "Burberry-3",
    src: "temp/burberry-logo.svg",
  },
  {
    id: "Chopard-4",
    src: "temp/chopard-logo.svg",
  },
  {
    id: "Dolce-Gabbana-5",
    src: "temp/dolce-gabbana-logo.svg",
  },
  {
    id: "guerlain-7",
    src: "temp/guerlain-paris-logo.svg",
  },
  {
    id: "issey-miyake-10",
    src: "temp/issey-miyake-logo.svg",
  },
  {
    id: "la-mer-13",
    src: "temp/la-mer-logo.svg",
  },
  {
    id: "Lancome-14",
    src: "temp/lancome-logo.svg",
  },
];

const OurClientsSection = () => {
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
      />
      <ParallaxCarousel baseVelocity={-0.5} shadeColor="pampas-100" />
      <div className="flex justify-center pt-24 px-12 invert">
        <Button to="/portfolio">Discover our work</Button>
      </div>
    </Section>
  );
};

export default OurClientsSection;
