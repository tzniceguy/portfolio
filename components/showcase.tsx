import ProjectCard from "./selected-project-card";
import { selectedProjects } from "@/lib/projects";

export default function Showcase() {
  return (
    <div className="h-full flex-col items-center text-center mt-10">
      <h1 className="text-3xl font-semibold">Projects</h1>
      <div className="mt-10 grid md:grid-cols-2 gap-4 p-4  rounded-lg h-full">
        {selectedProjects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            url={project.url}
            screenshot={project.screenshot}
          />
        ))}
      </div>
    </div>
  );
}
