import SelectedProjects from "./project-card";

const projects = [
  {
    title: "Project One",
    url: "https://github.com/yourusername/project-one",
    screenshot: "/projects/project-one.jpg",
  },
  {
    title: "Project Two",
    url: "https://github.com/yourusername/project-two",
    screenshot: "/projects/project-two.jpg",
  },
];

export default function Showcase() {
  return (
    <div className="h-full flex-col items-center text-center mt-10">
      <h1 className="text-3xl font-semibold">Projects</h1>
      <div className="mt-10 grid md:grid-cols-2 gap-4 p-4  rounded-lg h-full">
        {projects.map((project) => (
          <SelectedProjects
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
