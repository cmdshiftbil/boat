import { AnimateInOut } from "@/components/Animations";
import Heading from "@/components/Heading";
import MotionLine from "@/components/MotionLine/MotionLine";
import Parallax from "@/components/Parallax";
import Section from "@/components/Section";
import Text from "@/components/Text";
import VerticalScrollSection from "@/components/VerticalScrollSection";
import content from "@/content/content";
import TeamCountersSection from "@/sections/TeamCounters.section";
import TeamScrollSection from "@/sections/TeamScroll.section";

export default async function AboutPage() {
  return (
    <AnimateInOut
      durationIn={0.6}
      durationOut={1}
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
      from={{
        transform: "translate(" + 0 + "px, " + 200 + "px)",
        opacity: 0,
        duration: 0.25,
        ease: "power4.out",
      }}
      // skipOutro={true}
    >
      <Section className="p-4 md:p-6 lg:p-12" title="A short history">
        <Text animate>
          Founded in 2010 in Dubai, United Arab Emirates. Alpha Nero has
          established itself as a <strong>leading retail design</strong> and
          <strong>production company</strong> in the region. With a strong focus
          on <strong>high-end luxury retail and branding strategy</strong>,
          quickly the company gained a reputation for its innovative ideas and
          ability to create unique and engaging retail spaces for its clients.
          <br />
          <br />
          Over the years, Alpha Nero has expanded its operations to serve
          clients across the Middle East, Africa, and Southeast Asia. Today, the
          company continues to evolve and push the boundaries of retail design,
          working with some of the most prestigious brands in the market.
        </Text>
      </Section>
      <section className="p-4 md:p-6 lg:p-12">
        <Parallax speed={0.5}>
          <h3 className="font-bold clamp-text-9xl text-shark-50">
            Craftsmanship
          </h3>
          <h4 className="font-[100] text-shark-100 clamp-text-6xl italic">
            noun [ U ]
          </h4>
          <Text className="font-[100] text-shark-100 clamp-text-2xl mt-4">
            UK /ˈkrɑːfts.mən.ʃɪp/ US /ˈkræfts.mən.ʃɪp/
          </Text>
        </Parallax>

        <Text className="py-4 md:py-6 lg:py-12 clamp-text-2xl" animate>
          From our <strong>management</strong> to our{" "}
          <strong>metal operators</strong>, everyone plays a special role in
          bringing branded retail installations to life
        </Text>
      </section>
      <TeamScrollSection />
      <section>
        <header className="bg-shark-900 bg-grid-surface pt-32 pb-24 px-6 md:px-12 bg-cover border-b-2 border-shark-50/30 ">
          <Heading className="text-shark-50">Leadership</Heading>
        </header>
      </section>
    </AnimateInOut>
  );
}
