import ProjectCard from "@/components/project-card";
import { projects } from "@/lib/projects";

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto">
      <div className="h-full flex-col mt-10">
        <div className="border-b pb-6">
          <h1 className="text-3xl font-semibold">projects</h1>
          <p className="mt-2 text-md">
            the list of projects with my footprints
          </p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-4 py-4 rounded-lg h-full">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              url={project.url}
              screenshot={project.screenshot}
              description={project.description}
              stack={project.stack}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
