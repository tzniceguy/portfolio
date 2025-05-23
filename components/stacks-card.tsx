"use client";
import {
  SiPython,
  SiTypescript,
  SiExpo,
  SiFastapi,
  SiReact,
  SiNextdotjs,
} from "@icons-pack/react-simple-icons";
import Card from "./card";
import { Zap, Code2, Sparkles, TrendingUp } from "lucide-react";
import { useState, FC } from "react";
import { IconType } from "@icons-pack/react-simple-icons";

// Define TypeScript interfaces for type safety
interface TechStack {
  Icon: IconType;
  name: string;
  color: string;
  description: string;
}

interface ExperienceMap {
  [key: string]: number;
}

// Define the component as a Functional Component (FC)
const StacksCard: FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const stack: TechStack[] = [
    {
      Icon: SiPython,
      name: "Python",
      color: "#3776AB",
      description: "Backend",
    },
    {
      Icon: SiTypescript,
      name: "TypeScript",
      color: "#3178C6",
      description: "Type Safety",
    },
    {
      Icon: SiFastapi,
      name: "FastAPI",
      color: "#009688",
      description: "Fast APIs",
    },
    {
      Icon: SiReact,
      name: "React Native",
      color: "#61DAFB",
      description: "Mobile Apps",
    },
    {
      Icon: SiNextdotjs,
      name: "Next.js",
      color: "#000000",
      description: "Full Stack",
    },
    {
      Icon: SiExpo,
      name: "Expo",
      color: "#000020",
      description: "Mobile Dev",
    },
  ];

  const getYearsOfExperience = (tech: string): number => {
    const experienceMap: ExperienceMap = {
      Python: 4,
      TypeScript: 3,
      FastAPI: 2,
      "React Native": 3,
      "Next.js": 2,
      Expo: 2,
    };
    return experienceMap[tech] || 1;
  };

  return (
    <Card>
      <div className="flex flex-col gap-4 p-2 sm:p-4 transition-opacity duration-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Zap color="#3776AB" size={20} className="animate-pulse" />
            </div>
            <span className="font-semibold text-base sm:text-lg text-gray-900 dark:text-gray-100">
              My Stack
            </span>
          </div>
          <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            <TrendingUp size={14} />
            <span>Growing</span>
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
          <div className="flex items-center gap-1">
            <Code2 size={16} className="text-blue-500" />
            <span className="font-medium">{stack.length}</span>
            <span>Technologies</span>
          </div>
          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
          <div className="flex items-center gap-1">
            <Sparkles size={16} className="text-purple-500" />
            <span className="font-medium">4+</span>
            <span>Years Experience</span>
          </div>
        </div>

        {/* Stack Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
          {stack.map(({ Icon, name, color, description }, index) => (
            <div
              key={name}
              className="group relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-3 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              role="button"
              aria-label={`Show ${name} experience details`}
              style={
                {
                  "--tech-color": color,
                } as React.CSSProperties
              }
            >
              {/* Gradient overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, ${color}20, ${color}05)`,
                }}
              ></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-md bg-white dark:bg-gray-800 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                      <Icon color={color} size={18} />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium text-sm sm:text-base text-gray-900 dark:text-gray-100 group-hover:text-opacity-90">
                        {name}
                      </span>
                      <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                        {description}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Experience indicator */}
                <div className="flex items-center gap-1">
                  <div className="flex-1 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500 ease-out"
                      style={{
                        backgroundColor: color,
                        width:
                          hoveredIndex === index
                            ? `${getYearsOfExperience(name) * 25}%`
                            : "0%",
                      }}
                    ></div>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">
                    {getYearsOfExperience(name)}y
                  </span>
                </div>
              </div>

              {/* Corner accent */}
              <div
                className="absolute top-0 right-0 w-8 h-8 opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(-45deg, ${color}, transparent 70%)`,
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 text-center pt-2 border-t border-gray-200 dark:border-gray-700">
          Hover to see experience levels
        </div>
      </div>
    </Card>
  );
};

export default StacksCard;
