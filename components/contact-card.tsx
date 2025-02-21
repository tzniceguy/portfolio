import React from "react";
import {
  SiX,
  SiDevdotto,
  SiGithub,
  SiYoutube,
} from "@icons-pack/react-simple-icons";
import { FaLink } from "react-icons/fa6";
import Card from "./card";

export default function SocialLinksCard() {
  return (
    <Card>
      <div className="flex items-center gap-2 hover:opacity-80 cursor-pointer">
        <FaLink size={24} />
        <span>connect</span>
      </div>
      <div className="flex flex-col gap-4 mt-3">
        <a
          href="https://twitter.com/johndoe"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2  hover:text-blue-700 transition-colors"
        >
          <SiX color="#000000" size={24} />
          <span>X</span>
        </a>
        <a
          href="https://dev.to/johndoe"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2  hover:text-blue-700 transition-colors"
        >
          <SiDevdotto color="#000000" size={24} />{" "}
          {/* Dev.to icon with black color */}
          <span>Dev</span>
        </a>
        <a
          href="https://github.com/johndoe"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2  hover:text-blue-700 transition-colors"
        >
          <SiGithub color="#181717" size={24} />
          <span>GitHub</span>
        </a>
        <a
          href="https://youtube.com/c/swahilielite/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2  hover:text-blue-700 transition-colors"
        >
          <SiYoutube color="#FF0000" size={24} />
          <span>YouTube</span>
        </a>
      </div>
    </Card>
  );
}
