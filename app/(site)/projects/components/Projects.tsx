"use client";
import ProjectRow from "@/components/ProjectRow";

export const Projects = ({ projects }: any) => {
  console.log("Projects:", {
    projects,
    projectsJson: JSON.stringify(projects),
  });

  return (
    <div className="overflow-hidden">
      <ul className="divide-y divide-shark-800">
        {projects?.map((project: any) => (
          <ProjectRow key={project.slug} {...project} />
        ))}
      </ul>
    </div>
  );
};
