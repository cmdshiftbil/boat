import { HTMLAttributes } from "react";
import TiltOnHover from "../TiltOnHover";
import classNames from "classnames";

interface CountryItemProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  activeTitle?: string;
  as?: "li";
}

const CountryItem = ({
  as = "li",
  title,
  activeTitle,
  onClick,
}: CountryItemProps) => {
  const Tag = as;
  return (
    <Tag>
      <TiltOnHover
        onClick={onClick}
        className={classNames(
          "text-lg text-shark-50 font-bold mb-2 hover:bg-shark-50 hover:text-shark-900 px-2 py-1 transition-colors rounded-sm",
          {
            "text-shark-900 bg-shark-50": activeTitle === title,
          }
        )}
        maxTiltX={20}
        maxTiltY={10}
      >
        {title}
      </TiltOnHover>
    </Tag>
  );
};

export default CountryItem;
