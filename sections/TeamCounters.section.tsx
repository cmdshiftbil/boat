import NumberCounter from "@/components/NumberCounter";
import Section from "@/components/Section";
import content from "@/content/content";

const TeamCountersSection = () => {
  return (
    <Section
      className="bg-gray-100"
      articleClassName="flex flex-row flex-wrap justify-around"
    >
      {content.teamCounters.map(
        ({ id, label, number, numberPrefix, numberSuffix }: any) => (
          <NumberCounter
            key={id}
            label={label}
            number={number}
            numberPrefix={numberPrefix}
            numberSuffix={numberSuffix}
          />
        )
      )}
    </Section>
  );
};

export default TeamCountersSection;
