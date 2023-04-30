import Heading from "@/components/Heading";
import Section from "@/components/Section";
import Text from "@/components/Text";

const content = [
  {
    id: "1",
    title: "Measure",
    description:
      "We measure your project’s carbon emissions from start to finish",
    caption:
      "Including during production, materials used and their delivery to the final installation.",
  },
  {
    id: "2",
    title: "Analyse",
    description:
      "We summarise these detailed calculations into a carbon report in line with Greenhouse Gas (GHG) Protocol Corporate Standards. ",
    caption:
      "The carbon emissions reports give you insight to help you reduce the carbon footprint and environmental impact.",
  },
  {
    id: "3",
    title: "Offset",
    description:
      "We verify and certify your carbon removal, helping you offset 100% of your carbon emissions by working with a respected carbon removal company.",
  },
];

const HowItWorksSection = () => {
  return (
    <Section title="How it Works" className="p-6 sm:p-12">
      <div className="grid grid-rows-3 gap-6 sm:p-6">
        {content.map((item) => {
          return (
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <div className="flex justify-center items-center w-full sm:w-[12rem] h-[12rem] border border-shark-50">
                <div className="flex-1 clamp-text-4xl text-shark-50 flex justify-center items-center bg-grid-perspective bg-cover h-full w-full">
                  {item.id}
                </div>
              </div>
              <div className="flex-1">
                <Heading className="text-shark-50" fontSize="clamp-text-xl">
                  {item.title}
                </Heading>
                <Text fontSize="clamp-text-lg">{item.description}</Text>
                <Text className="mt-4" fontSize="clamp-text-xs">
                  {item.caption}
                </Text>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default HowItWorksSection;
