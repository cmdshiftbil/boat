import ProjectRow from "@/components/ProjectRow";

export const Projects = ({ projects }: any) => {
  console.log("projects from comp", projects);

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
