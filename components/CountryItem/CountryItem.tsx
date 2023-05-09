import TiltOnHover from "../TiltOnHover";

interface CountryItemProps {
  title: string;
  as?: "li";
}

const CountryItem = ({ as = "li", title }: CountryItemProps) => {
  const Tag = as;
  return (
    <Tag>
      <TiltOnHover
        className="text-lg text-shark-50 font-bold mb-2 hover:bg-shark-50 hover:text-shark-900 px-2 py-1 transition-colors rounded-sm"
        maxTiltX={20}
        maxTiltY={10}
      >
        {title}
      </TiltOnHover>
    </Tag>
  );
};

export default CountryItem;
