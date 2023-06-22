import BlueprintLabel from "../BlueprintLabel";
import Text from "../Text";

const ServiceItem = ({ icon, title, description }: any) => {
  return (
    <div className="p-6 flex flex-col justify-start items-center md:items-start">
      {/* icon */}
      <div className="py-12 flex flex-row items-center">{icon}</div>
      {/* Heading */}
      <div>
        <h2 className="!clamp-text-5xl text-shark-50 md:min-h-[105px]">
          {title}
        </h2>

        {/* Description */}
        <div className="pt-9">
          <Text className="!clamp-text-4xl">{description}</Text>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
