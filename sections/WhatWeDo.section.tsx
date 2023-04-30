import Section from "@/components/Section";
import StairsUpIcon from "@/components/UserInterfaceElements/StairsUpIcon";

const features = [
  {
    name: "Retail build services",
    description:
      "Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.",
    href: "#",
    icon: StairsUpIcon,
  },
  {
    name: "Production services",
    description:
      "Vero eum voluptatem aliquid nostrum voluptatem. Vitae esse natus. Earum nihil deserunt eos quasi cupiditate. A inventore et molestiae natus.",
    href: "#",
    icon: () => <div>icon</div>,
  },
  {
    name: "Carbon Reports",
    description:
      "Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.",
    href: "#",
    icon: () => <div>icon</div>,
  },
];

const WhatWeDoSection = () => {
  return (
    <Section title="What we do" colorScheme="pampas-dark" titlePlacement="left">
      <div className="py-6">
        <div className="mx-auto px-6 lg:px-8">
          {/* <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-shark-50 sm:text-4xl">
              Stay on top of customer support
            </h2>
            <p className="mt-6 text-lg leading-8 text-shark-50">
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
              magnam voluptatum cupiditate veritatis in accusamus quisquam.
            </p>
          </div> */}
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="flex flex-col border-2 border-shark-900 p-6 aspect-square"
                >
                  <dt className="text-base font-semibold leading-7 text-shark-50">
                    <div className="mb-6 flex  items-center justify-center rounded-lg">
                      <feature.icon aria-hidden="true" />
                    </div>
                    <h3 className="clamp-text-2xl font-bold tracking-tight text-shark-50">
                      {feature.name}
                    </h3>
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-shark-50">
                    <p className="flex-auto">{feature.description}</p>
                    <p className="mt-6">
                      <a
                        href={feature.href}
                        className="text-sm font-semibold leading-6 text-shark-50"
                      >
                        Learn more <span aria-hidden="true">→</span>
                      </a>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default WhatWeDoSection;
