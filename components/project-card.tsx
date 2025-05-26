"use client";

import Card from "./card";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import { ExternalLink, Eye, Code } from "lucide-react";

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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card>
      <div
        className="group relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container */}
        <div className="relative w-full h-52 overflow-hidden">
          <div className="relative w-full h-full">
            <Image
              src={screenshot}
              alt={`${title} project screenshot`}
              fill={true}
              className="rounded-t-xl object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div
              className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex gap-3">
                  <Link
                    href={url}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2  rounded-lg font-medium transition-all duration-200 hover:bg-white hover:scale-105"
                  >
                    <ExternalLink size={16} />
                    <span>View Live</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Status Indicator */}
            <div className="absolute top-3 right-3">
              <div className="flex items-center gap-1 px-2 py-1  rounded-full text-xs font-medium">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>Live</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex flex-col gap-4">
            {/* Title and Link */}
            <div className="flex items-center justify-between">
              <Link
                href={url}
                target="_blank"
                className="font-semibold text-xl hover:underline transition-colors duration-200 flex items-center gap-2 group/link"
              >
                <span>{title}</span>
                <ExternalLink
                  size={16}
                  className="opacity-0 group-hover/link:opacity-100 transition-opacity duration-200"
                />
              </Link>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <p className="leading-relaxed">{description}</p>
            </div>

            {/* Tech Stack */}
            {stack.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Code size={16} className="opacity-60" />
                  <span className="text-sm font-medium opacity-75">
                    Tech Stack
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {stack.map((tech, index) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs rounded-full  border  font-medium transition-all duration-200 hover:shadow-sm hover:scale-105"
                      style={{
                        animationDelay: `${index * 100}ms`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Action Footer */}
            <div className="pt-2 border-t border-gray-100">
              <Link
                href={url}
                target="_blank"
                className="inline-flex items-center gap-2 text-sm font-medium opacity-75 hover:opacity-100 transition-opacity duration-200 group/footer"
              >
                <Eye size={14} />
                <span>View Project</span>
                <ExternalLink
                  size={12}
                  className="transform transition-transform duration-200 group-hover/footer:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
