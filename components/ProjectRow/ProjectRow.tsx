import { useState } from "react";
import ProjectRowTitle from "./ProjectRowTitle";
import Link from "next/link";

interface ProjectRowProps {
  project: {
    id: string;
    title: string;
    slug: string;
    location: string;
    buildDate: string;
    images: object[][];
    content: object[][];
    meta: object;
    client: string;
    createdAt: string;
    updatedAt: string;
  };
}

export default function ProjectRow({ project }: ProjectRowProps) {
  return (
    <li className="w-full">
      <Link href={`/projects/${project.slug}`}>
        <ProjectRowTitle data={project} />
      </Link>
    </li>
  );
}
