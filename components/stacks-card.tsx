import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiFastapi,
  SiReact,
  SiNextdotjs,
  SiLaravel,
  SiGo,
} from "@icons-pack/react-simple-icons";
import Card from "./card";
import { ZapIcon } from "lucide-react";

export default function StacksCard() {
  const stack = [
    { Icon: SiPython, name: "Python", color: "#3776AB" },
    { Icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
    { Icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
    { Icon: SiFastapi, name: "FastAPI", color: "#009688" },
    { Icon: SiReact, name: "React Native", color: "#61DAFB" },
    { Icon: SiNextdotjs, name: "Next.js", color: "#000000" },
    { Icon: SiLaravel, name: "Laravel", color: "#FF0000" },
    { Icon: SiGo, name: "Go", color: "#00A7D0" },
  ];

  return (
    <Card>
      <div className="flex flex-col gap-3 transition-opacity duration-200 hover:opacity-90">
        <div className="flex items-center gap-2">
          <ZapIcon color="#3776AB" size={20} />
          <span className="font-medium">My Stack</span>
        </div>
        <div className="flex flex-wrap gap-4 pl-2">
          {stack.map(({ Icon, name, color }) => (
            <div
              key={name}
              className="flex items-center gap-1.5 rounded-md border border-gray-100 bg-gray-50 px-2 py-1 dark:border-gray-800 dark:bg-gray-900"
            >
              <Icon color={color} size={16} />
              <span className="text-sm">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
