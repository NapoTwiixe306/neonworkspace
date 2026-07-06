"use client";

import ProjectScene from "@/src/components/ProjectScene";
import { getProject } from "@/src/content/projects";

const project = getProject("gridbase-api")!;

export default function GridBaseScene() {
  return (
    <ProjectScene
      scene={project.scene}
      kicker={project.kicker}
      name={project.name}
      tagline={project.tagline}
      description={project.description}
      tech={project.tech}
      terminal={project.terminal}
      link={project.link}
    />
  );
}
