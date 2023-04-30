import Section from "@/components/Section";
import Text from "@/components/Text";
import content from "@/content/content";

const OurPresenceSection = () => {
  return (
    <Section title="Our Presence">
      <Text className="max-w-4xl text mb-12">
        Operating in Dubai, across the Middle East and North Africa Region
      </Text>

      <div className="flex flex-col lg:flex-row justify-around items-center">
        <div className="mb-12">
          <img
            src="https://via.placeholder.com/550x550"
            alt="Temporary country image"
          />
        </div>
        <div>
          <ul className="columns-3 md:columns-2">
            {content.middleEastCountries.map((country) => {
              return (
                <li className="text-lg text-shark-50 font-bold mb-2 hover:bg-shark-50 hover:text-shark-900 px-2 py-1 transition-colors rounded-sm">
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
