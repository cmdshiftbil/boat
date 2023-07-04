import ContactBox from "@/components/ContactBox/ContactBox";
import Map from "@/components/Map";
import Page from "@/components/Page";
import { Widget } from "@typeform/embed-react";
import SectionHeader from "@/components/SectionHeader";
import Section from "@/components/Section";

const content = {
  getInTouch: [
    {
      title: "Collaboration, Press & Events",
      items: [
        {
          title: "Email",
          value: "marketing@alpha-nero.com",
          clipboard: {
            title: "Email: marketing@alpha-nero.com ",
            value: "marketing@alpha-nero.com",
          },
        },
        {
          title: "Phone",
          value: "+971 4 456 7890",
          clipboard: {
            title: "Phone: +971 4 456 7890",
            value: "+971 4 456 7890",
          },
        },
      ],
    },
    {
      title: "Project Enquiries",
      items: [
        {
          title: "Email",
          value: "sales1@alpha-nero.com",
          clipboard: {
            title: "Email: sales1@alpha-nero.com",
            value: "sales1@alpha-nero.com",
          },
        },
        {
          title: "Phone",
          value: "+971 4 456 7890",
          clipboard: {
            title: "Phone: +971 4 456 7890",
            value: "+971 4 456 7890",
          },
        },
      ],
    },
    {
      title: "Careers",
      items: [
        {
          title: "Join our team",
          value: "hr2@alpha-nero.com",
          clipboard: {
            title: "Email: hr2@alpha-nero.com",
            value: "hr2@alpha-nero.com",
          },
        },
        {
          title: "Phone",
          value: "+971 4 456 7890",
          clipboard: {
            title: "Phone: +971 4 456 7890",
            value: "+971 4 456 7890",
          },
        },
      ],
    },
    {
      title: "General Info",
      items: [
        {
          title: "Email",
          value: "reception@alpha-nero.com",
          clipboard: {
            title: "Email: reception@alpha-nero.com",
            value: "reception@alpha-nero.com",
          },
        },
        {
          title: "Phone",
          value: "+971 4 456 7890",
          clipboard: {
            title: "Phone: +971 4 456 7890",
            value: "+971 4 456 7890",
          },
        },
      ],
    },
  ],
  locations: [
    {
      title: "Dubai",
      items: [
        {
          title: "address",
          value:
            "Warehouse C07 1-2-3, Dubai Production City P.O. BOX 485008, Dubai, United Arab Emirates",
          clipboard: {
            title: "Dubai Address",
            value:
              "Warehouse C07 1-2-3, Dubai Production City P.O. BOX 485008, Dubai, United Arab Emirates",
          },
        },
      ],
    },
    {
      title: "Riyadh",
      itmes: [
        {
          title: "address",
          value:
            "Al Fozan Industrial Park Block 50, warehouse, 555/558, Riyadh 14548, Saudi Arabia",
          clipboard: {
            title: "Riyadh Address",
            value:
              "Al Fozan Industrial Park Block 50, warehouse, 555/558, Riyadh 14548, Saudi Arabia",
          },
        },
      ],
    },
  ],
};

export default function Contact() {
  return (
    <Page>
      <Section title="Let's talk">
        <div className="border border-shark-50 h-[70vh] mx-auto">
          <Widget id="ARozJNZB" className="w-full h-full rounded-none" />
        </div>
      </Section>

      <section className="z-20 py-24 sm:py-32">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="max-w-2xl mx-auto space-y-16 divide-y divide-shark-50 lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-shark-50">
                  Get in touch
                </h2>
                <p className="mt-4 leading-7 text-shark-300">
                  Reach out to us for collaboration, press, project enquiries,
                  or to join our team.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                {content.getInTouch.map((box) => (
                  <ContactBox title={box.title} key={box.title}>
                    {box.items.map((item) => {
                      return (
                        <ContactBox.Item
                          key={item.title}
                          hideTitle
                          title={item.title}
                          description={item.value}
                          clipboard={item.clipboard}
                        />
                      );
                    })}
                  </ContactBox>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 pt-16 gap-y-10 gap-x-8 lg:grid-cols-3">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-shark-50">
                  Locations
                </h2>
                <p className="mt-4 leading-7 text-shark-300">
                  We&apos;re expanding our reach
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                <ContactBox title="Dubai">
                  <ContactBox.Item
                    title="Address"
                    description="Warehouse C07 1-2-3, |br Dubai Production City P.O.BOX 485008, |br  Dubai, United Arab Emirates"
                    hideTitle
                    clipboard={{
                      title: "Address",
                      value:
                        "Warehouse C07 1-2-3, Dubai Production City P.O. BOX 485008, Dubai, United Arab Emirates",
                    }}
                  />
                </ContactBox>

                <ContactBox title="Riyadh">
                  <ContactBox.Item
                    hideTitle
                    title="address"
                    description="Al Fozan Industrial Park Block 50, warehouse, 555/558, Riyadh 14548, Saudi Arabia"
                    clipboard={{
                      title: "Address",
                      value:
                        "Al Fozan Industrial Park Block 50, warehouse, 555/558, Riyadh 14548, Saudi Arabia",
                    }}
                  />
                </ContactBox>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative h-96">
        <Map />
      </section>
    </Page>
  );
}
