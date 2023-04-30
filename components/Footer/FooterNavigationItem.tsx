import { twMerge } from "tailwind-merge";
import BlueprintLabel from "../BlueprintLabel";
import FooterLinkItem from "./FooterLinkItem";

const FooterNavigationItem = ({ title, links, className }: any) => {
  return (
    <div className={className}>
      <BlueprintLabel label={title} />
      <ul role="list" className="mt-4 space-y-4">
        {links.map(({ title, url, id }: any) => (
          <FooterLinkItem key={id} to={url} title={title} />
        ))}
      </ul>
    </div>
  );
};

export default FooterNavigationItem;
