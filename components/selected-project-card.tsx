import { FaLightbulb } from "react-icons/fa";
import Image from "next/image";
import Card from "./card";

type CardProps = {
  title: string;
  url: string;
  screenshot: string;
};

export default function ProjectCard({ title, url, screenshot }: CardProps) {
  return (
    <Card>
      <div className="flex items-center gap-2">
        <FaLightbulb color="#181717" size={20} />
        <span className="font-medium"> {title}</span>
      </div>
      <div className="mt-4">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:opacity-80 transition-opacity"
        >
          <Image
            src={screenshot} // Replace with actual image path
            alt="Project Screenshot"
            width={300}
            height={200}
            className="rounded-md object-cover"
          />
        </a>
      </div>
    </Card>
  );
}
