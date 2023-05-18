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
import { AnimateInOut } from "@/components/Animations";

const { title, description, services } = servicePageContent;

export default async function Services() {
  const iconColor = useColor("fill-pampas-300");

  return (
    <Page>
      <AnimateInOut
        durationIn={0.6}
        durationOut={0.2}
        // Initial
        set={{
          transform: "translate(" + 0 + "px, " + 200 + "px)",
          opacity: 0,
          duration: 0.25,
          ease: "power4.out",
        }}
        // Transition In (to)
        to={{
          opacity: 1,
          x: 0,
          y: 0,
          ease: "power4.inOut",
        }}
        // TODO: Outro is buggy
        // Transition Out (from)
        // from={{
        //   transform: "translate(" + 0 + "px, " + 200 + "px)",
        //   opacity: 0,
        //   duration: 0.25,
        //   ease: "power4.out",
        // }}
        skipOutro={true}
      >
        <header className="px-6 sm:px-12 lg:pl-96">
          <Heading className="mb-6 text-shark-50 sm:mb-12">{title}</Heading>
          <div className="grid gap-12 pb-5">
            <Text className="flex-1 max-w-7xl clamp-text-7xl">
              {description}
            </Text>
            <div className="">
              <Button to="/contact">Discuss your design with us</Button>
            </div>
          </div>
        </header>
        <ServicesSections />
        <CarbonReportsSection />
        <HowItWorksSection />
      </AnimateInOut>
    </Page>
  );
}
