import BlueprintLabel from "../BlueprintLabel";
import Text from "../Text";

const ServiceItem = ({ icon, title, description }: any) => {
  return (
    <div className="p-6 flex flex-col justify-center items-center md:items-start">
      {/* icon */}
      <div className="py-12 flex flex-row items-center">
        {icon}
        {/* <ElbowLineRight.HorizontalLine /> */}
      </div>
      {/* Heading */}
      <div>
        <BlueprintLabel label="Service Title" />
        <h2 className="!clamp-text-3xl text-shark-50">{title}</h2>

        {/* Description */}
        <div className="pt-9">
          <BlueprintLabel label="Service Description" />
          <Text className="!clamp-text-5xl">{description}</Text>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
