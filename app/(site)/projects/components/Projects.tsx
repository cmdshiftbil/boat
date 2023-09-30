"use client";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import ProjectRow from "@/components/ProjectRow";

export const Projects = ({ projects }: any) => {
  console.log("projects", projects);

  return (
    <FadeInStagger>
      <ul className="divide-y divide-caramel-100/10 pb-48">
        {projects?.map((project: any) => (
          <FadeIn key={project.id}>
            <ProjectRow project={project} />
          </FadeIn>
        ))}
      </ul>
    </FadeInStagger>
  );
};
