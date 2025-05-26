import ProjectCard from "@/components/project-card";
import { projects } from "@/lib/projects";

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto">
      <div className="h-full flex-col mt-10">
        <div className=" pb-6 ">
          <h1 className="text-3xl font-semibold capitalize mb-4">projects</h1>
          <p className="mt-2 text-md">
            Welcome to my gallery of creations, where code meets curiosity.
            These projects are more than just lines of logic, they’re
            experiments, lessons, and late-night victories stitched together
            with grit. From sleek frontends to robust backends, each one carries
            a piece of my journey as a developer. Dive in, explore, and see what
            I’ve been building when the ideas wouldn’t let me sleep.
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
