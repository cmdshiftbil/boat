import classNames from "classnames";
import BlueprintLabel from "@/components/BlueprintLabel";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Heading from "@/components/Heading";
import Page from "@/components/Page";
import Text from "@/components/Text";
import ElbowLineRight from "@/components/UserInterfaceElements/ElbowLineRight";
import PerspectiveDivider from "@/components/UserInterfaceElements/PerspectiveDivider";
import servicePageContent from "@/content/servicePage.content";
import useColor from "@/hooks/useColor";
import CarbonReportsSection from "@/sections/CarbonReports.section";
import HowItWorksSection from "@/sections/HowItWorks.section";
import ServicesSections from "@/sections/Services.sections";

const { title, description, services } = servicePageContent;

export default function Services() {
  const iconColor = useColor("fill-pampas-300");

  return (
    <Page>
      <header className="px-6 sm:px-12 lg:pl-96">
        <Heading className="mb-6 text-shark-50 sm:mb-12">{title}</Heading>
        <div className="grid gap-12 pb-5">
          <Text className="flex-1 max-w-7xl clamp-text-7xl">{description}</Text>
          <div className="">
            <Button to="/contact">Discuss your design with us</Button>
          </div>
        </div>
      </header>

      <ServicesSections />

      <CarbonReportsSection />

      <HowItWorksSection />
    </Page>
  );
}
