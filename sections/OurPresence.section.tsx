"use client";
import Section from "@/components/Section";
import Text from "@/components/Text";
import content from "@/content/content";
import { HomeData } from "@/types/pages";

interface OurPresenceSectionProps {
  data: HomeData["presence"];
}

const OurPresenceSection = ({ data }: OurPresenceSectionProps) => {
  return (
    <Section title="Our Presence">
      <Text className="max-w-4xl text mb-12">{data.title}</Text>

      <div className="flex flex-col lg:flex-row justify-around items-center">
        <div className="mb-12">
          <img src={data.imageUrl} alt={data.imageAlt} />
        </div>
        <div>
          <ul className="columns-3 md:columns-2">
            {content.middleEastCountries.map((country, idx) => {
              return (
                <li
                  key={idx}
                  className="text-lg text-shark-50 font-bold mb-2 hover:bg-shark-50 hover:text-shark-900 px-2 py-1 transition-colors rounded-sm"
                >
                  {country}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default OurPresenceSection;
