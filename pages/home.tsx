// import { GetServerSideProps } from "next";
import HeroSection from "../sections/Hero.section";
import MainHeadlineSection from "../sections/MainHeadline.section";
import OurClientsSection from "../sections/OurClients.section";
import OurPresenceSection from "../sections/OurPresence.section";
import OurProcessSection from "../sections/OurProcess.section";
import WhatWeDoSection from "../sections/WhatWeDo.section";
// import Page, { getStaticProps as sharedGetServerSideProps } from "./[...slug]";

const Home = () => {
  return (
    <div>
      <HeroSection />

      <MainHeadlineSection />

      <OurPresenceSection />

      <WhatWeDoSection />

      <OurProcessSection />

      <OurClientsSection />
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  return {
    props: {
      id: "home",
    }, // will be passed to the page component as props
  };
}

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const func = sharedGetServerSideProps.bind(this);
//   return func(ctx);
// };
