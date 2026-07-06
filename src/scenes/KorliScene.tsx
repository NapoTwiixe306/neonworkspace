"use client";

import ProjectScene from "@/src/components/ProjectScene";
import { getProject } from "@/src/content/projects";

const project = getProject("korli")!;

export default function KorliScene() {
  return (
    <ProjectScene
      scene={project.scene}
      kicker={project.kicker}
      name={project.name}
      tagline={project.tagline}
      description={project.description}
      tech={project.tech}
      screenshot={project.screenshot}
      link={project.link}
    />
  );
}
