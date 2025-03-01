import Card from "./card";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  title: string;
  url: string;
  screenshot: string;
  description: string;
  stack?: string[];
}
export default function ProjectCard({
  title,
  url,
  screenshot,
  description,
  stack = [],
}: CardProps) {
  return (
    <Card>
      <div className="relative w-full h-52 rounded-md">
        <Image
          src={screenshot}
          alt="project image"
          fill={true}
          className="rounded-md object-cover"
        />
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-2">
          <Link
            href={url}
            target="_blank"
            className="font-semibold text-lg hover:underline"
          >
            {title}
          </Link>
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        </div>
        <div className="flex items-center gap-2">
          <p className="text-sm text-gray-500">{description}</p>
        </div>
        <div className="flex gap-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs rounded-full bg-gray-100 font-medium "
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
}
