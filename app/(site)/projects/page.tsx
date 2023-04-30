// import Button from "@/components/Button";
// import Heading from "@/components/Heading";
import PorfolioWrapper from "@/components/PortfolioWrapper";
// import Text from "@/components/Text";
// import ProjectRow from "@/components/ProjectRow";
import Page from "@/components/Page";

import getPayloadClient from "@/payload/payloadClient";
import { Header } from "@/app/(site)/projects/components/Header";
import { Projects } from "@/app/(site)/projects/components/Projects";

export const metadata = {
  title: "Alpha Nero | Projects",
};

async function getProjects() {
  const payload = await getPayloadClient();

  const projects = await payload.find({
    collection: "projects",
  });

  if (projects.totalDocs === 0) {
    return { projects: null };
  }

  return { projects: projects.docs };
}

export default async function ProjectsPage() {
  const { projects } = await getProjects();

  return (
    <Page>
      <Header />
      <Projects projects={projects} />
    </Page>
  );

  //return (
  //   <Page>
  //     <header className="px-6 sm:px-12">
  //       <Heading className="mb-6 text-shark-50 sm:mb-12">Porfolio</Heading>

  //       <div className="flex flex-col gap-6 pb-5 lg:flex-row sm:items-center sm:justify-between sm:gap-12">
  //         <Text className="flex-1">
  //           As a leading retail fit out agency, we design and build retail
  //           showcase outlets for the world’s iconic luxury retail brands from
  //           the ground up to engineer incredible shopping experiences.
  //         </Text>
  //         <div className="flex-2">
  //           <Button to="/contact" className="w-full">
  //             Discuss your design with us
  //           </Button>
  //         </div>
  //       </div>
  //     </header>

  //     <div className="overflow-hidden">
  //       <ul className="divide-y divide-shark-800">
  //         {projects?.map((project) => (
  //           <ProjectRow key={project.slug} {...project} />
  //         ))}
  //       </ul>
  //     </div>

  //     {/* <PorfolioWrapper>
  //       {projects?.map((project) => (
  //         <PorfolioItem key={project.slug} {...project} />
  //       ))}
  //     </PorfolioWrapper> */}
  //   </Page>
  // );
}

// export async function getStaticProps(ctx) {
//   const payload = await getPayloadClient();

//   const pageQuery = await payload.find({
//     collection: "projects",
//   });

//   if (pageQuery.totalDocs === 0) {
//     return {
//       props: {},
//     };
//   }

//   return {
//     props: {
//       projects: pageQuery.docs,
//     },
//   };
// }
